

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableFooter } from "./TableFooter";

const meta = {
  title: "Components/TableFooter",
  component: TableFooter,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    children: { control: false },
  },
  args: {
    backgroundColor: "#f3f4f6",
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
        <tr>
          <td>Button</td>
          <td>Complete</td>
        </tr>
      </tbody>

      <TableFooter {...args}>
        <tr>
          <td colSpan={2}>Total: 1 component</td>
        </tr>
      </TableFooter>
    </table>
  ),
} satisfies Meta<typeof TableFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};