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
  backgroundClass = "bg-gray-100" 
}: CommunityLinksProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="space-y-6">
          {links.map((link, index) => (
            <div key={index}>
              <p className="text-lg text-gray-700 mb-4">
                {link.description}
              </p>
              <a 
                href={link.buttonUrl}
                className={`inline-block px-6 py-3 rounded-lg transition-colors ${link.buttonStyle}`}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer"
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