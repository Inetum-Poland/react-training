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
          Utwórz nowy plik o nazwie Form.tsx i dodaj go do menu po lewej
          stronie. Utworzymy tam formularz.
        </li>
        <li>
          Utwórz nowy <strong>obiekt form</strong> według wytycznych z{" "}
          <a
            className="text-green-700 underline"
            href="https://tanstack.com/form/latest/docs/overview">
            dokumentacji
          </a>
          .
        </li>
        <li>
          Wydziel komponenty do plików. To co będzie w <strong>children</strong>{" "}
          wydziel jako oddzielny parametryzowany komponent.
        </li>
        <li>
          Wydziel walidatory z <strong>validators</strong> do oddzielnych metod.
        </li>
        <li>
          Zamień teraz walidator na <strong>ZOD</strong>. Użyj linku z{" "}
          <a
            className="text-green-700 underline"
            href="https://tanstack.com/form/latest/docs/framework/react/guides/validation#validation-through-schema-libraries">
            dokumentacji
          </a>
        </li>
        <li>
          Spraw aby button <strong>Submit</strong> był nieaktywny, gdy formularz
          jest nieprawidłowy. Użyj linku z{" "}
          <a
            className="text-green-700 underline"
            href="https://tanstack.com/form/latest/docs/framework/react/guides/validation#preventing-invalid-forms-from-being-submitted">
            dokumentacji
          </a>
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
        </li>
        <li>
          Zrób teraz tak, że jeśli checkbox będzie zaznaczony, to pojawi się
          dodatkowe pole tekstowe do wypełnienia np. comment.
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
        </li>
      </ul>
    </>
  );
}
