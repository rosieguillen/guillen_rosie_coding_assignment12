
import type { LabelHTMLAttributes } from "react";

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
    backgroundColor?: string;
    disabled?: boolean;
}