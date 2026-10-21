
import styled from "styled-components";
import type { ImgProps } from "./Img.types";
import type { MouseEvent } from "react";

const Frame = styled.figure<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  margin: 0;
  padding: 12px;
  border-radius: 8px;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "auto"};

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const StyledImage = styled.img<{ $disabled: boolean }>`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  filter: ${({ $disabled }) =>
    $disabled ? "grayscale(100%)" : "none"};
`;

export const Img = ({
  src,
  alt,
  backgroundColor = "#eff6ff",
  disabled = false,
  onClick,
  ...props
}: ImgProps) => (
  <Frame
    $backgroundColor={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <StyledImage
      {...props}
      src={src}
      alt={alt}
      $disabled={disabled}
      onClick={(event: MouseEvent<HTMLImageElement>) => {
        if (disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        onClick?.(event);
      }}
    />
  </Frame>
);