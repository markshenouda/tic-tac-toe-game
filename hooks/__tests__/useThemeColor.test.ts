import { renderHook } from "@testing-library/react-hooks";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

// Mock the useColorScheme hook
jest.mock("@/hooks/useColorScheme");

describe("useThemeColor", () => {
  it("returns the color from props if provided", () => {
    (useColorScheme as jest.Mock).mockReturnValue("dark");

    const { result } = renderHook(() =>
      useThemeColor({ light: "lightColor", dark: "darkColor" }, "background"),
    );

    expect(result.current).toBe("darkColor");
  });

  it("returns the color from Colors if not provided in props", () => {
    (useColorScheme as jest.Mock).mockReturnValue("light");

    const { result } = renderHook(() => useThemeColor({}, "text"));

    expect(result.current).toBe(Colors.light.text);
  });

  it("defaults to light theme if useColorScheme returns null", () => {
    (useColorScheme as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useThemeColor({}, "text"));

    expect(result.current).toBe(Colors.light.text);
  });
});
