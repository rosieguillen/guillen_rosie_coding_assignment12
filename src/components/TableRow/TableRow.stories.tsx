

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableRow } from "./TableRow";

const meta = {
  title: "Components/TableRow",
  component: TableRow,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    children: { control: false },
  },
  args: {
    backgroundColor: "#ffffff",
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th scope="col">Component</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        <TableRow {...args}>
          <td>Button</td>
          <td>Complete</td>
        </TableRow>
      </tbody>
    </table>
  ),
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};