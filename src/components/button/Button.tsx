
import styled from "styled-components";
import type { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ $backgroundColor: string }>`
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    max-width: 100%;
    overflow-wrap: anywhere;

    &:disabled {
        background-color: #d1d5db;
        color: #374151;
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 3px solid #111827;
        outline-offset: 3px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Button = ({
    label,
    backgroundColor = "#2563eb",
    disabled = false,
    type = "button",
    ...props
}: ButtonProps) => (
    <StyledButton
        {...props}
        type={type}
        disabled={disabled}
        $backgroundColor={backgroundColor}
    >
        {label}
    </StyledButton>
);