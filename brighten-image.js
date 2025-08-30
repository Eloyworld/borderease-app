const sharp = require('sharp');

// Brighten the icon image
sharp('assets/images/icon.png')
  .modulate({ brightness: 1.2, saturation: 1.1 }) // Increase brightness by 20% and saturation by 10%
  .toFile('assets/images/icon-bright.png')
  .then(() => console.log('Icon brightened'))
  .catch(err => console.error('Error brightening icon:', err));
