

import styled from "styled-components";
import type { TableCellProps } from "./TableCell.types";
import type { MouseEvent } from "react";

const StyledCell = styled.td<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  padding: 12px;
  border: 1px solid #9ca3af;
  text-align: left;
  font-family: inherit;
  overflow-wrap: anywhere;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "inherit"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "inherit"};

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.875rem;
  }
`;

export const TableCell = ({
  children,
  header = false,
  scope,
  backgroundColor = "transparent",
  disabled = false,
  onClick,
  onClickCapture,
  ...props
}: TableCellProps) => (
  <StyledCell
    {...props}
    as={header ? "th" : "td"}
    scope={header ? scope ?? "col" : undefined}
    $backgroundColor={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
    onClickCapture={(event: MouseEvent<HTMLTableCellElement>) => {
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
  </StyledCell>
);