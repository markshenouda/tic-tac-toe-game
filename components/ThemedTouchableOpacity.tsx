import * as Haptics from "expo-haptics";
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
  ...otherProps
}: ThemedTouchableOpacityProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

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
    />
  );
}
