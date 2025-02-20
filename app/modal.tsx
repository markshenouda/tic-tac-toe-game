import { useLocalSearchParams, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

import DefaultLayout from "@/components/DefaultLayout";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTouchableOpacity } from "@/components/ThemedTouchableOpacity";
import { ThemedView } from "@/components/ThemedView";
import { Player } from "@/hooks/useTicTacToeEngine";

export default function Modal() {
  const { winner } = useLocalSearchParams();
  const router = useRouter();
  return (
    <DefaultLayout>
      <ThemedView style={styles.container}>
        <ThemedText type="title">TicTacToe</ThemedText>
        <ThemedView>
          <LottieView
            autoPlay
            style={styles.lottieViewStyle}
            source={
              winner === Player.Computer
                ? require("@/assets/lottie/lost.json")
                : require("@/assets/lottie/draw.json")
            }
          />
        </ThemedView>
        <ThemedText type="subtitle">
          {winner === Player.Computer
            ? "You lost!"
            : winner === Player.Human
              ? "You won!"
              : "It's a draw!"}
        </ThemedText>
        <ThemedTouchableOpacity
          style={styles.restartButton}
          onPress={() => {
            router.dismissTo("/");
          }}
        >
          <ThemedText type="defaultSemiBold">SHARE</ThemedText>
        </ThemedTouchableOpacity>
        <ThemedText type="defaultSemiBold">Restart</ThemedText>
        {/* <ThemedTouchableOpacity onPress={share}>
          <ThemedText type="defaultSemiBold">SHARE</ThemedText>
        </ThemedTouchableOpacity> */}
      </ThemedView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  lottieViewStyle: {
    width: 200,
    height: 200,
    backgroundColor: "transparent",
  },
  restartButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "green",
  },
  shareButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "blue",
  },
});
