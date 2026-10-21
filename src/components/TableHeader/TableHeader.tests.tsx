

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableHeader } from "./TableHeader";

const content = (
  <tr>
    <th scope="col">Component</th>
    <th scope="col">Status</th>
  </tr>
);

test("the table header is visible", () => {
  render(
    <table>
      <TableHeader>{content}</TableHeader>
    </table>
  );

  expect(screen.getByRole("rowgroup")).toBeVisible();

  expect(
    screen.getByRole("columnheader", { name: "Component" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <table>
      <TableHeader backgroundColor="#dbeafe">
        {content}
      </TableHeader>
    </table>
  );

  const header = screen.getByRole("rowgroup");

  expect(header).toHaveStyle("background-color: #dbeafe");

  rerender(
    <table>
      <TableHeader backgroundColor="#dbeafe" disabled>
        {content}
      </TableHeader>
    </table>
  );

  expect(header).toHaveAttribute("aria-disabled", "true");
  expect(header).toHaveStyle("background-color: #d1d5db");
});