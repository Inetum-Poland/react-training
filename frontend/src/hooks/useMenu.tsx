import { useState } from "react";
import { INITIAL_MENU_ITEMS, type MenuItem } from "@/config/menuItems";
import { useNavigate } from "react-router";

export function useMenu(initialItems: MenuItem[] = INITIAL_MENU_ITEMS) {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [compactMenu, setCompactMenu] = useState(false);
  const navigate = useNavigate();

  const toggleCompactMenu = () => setCompactMenu((prev) => !prev);

  const handleMenuItemClick = (clickedItem: MenuItem) => {
    setMenuItems((prev) =>
      prev.map((item) => ({ ...item, active: item.id === clickedItem.id }))
    );

    navigate(clickedItem.href);
  };

  return {
    menuItems,
    compactMenu,
    toggleCompactMenu,
    handleMenuItemClick,
  };
}
