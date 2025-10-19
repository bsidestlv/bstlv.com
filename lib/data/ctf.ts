export interface CTFWinner {
  place: 1 | 2 | 3;
  teamName: string;
  points: number;
}

export interface CTFResults {
  year: number;
  winners: CTFWinner[];
  totalTeams: number;
  totalPlayers: number;
  totalChallenges: number;
}

export interface CTFCategory {
  name: string;
  icon: string;
  description: string;
}

export interface CTFInfo {
  currentYear: number;
  isPostponed: boolean;
  format: string;
  duration: string;
  challengeCount: string;
  categories: CTFCategory[];
  historicalResults: CTFResults[];
}

export const ctfData: CTFInfo = {
  currentYear: 2025,
  isPostponed: true,
  format: "Jeopardy Style",
  duration: "8 Hours",
  challengeCount: "20+",
  categories: [
    {
      name: "Cryptography",
      icon: "🔐",
      description: "Encryption, hashing, protocols",
    },
    {
      name: "Web Security",
      icon: "🌐",
      description: "XSS, SQLi, CSRF, logic flaws",
    },
    {
      name: "Binary",
      icon: "💻",
      description: "Reverse engineering, pwn",
    },
    {
      name: "Forensics",
      icon: "🕵️",
      description: "Digital investigation, OSINT",
    },
  ],
  historicalResults: [
    {
      year: 2024,
      winners: [
        { place: 1, teamName: "TeamIL", points: 4250 },
        { place: 2, teamName: "Cyber_Guardians", points: 3890 },
        { place: 3, teamName: "H4ckTheW0rld", points: 3650 },
      ],
      totalTeams: 127,
      totalPlayers: 340,
      totalChallenges: 22,
    },
    {
      year: 2023,
      winners: [
        { place: 1, teamName: "SecMasters", points: 3980 },
        { place: 2, teamName: "ByteHunters", points: 3720 },
        { place: 3, teamName: "CyberNinjas", points: 3450 },
      ],
      totalTeams: 98,
      totalPlayers: 280,
      totalChallenges: 18,
    },
    {
      year: 2022,
      winners: [
        { place: 1, teamName: "EliteHackers", points: 3650 },
        { place: 2, teamName: "SecureTeam", points: 3420 },
        { place: 3, teamName: "DataDiggers", points: 3180 },
      ],
      totalTeams: 75,
      totalPlayers: 220,
      totalChallenges: 16,
    },
  ],
};
