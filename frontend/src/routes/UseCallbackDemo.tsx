import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button/Button";
import Search from "@/components/ui/search/Search";
import { INITIAL_USERS } from "@/lib/users.mock";
import { getInitials, shuffleArray } from "@/lib/utils";

export default function UseCallbackDemoPage() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((value: string) => {
    const filteredUsers = INITIAL_USERS.filter((user) =>
      user.name.toLowerCase().includes(value),
    );
    setSearch(value);
    setUsers(filteredUsers);
  }, []);

  const handleShuffle = () => {
    console.log("handleShuffle");
    setUsers((prev) => shuffleArray(prev));
  };

  return (
    <div className="flex gap-8 w-full mx-auto py-8 px-4">
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold text-neutral-800">
          Demo useCallback
        </h1>
        <Search onSearch={handleSearch} />
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {users.length} {users.length === 1 ? "użytkownik" : "użytkowników"}
          </p>
          <Button variant="outline" size="sm" onClick={handleShuffle}>
            ⇅ Tasuj
          </Button>
        </div>
        <ul className="divide-y divide-border rounded-lg border border-border overflow-hidden">
          {users.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-muted-foreground">
              Brak wyników dla „{search}"
            </li>
          ) : (
            users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 px-4 py-3 bg-background hover:bg-accent/40 transition-colors"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {getInitials(user.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full whitespace-nowrap">
                  {user.role}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="w-[350px] rounded-lg p-6 text-sm bg-gray-200">
        <h2 className="font-semibold mb-2">Instrukcja</h2>
        <p className="text-justify">
          Mamy tutaj problem wydajnościowy, napraw <b>handleShuffle</b> lub{" "}
          <b>handleSearch</b>, aby niepotrzebnie się nie przerenderowywało nam
          komponentu search. Sprawdź console log kiedy i ile razy się wyświetla.
          <br></br>
          Jeśli uda Ci się to naprawić, zwróć uwagę, co stanie się po dodaniu{" "}
          <strong>console.log(users[0])</strong> w <strong>handleSearch</strong>{" "}
          i jak zapobiec tego typu błędom. Powodzenia
        </p>
      </div>
    </div>
  );
}
