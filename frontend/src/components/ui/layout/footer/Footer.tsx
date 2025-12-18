import type { ReactNode } from "react";
import clsx from "clsx";

interface FooterProps {
  children?: ReactNode;
  className?: string;
}

export default function Footer({ children, className }: FooterProps) {
  const footerClass = clsx(
    "px-6 py-4 bg-neutral-100 text-neutral-600 text-sm text-center border-t border-neutral-200",
    className
  );

  return <footer className={footerClass}>{children}</footer>;
}
