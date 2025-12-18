interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="bg-white rounded-xl p-8 shadow-md border border-neutral-200">
      {children}
    </section>
  );
}
