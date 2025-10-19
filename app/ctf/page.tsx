import Navigation from "../components/Navigation";

export default function CTFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            🏆 Capture The Flag
          </h1>
          <p className="mb-8 text-xl md:text-2xl">
            Test your cybersecurity skills in our annual CTF competition
          </p>
          <p className="text-lg">
            Join hundreds of security enthusiasts in our challenging CTF event
          </p>
        </div>
      </section>

      {/* Current CTF Status */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-12 rounded-lg border border-yellow-200 bg-yellow-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-yellow-900">
              🚧 CTF 2025 Updates
            </h2>
            <p className="mb-6 text-lg text-yellow-800">
              Due to the event postponement, CTF 2025 details will be announced
              once we confirm the new date. We&apos;re preparing even more
              exciting challenges!
            </p>
            <p className="text-yellow-700">
              Start practicing now - this year&apos;s CTF will feature 20+
              challenges across multiple categories to test your skills!
            </p>
          </div>
        </div>
      </section>

      {/* CTF Overview */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            What is BSidesTLV CTF?
          </h2>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Jeopardy Style
              </h3>
              <p className="text-gray-700">
                Multiple categories with challenges of varying difficulty levels
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 text-4xl">⏱️</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                8 Hours
              </h3>
              <p className="text-gray-700">
                Full day competition running parallel to the main conference
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                20+ Challenges
              </h3>
              <p className="text-gray-700">
                Diverse set of challenges covering all major security domains
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Challenge Categories
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl">🔐</div>
                <h4 className="font-semibold text-gray-900">Cryptography</h4>
                <p className="text-sm text-gray-600">
                  Encryption, hashing, protocols
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl">🌐</div>
                <h4 className="font-semibold text-gray-900">Web Security</h4>
                <p className="text-sm text-gray-600">
                  XSS, SQLi, CSRF, logic flaws
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl">💻</div>
                <h4 className="font-semibold text-gray-900">Binary</h4>
                <p className="text-sm text-gray-600">
                  Reverse engineering, pwn
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl">🕵️</div>
                <h4 className="font-semibold text-gray-900">Forensics</h4>
                <p className="text-sm text-gray-600">
                  Digital investigation, OSINT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Results */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            CTF Hall of Fame
          </h2>

          <div className="space-y-8">
            {/* 2024 Results */}
            <div className="rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                🏆 BSidesTLV 2024 CTF Winners
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    1st Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">TeamIL</p>
                  <p className="text-gray-600">4,250 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    2nd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    Cyber_Guardians
                  </p>
                  <p className="text-gray-600">3,890 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    3rd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    H4ckTheW0rld
                  </p>
                  <p className="text-gray-600">3,650 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 127 teams • 340+ players • 22
                  challenges
                </p>
              </div>
            </div>

            {/* 2023 Results */}
            <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                🏆 BSidesTLV 2023 CTF Winners
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    1st Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    SecMasters
                  </p>
                  <p className="text-gray-600">3,980 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    2nd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    ByteHunters
                  </p>
                  <p className="text-gray-600">3,720 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    3rd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    CyberNinjas
                  </p>
                  <p className="text-gray-600">3,450 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 98 teams • 280+ players • 18
                  challenges
                </p>
              </div>
            </div>

            {/* 2022 Results */}
            <div className="rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-teal-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                🏆 BSidesTLV 2022 CTF Winners
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    1st Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    EliteHackers
                  </p>
                  <p className="text-gray-600">3,650 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    2nd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    SecureTeam
                  </p>
                  <p className="text-gray-600">3,420 points</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    3rd Place
                  </h4>
                  <p className="text-lg font-medium text-gray-700">
                    DataDiggers
                  </p>
                  <p className="text-gray-600">3,180 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 75 teams • 220+ players • 16
                  challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Resources */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Practice for CTF 2025
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Get ready for our next CTF with these practice resources and
            previous challenges!
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                🎯 Practice Platforms
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• OverTheWire Wargames</li>
                <li>• PicoCTF</li>
                <li>• HackTheBox</li>
                <li>• TryHackMe</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                📚 Learning Resources
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CTF Field Guide</li>
                <li>• OWASP Testing Guide</li>
                <li>• Binary Exploitation Tutorials</li>
                <li>• Cryptography Challenges</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://github.com/bsidestlv"
              className="mr-4 inline-block rounded-lg bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 Previous CTF Challenges
            </a>
            <a
              href="https://slack.bsidestlv.com"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join CTF Discussion
            </a>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            How to Participate
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6">
              <div className="mb-4 text-4xl">📝</div>
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                1. Register
              </h3>
              <p className="text-blue-800">
                Register for BSidesTLV 2025 (CTF included with conference
                ticket)
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-6">
              <div className="mb-4 text-4xl">👥</div>
              <h3 className="mb-3 text-xl font-semibold text-green-900">
                2. Form a Team
              </h3>
              <p className="text-green-800">
                Teams of 1-4 people. Join our Slack to find teammates!
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-6">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-3 text-xl font-semibold text-purple-900">
                3. Compete
              </h3>
              <p className="text-purple-800">
                Access the CTF platform on event day and start solving
                challenges
              </p>
            </div>
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
