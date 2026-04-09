export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 7 – react useReducer
      </h1>

      <h2 className="text-xl font-semibold my-6 text-neutral-800">
        Czego nauczysz się w tej lekcji?
      </h2>

      <ul className="list-disc pl-6">
        <li>Co to jest useReducer i do czego można go użyć</li>
        <li>Przykłady użycia useReducer w różnych scenariuszach</li>
        <li>Porozmawiamy o AI</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 text-neutral-800">
        Zadania do wykonania
      </h2>

      <ol className="list-decimal pl-6 space-y-4">
        <li>Dodaj nowy route /reducer w menu bocznym i utwórz komponent <strong>ReducerDemo.tsx</strong> w którym utworzysz <strong>ReducerDemoPage</strong></li>
        <li>Dodaj state i dispatch podobnie jak w dokumentacji <a href="https://react.dev/reference/react/useReducer" target="_blank" rel="noopener noreferrer">https://react.dev/reference/react/useReducer</a>. Dodaj tam obiekt który będzie miał typ User. User posiada name, email i age. Przyjmij na start dowolne dane i zapisz je pod obiektem <strong>initialState</strong>. Możesz skorzystać z pliku snippets.</li>
        <li>Wyświetl dane obiektu za pomocą np. state.name w komponencie.</li>
        <li>Dodaj 3 przyciski które będą dispatchowały 3 akcje wraz z dowolnym payloadem. Akcje to: <strong>UPDATE_NAME</strong>, <strong>UPDATE_EMAIL</strong>, <strong>UPDATE_AGE</strong>. Każda z tych akcji ma aktualizować tylko jedną rzecz. Pamiętaj, aby zwracać nowy state, a nie mutować obecny. Pamiętaj o tym, żeby użyć w dispatch obiekty który posiada typ i payload. </li>
        <li>Dodaj bardziej dynamiczny komponent <strong>UserStateWidget</strong> i użyj go zamiast ręcznie tworzyć przyciski.</li>
        <li>Teraz utwórz context i provider dla user state. W tym celu utwórz plik w <strong>/src/context/UserStateContext.tsx</strong> analogicznie jak inne contexts.</li>
        <li>Owrapuj całą aplikację za pomocą właśnie utworzonego <strong>UserStateProvider</strong></li>
        <li>Przerób komponent ReducerDemoPage aby działał z nowym contextem.</li>
        <li>Dodaj na dowolnej podstronie np. dashboard przycisk który zmieni stan age na np. 100 i zrobi <strong>dispatch</strong> odpowiednią akcję. Sprawdż, czy po przejściu na routing z demo reducer, wartość zostaje podmieniona.</li>
      </ol>
    </>
  );
}
