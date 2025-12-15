#!/bin/bash

# Script to download and compress news images from hostingersite.com
# Max size: 100KB per image

DEST_DIR="src/assets/news"
TEMP_DIR="tmp/news_images_temp"
MAX_SIZE=100000  # 100KB in bytes
DOMAIN="https://olivedrab-mouse-336091.hostingersite.com"

# Create temporary directory
mkdir -p "$TEMP_DIR"
mkdir -p "$DEST_DIR"

# Array of image URLs extracted from news.ts
declare -a URLS=(
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/Screenshot-2025-09-10-045307.png"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/Falery-Tuwan.gif"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/18072024081549_2-1024x769-1.jpeg"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/IMG-20200119-WA0006.jpg"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/image.png"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/image-1.png"
  "https://olivedrab-mouse-336091.hostingersite.com/wp-content/uploads/2025/09/image-2.png"
)

echo "Starting download and compression process..."
echo "Destination: $DEST_DIR"
echo "Max size per image: 100KB"
echo ""

# Function to compress image
compress_image() {
  local input_file="$1"
  local output_file="$2"
  local file_ext="${output_file##*.}"
  
  if [ ! -f "$input_file" ]; then
    echo "❌ Input file not found: $input_file"
    return 1
  fi

  # Get original size
  local orig_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
  echo "  Original size: $(echo "scale=2; $orig_size / 1024" | bc) KB"

  # Check if ImageMagick is available
  if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Installing..."
    if command -v apt-get &> /dev/null; then
      sudo apt-get update && sudo apt-get install -y imagemagick
    elif command -v brew &> /dev/null; then
      brew install imagemagick
    else
      echo "❌ Could not install ImageMagick automatically"
      return 1
    fi
  fi

  # Compress based on file type
  case "$file_ext" in
    gif)
      # For GIF, convert to optimized format
      convert "$input_file" -colors 256 -depth 8 "$output_file" 2>/dev/null
      ;;
    png)
      # For PNG, use quality reduction
      convert "$input_file" -quality 85 -strip "$output_file" 2>/dev/null
      ;;
    jpg|jpeg)
      # For JPEG, reduce quality iteratively until under 100KB
      local quality=85
      convert "$input_file" -quality "$quality" -strip "$output_file"
      while [ $(stat -c%s "$output_file" 2>/dev/null || stat -f%z "$output_file") -gt $MAX_SIZE ] && [ $quality -gt 20 ]; do
        quality=$((quality - 5))
        convert "$input_file" -quality "$quality" -strip "$output_file"
      done
      ;;
    *)
      cp "$input_file" "$output_file"
      ;;
  esac

  # Get compressed size
  local compressed_size=$(stat -c%s "$output_file" 2>/dev/null || stat -f%z "$output_file")
  local compressed_kb=$(echo "scale=2; $compressed_size / 1024" | bc)
  
  if [ $compressed_size -le $MAX_SIZE ]; then
    echo "  ✅ Compressed size: $compressed_kb KB"
    return 0
  else
    echo "  ⚠️  Still over 100KB ($compressed_kb KB) - trying more aggressive compression"
    # Try additional compression
    if [ "$file_ext" = "png" ]; then
      convert "$input_file" -quality 70 -colors 128 -strip "$output_file"
    elif [ "$file_ext" = "jpg" ] || [ "$file_ext" = "jpeg" ]; then
      convert "$input_file" -quality 60 -strip "$output_file"
    fi
    compressed_size=$(stat -c%s "$output_file" 2>/dev/null || stat -f%z "$output_file")
    compressed_kb=$(echo "scale=2; $compressed_size / 1024" | bc)
    echo "  ✅ Final compressed size: $compressed_kb KB"
    return 0
  fi
}

# Download and compress each image
downloaded_count=0
failed_count=0

for url in "${URLS[@]}"; do
  # Extract filename
  filename=$(basename "$url")
  # Remove query parameters if any
  filename="${filename%%\?*}"
  
  echo "📥 Downloading: $filename"
  
  # Download image
  if curl -s -L -o "$TEMP_DIR/$filename" "$url"; then
    echo "  ✅ Downloaded"
    
    # Compress
    echo "  🔧 Compressing..."
    if compress_image "$TEMP_DIR/$filename" "$DEST_DIR/$filename"; then
      ((downloaded_count++))
    else
      ((failed_count++))
    fi
  else
    echo "  ❌ Failed to download"
    ((failed_count++))
  fi
  echo ""
done

# Cleanup
rm -rf "$TEMP_DIR"

# Summary
echo "================================"
echo "📊 Download Summary:"
echo "✅ Successfully processed: $downloaded_count images"
if [ $failed_count -gt 0 ]; then
  echo "❌ Failed: $failed_count images"
fi
echo "📁 Saved to: $DEST_DIR"
echo "================================"

# List downloaded files with sizes
echo ""
echo "Downloaded files:"
if command -v ls &> /dev/null; then
  ls -lh "$DEST_DIR" | grep -E "\.(png|jpg|jpeg|gif)$" | awk '{print "  " $9 " (" $5 ")"}'
fi

exit 0
