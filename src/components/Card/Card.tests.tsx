

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

const props = {
  heading: "Reusable components",
  description: "Build consistent interfaces.",
};

test("the card and its content are visible", () => {
  render(<Card {...props} />);

  expect(screen.getByRole("article")).toBeVisible();

  expect(
    screen.getByRole("heading", { name: props.heading })
  ).toBeVisible();

  expect(screen.getByText(props.description)).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Card {...props} backgroundColor="#ffffff" />
  );

  const card = screen.getByRole("article");

  expect(card).toHaveStyle("background-color: #ffffff");

  rerender(
    <Card {...props} backgroundColor="#ffffff" disabled />
  );

  expect(card).toHaveAttribute("aria-disabled", "true");
  expect(card).toHaveStyle("background-color: #d1d5db");
});