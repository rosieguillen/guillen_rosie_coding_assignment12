
import styled from "styled-components";
import type { TableHeaderProps } from "./TableHeader.types";
import type { MouseEvent } from "react";

const StyledHeader = styled.thead<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  font-family: inherit;
  font-weight: 700;

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "auto"};

  th {
    padding: 12px;
    text-align: left;
    overflow-wrap: anywhere;
  }

  @media (max-width: 480px) {
    th {
      padding: 8px;
      font-size: 0.875rem;
    }
  }
`;

export const TableHeader = ({
  children,
  backgroundColor = "#dbeafe",
  disabled = false,
  onClick,
  onClickCapture,
  ...props
}: TableHeaderProps) => (
  <StyledHeader
    {...props}
    $backgroundColor={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
    onClickCapture={(event: MouseEvent<HTMLTableSectionElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClickCapture?.(event);
    }}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </StyledHeader>
);