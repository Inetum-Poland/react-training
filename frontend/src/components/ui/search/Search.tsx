import { memo } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
}

function Search({ onSearch }: SearchProps) {
  console.log("Search rendered!");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value.trim().toLowerCase())}
        placeholder="Szukaj użytkownika..."
        className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground"
      />
    </form>
  );
}

export default memo(Search);
