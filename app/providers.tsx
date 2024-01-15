"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background">{children}</div>
    </NextUIProvider>
  );
}
