

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    description: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    heading: "Reusable components",
    description:
      "Build consistent interfaces with Rosie's UI Garden.",
    backgroundColor: "#ffffff",
    disabled: false,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};