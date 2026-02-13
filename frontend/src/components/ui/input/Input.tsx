import type { AnyFieldApi } from "@tanstack/react-form";
import FormErrorLabel from "../formErrorLabel/FormErrorLabel";
import Label from "../label/Label";

export default function Input({ field }: { field: AnyFieldApi }) {
  const errorMessage =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? (field.state.meta.errors[0]?.message ??
        String(field.state.meta.errors[0]))
      : "";

  return (
    <div className="w-full mb-2">
      <Label label="Full name" htmlFor={field.name} />
      <div className="relative">
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          id={field.name}
          name={field.name}
          placeholder="Type your name"
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
        />
      </div>
      {errorMessage ? <FormErrorLabel error={errorMessage} /> : null}
    </div>
  );
}
