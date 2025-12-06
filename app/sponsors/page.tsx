import Navigation from "../components/Navigation";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sponsors
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Supporting the cybersecurity community in Israel
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner with BSidesTLV 2025</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are happy to engage with you again this year as we are kicking off the 2025 edition of BSidesTLV.
            </p>
          </div>

          {/* Venue Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">🏛️ Venue & Capacity</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">📍 Location</h4>
                <p className="text-blue-700 mb-4">
                  Smolarz Auditorium<br />
                  Tel Aviv University<br />
                  A big, wonderful, and air-conditioned space
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">👥 Capacity</h4>
                <p className="text-blue-700 mb-4">
                  Up to 1,200 attendees<br />
                  Cybersecurity professionals<br />
                  Industry leaders and enthusiasts
                </p>
              </div>
            </div>
          </div>

          {/* Cyber Week Information */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">🌐 Part of Cyber Week</h3>
            <p className="text-lg text-purple-800 mb-4">
              Our event takes place during{" "}
              <a 
                href="https://cyberweektau.com/" 
                className="text-purple-600 hover:text-purple-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tel Aviv University&apos;s Cyber Week
              </a>
              .
            </p>
            <p className="text-purple-700">
              This provides unique opportunities for networking and cross-event collaboration 
              within the broader cybersecurity ecosystem.
            </p>
          </div>

          {/* Sponsorship Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Sponsor BSidesTLV?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Targeted Audience</h4>
                <p className="text-gray-700">Connect directly with cybersecurity professionals and decision-makers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h4>
                <p className="text-gray-700">Support the growth of Israel&apos;s cybersecurity community</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Brand Visibility</h4>
                <p className="text-gray-700">Showcase your brand to 1,200+ attendees and online audience</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Please reach out to us to set up a call for more details about sponsorship opportunities!
            </p>
            <a 
              href="mailto:sponsors@bsidestlv.com" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              📧 Contact Sponsors Team
            </a>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Powered Event</h2>
          <p className="text-lg text-gray-700 mb-8">
            BSidesTLV is proudly sponsored by organizations that believe in supporting 
            the cybersecurity community. Our volunteer-run event depends on generous 
            sponsors to make everything possible.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-2">🙏 Thank You to Our Sponsors</h3>
            <p className="text-green-700">
              Sponsor logos and recognition will be displayed here once partnerships are confirmed 
              for the rescheduled event date.
            </p>
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