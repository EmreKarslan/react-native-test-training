import { countChildren } from "@/utils/test/test.utils";
import renderer from "react-test-renderer";
import React from "react";
import App from "@/App";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(countChildren(tree)).toBe(1);
  });
});
