import FontAwesome6Icons from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { Image, StyleSheet } from "react-native";

import DefaultLayout from "@/components/DefaultLayout";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTouchableOpacity } from "@/components/ThemedTouchableOpacity";
import { ThemedView } from "@/components/ThemedView";
import { ThemeColorsType } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Player } from "@/hooks/useTicTacToeEngine";

export default function HomeScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  return (
    <DefaultLayout>
      <ThemedView style={styles.container} darkColor="transparent">
        <ThemedView style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require("@/assets/images/logo.png")}
          />
          <ThemedText type="title">TicTacToe</ThemedText>
        </ThemedView>
        <ThemedView style={styles.optionsContainer}>
          <ThemedText style={styles.optionsTitle} type="subtitle">
            Who will play first?
          </ThemedText>
          <ThemedView style={styles.optionButtonsContainer}>
            <ThemedTouchableOpacity
              accessible={true}
              accessibilityLabel="You"
              onPress={() =>
                router.push({
                  pathname: "/game",
                  params: { firstPlayer: Player.Human },
                })
              }
              style={[
                styles.optionButton,
                themedStyles({ colors }).userOptionButton,
              ]}
            >
              <FontAwesome6Icons name="face-smile" size={64} color="white" />
              <ThemedText type="subtitle" lightColor="white">
                YOU
              </ThemedText>
            </ThemedTouchableOpacity>

            <ThemedTouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/game",
                  params: { firstPlayer: Player.Computer },
                })
              }
              accessible={true}
              accessibilityLabel="AI"
              style={[
                styles.optionButton,
                themedStyles({ colors }).aiOptionButton,
              ]}
            >
              <FontAwesome6Icons name="robot" size={64} color="white" />
              <ThemedText type="subtitle" lightColor="white">
                AI
              </ThemedText>
            </ThemedTouchableOpacity>
          </ThemedView>
        </ThemedView>
        <ThemedText>Made by Mark Shenouda</ThemedText>
      </ThemedView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    gap: 8,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  optionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  optionsTitle: {
    textAlign: "center",
    marginBottom: 30,
    alignItems: "center",
  },
  optionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 400,
    gap: 20,
  },
  optionButton: {
    alignItems: "center",
    gap: 20,
    flex: 1,
    width: "100%",
    padding: 40,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: "center",
  },
  logoImage: {
    width: 80,
    height: 80,
  },
});

interface ThemedStylesProps {
  colors: ThemeColorsType;
}

const themedStyles = ({ colors }: ThemedStylesProps) =>
  StyleSheet.create({
    aiOptionButton: {
      backgroundColor: colors.purple,
    },
    userOptionButton: {
      backgroundColor: colors.blue,
    },
  });
