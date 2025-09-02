import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Logo 2.png')}
        style={{
          width: width,
          height: height * 0.9, // 90% of screen height
        }}
        resizeMode="stretch" // same behavior as before
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
    justifyContent: 'center',
    alignItems: 'center',
  },
});
