

import styled from "styled-components";
import type { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{
  $backgroundColor: string;
}>`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  min-width: 0;
  padding: 12px;
  border: 1px solid #6b7280;
  border-radius: 6px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #111827;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: #d1d5db;
    color: #4b5563;
    cursor: not-allowed;
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Dropdown = ({
  options,
  backgroundColor = "#ffffff",
  disabled = false,
  ...props
}: DropdownProps) => (
  <StyledSelect
    {...props}
    disabled={disabled}
    $backgroundColor={backgroundColor}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);