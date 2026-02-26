import FormChildren from "@/components/ui/formChildren/FormChildren";
import { useForm } from "@tanstack/react-form";

import * as z from "zod";

const userSchema = z.object({
  firstName: z.string().min(5, "first name error"),
  lastName: z.string().min(5, "last name error"),
  comment: z.string().email("Email is invalid"),
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div>
        <form.Field
          name="firstName"
          children={(field) => (
            <FormChildren label="First name" field={field} />
          )}
        />
      </div>
      <div>
        <form.Field
          name="lastName"
          children={(field) => <FormChildren label="Last name" field={field} />}
        />
      </div>
      <div>
        <form.Field
          name="comment"
          children={(field) => <FormChildren label="Comment" field={field} />}
        />
      </div>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <>
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </button>
            {form.state.isValid && (
              <p className="text-green-500">Form is valid</p>
            )}
            <button
              type="reset"
              onClick={(e) => {
                // Avoid unexpected resets of form elements (especially <select> elements)
                e.preventDefault();
                form.reset();
              }}
            >
              Reset
            </button>
          </>
        )}
      />
    </form>
  );
}
