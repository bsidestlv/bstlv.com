'use client';

import { teamData, TeamMember } from '../../data/team/teamData';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import { useState } from 'react';

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);
  const imagePath = member.image;
  const initials = member.name.split(' ').map(name => name[0]).join('');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 relative">
          {!imageError && imagePath ? (
            <Image
              src={imagePath}
              alt={member.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">
                {initials}
              </span>
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[3rem] flex items-center justify-center">{member.name}</h3>
        {member.role && (
          <p className="text-gray-600 text-sm mb-4 min-h-[2.5rem] flex items-center justify-center text-center">{member.role}</p>
        )}
        {(member.linkedin || member.twitter || member.website || member.github) && (
          <div className="flex justify-center space-x-3 flex-wrap">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                LinkedIn
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Twitter
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Site
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Github
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  // Generate daily seed and randomize team data consistently
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

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

      {/* Team Sections */}
      {teamData.map((section, sectionIndex) => (
        <section key={sectionIndex} className={sectionIndex % 2 === 0 ? "py-16" : "py-16 bg-white"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {section.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.members.map((member, index) => (
                <TeamMemberCard key={`${sectionIndex}-${index}`} member={member} />
              ))}
            </div>
          </div>
        </section>
      ))}

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