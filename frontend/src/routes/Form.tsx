import Input from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import Textarea from "@/components/ui/textarea/Textarea";
import { useForm } from "@tanstack/react-form";

import * as z from "zod";
import TodoList from "@/components/ui/todoList/TodoList";

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(30, "Imię może mieć maksymalnie 30 znaków")
    .regex(
      /^[A-Za-zÀ-ÿ\-\s]+$/,
      "Imię może zawierać tylko litery, myślniki i spacje",
    ),
  lastName: z
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
    .max(40, "Nazwisko może mieć maksymalnie 40 znaków")
    .regex(
      /^[A-Za-zÀ-ÿ\-\s]+$/,
      "Nazwisko może zawierać tylko litery, myślniki i spacje",
    ),
  comment: z
    .string()
    .min(10, "Komentarz musi mieć co najmniej 10 znaków")
    .max(500, "Komentarz może mieć maksymalnie 500 znaków"),
});

export default function FormPage() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      comment: "",
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <div className="flex flex-row gap-8 w-full">
      {/* Left column: form */}
      <div className="flex-1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}>
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
              name="comment"
              children={(field) => <Textarea field={field} label="Comment" />}
            />
          </div>

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
                  }}>
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
        <TodoList />
      </div>
    </div>
  );
}
