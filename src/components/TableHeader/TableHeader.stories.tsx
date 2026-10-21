

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableHeader } from "./TableHeader";

const meta = {
  title: "Components/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    children: { control: false },
  },
  args: {
    backgroundColor: "#dbeafe",
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <TableHeader {...args}>
        <tr>
          <th scope="col">Component</th>
          <th scope="col">Status</th>
        </tr>
      </TableHeader>

      <tbody>
        <tr>
          <td>Button</td>
          <td>Complete</td>
        </tr>
      </tbody>
    </table>
  ),
} satisfies Meta<typeof TableHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};