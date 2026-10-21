

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    "aria-label": { control: "text" },
  },
  args: {
    "aria-label": "Choose a fruit",
    backgroundColor: "#ffffff",
    disabled: false,
    options: [
      { value: "", label: "Select a fruit" },
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};