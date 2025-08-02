import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logos/bstlv_color.png"
                alt="BSidesTLV 2025"
                width={200}
                height={60}
                priority
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-semibold">Home</Link>
              <Link href="/speakers" className="text-gray-700 hover:text-blue-600">Speakers</Link>
              <Link href="/agenda" className="text-gray-700 hover:text-blue-600">Agenda</Link>
              <Link href="/sponsors" className="text-gray-700 hover:text-blue-600">Sponsors</Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
              <Link href="/cfp" className="text-gray-700 hover:text-blue-600">CFP</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BSidesTLV 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Comic Book Multiverse Edition - Everything is Possible
          </p>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">📢 BSidesTLV 2025 – Postponed</h2>
            <p className="mb-4">
              Due to the ongoing war and the postponement of Cyber Week by Tel Aviv University, 
              we&apos;ve made the difficult but necessary decision to postpone BSidesTLV 2025.
            </p>
            <p className="mb-4">
              All tickets remain valid for our event, to be held at a future date. 
              We&apos;re currently reviewing next steps regarding tshirts, badges and more.
            </p>
            <p>
              Meanwhile, our hearts go out to everyone affected, and especially to those 
              bravely serving on the front lines. 💙
            </p>
          </div>
        </div>
      </section>

      {/* Postponement Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logos/bstlv25_postpone.png"
            alt="BSidesTLV 2025 Postponed"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
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
