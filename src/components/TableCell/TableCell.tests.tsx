

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableCell } from "./TableCell";

test("the table cell is visible", () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Button</TableCell>
        </tr>
      </tbody>
    </table>
  );

  expect(
    screen.getByRole("cell", { name: "Button" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <table>
      <tbody>
        <tr>
          <TableCell backgroundColor="#ffffff">
            Button
          </TableCell>
        </tr>
      </tbody>
    </table>
  );

  const cell = screen.getByRole("cell");

  expect(cell).toHaveStyle("background-color: #ffffff");

  rerender(
    <table>
      <tbody>
        <tr>
          <TableCell backgroundColor="#ffffff" disabled>
            Button
          </TableCell>
        </tr>
      </tbody>
    </table>
  );

  expect(cell).toHaveAttribute("aria-disabled", "true");
  expect(cell).toHaveStyle("background-color: #d1d5db");
});

test("the header option creates a column header", () => {
  render(
    <table>
      <thead>
        <tr>
          <TableCell header>Component</TableCell>
        </tr>
      </thead>
    </table>
  );

  expect(
    screen.getByRole("columnheader", { name: "Component" })
  ).toHaveAttribute("scope", "col");
});