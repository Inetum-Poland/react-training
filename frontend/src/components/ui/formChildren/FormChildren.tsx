import type { AnyFieldApi } from "@tanstack/react-form";
import { FieldInfo } from "../fieldInfo/FieldInfo";

export default function FormChildren({ field, label }: { field: AnyFieldApi, label: string }) {
  console.log(field);
  return (
    <>
      <label htmlFor={field.name}>{label}:</label>
      <input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldInfo field={field} />
    </>
  );
}
