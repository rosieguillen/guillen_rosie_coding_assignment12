
import styled from "styled-components";
import type { TableFooterProps } from "./TableFooter.types";
import type { MouseEvent } from "react";

const StyledFooter = styled.tfoot<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  font-family: inherit;
  font-weight: 600;

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

export const TableFooter = ({
  children,
  backgroundColor = "#f3f4f6",
  disabled = false,
  onClick,
  onClickCapture,
  ...props
}: TableFooterProps) => (
  <StyledFooter
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
  </StyledFooter>
);