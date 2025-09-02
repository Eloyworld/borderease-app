import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";

const SPLASH_MS = 2500; // 2.5 seconds

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      // 👇 First screen after splash (change if needed)
      router.replace("/language");
    }, SPLASH_MS);

    return () => clearTimeout(t);
  }, [router]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.bg}
        resizeMode="contain" // 👈 change "contain" → "cover" if you want full bleed
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  bg: { flex: 1, width: "100%", height: "100%" },
});
