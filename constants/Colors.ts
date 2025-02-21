export type ThemeColorsType = {
  text: string;
  background: string;
  blue: string;
  purple: string;
  orange: string;
  orangeTint: string;
};

export type ColorsType = {
  light: ThemeColorsType;
  dark: ThemeColorsType;
};

export const Colors: ColorsType = {
  light: {
    text: "#11181C",
    background: "#fff",
    blue: "#178dc5",
    purple: "#cc6ba6",
    orange: "#ff9600",
    orangeTint: "#cc7800",
  },
  dark: {
    text: "#ECEDEE",
    background: "#131f24",
    blue: "#1cb0f6",
    purple: "#ff86d0",
    orange: "#a66100",
    orangeTint: "ff9600",
  },
};
