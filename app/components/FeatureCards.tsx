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
  columns = 3 
}: FeatureCardsProps) {
  const gridCols = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {cards.map((card, index) => (
            <div key={index} className={`text-center p-6 ${card.bgColor || ''}`}>
              {card.icon && (
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{card.icon}</span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}