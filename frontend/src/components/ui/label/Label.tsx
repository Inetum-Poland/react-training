export default function Label({
  label,
  htmlFor,
}: {
  label: string;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-semibold tracking-wide text-slate-800">
      {label}
    </label>
  );
}
