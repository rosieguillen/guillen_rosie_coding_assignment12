

import styled from "styled-components";
import type { RadioButtonProps } from "./RadioButton.types";

const Wrapper = styled.label<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-family: inherit;
  overflow-wrap: anywhere;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "pointer"};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Input = styled.input`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: #2563eb;
  cursor: inherit;

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
  }
`;

export const RadioButton = ({
  label,
  backgroundColor = "#ffffff",
  disabled = false,
  ...props
}: RadioButtonProps) => (
  <Wrapper
    $backgroundColor={backgroundColor}
    $disabled={disabled}
  >
    <Input {...props} type="radio" disabled={disabled} />
    <span>{label}</span>
  </Wrapper>
);