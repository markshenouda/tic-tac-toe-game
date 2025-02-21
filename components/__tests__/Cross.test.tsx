import { render } from "@testing-library/react-native";
import * as React from "react";

import Cross from "@/components/Cross";

describe("Cross", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<Cross />);
    expect(toJSON()).toMatchSnapshot();
  });
});
