import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import SpaceMonoFont from "../assets/fonts/SpaceMono-Regular.ttf"; // Imported font

import { useColorScheme } from "@/components/useColorScheme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const fontsMap = {
    SpaceMono: SpaceMonoFont,
    ...FontAwesome.font,
  };

  const [loaded, error] = useFonts(fontsMap);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    async function hideSplashScreen() {
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    }
    void hideSplashScreen();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
