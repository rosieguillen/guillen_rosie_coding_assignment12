

import styled from "styled-components";
import type { TextProps } from "./Text.types";
import type { MouseEvent } from "react";

const StyledText = styled.p<{
    $backgroundColor: string;
    $disabled: boolean;
}>`
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 12px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.6;
    overflow-wrap: anywhere;

    background-color: ${({ $disabled, $backgroundColor }) =>
        $disabled ? "#d1d5db" : $backgroundColor};

    color: ${({ $disabled }) =>
        $disabled ? "#4b5563" : "#111827"};

    cursor: ${({ $disabled }) =>
        $disabled ? "not-allowed" : "auto"};

    @media (max-width: 480px) {
        padding: 8px;
    }
`;

export const Text = ({
    text,
    backgroundColor = "#ffffff",
    disabled = false,
    onClick,
    ...props
}: TextProps) => (
    <StyledText
        {...props}
        $backgroundColor={backgroundColor}
        $disabled={disabled}
        aria-disabled={disabled}
        onClick={(event: MouseEvent<HTMLParagraphElement>) => {
    if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }

        onClick?.(event);
    }}
    >
        {text}
    </StyledText>
);