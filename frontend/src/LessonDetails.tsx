import { GoalIcon } from "lucide-react";

export default function LessonDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-neutral-800">
        Lekcja 4 – Formularze
      </h1>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Czego nauczysz się w tej lekcji?</span>
      </h2>

      <ul className="list-disc pl-6">
        <li>Jak używać tanstack @tanstack/react-form</li>
      </ul>

      <h2 className="text-xl font-semibold my-6 flex gap-4 items-center text-neutral-800">
        <GoalIcon size={24} />
        <span>Zadania do wykonania</span>
      </h2>

      <ul className="list-decimal pl-6 space-y-4">
        <li>
          <del>
            Utwórz nowy plik o nazwie Form.tsx i dodaj go do menu po lewej
            stronie. Utworzymy tam formularz.
          </del>
        </li>
        <li>
          <del>
            Utwórz nowy <strong>obiekt form</strong> według wytycznych z{" "}
            <a
              className="text-green-700 underline"
              href="https://tanstack.com/form/latest/docs/overview">
              dokumentacji
            </a>
            .
          </del>
        </li>
        <li>
          <del>
            Wydziel komponenty do plików. To co będzie w{" "}
            <strong>children</strong> wydziel jako oddzielny parametryzowany
            komponent.
          </del>
        </li>
        <li>
          <del>
            Wydziel walidatory z <strong>validators</strong> do oddzielnych
            metod.
          </del>
        </li>
        <li>
          <del>
            Zamień teraz walidator na <strong>ZOD</strong>. Użyj linku z{" "}
            <a
              className="text-green-700 underline"
              href="https://tanstack.com/form/latest/docs/framework/react/guides/validation#validation-through-schema-libraries">
              dokumentacji
            </a>
            .
          </del>
        </li>
        <li>
          <del>
            Spraw aby button <strong>Submit</strong> był nieaktywny, gdy
            formularz jest nieprawidłowy. Użyj linku z{" "}
            <a
              className="text-green-700 underline"
              href="https://tanstack.com/form/latest/docs/framework/react/guides/validation#preventing-invalid-forms-from-being-submitted">
              dokumentacji
            </a>
            .
          </del>
        </li>
        <li>
          Dodaj pole typu checkbox oraz select. Dla select użyj np.{" "}
          <code className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-800">
            role: z.enum(["junior", "mid", "senior"])
          </code>
          . Do checkboxów użyj linku z{" "}
          <a
            className="text-green-700 underline"
            href="https://tanstack.com/form/latest/docs/framework/react/guides/basic-concepts#field">
            dokumentacji
          </a>
          .
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-slate-600">
              Podpowiedź: definicja pola checkbox i select w Zod
            </summary>
            <div className="bg-slate-100 rounded-xl p-3 mt-2 text-xs font-mono text-slate-800">
              <pre>
                {`consent: z.boolean(),
role: z.enum(["junior", "mid", "senior"]),`}
              </pre>
            </div>
          </details>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-slate-600">
              Podpowiedź: użycie gotowych komponentów formularza
            </summary>
            <div className="bg-slate-100 rounded-xl p-3 mt-2 text-xs font-mono text-slate-800">
              <pre>
                {`<form.Field
  name="role"
  children={(field) => (
    <Select
      field={field}
      label="Role"
      options={[
        { value: "junior", label: "Junior" },
        { value: "mid", label: "Mid" },
        { value: "senior", label: "Senior" },
      ]}
    />
  )}
/>
<form.Field
  name="consent"
  children={(field) => <Checkbox field={field} label="Consent" />}
/>`}
              </pre>
            </div>
          </details>
        </li>
        <li>
          Zrób teraz tak, że jeśli checkbox będzie zaznaczony, to pojawi się
          dodatkowe pole tekstowe do wypełnienia np. comment.
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-slate-600">
              Podpowiedź: warunkowa walidacja komentarza
            </summary>
            <div className="bg-slate-100 rounded-xl p-3 mt-2 text-xs font-mono text-slate-800">
              <pre>
                {`.refine(
  (data) =>
    !data.consent ||
    (data.comment && data.comment.length >= 10 && data.comment.length <= 500),
  {
    path: ["comment"],
    message: "Komentarz musi mieć od 10 do 500 znaków, jeśli wyrażono zgodę.",
  },
);`}
              </pre>
            </div>
          </details>
        </li>
        <li>
          Jak wybiorę opcję "senior" w select, nie muszę wpisywać imienia.
          Możesz korzystać z{" "}
          <a
            className="text-green-700 underline"
            href="https://zod.dev/api?id=superrefine">
            dokumentacji ZOD
          </a>
          .
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-slate-600">
              Podpowiedź: warunkowa walidacja imienia
            </summary>
            <div className="bg-slate-100 rounded-xl p-3 mt-2 text-xs font-mono text-slate-800">
              <pre>
                {`.refine(
  (data) =>
    data.role === "senior" ||
    (data.firstName &&
      data.firstName.length >= 3 &&
      data.firstName.length <= 20),
  {
    path: ["firstName"],
    message:
      "Dla roli Senior pole Imię jest opcjonalne. Dla pozostałych ról podaj imię od 3 do 20 znaków.",
  },
);`}
              </pre>
            </div>
          </details>
        </li>
        <li>
          Wyślij payload do endpointu API po zatwierdzeniu formularza.
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-slate-600">
              Podpowiedź: wysyłka danych do API w onSubmit
            </summary>
            <div className="bg-slate-100 rounded-xl p-3 mt-2 text-xs font-mono text-slate-800">
              <pre>
                {`onSubmit: async ({ value }) => {
  const submitUrl = "http://localhost:3000/api/v1/validation/form";

  const response = await fetch(submitUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
  const result = await response.json();
  console.log(result);
},`}
              </pre>
            </div>
          </details>
        </li>
        <li>
          Przesyłaj dynamiczne pola (listę todo) razem z formularzem do
          endpointu API.
        </li>
      </ul>
    </>
  );
}
