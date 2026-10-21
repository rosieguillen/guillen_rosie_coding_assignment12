

import styled from "styled-components";
import type { TableProps } from "./Table.types";
import type { MouseEvent } from "react";

const ScrollContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;

  background-color: ${({ $disabled, $backgroundColor }) =>
    $disabled ? "#d1d5db" : $backgroundColor};

  color: ${({ $disabled }) =>
    $disabled ? "#4b5563" : "#111827"};

  cursor: ${({ $disabled }) =>
    $disabled ? "not-allowed" : "auto"};

  th,
  td {
    padding: 12px;
    border: 1px solid #9ca3af;
    text-align: left;
    overflow-wrap: anywhere;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;

    th,
    td {
      padding: 8px;
    }
  }
`;

export const Table = ({
  children,
  backgroundColor = "#ffffff",
  disabled = false,
  onClick,
  ...props
}: TableProps) => (
  <ScrollContainer>
    <StyledTable
      {...props}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      onClickCapture={(event: MouseEvent<HTMLTableElement>) => {
        if (disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        props.onClickCapture?.(event);
      }}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </StyledTable>
  </ScrollContainer>
);