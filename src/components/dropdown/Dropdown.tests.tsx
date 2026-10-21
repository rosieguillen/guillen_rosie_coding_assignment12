
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
];

test("the dropdown is visible", () => {
  render(
    <Dropdown aria-label="Choose a fruit" options={options} />
  );

  expect(
    screen.getByRole("combobox", { name: "Choose a fruit" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Dropdown
      aria-label="Choose a fruit"
      options={options}
      backgroundColor="#ffffff"
    />
  );

  const dropdown = screen.getByRole("combobox");

  expect(dropdown).toHaveStyle("background-color: #ffffff");

  rerender(
    <Dropdown
      aria-label="Choose a fruit"
      options={options}
      backgroundColor="#ffffff"
      disabled
    />
  );

  expect(dropdown).toBeDisabled();
  expect(dropdown).toHaveStyle("background-color: #d1d5db");
});

test("the user can select an option", () => {
  render(
    <Dropdown aria-label="Choose a fruit" options={options} />
  );

  const dropdown = screen.getByRole("combobox");

  userEvent.selectOptions(dropdown, "banana");

  expect(dropdown).toHaveValue("banana");
});