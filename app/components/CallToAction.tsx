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
  backgroundClass = "bg-gray-100",
}: CallToActionProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">{title}</h2>
        {description && (
          <p className="mb-8 text-lg text-gray-700">{description}</p>
        )}
        <a
          href={buttonUrl}
          className={`inline-block rounded-lg px-8 py-4 text-lg font-semibold transition-colors ${buttonStyle}`}
          {...(external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
