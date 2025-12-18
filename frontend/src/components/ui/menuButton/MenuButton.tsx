import type { ReactNode } from "react";
import { Button } from "../button/Button";
import type { MenuItem } from "@/config/menuItems";
import clsx from "clsx";

interface ButtonProps {
  item: MenuItem;
  handleClick: (item: MenuItem) => void;
  isCompact: boolean;
  children?: ReactNode;
}

export function MenuButton({
  item,
  handleClick,
  isCompact,
  children,
}: ButtonProps) {
  const buttonClass = clsx(
    "cursor-pointer gap-2",
    isCompact ? "justify-center" : "justify-start",
    item.active ? "bg-white text-black" : "bg-black text-white"
  );

  return (
    <Button
      onClick={() => handleClick(item)}
      variant="ghost"
      className={buttonClass}
    >
      {item.icon}
      {!isCompact && <span className="text-sm">{item.label}</span>}
      {item.active && children}
    </Button>
  );
}
