
import type { HTMLAttributes } from "react";

export interface TableFooterProps
    extends HTMLAttributes<HTMLTableSectionElement> {
    backgroundColor?: string;
    disabled?: boolean;
}