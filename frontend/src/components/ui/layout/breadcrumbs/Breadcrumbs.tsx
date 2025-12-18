export default function Breadcrumbs() {
  return (
    <div className="px-6 py-3 border-b border-neutral-200 bg-white">
      <nav className="text-sm flex gap-2 text-neutral-700 font-medium">
        <a href="/" className="hover:text-black">
          Dashboard
        </a>
        <span>/</span>
        <span className="text-neutral-500">Overview</span>
      </nav>
    </div>
  );
}
