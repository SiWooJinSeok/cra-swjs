import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button/StateButton",
  component: Button,
  args: { onClick: () => {} },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PlusButton: Story = {
  args: {
    children: "+",
  },
};

export const MinusButton: Story = {
  args: {
    children: "-",
  },
};
