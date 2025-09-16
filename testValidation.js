// testValidation.js
const { validateBorderCrossings, getCrossingsBetweenCountries } = require('./utils/routeFinding');
const { countries } = require('./data/countries');

console.log('=== Testing Border Crossing Validation ===\n');

// Test the validation function
const errors = validateBorderCrossings();

if (errors.length === 0) {
  console.log('✅ All border crossing validations passed!');
} else {
  console.log('❌ Validation errors found:');
  errors.forEach((error, index) => {
    console.log(`${index + 1}. ${error}`);
  });
}

console.log('\n=== Testing Crossings Between Countries ===\n');

// Test with China and India (should have crossings)
const chinaIndiaCrossings = getCrossingsBetweenCountries('cn', 'in');
console.log(`China ↔ India crossings: ${chinaIndiaCrossings.length}`);
chinaIndiaCrossings.forEach(crossing => {
  console.log(`  - ${crossing.name} (${crossing.status})`);
});

// Test with two non-neighboring countries
const chinaGermanyCrossings = getCrossingsBetweenCountries('cn', 'de');
console.log(`\nChina ↔ Germany crossings: ${chinaGermanyCrossings.length}`);

// Test validation with a specific country pair
console.log('\n=== Detailed Validation for India ===\n');
const india = countries.find(c => c.id === 'in');
if (india) {
  console.log(`India has ${india.neighbors.length} neighbors:`);
  india.neighbors.forEach(neighborId => {
    const neighbor = countries.find(c => c.id === neighborId);
    const crossings = india.borderCrossings.filter(c => c.toCountry === neighborId);
    console.log(`  - ${neighbor?.name}: ${crossings.length} crossings`);
  });
}

console.log('\n=== Sample of available countries ===\n');
// Show first 5 countries and their neighbor count
countries.slice(0, 5).forEach(country => {
  console.log(`${country.name}: ${country.neighbors.length} neighbors, ${country.borderCrossings.length} total crossings`);
});