import Navigation from "../components/Navigation";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Sponsors</h1>
          <p className="mb-8 text-xl md:text-2xl">
            Supporting the cybersecurity community in Israel
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Partner with BSidesTLV 2025
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              We are happy to engage with you again this year as we are kicking
              off the 2025 edition of BSidesTLV.
            </p>
          </div>

          {/* Venue Information */}
          <div className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-900">
              🏛️ Venue & Capacity
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-blue-800">
                  📍 Location
                </h4>
                <p className="mb-4 text-blue-700">
                  Smolarz Auditorium
                  <br />
                  Tel Aviv University
                  <br />A big, wonderful, and air-conditioned space
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-blue-800">
                  👥 Capacity
                </h4>
                <p className="mb-4 text-blue-700">
                  Up to 1,200 attendees
                  <br />
                  Cybersecurity professionals
                  <br />
                  Industry leaders and enthusiasts
                </p>
              </div>
            </div>
          </div>

          {/* Cyber Week Information */}
          <div className="mb-12 rounded-lg border border-purple-200 bg-purple-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-purple-900">
              🌐 Part of Cyber Week
            </h3>
            <p className="mb-4 text-lg text-purple-800">
              Our event takes place during{" "}
              <a
                href="https://cyberweektau.com/"
                className="text-purple-600 underline hover:text-purple-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tel Aviv University&apos;s Cyber Week
              </a>
              .
            </p>
            <p className="text-purple-700">
              This provides unique opportunities for networking and cross-event
              collaboration within the broader cybersecurity ecosystem.
            </p>
          </div>

          {/* Sponsorship Benefits */}
          <div className="mb-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Why Sponsor BSidesTLV?
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">🎯</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Targeted Audience
                </h4>
                <p className="text-gray-700">
                  Connect directly with cybersecurity professionals and
                  decision-makers
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Community Impact
                </h4>
                <p className="text-gray-700">
                  Support the growth of Israel&apos;s cybersecurity community
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🚀</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Brand Visibility
                </h4>
                <p className="text-gray-700">
                  Showcase your brand to 1,200+ attendees and online audience
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-lg bg-gray-100 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Partner with Us?
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Please reach out to us to set up a call for more details about
              sponsorship opportunities!
            </p>
            <a
              href="mailto:sponsors@bsidestlv.com"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              📧 Contact Sponsors Team
            </a>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Community Powered Event
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            BSidesTLV is proudly sponsored by organizations that believe in
            supporting the cybersecurity community. Our volunteer-run event
            depends on generous sponsors to make everything possible.
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h3 className="mb-2 text-xl font-semibold text-green-900">
              🙏 Thank You to Our Sponsors
            </h3>
            <p className="text-green-700">
              Sponsor logos and recognition will be displayed here once
              partnerships are confirmed for the rescheduled event date.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-lg">
              Want to support our event? We need Sponsors!
            </p>
            <p className="mb-6 text-gray-300">
              Our community powered, volunteer run event depends on the generous
              sponsors to make everything possible.
            </p>
            <a
              href="mailto:sponsors@bsidestlv.com"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Contact Sponsors Team
            </a>
            <div className="mt-8 border-t border-gray-700 pt-8">
              <p className="text-gray-300">
                Thank you and stay safe, The BSidesTLV 2025 Team
              </p>
              <p className="mt-2 text-gray-400">We ❤️ TLV</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
