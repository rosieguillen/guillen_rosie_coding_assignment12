

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const sampleImage =
  "data:image/svg+xml," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg"
         width="1200" height="400" viewBox="0 0 1200 400">
      <rect width="1200" height="400" fill="#dbeafe"/>
      <circle cx="1000" cy="90" r="50" fill="#fbbf24"/>
      <path d="M0 400 L350 80 L700 400 Z" fill="#15803d"/>
      <path d="M450 400 L850 140 L1200 400 Z" fill="#166534"/>
    </svg>
  `);

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    heading: { control: "text" },
    description: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    src: sampleImage,
    alt: "Illustration of mountains beneath a sunny sky",
    heading: "Welcome to Rosie's UI Garden",
    description: "Explore a collection of reusable React components.",
    backgroundColor: "#eff6ff",
    disabled: false,
  },
} satisfies Meta<typeof HeroImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};