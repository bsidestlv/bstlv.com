interface CallToActionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonUrl: string;
  external?: boolean;
  buttonStyle?: string;
  backgroundClass?: string;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonUrl,
  external = false,
  buttonStyle = "bg-blue-600 text-white hover:bg-blue-700",
  backgroundClass = "bg-gray-100"
}: CallToActionProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        {description && (
          <p className="text-lg text-gray-700 mb-8">
            {description}
          </p>
        )}
        <a 
          href={buttonUrl}
          className={`inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-colors ${buttonStyle}`}
          {...(external && {
            target: "_blank",
            rel: "noopener noreferrer"
          })}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}