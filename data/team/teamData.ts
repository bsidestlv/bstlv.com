export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  github?: string;
}

export interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

// Seeded shuffle function for consistent randomization
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const j = Math.floor((currentSeed / 233280) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate a render-specific seed that changes on each page load
// but remains consistent between server and client for the same render
function getRandomSeed(): number {
  // Use timestamp in minutes to ensure different randomization on each visit
  // but still deterministic within the same minute
  const now = Date.now();
  const minutesSinceEpoch = Math.floor(now / (1000 * 60));
  return minutesSinceEpoch;
}

// Base team data (static) (static)
const baseTeamData: TeamSection[] = [
  {
    title: "Organizing Team",
    description: "The amazing people making BSidesTLV 2025 happen",
    members: [
      {
        name: "Elad Shuster",
        role: "Team Member",
        image: "/images/team/elad_shuster.jpg",
      },
      {
        name: "Guy Barnhart-Magen",
        role: "Profero, founder and CTO",
        image: "/images/team/guy_bm.jpg",
        twitter: "https://twitter.com/barnhartguy",
        linkedin: "https://www.linkedin.com/in/guy-barnhart-magen",
        website: "https://productsecurity.info",
      },
      {
        name: "Irena Damsky",
        role: "Team Member",
        image: "/images/team/ID.jpg",
        twitter: "https://twitter.com/DmaskyIrena",
        linkedin: "https://www.linkedin.com/in/irenadam",
        website: "http://damsky.tech",
      },
      {
        name: "Inbar Raz",
        role: "CEO, Unarmed Security | Hacker of Things",
        image: "/images/team/inbar_raz.jpg",
        twitter: "https://twitter.com/inbarraz",
        linkedin: "https://www.linkedin.com/in/inbarraz/",
      },
      {
        name: "Keren Elazari",
        role: "Hack The Planet | Founder, BSidesTLV & Leading Cyber Ladies",
        image: "/images/team/keren_elazari.jpg",
        twitter: "https://twitter.com/k3r3n3",
        linkedin: "https://www.linkedin.com/in/kerene",
        website: "http://www.k3r3n3.com/",
      },
      {
        name: "Omer Cohen",
        role: "CSO, Descope",
        image: "/images/team/omer_cohen.jpg",
        twitter: "https://www.twitter.com/omercnet",
        linkedin: "https://www.linkedin.com/in/omercohen",
        website: "http://omer.cohen.io/",
        github: "https://github.com/omercnet",
      },
      {
        name: "Reut Menashe",
        role: "CEO, Tetrisponse.io | Co-Leader, Leading Cyber Ladies | BSidesTLV Producer",
        image: "/images/team/reut_menashe.jpg",
        twitter: "https://twitter.com/Reutooo_",
        linkedin: "https://wwww.linkedin.com/in/reutmenashe",
        website: "https://www.reut-menashe.com/",
      },
      {
        name: "Roei Sherman",
        role: "Not how many, but where",
        image: "/images/team/RS.jpg",
        twitter: "https://twitter.com/x_Freed0m",
        linkedin: "https://www.linkedin.com/in/freed0m/",
        website: "http://betheadversary.com/",
        github: "https://github.com/xfreed0m",
      },
      {
        name: "Inbal Pearlson",
        role: "Team Member",
        image: "/images/team/inbal.jpg",
        linkedin: "https://www.linkedin.com/in/inbal-pearlson-91709730/",
      },
      {
        name: "Eden Katz",
        role: "Security Researcher, GenAI Security Tech Lead",
        image: "/images/team/eden_katz.jpg",
        twitter: "https://x.com/wwcyber",
        linkedin: "https://www.linkedin.com/in/edenkatz5",
      },
      {
        name: "Guy Halfon",
        role: "Team Member",
        image: "/images/team/guy_halfon.jpg",
      },
      {
        name: "Nofar Terenyo",
        role: "Team Member",
        image: "/images/team/nofar_terenyo.jpg",
      },
      {
        name: "Lavie Ben-Baruch",
        role: "Team Member",
        image: "/images/team/lavie_ben_baruch.jpg",
      },
      {
        name: "Benny Meisels",
        role: "Team Member",
        image: "/images/team/benny_meisels1.jpg",
      },
      {
        name: "Michal Kamensky",
        role: "Team Member",
        image: "/images/team/michal_kamensky.jpg",
      },
    ],
  },
  {
    title: "CFP Review Board",
    description: "Expert reviewers ensuring high-quality content",
    members: [
      {
        name: "Limor Kessem",
        role: "X-Force Cyber Crisis Management, Global Lead at IBM",
        image: "/images/team/limor_kessem.jpg",
        twitter: "https://twitter.com/iCyberFighter",
        linkedin: "https://www.linkedin.com/in/limor-sylvie-kessem/",
      },
      {
        name: "Marion Marschalek",
        role: "Founder, BlackHoodie women RE workshop",
        image: "/images/team/marion_marschalek.jpg",
        linkedin: "https://www.linkedin.com/in/marion-marschalek-06b79642/",
      },
      {
        name: "Migo Kedem",
        role: "VP, Office of the CEO & Strategic Initiatives at CrowdStrike",
        image: "/images/team/migo_kedem.jpg",
        linkedin: "https://www.linkedin.com/in/migokedem/",
      },
      {
        name: "Ohad Zaidenberg",
        role: "Strategic Threat Intelligence Leader | CTI Researcher",
        image: "/images/team/ohad_zaidenberg.jpg",
        twitter: "https://twitter.com/ohad_mz",
        linkedin: "https://www.linkedin.com/in/ohad-zaidenberg/",
      },
      {
        name: "Noy Pearl",
        role: "Security Researcher at Planet Nine",
        image: "/images/team/noy_pearl.jpg",
        linkedin: "https://www.linkedin.com/in/noy-pearl-419812188/",
      },
      {
        name: "Sharon Brizinov",
        role: "Director of Research at Claroty",
        image: "/images/team/sharon_brizinov.jpg",
        linkedin: "https://www.linkedin.com/in/sharonbrizinov/",
      },
      {
        name: "Ilil Blum Shem-Tov",
        role: "Security Research Team Manager at Intel",
        image: "/images/team/ilil_blum.jpg",
        linkedin:
          "https://www.linkedin.com/in/ilil-blum-shem-tov-ph-d-aa5a4321/",
      },
      {
        name: "Gal Bitensky",
        role: "Principal Security Researcher at Palo Alto Networks",
        image: "/images/team/gal_bitensky.jpg",
        linkedin: "https://www.linkedin.com/in/gal-bitensky/",
      },
      {
        name: "Yossi Sassi",
        role: "Co-Founder, Chief Security Architect at Ten Root Cyber Security",
        image: "/images/team/yossi_sassi.jpg",
        linkedin: "https://www.linkedin.com/in/yossisassi/",
      },
    ],
  },
];

// Export randomized team data that changes every minute but is consistent within each render
export const teamData: TeamSection[] = (() => {
  const seed = getRandomSeed();
  return baseTeamData.map((section, index) => ({
    ...section,
    members: shuffleWithSeed(section.members, seed + index),
  }));
})();
