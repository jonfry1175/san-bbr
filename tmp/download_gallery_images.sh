#!/usr/bin/env bash
set -euo pipefail
cd /home/jonfry/Desktop/work/MSD/karyahalim-modern-platform/src/assets/our-works/gallery

# Array of id|url
urls=(
"kal-1|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211459.png"
"kal-2|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211526.png"
"kal-3|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211444.png"
"kal-4|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211947.png"
"kal-5|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211915.png"
"kal-6|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-211903.png"
"kal-7|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-212256.png"
"kal-8|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/WhatsApp-Image-2025-04-26-at-21.39.39-scaled.jpeg"
"kal-9|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/Screenshot-2025-09-03-212226.png"

"bor-1|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/project-bib.png"
"bor-2|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/project-soil.png"
"bor-3|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/unbound-2.png"
"bor-4|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/cemend-treamed.png"
"bor-5|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/cement-ctrb.png"
"bor-6|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/eartwork-e1756890348912.png"
"bor-7|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/WhatsApp-Image-2025-01-23-at-10.48.00-scaled.jpeg"
"bor-8|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/WhatsApp-Image-2025-01-23-at-10.47.56-scaled.jpeg"
"bor-9|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/WhatsApp-Image-2023-08-11-at-14.50.38.jpeg"

"ad-1|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0080.jpg"
"ad-2|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0081.jpg"
"ad-3|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0082.jpg"
"ad-4|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180T21-WA0083.jpg"
"ad-5|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0084.jpg"
"ad-6|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0085.jpg"
"ad-7|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180723-WA0107.jpg"
"ad-8|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180723-WA0107.jpg"
"ad-9|https://karyahalimsampoerna.id/wp-content/uploads/2025/09/IMG-20180721-WA0079.jpg"
)

for entry in "${urls[@]}"; do
  IFS='|' read -r id url <<< "$entry"
  # Extract extension from URL
  ext="${url##*.}"
  # Normalize extension for jpeg variations
  if [[ "$ext" =~ ^jpe?g$ ]]; then
    ext="jpg"
  fi
  outfile="${id}.${ext}"
  if [[ -f "$outfile" ]]; then
    echo "Skipping $outfile (exists)"
    continue
  fi
  echo "Downloading $url -> $outfile"
  curl -fLo "$outfile" -- "$url" || { echo "Failed to download $url"; exit 1; }
done

# Print summary
ls -la
