const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = path.join(process.env.USERPROFILE, 'Downloads', 'Logo 2.jpg');
const destPath = 'assets/images/Logo 2.png';

console.log('Source path:', sourcePath);
console.log('Destination path:', destPath);

// Check if source file exists
if (!fs.existsSync(sourcePath)) {
  console.error('Source file does not exist:', sourcePath);
  process.exit(1);
}

// Convert Logo 2.jpg to Logo 2.png
sharp(sourcePath)
  .toFile(destPath)
  .then(() => {
    console.log('Successfully converted Logo 2.jpg to Logo 2.png');
    
    // Verify the file was created
    if (fs.existsSync(destPath)) {
      console.log('Destination file exists:', destPath);
    } else {
      console.error('Destination file was not created:', destPath);
    }
  })
  .catch(err => {
    console.error('Error converting Logo 2:', err);
  });
