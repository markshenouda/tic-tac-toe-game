import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import DefaultLayout from "@/components/DefaultLayout";
import GameBoard from "@/components/GameBoard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Tile from "@/components/Tile";
import { Player, useTicTacToe } from "@/hooks/useTicTacToeEngine";

export default function GameScreen() {
  const { firstPlayer } = useLocalSearchParams();
  const router = useRouter();
  const { state, makeMove } = useTicTacToe(
    firstPlayer?.toString() === Player.Human ? true : false,
  );

  useEffect(() => {
    if (state.winner) {
      router.push({ pathname: "/modal", params: { winner: state.winner } });
    }
  }, [state.winner]);

  return (
    <DefaultLayout>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">
          {state.isLoading ? (
            <>
              <ActivityIndicator size="small" color="white" /> Thinking...
            </>
          ) : (
            "Your turn"
          )}
        </ThemedText>
        <GameBoard state={state} makeMove={makeMove} />
        <ThemedView>
          <Tile tileValue="X" onPress={() => console.log("From tile")} />
        </ThemedView>
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
