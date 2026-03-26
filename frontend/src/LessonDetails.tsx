export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 6 – Redux Toolkit i Instagram Feed
      </h1>

      <h2 className="text-xl font-semibold my-6 text-neutral-800">
        Czego nauczysz się w tej lekcji?
      </h2>

      <ul className="list-disc pl-6">
        <li>Poznasz podstawy korzystania z Redux Toolkit w React</li>
        <li>Nauczysz się pobierać dane z backendu za pomocą async thunk</li>
        <li>Stworzysz prosty feed na wzór Instagrama</li>
        <li>Dowiesz się jak zaimplementować infinite scroll</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 text-neutral-800">
        Zadania do wykonania
      </h2>

      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Utwórz podstronę /feed z nowym czystym komponentem - nazwij go według
          konwencji <strong>FeedPage</strong>. Dodaj routing do menu po lewej
          stronie.
        </li>
        <li>
          W folderze <strong>src</strong> utwórz plik o nazwie{" "}
          <strong>store.ts</strong>. Utwórz obiekt <strong>store</strong> z
          pustym reducerem. Pamiętaj aby użyć <strong>configureStore</strong> z
          @reduxjs/toolkit. Następnie zaimportuj ten store do{" "}
          <strong>main.tsx</strong> i owiń komponent <strong>App</strong> w{" "}
          <strong>Provider</strong> z react-redux, przekazując mu stworzony
          store.
        </li>
        <li>
          W redux dev tools możesz teraz zobaczyć stan aplikacji. Powinna się
          pokazać akcja inicjalizacji store'a.
        </li>
        <li>
          Dodaj export types <strong>RootState</strong> i{" "}
          <strong>AppDispatch</strong> w pliku <strong>store.ts</strong>. Będą
          nam one potrzebne do poprawnego typowania hooków reduxowych. Możesz
          skorzystać z dokumentacji{" "}
          <a
            href="https://redux-toolkit.js.org/usage/usage-with-typescript"
            target="_blank"
            rel="noopener noreferrer">
            https://redux-toolkit.js.org/usage/usage-with-typescript
          </a>
        </li>
        <li>
          Kolejnym krokiem bedzie stworzenie slice'a dla feedu i dodanie go do
          store'a. W folderze /src/slices utwórz plik{" "}
          <strong>feedSlice.ts</strong> i zaimplementuj w nim slice dla feedu.
          Zacznij od utworzenia interfejsów. Możesz skorzystać z przykładowego
          interfejsu posta, który znajduje się w pliku{" "}
          <strong>snippets.ts</strong>.
        </li>
        <li>
          Po ustaleniu interfejsu dodaj inicjalny stan store a następnie
          podepnij go do slice'a. Wyeksportuj go jako domyślny reducer z tego
          pliku i dodaj do store'a w <strong>store.ts</strong> jako feed:
          feedReducer.
        </li>
        <li>
          Zweryfikuj za pomocą Redux DevTools, czy stan feedu jest poprawnie
          inicjalizowany. Jeśli wszystko jest dobrze, powinieneś zobaczyć w
          DevTools nowy slice o nazwie "feed" z inicjalnym stanem, który
          ustawiłeś.
        </li>
        <li>
          Kolejnym krokiem będzie zaimportowanie dispatch w komponencie Feed.
          Możesz to zrobić za pomocą hooka <strong>useAppDispatch</strong> z
          pliku <strong>hooks/redux.ts</strong>.
        </li>
        <li>
          Dla testów dodaj <strong>dispatch(fetchPosts())</strong> w komponencie{" "}
          <strong>FeedPage</strong>. Pamiętaj aby umieścić w fetchPosts
          odpowiednie argumenty, takie jak offset i limit (np. offset, limit:
          5). Po kliknięciu przycisku "Load posts" powinieneś zobaczyć w Redux
          DevTools akcję fetchPosts z odpowiednimi argumentami, które jeszcze
          nie będą dodawały tych wartości do store.
        </li>
        <li>
          Aby zapisać te wartości w store, musimy dodać odpowiednie case'y w
          slice'ie feedu. Skorzystaj ze snippets i dodaj w extraReducers obsługę
          akcji fetchPosts.fulfilled, fetchPosts.pending i fetchPosts.rejected,
          aby odpowiednio aktualizować stan feedu.
        </li>
        <li>
          Po odpowiednim dodaniu case'ów w extraReducers, stan feedu powinien
          być poprawnie aktualizowany w Redux DevTools.
        </li>
        <li>
          Zaimportuj dla ułatwienia template ze snippets.ts, pamiętaj o
          podpięciu resetFeed.
        </li>
      </ol>
    </>
  );
}
