const API_URL = 'https://api.jsonbin.io/v3/b/68c4f7a3ae596e708fed088e';
const API_KEY = '$2a$10$gAXvSP/9bAHrtUHCzFP4qeLX9o6mApwrrBC4IZKJ2.1QAAhei0Ie6'; // ← Replace with your actual key

async function testAPI() {
  console.log('Testing connection to your bin...');
  
  try {
    const response = await fetch(API_URL, {
      headers: {
        'X-Master-Key': API_KEY
      }
    });

    const data = await response.json();
    console.log('✅ SUCCESS! Connected to your bin.');
    console.log('Current data:', data);
  } catch (error) {
    console.log('❌ Error connecting:', error.message);
  }
}

testAPI();