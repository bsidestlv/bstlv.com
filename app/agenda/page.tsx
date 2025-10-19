import {
  getFallbackGrid,
  sessionizeAPI,
  SessionizeGrid,
} from "../../lib/api/sessionize";
import Navigation from "../components/Navigation";

async function getAgendaData(): Promise<SessionizeGrid[]> {
  try {
    const grid = await sessionizeAPI.getGrid();
    return grid.length > 0 ? grid : getFallbackGrid();
  } catch (error) {
    console.error("Failed to fetch agenda:", error);
    return getFallbackGrid();
  }
}

function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default async function AgendaPage() {
  const agendaGrid = await getAgendaData();
  const isUsingFallback =
    agendaGrid.length === 1 &&
    agendaGrid[0].rooms[0].sessions[0].id === "fallback-session-1";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Agenda</h1>
          <p className="mb-8 text-xl md:text-2xl">
            BSidesTLV 2025 will take place IN PERSON on June 26th, 2025 at
            Smolarz Auditorium,
            <br />
            Tel Aviv University, from 08:30-19:00.
          </p>
          <p className="text-lg">
            As always, amazing keynote speakers, pioneering content and fun
            surprises that you won&apos;t want to miss 😉
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {isUsingFallback ? (
            <div className="mb-12 text-center">
              <div className="mb-12 rounded-lg border border-yellow-200 bg-yellow-50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-yellow-900">
                  📅 Schedule Updates Coming Soon
                </h2>
                <p className="mb-6 text-lg text-yellow-800">
                  Due to the event postponement, we&apos;re working on
                  finalizing the new schedule. The agenda will be updated once
                  we confirm the new date and speaker lineup.
                </p>
                <p className="text-yellow-700">
                  We&apos;ll maintain our tradition of amazing keynote speakers,
                  pioneering content, and fun surprises that make BSidesTLV
                  special!
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-12">
              <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-green-900">
                  📅 Live Schedule
                </h2>
                <p className="text-lg text-green-800">
                  Here&apos;s the detailed agenda for BSidesTLV 2025!
                </p>
              </div>
            </div>
          )}

          {/* Agenda Grid */}
          {agendaGrid.map((day) => (
            <div key={day.date} className="mb-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>

              <div className="grid gap-6">
                {day.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="overflow-hidden rounded-lg bg-white shadow-md"
                  >
                    <div className="bg-blue-600 px-6 py-3 text-white">
                      <h3 className="text-xl font-semibold">{room.name}</h3>
                    </div>

                    <div className="divide-y divide-gray-200">
                      {room.sessions.map((session) => (
                        <div key={session.id} className="p-6">
                          <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                            <div className="flex-1">
                              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                {session.title}
                              </h4>
                              {session.description && (
                                <p className="mb-3 text-gray-700">
                                  {session.description}
                                </p>
                              )}
                              {session.speakers.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {session.speakers.map((speaker, index) => (
                                    <span
                                      key={index}
                                      className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                                    >
                                      {speaker.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="mt-4 text-sm text-gray-600 md:mt-0 md:ml-6">
                              <div className="rounded bg-gray-100 px-3 py-2">
                                {formatTime(session.startsAt)} -{" "}
                                {formatTime(session.endsAt)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Event Information */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">
                📍 Venue
              </h3>
              <p className="mb-2 text-blue-700">Smolarz Auditorium</p>
              <p className="mb-2 text-blue-700">Tel Aviv University</p>
              <p className="text-blue-700">Up to 1200 attendees</p>
            </div>
            <div className="rounded-lg bg-green-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-green-900">
                ⏰ Format
              </h3>
              <p className="mb-2 text-green-700">Full Day Event</p>
              <p className="mb-2 text-green-700">08:30 - 19:00</p>
              <p className="text-green-700">In-Person Experience</p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="rounded-lg bg-gray-100 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              What to Expect at BSidesTLV 2025
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">🎤</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Keynote Speakers
                </h3>
                <p className="text-gray-700">
                  Industry-leading experts sharing cutting-edge insights
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🚀</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Technical Sessions
                </h3>
                <p className="text-gray-700">
                  30+ sessions covering the latest in cybersecurity
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">🏆</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  CTF Competition
                </h3>
                <p className="text-gray-700">
                  20+ challenges to test your skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Stay Updated
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Be the first to know when we announce the new date and updated
            agenda!
          </p>
          <div className="space-y-4">
            <a
              href="https://e.bsidestlv.com/subscription/lGCnPUft?locale=en-US"
              className="mr-4 inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Subscribe to Newsletter
            </a>
            <a
              href="https://slack.bsidestlv.com"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join Slack Community
            </a>
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
