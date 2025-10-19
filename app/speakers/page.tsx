import Image from "next/image";
import Link from "next/link";
import {
  getFallbackSpeakers,
  sessionizeAPI,
  SessionizeSpeaker,
} from "../../lib/api/sessionize";
import Navigation from "../components/Navigation";

async function getSpeakersData(): Promise<SessionizeSpeaker[]> {
  try {
    const speakers = await sessionizeAPI.getSpeakers();
    return speakers.length > 0 ? speakers : getFallbackSpeakers();
  } catch (error) {
    console.error("Failed to fetch speakers:", error);
    return getFallbackSpeakers();
  }
}

export default async function SpeakersPage() {
  const speakers = await getSpeakersData();
  const isUsingFallback =
    speakers.length === 1 && speakers[0].id === "fallback-1";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Speakers</h1>
          <p className="mb-8 text-xl md:text-2xl">
            We are proud to present the speakers of BSidesTLV 2025 !
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {isUsingFallback ? (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-blue-900">
                📢 Event Postponed
              </h2>
              <p className="mb-6 text-lg text-blue-800">
                Due to the ongoing war and the postponement of Cyber Week by Tel
                Aviv University, BSidesTLV 2025 has been postponed. Speaker
                announcements will be made once we confirm the new date.
              </p>
              <p className="mb-6 text-blue-700">
                We appreciate the patience of all our amazing speakers and the
                community. All accepted speakers will be contacted with updates
                as they become available.
              </p>
            </div>
          ) : (
            <div className="rounded-lg border border-green-200 bg-green-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-green-900">
                🎤 Meet Our Speakers
              </h2>
              <p className="text-lg text-green-800">
                Amazing speakers confirmed for BSidesTLV 2025! Check out their
                profiles below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Speakers Grid */}
      {!isUsingFallback && (
        <section className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="overflow-hidden rounded-lg bg-white shadow-md"
                >
                  {speaker.profilePicture && (
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                      <Image
                        src={speaker.profilePicture}
                        alt={speaker.fullName}
                        width={300}
                        height={300}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {speaker.fullName}
                    </h3>
                    {speaker.tagLine && (
                      <p className="mb-3 font-medium text-blue-600">
                        {speaker.tagLine}
                      </p>
                    )}
                    <p className="mb-4 text-sm text-gray-700">
                      {speaker.bio.length > 150
                        ? `${speaker.bio.substring(0, 150)}...`
                        : speaker.bio}
                    </p>
                    {speaker.links.length > 0 && (
                      <div className="flex space-x-3">
                        {speaker.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800"
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
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Want to Speak at BSidesTLV?
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            We&apos;re still accepting submissions for when the event resumes.
            Join our amazing lineup of cybersecurity professionals and share
            your knowledge with the community!
          </p>
          <div className="space-y-4">
            <Link
              href="/cfp"
              className="mr-4 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              📝 Submit Your Talk
            </Link>
            <a
              href="https://cfp.bsidestlv.com/"
              className="inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 CFP Portal
            </a>
          </div>
        </div>
      </section>

      {/* Previous Years */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Watch Previous Talks
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Get inspired by watching talks from our previous BSidesTLV events!
          </p>
          <a
            href="https://www.youtube.com/@BSidesTLV"
            className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Watch on YouTube
          </a>
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
