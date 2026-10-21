
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("the button is visible", () => {
    render(<Button label="Save" />);

    expect(
        screen.getByRole("button", { name: "Save" })
    ).toBeVisible();
});

test("the background changes when disabled", () => {
    const { rerender } = render(
        <Button label="Save" backgroundColor="#2563eb" />
    );

    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toHaveStyle("background-color: #2563eb");

    rerender(
        <Button label="Save" backgroundColor="#2563eb" disabled />
    );

    expect(button).toBeDisabled();
    expect(button).toHaveStyle("background-color: #d1d5db");
});