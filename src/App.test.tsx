import React from "react";
import renderer from "react-test-renderer";

import App from "./App";
import { countChildren } from "./utils/test/test.utils";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(countChildren(tree)).toBe(1);
  });
});
