

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const sampleImage =
  "data:image/svg+xml," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg"
         width="800" height="400" viewBox="0 0 800 400">
      <rect width="800" height="400" fill="#dbeafe"/>
      <circle cx="650" cy="90" r="45" fill="#fbbf24"/>
      <path d="M0 400 L250 100 L500 400 Z" fill="#15803d"/>
      <path d="M300 400 L550 170 L800 400 Z" fill="#166534"/>
    </svg>
  `);

const meta = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    src: sampleImage,
    alt: "Illustration of green mountains and a yellow sun",
    backgroundColor: "#eff6ff",
    disabled: false,
  },
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};