
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    htmlFor: { control: "text" },
  },
  args: {
    text: "Email address",
    backgroundColor: "#eff6ff",
    disabled: false,
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};