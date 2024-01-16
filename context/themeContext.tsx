"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function ThemeContext({ children }: PropsWithChildren) {
    return <ThemeProvider attribute="class" enableSystem={true}>{children}</ThemeProvider>;
}