import Navigation from '../components/Navigation';

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Code of Conduct
          </h1>
          <p className="text-xl">
            Creating a safe and inclusive environment for everyone
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-red-800">
              If you experience any inappropriate content or violation of our Code of Conduct during our events, 
              you can contact us at{' '}
              <a href="mailto:report@bsidestlv.com" className="text-red-600 hover:text-red-800 underline">
                report@bsidestlv.com
              </a>
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-semibold text-gray-900 mb-6">
              <strong>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct.</strong> 
              {' '}Organizers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              BSidesTLV is dedicated to providing a safe and harassment-free conference experience regardless of gender, gender identity and expression, 
              age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices, 
              to all participants. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate 
              for any conference venue, including talks, workshops, parties, Twitter and any other online media. Conference participants violating these 
              rules may be sanctioned or expelled from the conference at the discretion of the conference organizers.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              You can contact us at{' '}
              <a href="mailto:report@bsidestlv.com" className="text-blue-600 hover:text-blue-800 underline">
                report@bsidestlv.com
              </a>
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Commercially photographing the events, participants, or the grounds is prohibited without consent of all parties involved and approval 
              of the BSidesTLV management. Any materials (such as videos or official photography) released by BSidesTLV may be freely used by the community.
            </p>

            <p className="text-lg text-gray-700">
              More details can be found at{' '}
              <a 
                href="http://confcodeofconduct.com/" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://confcodeofconduct.com/
              </a>
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