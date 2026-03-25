import { useMemo, useState } from "react";
import { largeInitialItems } from "@/lib/utils";

export default function UseMemoDemoPage() {
  const [count, setCount] = useState({ id: 0 });
  const testCount =  { id: 123 };
  const [items] = useState(largeInitialItems);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === count.id);
  }, [count]);

  return (
    <div className="flex gap-8 w-full mx-auto py-8 px-4 items-center">
      <div className="flex-1 flex flex-col items-center justify-center space-y-10">
        <h1 className="text-3xl font-bold text-neutral-800">Demo useMemo</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-md">
          <div className="flex-1 rounded-xlfrom-primary/80 to-primary/40 shadow-lg p-6 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground mb-2">Count</span>
            <span className="text-4xl font-bold text-green-800">{count.id}</span>
          </div>
          <div className="flex-1 rounded-xl from-secondary/80 to-secondary/40 shadow-lg p-6 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground mb-2">
              Selected Item
            </span>
            <span className="text-4xl font-bold text-red-700">
              {selectedItem?.id ?? "Brak"}
            </span>
          </div>
        </div>
        <button
          className="size-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg flex items-center justify-center transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() =>
            setCount(testCount)
          }
        >
          +
        </button>
      </div>
      <div className="w-[350px] rounded-lg p-6 text-sm bg-gray-200">
        <h2 className="font-semibold mb-2">Instrukcja</h2>
        <p className="text-justify">
          Mamy tutaj problem wydajnościowy. Kliknij szybko kilka razy w przycisk
          Increment, aby sprawdzić co się dzieje. Znajdź rozwiązanie w jaki
          sposób można naprawić ten problem. <br />
          <br /> Jak poprawisz błąd, zrób tak, żeby count był indexem
          zaznaczonego itemu <strong>(item.id === count)</strong> i sprawdź co
          się dzieje. Powodzenia
        </p>
      </div>
    </div>
  );
}
