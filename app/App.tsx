import React, { useState } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>🌍 Welcome to Beyond Borders</Text>
    </View>
  );
}
