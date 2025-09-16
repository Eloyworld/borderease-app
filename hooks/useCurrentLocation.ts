import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function useCurrentLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        
        // Validate coordinates before setting state
        if (location && 
            location.coords && 
            location.coords.latitude !== undefined && 
            location.coords.longitude !== undefined) {
          setLocation(location);
        } else {
          setErrorMsg('Invalid location data received');
        }
      } catch (error) {
        setErrorMsg('Error getting location: ' + error.message);
      }
    })();
  }, []);

  return { location, errorMsg };
}