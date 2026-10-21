

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Img } from "./Img";

test("the image element is visible and has alternative text", () => {
  render(<Img src="/sample.jpg" alt="Green mountains" />);

  expect(
    screen.getByRole("img", { name: "Green mountains" })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <Img
      src="/sample.jpg"
      alt="Green mountains"
      backgroundColor="#eff6ff"
    />
  );

  const image = screen.getByRole("img");
  const frame = image.closest("figure");

  expect(frame).toHaveStyle("background-color: #eff6ff");

  rerender(
    <Img
      src="/sample.jpg"
      alt="Green mountains"
      backgroundColor="#eff6ff"
      disabled
    />
  );

  expect(frame).toHaveAttribute("aria-disabled", "true");
  expect(frame).toHaveStyle("background-color: #d1d5db");
  expect(image).toHaveStyle("opacity: 0.45");
});