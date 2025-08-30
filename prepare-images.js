const fs = require('fs');
const path = require('path');

// Create a folder for edited images
const editedFolder = 'assets/images/edited';
if (!fs.existsSync(editedFolder)) {
  fs.mkdirSync(editedFolder, { recursive: true });
}

// Copy original images to the edited folder
fs.copyFileSync('assets/images/icon.png', path.join(editedFolder, 'icon-original.png'));
fs.copyFileSync('assets/images/splash.png', path.join(editedFolder, 'splash-original.png'));

console.log('Original images copied to assets/images/edited folder');
console.log('Please edit these images:');
console.log('1. For splash screen: Remove "Beyond Borders" text and add "Welcome" text');
console.log('2. For main page: Increase brightness and contrast of text areas while preserving other details');
console.log('3. Save the edited images as:');
console.log('   - assets/images/edited/splash-welcome.png');
console.log('   - assets/images/edited/icon-bright.png');
