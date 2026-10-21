
import styled from "styled-components";
import type { LabelProps } from "./Label.types";
import type { MouseEvent } from "react";

const StyledLabel = styled.label<{
    $backgroundColor: string;
    $disabled: boolean;
}>`
    display: inline-block;
    box-sizing: border-box;
    max-width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    font-family: inherit;
    overflow-wrap: anywhere;

    background-color: ${({ $disabled, $backgroundColor }) =>
        $disabled ? "#d1d5db" : $backgroundColor};

    color: ${({ $disabled }) =>
        $disabled ? "#4b5563" : "#111827"};

    cursor: ${({ $disabled }) =>
        $disabled ? "not-allowed" : "default"};

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Label = ({
    text,
    backgroundColor = "#eff6ff",
    disabled = false,
    onClick,
    ...props
}: LabelProps) => (
    <StyledLabel
        {...props}
        $backgroundColor={backgroundColor}
        $disabled={disabled}
        aria-disabled={disabled}
    onClick={(event: MouseEvent<HTMLLabelElement>) => {
        if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

        onClick?.(event);
    }}
    >
    {text}
    </StyledLabel>
);