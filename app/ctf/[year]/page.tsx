import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import { ctfData } from '../../../data/ctf/ctfData';

interface CTFPageProps {
  params: Promise<{ year: string }>;
}

async function getCTFYearData(year: string) {
  const yearNum = parseInt(year);
  return ctfData.historicalResults.find(result => result.year === yearNum);
}

export async function generateStaticParams() {
  return ctfData.historicalResults.map(result => ({
    year: result.year.toString(),
  }));
}

export default async function CTFYearPage({ params }: CTFPageProps) {
  const { year } = await params;
  const yearData = await getCTFYearData(year);

  if (!yearData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🏆 BSidesTLV {yearData.year} CTF
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Capture The Flag Competition Results
          </p>
        </div>
      </section>

      {/* Winners Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              🏆 Winners
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {yearData.winners.map((winner) => (
                <div key={winner.place} className="text-center">
                  <div className="text-4xl mb-2">
                    {winner.place === 1 ? '🥇' : winner.place === 2 ? '🥈' : '🥉'}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {winner.place === 1 ? '1st' : winner.place === 2 ? '2nd' : '3rd'} Place
                  </h4>
                  <p className="text-lg text-gray-700 font-medium">{winner.teamName}</p>
                  <p className="text-gray-600">{winner.points.toLocaleString()} points</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competition Statistics</h3>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{yearData.totalTeams}</div>
                  <div className="text-sm">Teams</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{yearData.totalPlayers}+</div>
                  <div className="text-sm">Players</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{yearData.totalChallenges}</div>
                  <div className="text-sm">Challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Challenge Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctfData.categories.map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-gray-900">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to CTF Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/ctf"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to CTF Overview
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            BSidesTLV {yearData.year} CTF - Thank you for participating!
          </p>
          <div className="mt-4">
            <p className="text-gray-400">
              We ❤️ TLV
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}