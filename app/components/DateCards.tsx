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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Important BSidesTLV 2025 dates
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {dates.map((date, index) => (
            <div key={index} className={`${date.bgColor} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${date.textColor} mb-2`}>
                {date.title}
              </h3>
              <p className={date.textColor}>{date.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
