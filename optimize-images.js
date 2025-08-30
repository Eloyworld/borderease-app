const sharp = require('sharp');
const path = require('path');

// Optimize icon.png
sharp('assets/images/icon.png')
  .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
  .png({ quality: 100 })
  .toFile('assets/images/icon-optimized.png')
  .then(() => console.log('Icon optimized'))
  .catch(err => console.error('Error optimizing icon:', err));

// Optimize splash.png
sharp('assets/images/splash.png')
  .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
  .png({ quality: 100 })
  .toFile('assets/images/splash-optimized.png')
  .then(() => console.log('Splash optimized'))
  .catch(err => console.error('Error optimizing splash:', err));
