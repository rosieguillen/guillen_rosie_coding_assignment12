import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("the showcase displays its title", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Rosie's UI Garden",
    })
  ).toBeVisible();
});

test("the toggle disables and re-enables the showcase button", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Click me" });
  const toggle = screen.getByRole("checkbox", {
    name: "Disable showcase components",
  });

  userEvent.click(button);
  expect(screen.getByRole("status")).toHaveTextContent("Button clicks: 1");

  userEvent.click(toggle);
  expect(button).toBeDisabled();

  userEvent.click(button);
  expect(screen.getByRole("status")).toHaveTextContent("Button clicks: 1");

  userEvent.click(toggle);
  expect(button).toBeEnabled();

  userEvent.click(button);
  expect(screen.getByRole("status")).toHaveTextContent("Button clicks: 2");
});