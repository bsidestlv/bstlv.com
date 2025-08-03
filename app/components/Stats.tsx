interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
  backgroundClass?: string;
}

export default function Stats({ 
  stats, 
  backgroundClass = "bg-blue-600 text-white" 
}: StatsProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}