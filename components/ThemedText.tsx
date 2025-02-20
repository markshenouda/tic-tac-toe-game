import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "DinNextRounded",
  },
  defaultSemiBold: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: "DinNextRounded",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: 58,
    fontFamily: "FeatherBold",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "DinNextRounded",
  },
});
