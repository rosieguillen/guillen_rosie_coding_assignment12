
import type { TdHTMLAttributes } from "react";

export interface TableCellProps
    extends TdHTMLAttributes<HTMLTableCellElement> {
    header?: boolean;
    scope?: "col" | "row" | "colgroup" | "rowgroup";
    backgroundColor?: string;
    disabled?: boolean;
}