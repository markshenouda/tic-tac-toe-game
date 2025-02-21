import { renderHook } from "@testing-library/react-hooks";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { useThemeColors } from "../useThemeColors";

// filepath: /Users/markshenouda/Projects/tic-tac-toe/tic-tac-toe-game/hooks/useThemeColors.test.ts

jest.mock("@/hooks/useColorScheme");

describe("useThemeColors Hook", () => {
  it("should return light theme colors when useColorScheme returns null", () => {
    (useColorScheme as jest.Mock).mockReturnValue(null);
    const { result } = renderHook(() => useThemeColors());
    expect(result.current).toBe(Colors.light);
  });

  it("should return dark theme colors when useColorScheme returns 'dark'", () => {
    (useColorScheme as jest.Mock).mockReturnValue("dark");
    const { result } = renderHook(() => useThemeColors());
    expect(result.current).toBe(Colors.dark);
  });

  it("should return light theme colors when useColorScheme returns 'light'", () => {
    (useColorScheme as jest.Mock).mockReturnValue("light");
    const { result } = renderHook(() => useThemeColors());
    expect(result.current).toBe(Colors.light);
  });
});
