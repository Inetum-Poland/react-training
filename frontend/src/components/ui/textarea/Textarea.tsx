import type { AnyFieldApi } from "@tanstack/react-form";
import Label from "../label/Label";

interface TextareaProps {
  field: AnyFieldApi;
  label: string;
}

export default function Textarea({ field, label }: TextareaProps) {
  const errorMessages =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((err) => err?.message ?? String(err))
      : [];

  return (
    <div className="w-full mb-2">
      <Label label={label} htmlFor={field.name} />
      <div className="relative">
        <textarea
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70 ${errorMessages.length > 0 ? "border-rose-500 focus:border-rose-500" : "border-slate-200"}`}
          id={field.name}
          name={field.name}
          placeholder="Type your comment"
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          rows={4}
        />
      </div>
      {errorMessages.length > 0 && (
        <ul className="mt-2 text-xs font-medium text-rose-600 list-disc pl-5">
          {errorMessages.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
