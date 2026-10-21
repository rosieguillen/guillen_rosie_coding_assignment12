import styled from "styled-components";
import type { TableRowProps } from "./TableRow.types";
import type { MouseEvent } from "react";

const StyledRow = styled.tr<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "inherit"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "inherit"};

  td,
  th {
    padding: 12px;
    overflow-wrap: anywhere;
  }

  @media (max-width: 480px) {
    td,
    th {
      padding: 8px;
      font-size: 0.875rem;
    }
  }
`;

export const TableRow = ({
  children,
  backgroundColor = "transparent",
  disabled = false,
  onClick,
  onClickCapture,
  ...props
}: TableRowProps) => (
  <StyledRow
    {...props}
    $backgroundColor={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
    onClickCapture={(event: MouseEvent<HTMLTableRowElement>) => {
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
  </StyledRow>
);