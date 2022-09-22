import React from "react";
import { render } from "@testing-library/react";
import { FixedFrame } from "./FixedFrame";

describe("FixedFrame", () => {
  test("renders the FixedFrame component", () => {
    render(<FixedFrame>Hello World!</FixedFrame>);
  });
});
