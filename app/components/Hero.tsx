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
  children 
}: HeroProps) {
  return (
    <section className={`${backgroundClass} text-white py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}