import type { ReactNode } from "react";
import React from "react";

export interface BaseCardGroupProps {
  children: ReactNode;
}

export default function BaseCardGroup({ children }: BaseCardGroupProps) {
  return (
    <div className="grid gap-5 grid-cols-1 w-full flex justify-items-center">
      {children}
    </div>
  );
}
