import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Cross from "@/components/Cross";
import Nought from "@/components/Nought";
import { ThemedTouchableOpacity } from "@/components/ThemedTouchableOpacity";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Player } from "@/hooks/useTicTacToeEngine";

interface TileProps {
  tileValue: Player;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel: string;
  isWinningTile?: boolean;
}

export default function Tile({
  tileValue,
  onPress,
  disabled,
  accessibilityLabel,
  isWinningTile,
}: TileProps) {
  const colors = useThemeColors();
  const crossColor = colors.blue;
  const noughtColor = colors.purple;

  const tileColor = () => {
    if (isWinningTile) {
      return colors.green;
    }

    switch (tileValue) {
      case "X":
        return crossColor;
      case "O":
        return noughtColor;
      default:
        return colors.orange;
    }
  };

  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <ThemedTouchableOpacity
      style={styles.tile}
      lightColor={tileColor()}
      darkColor={tileColor()}
      activeOpacity={0.8}
      focusable={true}
      onPress={handlePress}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
    >
      {tileValue === "X" ? <Cross /> : null}
      {tileValue === "O" ? <Nought /> : null}
    </ThemedTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    aspectRatio: 1,
    margin: 2,
    width: "100%",
    height: "31%",
    borderRadius: 14,
    boxShadow: "0 2 2 rgba(0, 0, 0, 0.25)",
  },
});
