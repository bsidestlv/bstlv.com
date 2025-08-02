import Navigation from "../components/Navigation";
import Link from "next/link";
import { sessionizeAPI, getFallbackSpeakers, SessionizeSpeaker } from "../../lib/api/sessionize";
import Image from "next/image";

async function getSpeakersData(): Promise<SessionizeSpeaker[]> {
  try {
    const speakers = await sessionizeAPI.getSpeakers();
    return speakers.length > 0 ? speakers : getFallbackSpeakers();
  } catch (error) {
    console.error('Failed to fetch speakers:', error);
    return getFallbackSpeakers();
  }
}

export default async function SpeakersPage() {
  const speakers = await getSpeakersData();
  const isUsingFallback = speakers.length === 1 && speakers[0].id === 'fallback-1';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Speakers
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We are proud to present the speakers of BSidesTLV 2025 !
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {isUsingFallback ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">📢 Event Postponed</h2>
              <p className="text-lg text-blue-800 mb-6">
                Due to the ongoing war and the postponement of Cyber Week by Tel Aviv University, 
                BSidesTLV 2025 has been postponed. Speaker announcements will be made once we 
                confirm the new date.
              </p>
              <p className="text-blue-700 mb-6">
                We appreciate the patience of all our amazing speakers and the community. 
                All accepted speakers will be contacted with updates as they become available.
              </p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">🎤 Meet Our Speakers</h2>
              <p className="text-lg text-green-800">
                Amazing speakers confirmed for BSidesTLV 2025! Check out their profiles below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Speakers Grid */}
      {!isUsingFallback && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {speaker.profilePicture && (
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                      <Image
                        src={speaker.profilePicture}
                        alt={speaker.fullName}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {speaker.fullName}
                    </h3>
                    {speaker.tagLine && (
                      <p className="text-blue-600 font-medium mb-3">
                        {speaker.tagLine}
                      </p>
                    )}
                    <p className="text-gray-700 text-sm mb-4">
                      {speaker.bio.length > 150 
                        ? `${speaker.bio.substring(0, 150)}...` 
                        : speaker.bio
                      }
                    </p>
                    {speaker.links.length > 0 && (
                      <div className="flex space-x-3">
                        {speaker.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call for Papers */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Want to Speak at BSidesTLV?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We&apos;re still accepting submissions for when the event resumes. Join our amazing 
            lineup of cybersecurity professionals and share your knowledge with the community!
          </p>
          <div className="space-y-4">
            <Link 
              href="/cfp"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              📝 Submit Your Talk
            </Link>
            <a 
              href="https://cfp.bsidestlv.com/" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 CFP Portal
            </a>
          </div>
        </div>
      </section>

      {/* Previous Years */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Watch Previous Talks</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get inspired by watching talks from our previous BSidesTLV events!
          </p>
          <a 
            href="https://www.youtube.com/@BSidesTLV" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Watch on YouTube
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}