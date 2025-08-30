import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/images/icon.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Beyond Borders</Text>
      <Text style={styles.subtitle}>Your travel companion for border crossings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});