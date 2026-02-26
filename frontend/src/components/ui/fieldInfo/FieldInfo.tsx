import type { AnyFieldApi } from '@tanstack/react-form'

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <span>{field.state.meta.errors[0].message}</span>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}
