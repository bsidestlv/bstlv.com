import Navigation from "../components/Navigation";
import Link from "next/link";

export default function CTFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🏆 Capture The Flag
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Test your cybersecurity skills in our annual CTF competition
          </p>
          <p className="text-lg">
            Join hundreds of security enthusiasts in our challenging CTF event
          </p>
        </div>
      </section>

      {/* Current CTF Status */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">🚧 CTF 2025 Updates</h2>
            <p className="text-lg text-yellow-800 mb-6">
              Due to the event postponement, CTF 2025 details will be announced once we 
              confirm the new date. We&apos;re preparing even more exciting challenges!
            </p>
            <p className="text-yellow-700">
              Start practicing now - this year&apos;s CTF will feature 20+ challenges across 
              multiple categories to test your skills!
            </p>
          </div>
        </div>
      </section>

      {/* CTF Overview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What is BSidesTLV CTF?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jeopardy Style</h3>
              <p className="text-gray-700">
                Multiple categories with challenges of varying difficulty levels
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8 Hours</h3>
              <p className="text-gray-700">
                Full day competition running parallel to the main conference
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">20+ Challenges</h3>
              <p className="text-gray-700">
                Diverse set of challenges covering all major security domains
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Challenge Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🔐</div>
                <h4 className="font-semibold text-gray-900">Cryptography</h4>
                <p className="text-sm text-gray-600">Encryption, hashing, protocols</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-semibold text-gray-900">Web Security</h4>
                <p className="text-sm text-gray-600">XSS, SQLi, CSRF, logic flaws</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <h4 className="font-semibold text-gray-900">Binary</h4>
                <p className="text-sm text-gray-600">Reverse engineering, pwn</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🕵️</div>
                <h4 className="font-semibold text-gray-900">Forensics</h4>
                <p className="text-sm text-gray-600">Digital investigation, OSINT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            CTF Hall of Fame
          </h2>
          
          <div className="space-y-8">
            {/* 2024 Results */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border border-yellow-200">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">🏆 BSidesTLV 2024 CTF Winners</h3>
                <Link 
                  href="/ctf/2024"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">1st Place</h4>
                  <p className="text-lg text-gray-700 font-medium">TeamIL</p>
                  <p className="text-gray-600">4,250 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">2nd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">Cyber_Guardians</p>
                  <p className="text-gray-600">3,890 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">3rd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">H4ckTheW0rld</p>
                  <p className="text-gray-600">3,650 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 127 teams • 340+ players • 22 challenges
                </p>
              </div>
            </div>

            {/* 2023 Results */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">🏆 BSidesTLV 2023 CTF Winners</h3>
                <Link 
                  href="/ctf/2023"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">1st Place</h4>
                  <p className="text-lg text-gray-700 font-medium">SecMasters</p>
                  <p className="text-gray-600">3,980 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">2nd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">ByteHunters</p>
                  <p className="text-gray-600">3,720 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">3rd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">CyberNinjas</p>
                  <p className="text-gray-600">3,450 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 98 teams • 280+ players • 18 challenges
                </p>
              </div>
            </div>

            {/* 2022 Results */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border border-green-200">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">🏆 BSidesTLV 2022 CTF Winners</h3>
                <Link 
                  href="/ctf/2022"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">1st Place</h4>
                  <p className="text-lg text-gray-700 font-medium">idek</p>
                  <p className="text-gray-600">Top scores</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">2nd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">BobbyTables</p>
                  <p className="text-gray-600">Strong performance</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">3rd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">TheHotDogSellers</p>
                  <p className="text-gray-600">Creative team name</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 681 teams • 1,158+ users • 26 challenges
                </p>
              </div>
            </div>

            {/* 2021 Results */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">🏆 BSidesTLV 2021 CTF Winners</h3>
                <Link 
                  href="/ctf/2021"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥇</div>
                  <h4 className="text-xl font-semibold text-gray-900">1st Place</h4>
                  <p className="text-lg text-gray-700 font-medium">JCTF</p>
                  <p className="text-gray-600">2,850 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥈</div>
                  <h4 className="text-xl font-semibold text-gray-900">2nd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">dm0n</p>
                  <p className="text-gray-600">2,420 points</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🥉</div>
                  <h4 className="text-xl font-semibold text-gray-900">3rd Place</h4>
                  <p className="text-lg text-gray-700 font-medium">NoobsWithHopesAndDreams</p>
                  <p className="text-gray-600">2,180 points</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  <strong>Participation:</strong> 190 teams • 374+ users • 18 challenges
                </p>
              </div>
            </div>

            {/* Archive Section */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📚 CTF Archive</h3>
              <p className="text-center text-gray-700 mb-6">
                Explore detailed results and information from previous years
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ctf/2024" className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">2024</Link>
                <Link href="/ctf/2023" className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">2023</Link>
                <Link href="/ctf/2022" className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">2022</Link>
                <Link href="/ctf/2021" className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">2021</Link>
                <span className="border border-gray-200 px-4 py-2 rounded-lg text-gray-400">2020</span>
                <span className="border border-gray-200 px-4 py-2 rounded-lg text-gray-400">2019</span>
                <span className="border border-gray-200 px-4 py-2 rounded-lg text-gray-400">2018</span>
                <span className="border border-gray-200 px-4 py-2 rounded-lg text-gray-400">2017</span>
                <span className="border border-gray-200 px-4 py-2 rounded-lg text-gray-400">2016</span>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Earlier years coming soon - help us digitize the archives!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Resources */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice for CTF 2025</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get ready for our next CTF with these practice resources and previous challenges!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Practice Platforms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• OverTheWire Wargames</li>
                <li>• PicoCTF</li>
                <li>• HackTheBox</li>
                <li>• TryHackMe</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Learning Resources</h3>
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
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 Previous CTF Challenges
            </a>
            <a 
              href="https://slack.bsidestlv.com" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Join CTF Discussion
            </a>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Participate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">1. Register</h3>
              <p className="text-blue-800">
                Register for BSidesTLV 2025 (CTF included with conference ticket)
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">2. Form a Team</h3>
              <p className="text-green-800">
                Teams of 1-4 people. Join our Slack to find teammates!
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Compete</h3>
              <p className="text-purple-800">
                Access the CTF platform on event day and start solving challenges
              </p>
            </div>
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