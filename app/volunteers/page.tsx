import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function VolunteersPage() {
  const volunteerBenefits = [
    {
      icon: "🤝",
      title: "Community Impact",
      description:
        "Make a real difference in the cybersecurity community and help create connections that last a lifetime.",
    },
    {
      icon: "🎓",
      title: "Learn & Grow",
      description:
        "Gain valuable experience, learn new skills, and expand your knowledge in cybersecurity and event management.",
    },
    {
      icon: "🌟",
      title: "Network & Connect",
      description:
        "Meet industry professionals, speakers, and fellow enthusiasts from around the world.",
    },
  ];

  const volunteerRoles = [
    {
      title: "Registration & Check-in",
      description: "Welcome attendees and help with registration process",
    },
    {
      title: "Speaker Support",
      description: "Assist speakers with technical setup and room management",
    },
    {
      title: "Social Media",
      description: "Help capture and share the conference experience online",
    },
    {
      title: "Technical Support",
      description: "Assist with AV equipment and technical troubleshooting",
    },
    {
      title: "General Support",
      description: "Help with various tasks throughout the event",
    },
    {
      title: "Sponsor Relations",
      description: "Assist sponsors and help manage the sponsor area",
    },
    {
      title: "CTF Support",
      description: "Help run and manage Capture The Flag competitions",
    },
    {
      title: "Village Support",
      description: "Assist with specialized villages and workshops",
    },
  ].map((role) => ({
    ...role,
    icon: "",
    bgColor: "bg-white rounded-lg shadow-md",
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <Hero
        title="Volunteers"
        subtitle="Looking for a great opportunity to give back to our awesome community?"
        backgroundClass="bg-gradient-to-r from-green-600 to-teal-700"
      >
        <div className="space-y-6">
          <a
            href="https://signup.com/go/XWAtoJV"
            className="inline-block rounded-lg bg-white px-8 py-4 text-xl font-semibold text-green-700 transition-colors hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign-up as a BSidesTLV Volunteer
          </a>
          <div>
            <p className="mb-4 text-xl">Or email us directly:</p>
            <a
              href="mailto:volunteer@bsidestlv.com"
              className="inline-block rounded-lg bg-teal-600 px-6 py-3 text-white transition-colors hover:bg-teal-700"
            >
              volunteer@bsidestlv.com
            </a>
          </div>
        </div>
      </Hero>

      <FeatureCards
        title="Why Volunteer with BSidesTLV?"
        subtitle="Join our amazing community of volunteers and help make BSidesTLV 2025 an unforgettable experience for everyone!"
        cards={volunteerBenefits}
        backgroundClass="bg-white"
        columns={3}
      />

      <FeatureCards
        title="Volunteer Opportunities"
        subtitle="We have various roles available to match your interests and availability"
        cards={volunteerRoles}
        backgroundClass="bg-gray-50"
        columns={4}
      />

      {/* Call to Action */}
      <section className="bg-green-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Join Our Volunteer Team?
          </h2>
          <p className="mb-8 text-xl">
            We&apos;d love to have you as part of our amazing volunteer
            community!
          </p>
          <div className="space-x-4">
            <a
              href="https://signup.com/go/XWAtoJV"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-700 transition-colors hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
            <a
              href="mailto:volunteer@bsidestlv.com"
              className="inline-block rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-green-700"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
