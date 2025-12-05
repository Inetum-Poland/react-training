import type { MenuItem } from "../../../App";
import { Button } from "../button/button";

export function MenuItemLinkButton({ item, handleMenuItemClick, compactMenu }: { item: MenuItem, handleMenuItemClick: (item: MenuItem) => void, compactMenu: boolean}) {
  function getItemMenuClassName(item: MenuItem) {
    let menuItemButtonClass = "cursor-pointer gap-2";

    if (compactMenu) {
      menuItemButtonClass += " justify-center";
    } else {
      menuItemButtonClass += " justify-start";
    }

    if (item.active) {
      menuItemButtonClass += " bg-white text-black";
    } else {
      menuItemButtonClass += " bg-black text-white";
    }

    return menuItemButtonClass;
  }

  return (
    <Button
      onClick={() => handleMenuItemClick(item)}
      key={item.id}
      variant="ghost"
      className={getItemMenuClassName(item)}
    >
      {item.icon}
      {!compactMenu && <span className="text-sm">{item.label}</span>}
    </Button>
  );
}
