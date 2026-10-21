

import styled from "styled-components";
import type { CardProps } from "./Card.types";
import type { MouseEvent } from "react";


const Container = styled.article<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border: 1px solid #9ca3af;
  border-radius: 12px;
  font-family: inherit;
  overflow-wrap: anywhere;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "auto"};

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Heading = styled.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  line-height: 1.3;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const Card = ({
  heading,
  description,
  backgroundColor = "#ffffff",
  disabled = false,
  onClick,
  ...props
}: CardProps) => (
  <Container
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
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
  </Container>
);