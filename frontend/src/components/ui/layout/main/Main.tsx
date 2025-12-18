import type { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return <main className="flex-1 flex flex-col">{children}</main>;
}
