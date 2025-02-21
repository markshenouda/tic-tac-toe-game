import FontAwesomeIcons from "@expo/vector-icons/FontAwesome";
import { Audio } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import DefaultLayout from "@/components/DefaultLayout";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTouchableOpacity } from "@/components/ThemedTouchableOpacity";
import { ThemedView } from "@/components/ThemedView";
import { Player } from "@/hooks/useTicTacToeEngine";

export default function Modal() {
  const { winner } = useLocalSearchParams();
  const router = useRouter();
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audios/result.wav"),
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
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
          accessible={true}
          accessibilityLabel="Restart"
        >
          <FontAwesomeIcons name="refresh" size={64} color="white" />
          <ThemedText type="defaultSemiBold" lightColor="white">
            Restart
          </ThemedText>
        </ThemedTouchableOpacity>

        {/* Spacer */}
        <ThemedView></ThemedView>
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
    borderRadius: 40,
    width: 150,
    height: 150,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
