interface CommunityLink {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonStyle: string;
  external?: boolean;
}

interface CommunityLinksProps {
  links: CommunityLink[];
  title?: string;
  backgroundClass?: string;
}

export default function CommunityLinks({
  links,
  title = "Join Our Community",
  backgroundClass = "bg-gray-100",
}: CommunityLinksProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">{title}</h2>
        <div className="space-y-6">
          {links.map((link, index) => (
            <div key={index}>
              <p className="mb-4 text-lg text-gray-700">{link.description}</p>
              <a
                href={link.buttonUrl}
                className={`inline-block rounded-lg px-6 py-3 transition-colors ${link.buttonStyle}`}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
