import { GoalIcon } from "lucide-react";

export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 5 – useCallback, useMemo, createPortal
      </h1>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Czego nauczysz się w tej lekcji?</span>
      </h2>

      <ul className="list-disc pl-6">
        <li>Jak używać useCallback</li>
        <li>Jak używać useMemo</li>
        <li>Jak używać create Portal</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Zadania do wykonania</span>
      </h2>

      <ul className="list-decimal pl-6 space-y-4">
        <li>
          Przejdź do podstrony use-callback po lewej stronie menu. Napraw
          problem wydajnościowy związany z wyszukiwarką. Do naprawy problemu
          użyj hooka <b>useCallback</b>.
        </li>
        <li>
          Przejdź do podstrony use-memo po lewej stronie menu. Napraw problem
          wydajnościowy związany z increment. Do naprawy problemu użyj hooka{" "}
          <b>useMemo</b>.
        </li>
        <li>
          Przejdź do podstrony create-portal po lewej stronie menu.Utwórz tam
          portal za pomocą <b>createPortal</b>. Wykorzystaj do tego komponent o
          nazwie <b>Modal</b>, który znajdziesz w katalogu components.
        </li>
      </ul>
    </>
  );
}
