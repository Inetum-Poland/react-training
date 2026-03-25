import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function CreatePortalDemoPage() {
  const [open, setOpen] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex gap-8 w-full mx-auto py-8 px-4">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 bg-white rounded-xl shadow-lg py-10">
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-5">
          Demo <span className="text-primary-700">createPortal</span>
        </h1>
        <button
          className="flex items-center justify-center gap-2 h-14 w-44 rounded-full bg-primary text-primary-foreground text-lg font-semibold shadow-md transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => setOpen(true)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Open modal
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Status modala:</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${open ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
            {open ? "Modal is open" : "Modal is closed"}
          </span>
        </div>
        <div className="text-xs text-muted-foreground italic">
          Kliknij przycisk, aby otworzyć modal.
        </div>
      </div>
      {open &&
      createPortal(
        <Modal
          header="Przykładowy nagłówek 123"
          body="To jest przykładowa treść modala."
          onClose={() => setOpen(false)}
        />,
        document.getElementById("modal")!,
      )}
      {open &&
      createPortal(
        <Modal
          header="Przykładowy nagłówek 456"
          body="To jest przykładowa treść modala."
          onClose={() => setOpen(false)}
        />,
        document.getElementById("modal")!,
      )}
      <div className="w-[350px] rounded-lg p-6 text-sm bg-gray-200">
        <h2 className="font-semibold mb-2">Instrukcja</h2>
        <p className="text-justify mb-4">
          Po kliknięciu w przycisk <strong>Open modal</strong> za pomocą{" "}
          <b>createPortal</b>, otwórz modal jeśli <b>open</b> będzie na{" "}
          <code>true</code>. Użyj komponentu <b>Modal</b>, który znajdziesz w
          katalogu components. Do zamknięcia modala użyj funkcji{" "}
          <code>setOpen(false)</code>. <br />
          <br />
          Podpowiedź: Modal powinien być renderowany w elemencie o id{" "}
          <code>modal</code>, który znajdziesz w pliku index.html.
        </p>
        <button
          className="mb-2 px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition"
          onClick={() => setShowCode((v) => !v)}>
          {showCode ? "Ukryj podpowiedź" : "Pokaż podpowiedź"}
        </button>
        {showCode && (
          <div className="bg-gray-100 rounded p-3 text-xs font-mono overflow-x-auto">
            <pre>
              <code>
                {`{open &&
  createPortal(
    <Modal
      header="Przykładowy nagłówek"
      body="To jest przykładowa treść modala."
      onClose={() => setOpen(false)}
    />,
    document.getElementById("modal")!,
  )}`}
              </code>
            </pre>
          </div>
        )}
      </div>
      <div id="modal"></div>
    </div>
  );
}
