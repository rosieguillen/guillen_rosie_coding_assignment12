import type { HTMLAttributes } from "react";

export interface TableRowProps
    extends HTMLAttributes<HTMLTableRowElement> {
    backgroundColor?: string;
    disabled?: boolean;
}