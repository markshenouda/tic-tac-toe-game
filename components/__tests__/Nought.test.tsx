import { render } from "@testing-library/react-native";
import * as React from "react";

import Nought from "@/components/Nought";

describe("Nought", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<Nought />);
    expect(toJSON()).toMatchSnapshot();
  });
});
