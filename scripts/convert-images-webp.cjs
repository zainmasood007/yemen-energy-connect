// Convert project images to WebP for better performance
// Usage (from project root):
//   node scripts/convert-images-webp.cjs

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const SOURCE_DIRS = [
  path.resolve(__dirname, '../src/assets'),
  path.resolve(__dirname, '../src/assets/products'),
  path.resolve(__dirname, '../public/datasheets'),
];

const WEBP_QUALITY = 85;

function isImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

async function convertFileToWebp(filePath) {
  const ext = path.extname(filePath);
  const base = filePath.slice(0, -ext.length);
  const webpPath = `${base}.webp`;

  if (fs.existsSync(webpPath)) {
    console.log('[SKIP]', path.relative(process.cwd(), webpPath), '(already exists)');
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    console.log('[OK]  ', path.relative(process.cwd(), webpPath));
  } catch (err) {
    console.error('[ERR] ', filePath, err.message || err);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.isFile() && isImageFile(fullPath)) {
      await convertFileToWebp(fullPath);
    }
  }
}

async function main() {
  console.log('Converting images to WebP...');
  for (const dir of SOURCE_DIRS) {
    if (fs.existsSync(dir)) {
      console.log('\nScanning', path.relative(process.cwd(), dir));
      await walkDir(dir);
    }
  }
  console.log('\nDone. You can now update imports to use .webp where appropriate.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
