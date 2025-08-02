import { teamMembers, cfpBoardMembers, TeamMember } from '../../lib/data/team';
import Image from 'next/image';
import Link from 'next/link';

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-600">
            {member.title.split(' ').map(name => name[0]).join('')}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.title}</h3>
        {member.subtitle && (
          <p className="text-gray-600 text-sm mb-4">{member.subtitle}</p>
        )}
        {member.socials && member.socials.length > 0 && (
          <div className="flex justify-center space-x-3">
            {member.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
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
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/speakers" className="text-gray-700 hover:text-blue-600">Speakers</Link>
              <Link href="/agenda" className="text-gray-700 hover:text-blue-600">Agenda</Link>
              <Link href="/sponsors" className="text-gray-700 hover:text-blue-600">Sponsors</Link>
              <Link href="/team" className="text-gray-900 hover:text-blue-600 font-semibold">Team</Link>
              <Link href="/cfp" className="text-gray-700 hover:text-blue-600">CFP</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the Team
          </h1>
          <p className="text-xl">
            The amazing people behind BSidesTLV 2025
          </p>
        </div>
      </section>

      {/* Organizing Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Organizing Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CFP Board */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            CFP Review Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cfpBoardMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
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