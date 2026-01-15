import type { ReactNode } from "react";
import { ChartBarIcon, Home, Menu, Settings } from "lucide-react";

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
    label: "Dashboard",
    icon: <Home size={20} />,
    href: "/dashboard",
    active: true,
  },
  {
    id: 2,
    label: "Giełda",
    icon: <ChartBarIcon size={20} />,
    href: "/stock",
    active: false,
  },
  {
    id: 3,
    label: "Ustawienia",
    icon: <Settings size={20} />,
    href: "/settings",
    active: false,
  },
];
