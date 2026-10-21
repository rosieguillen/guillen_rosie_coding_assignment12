
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableCell } from "./TableCell";

const meta = {
  title: "Components/TableCell",
  component: TableCell,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    header: { control: "boolean" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Example cell",
    header: false,
    backgroundColor: "#ffffff",
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
} satisfies Meta<typeof TableCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Header: Story = {
  args: {
    children: "Component",
    header: true,
  },
};