const sharp = require('sharp');

// Brighten the icon image more significantly
sharp('assets/images/icon.png')
  .modulate({ brightness: 1.5, saturation: 1.2 }) // Increase brightness by 50% and saturation by 20%
  .toFile('assets/images/icon-very-bright.png')
  .then(() => console.log('Icon significantly brightened'))
  .catch(err => console.error('Error brightening icon:', err));
