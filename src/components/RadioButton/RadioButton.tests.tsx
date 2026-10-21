

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

test("the radio button is visible", () => {
  render(<RadioButton label="Standard delivery" />);

  expect(
    screen.getByRole("radio", { name: "Standard delivery" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <RadioButton
      label="Standard delivery"
      backgroundColor="#ffffff"
    />
  );

  const radio = screen.getByRole("radio");
  const wrapper = radio.closest("label");

  expect(wrapper).toHaveStyle("background-color: #ffffff");

  rerender(
    <RadioButton
      label="Standard delivery"
      backgroundColor="#ffffff"
      disabled
    />
  );

  expect(radio).toBeDisabled();
  expect(wrapper).toHaveStyle("background-color: #d1d5db");
});

test("selecting another radio changes the group selection", () => {
  render(
    <>
      <RadioButton label="Standard" name="delivery" value="standard" />
      <RadioButton label="Express" name="delivery" value="express" />
    </>
  );

  const standard = screen.getByRole("radio", { name: "Standard" });
  const express = screen.getByRole("radio", { name: "Express" });

  userEvent.click(standard);
  expect(standard).toBeChecked();

  userEvent.click(express);
  expect(express).toBeChecked();
  expect(standard).not.toBeChecked();
});

test("a disabled radio cannot be selected", () => {
  render(<RadioButton label="Unavailable" disabled />);

  const radio = screen.getByRole("radio", { name: "Unavailable" });

  userEvent.click(radio);

  expect(radio).not.toBeChecked();
});