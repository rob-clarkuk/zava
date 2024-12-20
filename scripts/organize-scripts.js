const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../out/_next/static');
const targetDir = path.join(__dirname, '../out/campaign-zavacalculator/assets/js/_next/static');

function copyFiles(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
    } else if (fs.lstatSync(srcPath).isDirectory()) {
      copyFiles(srcPath, path.join(dest, file));
    }
  });
}

copyFiles(sourceDir, targetDir);
console.log(`JavaScript files moved to: ${targetDir}`);
