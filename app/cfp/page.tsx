import Navigation from "../components/Navigation";
import Link from "next/link";

export default function CFPPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BSidesTLV 2025 Call for Papers
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Comic Book Multiverse Edition - Everything is Possible
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important BSidesTLV 2025 dates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">CFP Opens</h3>
              <p className="text-blue-700">February 16th, 2025 at 10:00</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-2">CFP Closes</h3>
              <p className="text-red-700">April 15th, 2025 at 23:59</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Notification</h3>
              <p className="text-green-700">May 5th, 2025 - Accepted talks notified</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Agenda Announced</h3>
              <p className="text-purple-700">May 20th, 2025 - Public agenda with final titles & abstracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Share Your Knowledge?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Submit your talk proposal and join our amazing community of cybersecurity professionals!
          </p>
          <a 
            href="https://cfp.bsidestlv.com/" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 Call for Speakers
          </a>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Code of Conduct</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-lg text-yellow-800 mb-4">
              <strong>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct.</strong>
            </p>
            <p className="text-yellow-700 mb-4">
              Our Code Of Conduct ensures a safe and inclusive environment for everyone.
            </p>
            <Link 
              href="/code-of-conduct"
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Read Code of Conduct
            </Link>
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