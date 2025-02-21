import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTouchableOpacityProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTouchableOpacity({
  style,
  lightColor,
  darkColor,
  onPressIn,
  onPress,
  ...otherProps
}: ThemedTouchableOpacityProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audios/tap.wav"),
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={[{ backgroundColor }, style]}
      {...otherProps}
      onPressIn={(event) => {
        if (process.env.EXPO_OS === "ios") {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPressIn?.(event);
      }}
      onPress={(event) => {
        playSound();
        onPress?.(event);
      }}
    />
  );
}
