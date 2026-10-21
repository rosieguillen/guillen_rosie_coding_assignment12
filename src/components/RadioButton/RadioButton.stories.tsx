

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Standard delivery",
    name: "delivery",
    value: "standard",
    backgroundColor: "#ffffff",
    disabled: false,
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Group: Story = {
  render: (args) => (
    <div
      role="group"
      aria-label="Delivery options"
      style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
    >
      <RadioButton
        {...args}
        name="delivery-group"
        value="standard"
        label="Standard delivery"
      />
      <RadioButton
        {...args}
        name="delivery-group"
        value="express"
        label="Express delivery"
      />
    </div>
  ),
};