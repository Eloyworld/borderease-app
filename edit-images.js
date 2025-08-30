const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Create edited folder if it doesn't exist
const editedFolder = 'assets/images/edited';
if (!fs.existsSync(editedFolder)) {
  fs.mkdirSync(editedFolder, { recursive: true });
}

console.log('Starting image editing process...');

// Edit splash screen image
async function editSplashScreen() {
  try {
    console.log('Editing splash screen image...');
    
    // Load the original image
    const image = sharp('assets/images/splash.png');
    const metadata = await image.metadata();
    
    console.log(Original splash image dimensions: x);
    
    // Create a composite image with black overlay to hide the original text
    const blackOverlay = Buffer.from(
      <svg width=\"\" height=\"\">
        <rect x=\"0\" y=\"0\" width=\"\" height=\"\" fill=\"black\" opacity=\"0.7\"/>
      </svg>
    );
    
    // Create a text overlay for "Welcome"
    const welcomeText = Buffer.from(
      <svg width=\"\" height=\"\">
        <style>
          .title { fill: white; font-size: 72px; font-weight: bold; font-family: Arial; }
        </style>
        <text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"middle\" class=\"title\">Welcome</text>
      </svg>
    );
    
    // Apply the overlays
    await image
      .composite([
        { input: blackOverlay, blend: 'over' },
        { input: welcomeText, blend: 'over' }
      ])
      .toFile('assets/images/edited/splash-welcome.png');
      
    console.log('Splash screen image edited successfully');
  } catch (error) {
    console.error('Error editing splash screen:', error);
  }
}

// Edit main page image
async function editMainPage() {
  try {
    console.log('Editing main page image...');
    
    // Load the original image
    const image = sharp('assets/images/icon.png');
    const metadata = await image.metadata();
    
    console.log(Original icon image dimensions: x);
    
    // Apply brightness and contrast adjustments
    await image
      .modulate({ brightness: 1.4, saturation: 1.2 }) // Increase brightness and saturation
      .linear(1.2, 0) // Increase contrast
      .sharpen() // Sharpen the image to make text clearer
      .toFile('assets/images/edited/icon-bright.png');
      
    console.log('Main page image edited successfully');
  } catch (error) {
    console.error('Error editing main page:', error);
  }
}

// Run both editing functions
async function editAllImages() {
  await editSplashScreen();
  await editMainPage();
  console.log('All images edited successfully!');
}

editAllImages();
