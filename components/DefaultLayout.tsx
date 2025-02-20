import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeAreaViewStyle}>{children}</SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  safeAreaViewStyle: {
    height: "100%",
  },
});
