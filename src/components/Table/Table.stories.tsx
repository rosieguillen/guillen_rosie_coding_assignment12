
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
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
    <Table {...args}>
      <caption>Component library progress</caption>

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
        <tr>
          <td>Card</td>
          <td>Complete</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={2}>Two example components</td>
        </tr>
      </tfoot>
    </Table>
  ),
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};