import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import logo from '../../assets/images/icon.png';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <Image 
        source={logo} 
        style={[
          styles.logo,
          {
            width: width,
            height: height * 0.8,
          }
        ]} 
        resizeMode='stretch' 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '80%',
  },
});
