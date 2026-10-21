

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

test("the label is visible", () => {
  render(<Label text="Email address" />);

  expect(screen.getByText("Email address")).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Label text="Email address" backgroundColor="#eff6ff" />
  );

  const label = screen.getByText("Email address");

  expect(label).toHaveStyle("background-color: #eff6ff");

  rerender(
    <Label
      text="Email address"
      backgroundColor="#eff6ff"
      disabled
    />
  );

  expect(label).toHaveAttribute("aria-disabled", "true");
  expect(label).toHaveStyle("background-color: #d1d5db");
});