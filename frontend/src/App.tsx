import { BadgeDollarSign, Home, Menu, Settings } from "lucide-react";
import LessonDetails from "./LessonDetails";
import { useState } from "react";
import { formatNumber } from "./lib/utils";
import { MenuItemLinkButton } from "./components/ui/menuItemLinkButton/MenuItemLinkButton";
import { Button } from "./components/ui/button/button";

export interface MenuItem {
  id: number;
  label: string;
  icon: any;
  href: string;
  active: boolean;
}

export default function App() {
  const initialMenuItems: MenuItem[] = [
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

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [balance, setBalance] = useState<number>(123456789);
  const [compactMenu, setCompactMenu] = useState<boolean>(false);

  function handleOnClick() {
    const randomNumber = Math.floor(Math.random() * 100000);
    setBalance(randomNumber);
  }

  function handleMenuItemClick(clickedItem: MenuItem) {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === clickedItem.id
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  }

  let menuClass = "";

  if (compactMenu) {
    menuClass = "w-32 bg-neutral-900 text-white flex flex-col";
  } else {
    menuClass = "w-64 bg-neutral-900 text-white flex flex-col";
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <div className="flex flex-1">
        <aside className={menuClass}>
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
            {compactMenu ? (
              <span className="text-lg font-semibold">RT</span>
            ) : (
              <span className="text-lg font-semibold">React Training</span>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setCompactMenu((prev) => !prev)}
            >
              <Menu size={20} />
            </Button>
          </div>
          <nav className="flex-1 px-6 py-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <MenuItemLinkButton
                key={item.id}
                item={item}
                handleMenuItemClick={handleMenuItemClick}
                compactMenu={compactMenu}
              />
            ))}
          </nav>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-neutral-200">
            <div className="flex items-center gap-2 font-medium">
              <BadgeDollarSign size={18} />
              <span>Balance:</span>
              <span
                className={balance < 50000 ? "text-green-600" : "text-red-600"}
              >
                {formatNumber(balance, "pl-PL")} PLN
              </span>
              <Button
                variant="outline"
                className="text-neutral-700"
                onClick={handleOnClick}
              >
                Refresh
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Hello, Jane Doe</span>
              <Button
                variant="outline"
                size="icon"
                className="text-neutral-700"
              >
                <Settings size={18} />
              </Button>
            </div>
          </header>

          <div className="px-6 py-3 border-b border-neutral-200 bg-white">
            <nav className="text-sm flex gap-2 text-neutral-700 font-medium">
              <a href="/" className="hover:text-black">
                Dashboard
              </a>
              <span>/</span>
              <span className="text-neutral-500">Overview</span>
            </nav>
          </div>

          <div className="flex flex-col flex-1 px-6 py-6">
            <section className="bg-white rounded-xl p-8 shadow-md border border-neutral-200">
              <LessonDetails />
            </section>
          </div>

          <footer className="px-6 py-4 bg-neutral-100 text-neutral-600 text-sm text-center border-t border-neutral-200">
            Actions panel section
          </footer>
        </main>
      </div>
    </div>
  );
}
