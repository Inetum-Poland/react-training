import { EyeIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { MenuButton } from "@/components/ui/menuButton/MenuButton";
import { useMenu } from "@/hooks/useMenu";
import clsx from "clsx";

export default function Sidebar() {
  const { menuItems, compactMenu, toggleCompactMenu, handleMenuItemClick } =
    useMenu();

  const menuClass = clsx(
    "bg-neutral-900 text-white flex flex-col",
    compactMenu ? "w-32" : "w-64"
  );

  return (
    <aside className={menuClass}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <span className="text-lg font-semibold">
          {compactMenu ? "RT" : "React Training"}
        </span>

        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={toggleCompactMenu}
        >
          <MenuIcon size={20} />
        </Button>
      </div>

      <nav className="flex-1 px-6 py-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <MenuButton
            key={item.id}
            item={item}
            handleClick={handleMenuItemClick}
            isCompact={compactMenu}
          >
          </MenuButton>
        ))}
      </nav>
    </aside>
  );
}
