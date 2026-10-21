

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableFooter } from "./TableFooter";

const content = (
  <tr>
    <td colSpan={2}>Total: 1 component</td>
  </tr>
);

test("the table footer is visible", () => {
  render(
    <table>
      <TableFooter>{content}</TableFooter>
    </table>
  );

  expect(screen.getByRole("rowgroup")).toBeVisible();

  expect(
    screen.getByRole("cell", { name: "Total: 1 component" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <table>
      <TableFooter backgroundColor="#f3f4f6">
        {content}
      </TableFooter>
    </table>
  );

  const footer = screen.getByRole("rowgroup");

  expect(footer).toHaveStyle("background-color: #f3f4f6");

  rerender(
    <table>
      <TableFooter backgroundColor="#f3f4f6" disabled>
        {content}
      </TableFooter>
    </table>
  );

  expect(footer).toHaveAttribute("aria-disabled", "true");
  expect(footer).toHaveStyle("background-color: #d1d5db");
});