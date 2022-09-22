import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FixedFrame } from "./FixedFrame";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // title: "rollnroll/FixedFrame",
  component: FixedFrame,
} as ComponentMeta<typeof FixedFrame>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixedFrame> = (args) =>
  new Array(9).fill().map((nil, idx) => (
    <FixedFrame
      {...args}
      style={{
        backgroundColor: `#${idx}${idx}${idx}`,
        color: "#fff",
        width: "calc(100vw - 2rem)",
        height: "calc(100vh - 2rem)",
        fontFamily: "Arial",
        fontWeight: "600",
        fontSize: "min(75vw, 75vh)",
        lineHeight: "100vh",
        textAlign: "center",
      }}
      key={idx}
    >
      #{idx + 1}
    </FixedFrame>
  ));

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // children: "Hello world!",
};
