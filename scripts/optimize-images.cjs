const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(png|jpg|jpeg)$/i.test(item)) {
      const ext = path.extname(item);
      const nameWithoutExt = path.basename(item, ext);
      const webpPath = path.join(dir, nameWithoutExt + '.webp');
      
      console.log(`Processing: ${fullPath} (${(stat.size / 1024).toFixed(1)} KB)`);
      
      try {
        // Generate WebP
        await sharp(fullPath)
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);
        
        const webpStat = fs.statSync(webpPath);
        console.log(` -> WebP created: ${webpPath} (${(webpStat.size / 1024).toFixed(1)} KB) [${Math.round((1 - webpStat.size / stat.size) * 100)}% reduction]`);

        // Also compress original in-place
        if (ext.toLowerCase() === '.png') {
          const tempPath = path.join(dir, nameWithoutExt + '_opt' + ext);
          await sharp(fullPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .png({ quality: 80, compressionLevel: 9, palette: true })
            .toFile(tempPath);
          fs.renameSync(tempPath, fullPath);
          const newStat = fs.statSync(fullPath);
          console.log(` -> Compressed PNG: ${fullPath} (${(newStat.size / 1024).toFixed(1)} KB)`);
        } else if (/\.(jpg|jpeg)$/i.test(ext)) {
          const tempPath = path.join(dir, nameWithoutExt + '_opt' + ext);
          await sharp(fullPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(tempPath);
          fs.renameSync(tempPath, fullPath);
          const newStat = fs.statSync(fullPath);
          console.log(` -> Compressed JPG: ${fullPath} (${(newStat.size / 1024).toFixed(1)} KB)`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }
}

async function main() {
  await processDirectory('./src/assets/images');
  await processDirectory('./public');
  console.log('All images optimized successfully!');
}

main().catch(console.error);
