interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
}

interface FeatureCardsProps {
  title: string;
  subtitle?: string;
  cards: FeatureCard[];
  backgroundClass?: string;
  columns?: number;
}

export default function FeatureCards({
  title,
  subtitle,
  cards,
  backgroundClass = "bg-white",
  columns = 3,
}: FeatureCardsProps) {
  const gridCols =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 text-center ${card.bgColor || ""}`}
            >
              {card.icon && (
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-2xl">{card.icon}</span>
                </div>
              )}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
