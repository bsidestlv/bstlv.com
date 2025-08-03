import Navigation from '../components/Navigation';

export default function VolunteersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Volunteers
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Looking for a great opportunity to give back to our awesome community?
          </h2>
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
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Volunteer with BSidesTLV?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our amazing community of volunteers and help make BSidesTLV 2025 an unforgettable experience for everyone!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Make a real difference in the cybersecurity community and help create connections that last a lifetime.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn & Grow</h3>
              <p className="text-gray-600">
                Gain valuable experience, learn new skills, and expand your knowledge in cybersecurity and event management.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Network & Connect</h3>
              <p className="text-gray-600">
                Meet industry professionals, speakers, and fellow enthusiasts from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              We have various roles available to match your interests and availability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Registration & Check-in", description: "Welcome attendees and help with registration process" },
              { title: "Speaker Support", description: "Assist speakers with technical setup and room management" },
              { title: "Social Media", description: "Help capture and share the conference experience online" },
              { title: "Technical Support", description: "Assist with AV equipment and technical troubleshooting" },
              { title: "General Support", description: "Help with various tasks throughout the event" },
              { title: "Sponsor Relations", description: "Assist sponsors and help manage the sponsor area" },
              { title: "CTF Support", description: "Help run and manage Capture The Flag competitions" },
              { title: "Village Support", description: "Assist with specialized villages and workshops" }
            ].map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg mb-4">
              Want to support our event? We need Sponsors!
            </p>
            <p className="text-gray-300 mb-6">
              Our community powered, volunteer run event depends on the generous sponsors to make everything possible.
            </p>
            <a 
              href="mailto:sponsors@bsidestlv.com" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Sponsors Team
            </a>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-300">
                Thank you and stay safe, The BSidesTLV 2025 Team
              </p>
              <p className="text-gray-400 mt-2">
                We ❤️ TLV
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}