const sharp = require('sharp');
const path = require('path');

// Convert Logo 2.jpg to Logo 2.png
sharp(path.join(process.env.USERPROFILE, 'Downloads', 'Logo 2.jpg'))
  .toFile('assets/images/Logo 2.png')
  .then(() => console.log('Logo 2.jpg converted to Logo 2.png'))
  .catch(err => console.error('Error converting Logo 2:', err));
