

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

const content = (
  <tbody>
    <tr>
      <td>Button</td>
      <td>Complete</td>
    </tr>
  </tbody>
);

test("the table and its content are visible", () => {
  render(
    <Table aria-label="Component progress">
      {content}
    </Table>
  );

  expect(
    screen.getByRole("table", { name: "Component progress" })
  ).toBeVisible();

  expect(
    screen.getByRole("cell", { name: "Button" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Table backgroundColor="#ffffff">{content}</Table>
  );

  const table = screen.getByRole("table");

  expect(table).toHaveStyle("background-color: #ffffff");

  rerender(
    <Table backgroundColor="#ffffff" disabled>
      {content}
    </Table>
  );

  expect(table).toHaveAttribute("aria-disabled", "true");
  expect(table).toHaveStyle("background-color: #d1d5db");
});