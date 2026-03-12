import type { ReactNode } from "react";
import {
  ChartBarIcon,
  FormInputIcon,
  Home,
  Info,
  ScanEyeIcon,
  Settings,
} from "lucide-react";

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
  {
    id: 4,
    label: "Form",
    icon: <FormInputIcon size={20} />,
    href: "/form",
    active: false,
  },
  {
    id: 5,
    label: "Info",
    icon: <Info size={20} />,
    href: "/info",
    active: false,
  },
  {
    id: 6,
    label: "DEMO - useCallback",
    icon: <ScanEyeIcon size={20} />,
    href: "/use-callback",
    active: false,
  },
  {
    id: 7,
    label: "DEMO - useMemo",
    icon: <ScanEyeIcon size={20} />,
    href: "/use-memo",
    active: false,
  },
  {
    id: 8,
    label: "DEMO - createPortal",
    icon: <ScanEyeIcon size={20} />,
    href: "/create-portal",
    active: false,
  },
];
