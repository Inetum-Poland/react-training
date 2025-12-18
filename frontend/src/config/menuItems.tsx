import type { ReactNode } from "react";
import { Home, Menu, Settings } from "lucide-react";

export interface MenuItem {
  id: number;
  label: string;
  icon: ReactNode;
  href: string;
  active: boolean;
}

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    label: "Link 1",
    icon: <Home size={20} />,
    href: "/",
    active: true,
  },
  {
    id: 2,
    label: "Link 2",
    icon: <Menu size={20} />,
    href: "/",
    active: false,
  },
  {
    id: 3,
    label: "Link 3",
    icon: <Settings size={20} />,
    href: "/",
    active: false,
  },
];
