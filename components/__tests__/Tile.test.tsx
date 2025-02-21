import { fireEvent, render } from "@testing-library/react-native";
import * as React from "react";

import Tile from "@/components/Tile";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Player } from "@/hooks/useTicTacToeEngine";

// Mock the useThemeColors hook
jest.mock("@/hooks/useThemeColors");

describe("Tile", () => {
  const mockOnPress = jest.fn();
  const mockColors = { blue: "#0000FF", purple: "#800080", orange: "#FFA500" };

  beforeEach(() => {
    (useThemeColors as jest.Mock).mockReturnValue(mockColors);
  });

  it("renders correctly with no value", () => {
    const { toJSON } = render(
      <Tile
        tileValue={Player.None}
        onPress={mockOnPress}
        accessibilityLabel="Empty, row 1, column 1"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with X value", () => {
    const { toJSON } = render(
      <Tile
        tileValue={Player.Computer}
        onPress={mockOnPress}
        accessibilityLabel="Computer, row 1, column 1"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with O value", () => {
    const { toJSON } = render(
      <Tile
        tileValue={Player.Human}
        onPress={mockOnPress}
        accessibilityLabel="You, row 1, column 1"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
