
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta = {
title: "Components/Text",
component: Text,
tags: ["autodocs"],
    argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    },
args: {
    text: "Welcome to Rosie’s UI Garden.",
    backgroundColor: "#ffffff",
    disabled: false,
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
    disabled: true,
    },
};