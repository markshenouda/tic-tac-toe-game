import { render } from "@testing-library/react-native";
import * as React from "react";

import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

// Mock the useThemeColor hook
jest.mock("@/hooks/useThemeColor");

describe("ThemedText", () => {
  const mockUseThemeColor = useThemeColor as jest.Mock;

  beforeEach(() => {
    mockUseThemeColor.mockReturnValue("black");
  });

  it("renders correctly with default type", () => {
    const { toJSON } = render(<ThemedText>Default Text</ThemedText>);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with title type", () => {
    const { toJSON } = render(<ThemedText type="title">Title Text</ThemedText>);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with defaultSemiBold type", () => {
    const { toJSON } = render(
      <ThemedText type="defaultSemiBold">SemiBold Text</ThemedText>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with subtitle type", () => {
    const { toJSON } = render(
      <ThemedText type="subtitle">Subtitle Text</ThemedText>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("applies custom light and dark colors", () => {
    mockUseThemeColor.mockReturnValue("customColor");

    const { getByText } = render(
      <ThemedText lightColor="lightColor" darkColor="darkColor">
        Custom Color Text
      </ThemedText>,
    );
    const textElement = getByText("Custom Color Text");

    expect(textElement.props.style).toContainEqual({ color: "customColor" });
  });
});
