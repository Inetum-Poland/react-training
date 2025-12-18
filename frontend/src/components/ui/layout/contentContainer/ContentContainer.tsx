import type { ReactNode } from "react";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex flex-col flex-1 px-6 py-6">{children}</div>;
}
