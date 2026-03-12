import Input from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import Textarea from "@/components/ui/textarea/Textarea";
import { useForm } from "@tanstack/react-form";

import * as z from "zod";
import TodoList from "@/components/ui/todoList/TodoList";
import Select, { type SelectOption } from "@/components/ui/select/Select";
import Checkbox from "@/components/ui/checkbox/Checkbox";

const userSchema = z.object({
  firstName: z.string().optional(),
  lastName: z
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
    .max(40, "Nazwisko może mieć maksymalnie 40 znaków")
    .regex(
      /^[A-Za-zÀ-ÿ\-\s]+$/,
      "Nazwisko może zawierać tylko litery, myślniki i spacje",
    ),
  comment: z.string().optional(),
  role: z.enum(["junior", "mid", "senior"]),
  consent: z.boolean().default(false),
  todos: z.array(z.string())
}).refine(
  (data) =>
    !data.consent ||
    (data.comment && data.comment.length >= 10 && data.comment.length <= 500),
  {
    path: ["comment"],
    message: "Komentarz musi mieć od 10 do 500 znaków, jeśli wyrażono zgodę."
  },
).refine(
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
);

export default function FormPage() {
  const selectOptions: SelectOption[] = [
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
  ];
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      comment: "",
      role: "",
      consent: false,
      todos: [""],
    },
    validators: {
      onChange: userSchema,
      onSubmit: async ({ value }) => {
        const submitUrl = "http://localhost:3000/api/v1/validation/form";

        const response = await fetch(submitUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        const result = await response.json();
        console.log(result);
      },
    },
  });

  function handleOnAdd(items: string[]) {
    console.log('handleOnAdd', items);
    form.setFieldValue("todos", items);
  }

  return (
    <div className="flex flex-row gap-8 w-full">
      {/* Left column: form */}
      <div className="flex-1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="space-y-4">
            <form.Field
              name="firstName"
              children={(field) => <Input field={field} label="First name" />}
            />
            <form.Field
              name="lastName"
              children={(field) => <Input field={field} label="Last name" />}
            />
            <form.Field
              name="role"
              children={(field) => (
                <Select field={field} options={selectOptions} label="Role" />
              )}
            />
            <form.Field
              name="consent"
              children={(field) => <Checkbox field={field} label="Consent" />}
            />
          </div>
          <form.Subscribe
            selector={(state) => [state.values.consent]}
            children={([consent]) => (
              <>
                {consent ? (
                  <form.Field
                    name="comment"
                    children={(field) => (
                      <Textarea field={field} label="Comment" />
                    )}
                  />
                ) : form.setFieldValue("comment", "")}
              </>
            )}
          />
          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isValid,
              state.errors,
            ]}
            children={([canSubmit, isSubmitting, isValid, errors]) => (
              <div className="mt-6 flex flex-col gap-2">
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? "..." : "Submit"}
                </Button>
                <Button
                  type="reset"
                  variant="outline"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    form.reset();
                  }}
                >
                  Reset
                </Button>
                {isValid && (
                  <div className="rounded-xl bg-green-100 border border-green-400 p-4 flex flex-col items-start gap-2">
                    <span className="text-green-700 font-semibold text-lg">
                      Form is valid!
                    </span>
                  </div>
                )}
                {!isValid &&
                  (() => {
                    const currentErrors = errors ?? form.state.errors ?? {};
                    return Object.keys(currentErrors).length > 0 ? (
                      <div className="rounded-xl bg-rose-100 border border-rose-400 p-4 flex flex-col items-start gap-2">
                        <span className="text-rose-700 font-semibold text-lg">
                          Form is invalid!
                        </span>
                      </div>
                    ) : null;
                  })()}
                <details className="w-full mt-2">
                  <summary className="cursor-pointer text-grey-600 font-medium">
                    Zobacz cały JSON obiektu
                  </summary>
                  <pre className="bg-gray-200 rounded p-2 text-grey-900 text-xs w-full overflow-x-auto mt-2">
                    {JSON.stringify(form.state, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          />
        </form>
      </div>
      <div className="flex-1">
        <TodoList onAdd={handleOnAdd}/>
      </div>
    </div>
  );
}
