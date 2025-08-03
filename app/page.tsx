import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BSidesTLV 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Comic Book Multiverse Edition - Everything is Possible
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">📢 BSidesTLV 2025 - new date announcement, 11.12.2025</h2>
            <h3 className="text-lg font-semibold mb-3">📢 Greetings Hackers & earthlings!</h3>
            <p className="mb-4">
              Following the June 2025 postponement, we have an update about our new expected date:
              Tel Aviv University Cyber Week 2025 Will Take Place December 8-11. This means that our BSidesTLV2025 event is scheduled for December 11, Thursday!
            </p>
            <p className="mb-4">
              Most of our planned agenda and village content remain the same, and any current tickets will be valid for the new date.
            </p>
            <p className="mb-4">
              We will be in touch in September with event updates, info about electronic badges and more surprises.
            </p>
            <p className="mb-4">
              We hope to see everyone there, and we thank you for your continued support!
              The BSidesTLV 2025 team
            </p>
            <p className="mb-4">
              The theme for our 10th security research community conference will focus on alternate realities and multiple possibilities, imagining a better future while living in a chaotic present! In the age of disinformation, GenAI and Quantum Computers - we believe everything is possible (at least in the realm of security research🤓).
            </p>
            <p className="mb-4">
              Have an idea to share on our main stage? Join our local celebration of security research, creativity, and resilience. We welcome first time speakers and offer speaker mentoring and might be able to offer travel support for international (or interdimensional) speakers!
            </p>
            <p className="font-semibold">
              TLDR: The security multiverse needs heroes, so join us at BSidesTLV 2025, December 11! Call for Volunteers is now open! <a href="https://signup.com/go/XWAtoJV" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Wanna help?</a>
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Important Dates and Details</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li><strong>CFP Opens:</strong> 16/2/2025 at 10:00:00 Israel time</li>
              <li><strong>CFP Closes:</strong> 15/4/2025 at 23:59:59 Israel time</li>
              <li><strong>CFP decisions:</strong> will be sent to submitters by 5/5/2025</li>
              <li><strong>Agenda announced:</strong> by 20/5/2025</li>
              <li><strong>Ticket sales, T-shirt orders & registration:</strong> will open during May 2025</li>
              <li><strong>BSidesTLV 2025:</strong> December 11, 2025 from 9am to 6pm</li>
              <li><strong>Location:</strong> Live & in person at Tel Aviv University during Tel Aviv Cyber Week, in Smolarz auditorium</li>
              <li><strong>Features:</strong> Main stage with live talks, networking and chillout areas, dedicated sponsor zone, and unique villages focusing on hardware hacking, bug bounty programs and more!</li>
              <li><strong>Language:</strong> All talks presented in English, filmed and uploaded to YouTube after the event</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1700+</div>
              <div className="text-lg">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10</div>
              <div className="text-lg">Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30+</div>
              <div className="text-lg">Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-lg">CTF Challenges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Community</h2>
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Watching the event virtually? Join our Slack!
              </p>
              <a 
                href="https://slack.bsidestlv.com" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Slack
              </a>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Sign up to our newsletter to receive updates throughout the year
              </p>
              <a 
                href="https://e.bsidestlv.com/subscription/lGCnPUft?locale=en-US" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to Newsletter
              </a>
            </div>
            <div>
              <Link 
                href="/volunteers" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Call for Volunteers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Watch 2024 Videos</h2>
          <p className="text-lg text-gray-700 mb-8">
            Need some inspiration? Watch videos from our past events!
          </p>
          <a 
            href="https://www.youtube.com/@BSidesTLV" 
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
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
              <p className="text-gray-400 mt-2">
                BSidesTLV 2025 logo design by Vladislav Trigub @vldislovely
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
