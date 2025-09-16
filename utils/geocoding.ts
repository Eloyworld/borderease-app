export async function getCountryFromCoords(latitude: number, longitude: number): Promise<string | null> {
  try {
    // Validate coordinates
    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      console.error('Invalid coordinates:', latitude, longitude);
      return null;
    }

    // Try using the BigDataCloud API first (more reliable)
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    
    if (!response.ok) {
      // Fallback to OpenStreetMap if BigDataCloud fails
      console.warn('BigDataCloud API failed, trying OpenStreetMap...');
      return await getCountryFromOSM(latitude, longitude);
    }
    
    const data = await response.json();
    
    if (data && data.countryCode) {
      return data.countryCode.toUpperCase();
    }
    
    return null;
  } catch (error) {
    console.error('Error getting country from coordinates:', error);
    return null;
  }
}

// Separate function for OpenStreetMap as fallback
async function getCountryFromOSM(latitude: number, longitude: number): Promise<string | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'BorderEaseApp/1.0 (contact@bordereaseapp.com)'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data && data.address && data.address.country_code) {
      return data.address.country_code.toUpperCase();
    }
    
    return null;
  } catch (error) {
    console.error('OpenStreetMap geocoding failed:', error);
    return null;
  }
}