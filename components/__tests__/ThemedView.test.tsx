import { render } from "@testing-library/react-native";
import * as React from "react";

import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

// Mock the useThemeColor hook
jest.mock("@/hooks/useThemeColor");

describe("ThemedView", () => {
  const mockUseThemeColor = useThemeColor as jest.Mock;

  beforeEach(() => {
    mockUseThemeColor.mockReturnValue("black");
  });

  it("renders correctly with default background color", () => {
    const { toJSON } = render(<ThemedView />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("applies custom light and dark colors", () => {
    mockUseThemeColor.mockReturnValue("customColor");

    const { getByTestId } = render(
      <ThemedView
        lightColor="lightColor"
        darkColor="darkColor"
        testID="themed-view"
      />,
    );
    const viewElement = getByTestId("themed-view");

    expect(viewElement.props.style).toContainEqual({
      backgroundColor: "customColor",
    });
  });
});
