import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeatureCards from '../components/FeatureCards';

export default function VolunteersPage() {
  const volunteerBenefits = [
    {
      icon: "🤝",
      title: "Community Impact",
      description: "Make a real difference in the cybersecurity community and help create connections that last a lifetime."
    },
    {
      icon: "🎓", 
      title: "Learn & Grow",
      description: "Gain valuable experience, learn new skills, and expand your knowledge in cybersecurity and event management."
    },
    {
      icon: "🌟",
      title: "Network & Connect", 
      description: "Meet industry professionals, speakers, and fellow enthusiasts from around the world."
    }
  ];

  const volunteerRoles = [
    { title: "Registration & Check-in", description: "Welcome attendees and help with registration process" },
    { title: "Speaker Support", description: "Assist speakers with technical setup and room management" },
    { title: "Social Media", description: "Help capture and share the conference experience online" },
    { title: "Technical Support", description: "Assist with AV equipment and technical troubleshooting" },
    { title: "General Support", description: "Help with various tasks throughout the event" },
    { title: "Sponsor Relations", description: "Assist sponsors and help manage the sponsor area" },
    { title: "CTF Support", description: "Help run and manage Capture The Flag competitions" },
    { title: "Village Support", description: "Assist with specialized villages and workshops" }
  ].map(role => ({ ...role, icon: "", bgColor: "bg-white rounded-lg shadow-md" }));

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
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign-up as a BSidesTLV Volunteer
          </a>
          <div>
            <p className="text-xl mb-4">Or email us directly:</p>
            <a 
              href="mailto:volunteer@bsidestlv.com" 
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
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
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Volunteer Team?
          </h2>
          <p className="text-xl mb-8">
            We&apos;d love to have you as part of our amazing volunteer community!
          </p>
          <div className="space-x-4">
            <a 
              href="https://signup.com/go/XWAtoJV" 
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up Now
            </a>
            <a 
              href="mailto:volunteer@bsidestlv.com" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
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