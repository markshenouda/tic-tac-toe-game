import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { ActivityIndicator, Platform, StyleSheet } from "react-native";

import DefaultLayout from "@/components/DefaultLayout";
import GameBoard from "@/components/GameBoard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Player, useTicTacToe } from "@/hooks/useTicTacToeEngine";

export default function GameScreen() {
  const { firstPlayer } = useLocalSearchParams();
  const router = useRouter();
  const { state, makeMove } = useTicTacToe(
    firstPlayer?.toString() === Player.Human ? true : false,
  );
  const colors = useThemeColors();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (state.winner) {
      timerRef.current = setTimeout(() => {
        // Navigate to the modal from the TV app is different from the mobile app
        if (Platform.isTV) {
          router.replace({
            pathname: "/modal",
            params: { winner: state.winner },
          });
        } else {
          router.push({ pathname: "/modal", params: { winner: state.winner } });
        }
      }, 1000);
    }

    return () => clearTimeout(timerRef.current);
  }, [state.winner]);

  return (
    <DefaultLayout>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">
          {state.isLoading ? (
            <>
              <ActivityIndicator size="small" color={colors.text} /> Thinking...
            </>
          ) : (
            "Your turn"
          )}
        </ThemedText>
        <GameBoard state={state} makeMove={makeMove} />

        {/* Spacer */}
        <ThemedView></ThemedView>
      </ThemedView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    justifyContent: "space-around",
    height: "100%",
  },
});
