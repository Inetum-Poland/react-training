export default function FormErrorLabel({ error }: { error: string }) {
  return <p className="mt-2 text-xs font-medium text-rose-600">{error}</p>;
}
