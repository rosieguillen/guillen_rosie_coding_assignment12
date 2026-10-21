

import type { HTMLAttributes } from "react";

export interface CardProps
    extends HTMLAttributes<HTMLElement> {
    heading: string;
    description: string;
    backgroundColor?: string;
    disabled?: boolean;
}