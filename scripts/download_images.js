import fs from "fs";
import path from "path";
import https from "https";
import { promisify } from "util";

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");

// Directories to process
const TARGET_DIRS = [
  "our-works",
  "services",
  "news",
  "awards",
  "products", // Recursive
  "hero/images",
];

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {}); // Delete the file async. (But we don't check result)
        reject(err);
      });
  });
}

function getPromptFromFilename(filename) {
  const name = path.parse(filename).name;
  // Replace hyphens, underscores with spaces
  let prompt = name.replace(/[-_]/g, " ");
  // Add context
  prompt += " heavy equipment construction site photorealistic 4k";
  return encodeURIComponent(prompt);
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        console.log(`Processing: ${entry.name}`);
        const prompt = getPromptFromFilename(entry.name);
        const url = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=600&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;

        try {
          await downloadImage(url, fullPath);
          // console.log(`Downloaded: ${entry.name}`);
        } catch (error) {
          console.error(`Error downloading ${entry.name}:`, error.message);
        }
      }
    }
  }
}

async function main() {
  for (const dir of TARGET_DIRS) {
    const fullDir = path.join(ASSETS_DIR, dir);
    console.log(`Scanning directory: ${dir}`);
    await processDirectory(fullDir);
  }
  console.log("Done updating assets.");
}

main().catch(console.error);
