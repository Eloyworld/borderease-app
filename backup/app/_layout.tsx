import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Splash from "./splash";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<"(tabs)" | "language" | "guide">("(tabs)");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        const firstLaunch = await AsyncStorage.getItem("firstLaunch");
        const guideCompleted = await AsyncStorage.getItem("guideCompleted");

        if (!firstLaunch) {
          setInitialRoute("language");
        } else if (guideCompleted !== "true") {
          setInitialRoute("guide");
        } else {
          setInitialRoute("(tabs)");
        }
      } catch (e) {
        console.error("Error preparing app:", e);
        setInitialRoute("(tabs)");
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  // Show Splash screen for 2.5s
  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  // Show loading state while deciding initial route
  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <Stack initialRouteName={initialRoute}>
      <Stack.Screen name="language" options={{ headerShown: false }} />
      <Stack.Screen name="guide" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

