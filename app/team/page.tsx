"use client";

import { cfpBoardMembers, TeamMember, teamMembers } from "@/lib/data/team";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/Navigation";

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);
  const imagePath = member.image;
  const initials = member.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="text-center">
        <div className="relative mx-auto mb-4 h-24 w-24">
          {!imageError && imagePath ? (
            <Image
              src={imagePath}
              alt={member.name}
              width={96}
              height={96}
              className="h-24 w-24 rounded-full border-2 border-gray-100 object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-xl font-bold text-white">{initials}</span>
            </div>
          )}
        </div>
        <h3 className="mb-2 flex min-h-[3rem] items-center justify-center text-lg font-semibold text-gray-900">
          {member.name}
        </h3>
        {member.socials?.map((social, index) => (
          <div key={index} className="flex flex-wrap justify-center space-x-3">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {social.name}
            </a>
          </div>
        ))}
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Meet the Team</h1>
          <p className="text-xl">The amazing people behind BSidesTLV 2025</p>
        </div>
      </section>

      {/* Team Sections */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4 text-center font-bold text-gray-900">
            Organizing Team
          </h2>
          <p className="mb-12 text-center text-gray-600">
            The driving force behind our event.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4 text-center font-bold text-gray-900">
            CFP Review Board
          </h2>
          <p className="mb-12 text-center text-gray-600">
            The people who ensure the quality and integrity of our event.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cfpBoardMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
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
