
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
},
    args: {
        label: "Click me",
        backgroundColor: "#2563eb",
        disabled: false,
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};