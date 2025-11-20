import { GoalIcon, InfoIcon, Menu } from "lucide-react";

export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 1 – Wprowadzenie do Reacta, cz. 1
      </h1>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Czego nauczysz się w tej lekcji?</span>
      </h2>

      <ul>
        <li>- Co to jest React</li>
        <li>- Czym są komponenty w React</li>
        <li>- Jak działają propsy</li>
        <li>
          - Podstawy JSX (className, props, listy, rendering, renderowanie
          warunkowe, dynamiczne wartości)
        </li>
        <li>- Jak działa useState</li>
        <li>- Jak działa useEffect</li>
        <li>- Jak działa useContext</li>
        <li>- Refaktor kodu i wydzielanie komponentów</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Zadania do wykonania</span>
      </h2>

      <p className=" bg-blue-200 p-4 rounded-md mb-6">
        <InfoIcon size={16} className="inline mb-1 mr-2" />
        Zadania będę wykonywać na bieżąco krok po kroku. Jeśli ktoś będzie
        chętny, może przejąć kursor. Zachęcam także do równoległego odtwarzania
        wszystkiego u siebie lokalnie.
      </p>

      <ul>
        <li className="mb-4">
          1. Do kwoty <strong>1 234 567,00 PLN</strong> przy balansie konta
          dodaj klasę <strong>text-green-600</strong>.
        </li>
        <li className="mb-4">
          2. Obok kwoty <strong>1 234 567,00 PLN</strong> dodaj przycisk z
          napisem <i>Refresh</i>, do którego podepniesz <strong>onClick</strong>
          . Po kliknięciu wygeneruj losową liczbę z zakresu{" "}
          <strong>0–100000</strong> i wyświetl ją tymczasowo w{" "}
          <strong>console.log</strong>.
        </li>
        <li className="mb-4">
          3. Zmień wartość <strong>1 234 567,00 PLN</strong> za pomocą{" "}
          <strong>useState</strong>, nasłuchując kliknięcia w poprzedni
          przycisk. Wartość początkowa ma wynosić{" "}
          <strong>1 234 567,00 PLN</strong>. Po kliknięciu zmień wyświetlaną
          kwotę. Do formatowania kwoty użyj <strong>formatNumber</strong> z
          utilsów.
        </li>
        <li className="mb-4">
          4. Jeśli kwota jest niższa niż <strong>50 000,00</strong>, dodaj klasę{" "}
          <strong>text-red-600</strong>. W przeciwnym przypadku pozostaw klasę{" "}
          <strong>text-green-600</strong>. Przetestuj działanie, klikając
          przycisk kilka razy.
        </li>
        <li className="mb-4">
          5. Dodaj <strong>onClick</strong> do ikony hamburgera
          <Menu size={20} className="inline mx-2" /> w menu. Zrób toggle (z
          false na true i odwrotnie) dla zmiennej <strong>compactMenu</strong>,
          korzystając z <strong>useState</strong>. Jeśli zmienna ma wartość{" "}
          <strong>true</strong>, zamiast napisu <i>React Training</i> w bocznym
          menu pozostaw <i>RT</i>. Linki przerób tak, aby pozostała{" "}
          <u>tylko ikonka bez tekstu</u>. Szerokość menu bocznego przy{" "}
          <strong>true</strong> ustaw na <strong>w-32</strong>, w przeciwnym
          wypadku pozostaw bez zmian. Przetestuj klikając ikonę.
        </li>
        <li className="mb-4">
          6. Utwórz obiekt dla menu bocznego. Każdy obiekt powinien zawierać{" "}
          <strong>id, label, icon, href</strong>. Użyj <strong>.map</strong> do
          wyświetlenia linków w menu. Tymczasowo po kliknięciu wyświetl dowolną
          informację w <strong>console.log</strong>.
        </li>
        <li className="mb-4">
          7. Zmodyfikuj logikę tak, aby kliknięcie elementu menu ustawiało go
          jako <strong>aktywny</strong> (tak jak w prawdziwej aplikacji – tylko
          jeden aktywny link naraz).
        </li>
        <li className="mb-4">
          8. Utwórz customowy komponent o nazwie{" "}
          <strong>MenuItemLinkButton</strong> i zaimplementuj w nim bieżące
          zachowanie. Komponent ma przyjmować obiekt jako props i zachowywać się
          identycznie jak wcześniej.
        </li>
        <li className="mb-4">
          9. Zmodyfikuj komponent tak, aby na końcu tekstu dodawał dowolną
          ikonkę przekazywaną jako <strong>children</strong>, np. <i>EyeIcon</i>
          . Ikonka ma być widoczna tylko wtedy, gdy link jest aktywny.
        </li>
        <li className="mb-4">
          10. Dodaj hook <strong>useEffect</strong> i wyświetl w nim dowolny
          komunikat w <strong>console.log</strong>. Kliknij któryś przycisk i
          sprawdź, co się stało.
        </li>
        <li className="mb-4">
          11. Przerób logikę w <strong>useEffect</strong> tak, aby reagowała
          wyłącznie na kliknięcie przycisku <strong>Refresh</strong>.
        </li>
        <li className="mb-4">
          12. Po załadowaniu komponentu pobierz dane o stanie konta z API{" "}
          <strong>
            (GET http://localhost:3000/api/v1/user/account/balance)
          </strong>{" "}
          i zapisz sformatowany wynik w stanie komponentu (użyj{" "}
          <strong>formatNumber</strong>).
        </li>
        <li className="mb-4">
          13. Pobieraj dane o koncie automatycznie co <strong>5 sekund</strong>.
        </li>
        <li className="mb-4">
          15. Utwórz kontekst dla całej aplikacji ze zmienną przechowującą
          kwotę. Odświeżaj ją co <strong>10 sekund</strong>.
        </li>
        <li className="mb-4">
          16. Wydziel komponenty na mniejsze, wykonaj refaktor. Usuń zbędne
          komponenty.
        </li>
      </ul>
    </>
  );
}
