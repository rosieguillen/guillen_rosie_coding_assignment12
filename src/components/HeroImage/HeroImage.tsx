
import styled from "styled-components";
import type { HeroImageProps } from "./HeroImage.types";
import type { MouseEvent } from "react";

const Hero = styled.section<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  font-family: inherit;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "auto"};

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Banner = styled.img<{ $disabled: boolean }>`
  display: block;
  width: 100%;
  height: clamp(160px, 30vw, 320px);
  object-fit: cover;
  border-radius: 8px;

  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  filter: ${({ $disabled }) =>
    $disabled ? "grayscale(100%)" : "none"};
`;

const Heading = styled.h2`
  margin: 20px 0 8px;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.2;
  overflow-wrap: anywhere;
`;

const Description = styled.p`
  margin: 0;
  max-width: 65ch;
  font-size: 1rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
`;

export const HeroImage = ({
  src,
  alt,
  heading,
  description,
  backgroundColor = "#eff6ff",
  disabled = false,
  onClick,
  ...props
}: HeroImageProps) => (
  <Hero
    {...props}
    $backgroundColor={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
    onClick={(event: MouseEvent<HTMLElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClick?.(event);
    }}
  >
    <Banner src={src} alt={alt} $disabled={disabled} />
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
  </Hero>
);