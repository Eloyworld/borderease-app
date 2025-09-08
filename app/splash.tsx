import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

type Props = { onFinish?: () => void };

const SPLASH_MS = 3500; // show duration

export default function Splash({ onFinish }: Props) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const t = setTimeout(() => {
      // fade out over 500ms, then finish
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => onFinish && onFinish());
    }, SPLASH_MS);

    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={{ flex: 1, opacity }}>
        <ImageBackground
          source={require("../assets/splash.png")}
          style={styles.bg}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  bg: { flex: 1, justifyContent: "center", alignItems: "center" },
});
