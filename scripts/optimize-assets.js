const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

async function optimizeImages() {
  console.log('Starting asset optimization...');

  // 1. Optimize logo.svg -> logo.png and src/app/icon.png
  const logoSvgPath = path.join(publicDir, 'logo.svg');
  if (fs.existsSync(logoSvgPath)) {
    try {
      console.log('Generating optimized PNG logo and favicon...');
      
      // Save Navbar logo (192x192)
      await sharp(logoSvgPath)
        .resize(192, 192)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(path.join(publicDir, 'logo.png'));
      console.log('✔ Created public/logo.png (192x192)');

      // Save favicon icon (192x192) for Next.js App Router
      await sharp(logoSvgPath)
        .resize(192, 192)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(path.join(appDir, 'icon.png'));
      console.log('✔ Created src/app/icon.png (192x192)');
      
      // Save smaller favicon icon (32x32) if needed, but Next.js will auto-scale icon.png
    } catch (err) {
      console.error('Error optimizing logo:', err);
    }
  }

  // 2. Compress other images in public
  const images = [
    { name: 'about.png', type: 'png' },
    { name: 'gallery_1.jpg', type: 'jpeg' },
    { name: 'gallery_2.jpg', type: 'jpeg' },
    { name: 'gallery_3.jpg', type: 'jpeg' },
    { name: 'gallery_4.jpg', type: 'jpeg' },
    { name: 'hero_background.jpg', type: 'jpeg' }
  ];

  for (const img of images) {
    const imgPath = path.join(publicDir, img.name);
    const tempPath = path.join(publicDir, `temp-${img.name}`);

    if (fs.existsSync(imgPath)) {
      try {
        const statsBefore = fs.statSync(imgPath);
        console.log(`Optimizing ${img.name} (Original: ${(statsBefore.size / 1024 / 1024).toFixed(2)} MB)...`);

        if (img.type === 'png') {
          await sharp(imgPath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(tempPath);
        } else {
          await sharp(imgPath)
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(tempPath);
        }

        // Replace original with optimized temp file
        fs.renameSync(tempPath, imgPath);
        const statsAfter = fs.statSync(imgPath);
        const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);
        console.log(`✔ Optimized ${img.name}: ${(statsAfter.size / 1024).toFixed(1)} KB (Reduced by ${reduction}%)`);
      } catch (err) {
        console.error(`Error optimizing ${img.name}:`, err);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    } else {
      console.warn(`File ${img.name} does not exist at ${imgPath}`);
    }
  }

  console.log('Asset optimization complete.');
}

optimizeImages();
