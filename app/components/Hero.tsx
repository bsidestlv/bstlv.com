interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  backgroundClass = "bg-gradient-to-r from-blue-600 to-purple-700",
  children,
}: HeroProps) {
  return (
    <section className={`${backgroundClass} py-20 text-white`}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
        {subtitle && <p className="mb-8 text-xl md:text-2xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
