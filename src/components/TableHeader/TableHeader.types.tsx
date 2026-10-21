import type { HTMLAttributes } from "react";

export interface TableHeaderProps
    extends HTMLAttributes<HTMLTableSectionElement> {
    backgroundColor?: string;
    disabled?: boolean;
}