const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Convert Logo 1.jpg to Logo 1.png
sharp(path.join(process.env.USERPROFILE, 'Downloads', 'Logo 1.jpg'))
  .toFile('assets/images/Logo 1.png')
  .then(() => console.log('Logo 1.jpg converted to Logo 1.png'))
  .catch(err => console.error('Error converting Logo 1:', err));

// Convert Logo 2.jpg to Logo 2.png
sharp(path.join(process.env.USERPROFILE, 'Downloads', 'Logo 2.jpg'))
  .toFile('assets/images/Logo 2.png')
  .then(() => console.log('Logo 2.jpg converted to Logo 2.png'))
  .catch(err => console.error('Error converting Logo 2:', err));
