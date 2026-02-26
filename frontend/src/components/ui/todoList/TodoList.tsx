import { useState } from "react";

interface TodoListProps {
  onAdd?: (todos: string[]) => void;
}

export default function TodoList({ onAdd }: TodoListProps) {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setTodos((prev) => {
        const updated = [...prev, trimmed];
        if (onAdd) onAdd(updated);
        return updated;
      });
      setInput("");
    }
  };

  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== id));
  };

  return (
    <div className="flex flex-col bg-slate-100 border border-slate-300 rounded-xl p-6 min-h-[467px] max-h-full">
      <div className="flex gap-2 mb-4 items-end">
        <input
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          style={{ height: "46px" }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
          placeholder="Nowe zadanie..."
        />
        <button
          className="rounded-xl bg-blue-600 text-white px-4 py-3 text-sm font-medium shadow-sm hover:bg-blue-700 transition h-[46px]"
          onClick={handleAdd}
          type="button"
          style={{ minWidth: 80 }}>
          Dodaj
        </button>
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {todos.map((todo, id) => (
          <li
            key={id}
            className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200">
            <span className="truncate text-sm">{todo}</span>
            <button
              className="ml-2 text-xs text-rose-600 hover:underline px-2 py-1 rounded transition hover:bg-rose-50"
              onClick={() => handleRemove(id)}
              type="button"
              style={{ height: "28px" }}>
              Usuń
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="text-slate-400 text-sm text-center select-none">
            Brak zadań
          </li>
        )}
      </ul>
    </div>
  );
}
