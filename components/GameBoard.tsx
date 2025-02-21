import React from "react";
import { Platform, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import Tile from "@/components/Tile";
import { useThemeColors } from "@/hooks/useThemeColors";
import { GameState, Player } from "@/hooks/useTicTacToeEngine";

const BOARD_SIZE = 3;

interface GameBoardProps {
  state: GameState;
  makeMove: (row: number, col: number) => void;
}

export default function GameBoard({ state, makeMove }: GameBoardProps) {
  const colors = useThemeColors();
  return (
    <ThemedView
      style={styles.container}
      lightColor={colors.orangeTint}
      darkColor={colors.orangeTint}
    >
      <ThemedView style={styles.grid}>
        {[...Array(BOARD_SIZE)].map((_, i) => (
          <ThemedView key={i} style={styles.row}>
            {[...Array(BOARD_SIZE)].map((_, j) => (
              <Tile
                key={j}
                tileValue={state.board[i][j]}
                isWinningTile={
                  state.winningLine
                    ? state.winningLine.some(
                        (winningTile) =>
                          winningTile[0] === i && winningTile[1] === j,
                      )
                    : undefined
                }
                onPress={() => {
                  makeMove(i, j);
                }}
                accessibilityLabel={`${state.board[i][j] === Player.Computer ? "Computer" : state.board[i][j] === Player.Human ? "You" : "Empty"}, row ${i + 1}, column ${j + 1}`}
                disabled={
                  state.board[i][j] !== "" ||
                  state.isLoading ||
                  Boolean(state.winner)
                }
              />
            ))}
          </ThemedView>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    margin: 8,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 12,
    aspectRatio: 1,
    width: "90%",
    maxWidth: 600,
    maxHeight: Platform.OS === "android" && Platform.isTV ? 300 : 600,
  },
  tile: {
    aspectRatio: 1,
    margin: 2,
    width: "100%",
    height: "31%",
    borderRadius: 10,
  },
  grid: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    gap: "2%",
  },
  row: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    gap: "2%",
  },
});
