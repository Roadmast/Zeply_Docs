const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../frontend/public');
const destDir = path.resolve(__dirname, '../images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  'api-key-page.png',
  'create-api-key.png',
  'after-create-api-key.png',
  'og-image.svg'
];

files.forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);

  // Sync from frontend/public to images if source exists
  if (fs.existsSync(srcPath)) {
    try {
      fs.copyFileSync(srcPath, destPath);
    } catch (err) {
      // Ignore copy error
    }
  } else if (fs.existsSync(destPath) && fs.existsSync(srcDir)) {
    // If it exists in images but not in frontend/public, sync it back
    try {
      fs.copyFileSync(destPath, srcPath);
    } catch (err) {
      // Ignore copy error
    }
  }
});
