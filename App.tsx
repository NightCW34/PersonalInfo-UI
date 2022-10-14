import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

//Custom Components
import Content from "./components/content";

//Custom Fonts
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_500Medium,
    Rubik_300Light,
    Rubik_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="light" backgroundColor="#0EBE7E" />
        <Content />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
