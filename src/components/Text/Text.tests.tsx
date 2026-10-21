

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

test("the text is visible", () => {
  render(<Text text="Welcome to UI Garden" />);

  expect(screen.getByText("Welcome to UI Garden")).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Text text="Sample text" backgroundColor="#ffffff" />
  );

  const text = screen.getByText("Sample text");

  expect(text).toHaveStyle("background-color: #ffffff");

  rerender(
    <Text text="Sample text" backgroundColor="#ffffff" disabled />
  );

  expect(text).toHaveAttribute("aria-disabled", "true");
  expect(text).toHaveStyle("background-color: #d1d5db");
});