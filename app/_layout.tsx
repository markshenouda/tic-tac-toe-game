import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import Head from "expo-router/head";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColors } from "@/hooks/useThemeColors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const colors = useThemeColors();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    FeatherBold: require("@/assets/fonts/Feather-Bold.ttf"),
    DinNextRounded: require("@/assets/fonts/DIN-Next-Rounded.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Head>
        <title>TicTacToe | By Mark Shenouda</title>
        <meta
          name="description"
          content="A simple Tic Tac Toe game built with React Native and Expo."
        />
      </Head>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            title: "TicTacToe",
          }}
        />
        <Stack.Screen
          name="game"
          options={{
            title: "TicTacToe",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "FeatherBold",
            },
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: colors.background },
            headerBackTitleStyle: {
              fontFamily: "DinNextRounded",
              fontSize: 18,
            },
            headerBackTitle: "Cancel",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
