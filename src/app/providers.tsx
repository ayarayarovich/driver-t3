"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </NextUIProvider>
  );
}
