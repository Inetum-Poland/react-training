import type { AnyFieldApi } from "@tanstack/react-form";
import FormErrorLabel from "../formErrorLabel/FormErrorLabel";
import Label from "../label/Label";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface SelectProps {
  field: AnyFieldApi;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
}

export default function Select({
  field,
  options,
  label = "Role",
  placeholder = "Select...",
}: SelectProps) {
  const errorMessage =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? (field.state.meta.errors[0]?.message ??
        String(field.state.meta.errors[0]))
      : "";

  return (
    <div className="w-full mb-2">
      <Label label={label} htmlFor={field.name} />
      <div className="relative mt-2">
        <select
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          id={field.name}
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
          ▾
        </span>
      </div>
      {errorMessage ? <FormErrorLabel error={errorMessage} /> : null}
    </div>
  );
}
