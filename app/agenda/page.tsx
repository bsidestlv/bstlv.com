import Navigation from "../components/Navigation";
import { sessionizeAPI, getFallbackGrid, SessionizeGrid } from "../../lib/api/sessionize";

async function getAgendaData(): Promise<SessionizeGrid[]> {
  try {
    const grid = await sessionizeAPI.getGrid();
    return grid.length > 0 ? grid : getFallbackGrid();
  } catch (error) {
    console.error('Failed to fetch agenda:', error);
    return getFallbackGrid();
  }
}

function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

export default async function AgendaPage() {
  const agendaGrid = await getAgendaData();
  const isUsingFallback = agendaGrid.length === 1 && 
    agendaGrid[0].rooms[0].sessions[0].id === 'fallback-session-1';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Agenda
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            BSidesTLV 2025 will take place IN PERSON on June 26th, 2025 at Smolarz Auditorium,<br />
            Tel Aviv University, from 08:30-19:00.
          </p>
          <p className="text-lg">
            As always, amazing keynote speakers, pioneering content and fun surprises that you won&apos;t want to miss 😉
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isUsingFallback ? (
            <div className="text-center mb-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4">📅 Schedule Updates Coming Soon</h2>
                <p className="text-lg text-yellow-800 mb-6">
                  Due to the event postponement, we&apos;re working on finalizing the new schedule. 
                  The agenda will be updated once we confirm the new date and speaker lineup.
                </p>
                <p className="text-yellow-700">
                  We&apos;ll maintain our tradition of amazing keynote speakers, pioneering content, 
                  and fun surprises that make BSidesTLV special!
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-4">📅 Live Schedule</h2>
                <p className="text-lg text-green-800">
                  Here&apos;s the detailed agenda for BSidesTLV 2025!
                </p>
              </div>
            </div>
          )}

          {/* Agenda Grid */}
          {agendaGrid.map((day) => (
            <div key={day.date} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {new Date(day.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h2>
              
              <div className="grid gap-6">
                {day.rooms.map((room) => (
                  <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-600 text-white px-6 py-3">
                      <h3 className="text-xl font-semibold">{room.name}</h3>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {room.sessions.map((session) => (
                        <div key={session.id} className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {session.title}
                              </h4>
                              {session.description && (
                                <p className="text-gray-700 mb-3">
                                  {session.description}
                                </p>
                              )}
                              {session.speakers.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {session.speakers.map((speaker, index) => (
                                    <span
                                      key={index}
                                      className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                      {speaker.name}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="md:ml-6 mt-4 md:mt-0 text-sm text-gray-600">
                              <div className="bg-gray-100 px-3 py-2 rounded">
                                {formatTime(session.startsAt)} - {formatTime(session.endsAt)}
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">📍 Venue</h3>
              <p className="text-blue-700 mb-2">Smolarz Auditorium</p>
              <p className="text-blue-700 mb-2">Tel Aviv University</p>
              <p className="text-blue-700">Up to 1200 attendees</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">⏰ Format</h3>
              <p className="text-green-700 mb-2">Full Day Event</p>
              <p className="text-green-700 mb-2">08:30 - 19:00</p>
              <p className="text-green-700">In-Person Experience</p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect at BSidesTLV 2025</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Keynote Speakers</h3>
                <p className="text-gray-700">Industry-leading experts sharing cutting-edge insights</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Sessions</h3>
                <p className="text-gray-700">30+ sessions covering the latest in cybersecurity</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CTF Competition</h3>
                <p className="text-gray-700">20+ challenges to test your skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be the first to know when we announce the new date and updated agenda!
          </p>
          <div className="space-y-4">
            <a 
              href="https://e.bsidestlv.com/subscription/lGCnPUft?locale=en-US" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 Subscribe to Newsletter
            </a>
            <a 
              href="https://slack.bsidestlv.com" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join Slack Community
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