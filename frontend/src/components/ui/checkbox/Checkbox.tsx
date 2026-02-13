import type { AnyFieldApi } from "@tanstack/react-form";
import FormErrorLabel from "../formErrorLabel/FormErrorLabel";
import Label from "../label/Label";

export default function Checkbox({ field }: { field: AnyFieldApi }) {
  const errorMessage =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? (field.state.meta.errors[0]?.message ??
        String(field.state.meta.errors[0]))
      : "";

  return (
    <div className="w-full mb-2">
      <Label label="Consent" htmlFor={field.name} />
      <label
        className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-slate-300"
        htmlFor={field.name}>
        <input
          className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-4 focus:ring-slate-200/70"
          id={field.name}
          name={field.name}
          type="checkbox"
          checked={Boolean(field.state.value)}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.checked)}
        />
        <span>{field.name}</span>
      </label>
      {errorMessage ? <FormErrorLabel error={errorMessage} /> : null}
    </div>
  );
}
