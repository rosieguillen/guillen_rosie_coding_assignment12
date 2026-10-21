

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableRow } from "./TableRow";

const content = (
  <>
    <td>Button</td>
    <td>Complete</td>
  </>
);

test("the table row is visible", () => {
  render(
    <table>
      <tbody>
        <TableRow>{content}</TableRow>
      </tbody>
    </table>
  );

  expect(screen.getByRole("row")).toBeVisible();

  expect(
    screen.getByRole("cell", { name: "Button" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <table>
      <tbody>
        <TableRow backgroundColor="#ffffff">
          {content}
        </TableRow>
      </tbody>
    </table>
  );

  const row = screen.getByRole("row");

  expect(row).toHaveStyle("background-color: #ffffff");

  rerender(
    <table>
      <tbody>
        <TableRow backgroundColor="#ffffff" disabled>
          {content}
        </TableRow>
      </tbody>
    </table>
  );

  expect(row).toHaveAttribute("aria-disabled", "true");
  expect(row).toHaveStyle("background-color: #d1d5db");
});