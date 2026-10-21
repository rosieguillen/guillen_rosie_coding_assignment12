
import type { SelectHTMLAttributes } from "react";

export interface DropdownOption {
    value: string;
    label: string;
}

export interface DropdownProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
    options: DropdownOption[];
    backgroundColor?: string;
    "aria-label": string;
}