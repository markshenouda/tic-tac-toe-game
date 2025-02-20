import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import Tile from "@/components/Tile";
import { GameState } from "@/hooks/useTicTacToeEngine";

const BOARD_SIZE = 3;

interface GameBoardProps {
  state: GameState;
  makeMove: (row: number, col: number) => void;
}

export default function GameBoard({ state, makeMove }: GameBoardProps) {
  return (
    <ThemedView
      style={styles.container}
      // TODO: clean this
      lightColor="#ff9600"
      darkColor="#cc7800"
    >
      <ThemedView style={styles.grid}>
        {[...Array(BOARD_SIZE)].map((_, i) => (
          <ThemedView key={i} style={styles.row}>
            {[...Array(BOARD_SIZE)].map((_, j) => (
              <Tile
                key={j}
                tileValue={state.board[i][j]}
                onPress={() => {
                  console.log(Platform.OS);
                  makeMove(i, j);
                }}
                disabled={
                  (state.board[i][j] !== "" ||
                    state.isLoading ||
                    Boolean(state.winner)) &&
                  !Platform.isTV // TODO: add a comment here
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
    maxHeight: 600,
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
