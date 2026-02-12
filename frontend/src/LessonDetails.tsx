import { GoalIcon, InfoIcon } from "lucide-react";

export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 3 – Deep dive
      </h1>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Czego nauczysz się w tej lekcji?</span>
      </h2>

      <ul className="list-disc pl-6">
        <li>Jak używać react context</li>
        <li>Jak używać tanstack query</li>
        <li>Jak zrobić walidację formularza</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Zadania do wykonania</span>
      </h2>

      <p className="bg-blue-200 p-4 rounded-md mb-6">
        <InfoIcon size={16} className="inline mb-1 mr-2" />
        Zadania będziemy realizować krok po kroku podczas livecodingu. Zachęcam
        do równoległego odtwarzania wszystkiego u siebie lokalnie. Kod, który
        widzisz, to stan finalny lekcji 1 – możesz usunąć niepotrzebne elementy,
        takie jak <strong>Refresh</strong> i odświeżanie krypto co{" "}
        <strong>10 sekund</strong>.
      </p>

      <ul className="list-decimal pl-6 space-y-4">
        <li>
          W pliku <strong>StockItem.tsx</strong> dodaj metodę do walidacji formularza, może się nazywać <strong>isSubmitDisabled</strong>. Zadaniem tej metody, jest sprawdzenie, czy podana wartość jest numeryczna, większa od zera, oraz czy mamy środki na koncie. Jeśli chcemy kupić coś za kwotę np. 100 000 zł a mamy balans 99 999 zł, to nie powinniśmy mieć takiej możliwości. Metoda powinna sprawdzać te warunki i w zależności od tego ustawiać <strong>disabled</strong> na przycisku formularza.
        </li>
         <li>
          Nad przyciskiem dodaj informację <strong>Nie posiadasz wystarczająco dużo środków</strong> w przypadku, kiedy wybierzesz za dużą ilość kryptowaluty. Utwórz metodę pomocniczą <strong>isCostWarning</strong> a do pobrania stanu konta użyj <strong>useBalance</strong>.
        </li>
        <li>Dodaj czerwony border jeśli użytkownik kliknie i nic nie wpisze, oraz jeśli nie posiadasz wystarczająco dużo środków. Do tego celu użyj <strong>onBlur</strong> i dodaj nowy <strong>useState</strong> który będzie przechowywał stan błędu dla inputa.</li>
        <li>Wydziel <strong>useCryptoList</strong> do oddzielnego context.</li>
        <li>Wydziel <strong>useUserCrypto</strong> do oddzielnego context.</li>
        <li>Dodaj tanstack query do obsługi API</li>
      </ul>
    </>
  );
}
