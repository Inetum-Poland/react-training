import { GoalIcon, InfoIcon } from "lucide-react";

export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 2 – Routing i podstrony w React
      </h1>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Czego nauczysz się w tej lekcji?</span>
      </h2>

      <ul className="list-disc pl-6">
        <li>Jak działa routing</li>
        <li>Jak utworzyć dynamiczne routingi z parametrami</li>
        <li>Jak obsłużyć formularz zakupu kryptowaluty</li>
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
          Zmień menu boczne tak, aby zawierało trzy pozycje:{" "}
          <strong>Dashboard</strong>, <strong>Giełda</strong>,{" "}
          <strong>Ustawienia</strong>.
        </li>
        <li>
          Skonfiguruj <strong>React Router</strong> i dodaj routingi dla każdej
          z powyższych podstron. Możesz użyć{" "}
          <a href="https://tanstack.com/router/latest">
            <strong>https://tanstack.com/router/latest</strong>
          </a>
        </li>
        <li>
          Na stronie <strong>Dashboard</strong> wyświetl listę aktualnie
          posiadanych kryptowalut. Do przechowywania danych utwórz customowy
          hook lub kontekst. Danych na razie nigdzie nie zapisuj – niech znikają
          po odświeżeniu strony. Routing nazwij <code>/dashboard</code>.
        </li>
        <li>
          Dla podstrony <strong>Giełda</strong> użyj endpointa{" "}
          <code>GET http://localhost:3000/api/v1/crypto/list</code>, który
          zwróci listę dostępnych kryptowalut. Ładuj dane po wejściu na
          podstronę. Routing nazwij <code>/stock</code>.
        </li>
        <li>
          Dodaj możliwość wejścia w szczegóły konkretnej kryptowaluty po{" "}
          <strong>uuid</strong>. Na tej podstronie przygotuj formularz kupna.
          Routing: <code>/stock/view/:uuid</code>.
        </li>
        <li>
          Formularz kupna powinien zawierać pola:{" "}
          <strong>ilość jednostek</strong>, <strong>cena</strong> oraz przycisk{" "}
          <i>Kup</i>. Po kliknięciu wyświetl dane w <strong>console.log</strong>
          .
        </li>
        <li>
          Jeśli <strong>console.log</strong> wyświetla dane prawidłowo, to
          odejmij kwotę od balansu i dodaj kupione krypto do dashboarda.
        </li>
        <li>
          Na stronie <strong>Ustawienia</strong> pobierz dane użytkownika z API{" "}
          <code>GET http://localhost:3000/api/v1/user/settings</code> i wyświetl
          je w prostym formularzu. Routing nazwij <code>/settings</code>.
        </li>
        <li>
          Napraw breadcrumbs tak, aby pokazywały dobre napisy podczas przechodzenia pomiędzy stronami.
        </li>
        <li>Wydziel komponenty na mniejsze i wykonaj ewentualny refaktor.</li>
      </ul>
    </>
  );
}
