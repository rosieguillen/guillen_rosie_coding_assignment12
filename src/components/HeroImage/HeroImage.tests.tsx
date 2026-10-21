

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

const props = {
  src: "/hero.jpg",
  alt: "Mountain landscape",
  heading: "Welcome to UI Garden",
  description: "Explore our reusable components.",
};

test("the hero heading and image element are visible", () => {
  render(<HeroImage {...props} />);

  expect(
    screen.getByRole("heading", { name: props.heading })
  ).toBeVisible();

  expect(
    screen.getByRole("img", { name: props.alt })
  ).toBeVisible();
});

test("the background changes when disabled", () => {
  const { rerender } = render(
    <HeroImage {...props} backgroundColor="#eff6ff" />
  );

  const hero = screen
    .getByRole("heading", { name: props.heading })
    .closest("section");

  expect(hero).toHaveStyle("background-color: #eff6ff");

  rerender(
    <HeroImage {...props} backgroundColor="#eff6ff" disabled />
  );

  expect(hero).toHaveAttribute("aria-disabled", "true");
  expect(hero).toHaveStyle("background-color: #d1d5db");
});