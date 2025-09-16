import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

const guideSlides = [
  {
    title: 'Real-Time Border Alerts',
    description: 'Get instant notifications about border status changes, closures, and unexpected delays. Never be caught off guard at a border crossing.',
    icon: '⚠️',
  },
  {
    title: 'Comprehensive Border Information',
    description: 'Access detailed information for each border: operating hours, required documents, visa requirements, fees, and special notes.',
    icon: '📋',
  },
  {
    title: 'Multi-Border Trip Planning',
    description: 'Plan complex routes across multiple countries. Save your itinerary and get alerts for all borders on your journey.',
    icon: '🗺️',
  },
  {
    title: 'GPS Navigation to Borders',
    description: 'Get turn-by-turn directions to the nearest border crossings. Find alternative routes when your primary choice is closed.',
    icon: '🧭',
  },
  {
    title: 'Nearby Services Locator',
    description: 'Find essential services near borders: fuel stations, repair shops, restaurants, and accommodations for your journey.',
    icon: '⛽',
  },
];

export default function GuideScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const checkGuideCount = async () => {
      try {
        const count = await AsyncStorage.getItem('guideViewCount');
        const currentCount = count ? parseInt(count) : 0;
        setViewCount(currentCount);
        
        // Show skip option on 3rd view or later
        if (currentCount >= 2) { // 0-based, so 2 means 3rd time
          setShowSkip(true);
        }
        
        // Increment view count
        await AsyncStorage.setItem('guideViewCount', (currentCount + 1).toString());
      } catch (e) {
        console.error('Error checking guide count:', e);
      }
    };
    
    checkGuideCount();
  }, []);

  const handleNext = () => {
    if (currentSlide < guideSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      finishGuide();
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('guideCompleted', 'true');
    router.replace('/(tabs)');
  };

  const finishGuide = async () => {
    await AsyncStorage.setItem('guideCompleted', 'true');
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{guideSlides[currentSlide].icon}</Text>
      </View>
      
      <Text style={styles.title}>{guideSlides[currentSlide].title}</Text>
      <Text style={styles.description}>{guideSlides[currentSlide].description}</Text>
      
      <View style={styles.pagination}>
        {guideSlides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide && styles.activeDot,
            ]}
          />
        ))}
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentSlide === guideSlides.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
      
      {showSkip && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Don't show again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2c3e50',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 40,
    lineHeight: 26,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bdc3c7',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#3498db',
    width: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: width * 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipButton: {
    marginTop: 20,
  },
  skipText: {
    color: '#7f8c8d',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
