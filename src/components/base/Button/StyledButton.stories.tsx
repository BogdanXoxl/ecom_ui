import type { Meta, StoryObj } from "@storybook/react";
import { TestButton, TestButton2 } from "./TestButton.styled";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TestButton> = {
  title: "Base/StyledButton",
  component: TestButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    $primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    $primary: false,
  },
};

export const Alias: Story = {
  render: () => <TestButton2 />,
};
