import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Home, Menu, Settings } from "lucide-react";
import LessonDetails from "./LessonDetails";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <div className="flex flex-1">
        <aside className="w-64 bg-neutral-900 text-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
            <span className="text-lg font-semibold">React Training</span>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu size={20} />
            </Button>
          </div>
          <nav className="flex-1 px-6 py-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="bg-white justify-start gap-2 text-black">
              <Home size={18} />
              <span className="text-sm">Link 1 - Active</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-white">
              <Home size={18} />
              <span className="text-sm">Link 2</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-white">
              <Home size={18} />
              <span className="text-sm">Link 3</span>
            </Button>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-neutral-200">
            <div className="flex items-center gap-2 font-medium">
              <BadgeDollarSign size={18} />
              <span>Balance:</span>
              <span>123 456 789,00 PLN</span>
              <Button variant="outline" className="text-neutral-700">
                Refresh
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Hello, Jane Doe</span>
              <Button
                variant="outline"
                size="icon"
                className="text-neutral-700">
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
