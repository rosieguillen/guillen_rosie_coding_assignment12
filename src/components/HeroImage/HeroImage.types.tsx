
import type { HTMLAttributes } from "react";

export interface HeroImageProps
    extends HTMLAttributes<HTMLElement> {
    src: string;
    alt: string;
    heading: string;
    description: string;
    backgroundColor?: string;
    disabled?: boolean;
}