

import type { TableHTMLAttributes } from "react";

export interface TableProps
    extends TableHTMLAttributes<HTMLTableElement> {
    backgroundColor?: string;
    disabled?: boolean;
}