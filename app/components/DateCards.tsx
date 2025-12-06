interface DateCardProps {
  title: string;
  date: string;
  bgColor: string;
  textColor: string;
}

interface DateCardsProps {
  dates: DateCardProps[];
}

export default function DateCards({ dates }: DateCardsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important BSidesTLV 2025 dates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {dates.map((date, index) => (
            <div key={index} className={`${date.bgColor} p-6 rounded-lg`}>
              <h3 className={`text-xl font-semibold ${date.textColor} mb-2`}>{date.title}</h3>
              <p className={date.textColor}>{date.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}