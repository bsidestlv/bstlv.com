export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

export const teamData: TeamSection[] = [
  {
    title: "Organizing Team",
    description: "The amazing people making BSidesTLV 2025 happen",
    members: [
      {
        name: "Omer Candan",
        role: "Conference Lead & Founder",
        image: "/images/team/omer.jpg"
      },
      {
        name: "Sarah Cohen",
        role: "Program Director",
        image: "/images/team/sarah.jpg"
      },
      {
        name: "David Levi",
        role: "Technical Lead",
        image: "/images/team/david.jpg"
      },
      {
        name: "Maya Goldstein",
        role: "Community Manager",
        image: "/images/team/maya.jpg"
      },
      {
        name: "Alex Rosenberg",
        role: "Sponsorship Lead",
        image: "/images/team/alex.jpg"
      },
      {
        name: "Noa Shapira",
        role: "Marketing & Communications",
        image: "/images/team/noa.jpg"
      },
      {
        name: "Yoni Friedman",
        role: "Logistics Coordinator",
        image: "/images/team/yoni.jpg"
      },
      {
        name: "Rachel Green",
        role: "Volunteer Coordinator",
        image: "/images/team/rachel.jpg"
      },
      {
        name: "Eitan Bar",
        role: "Security Lead",
        image: "/images/team/eitan.jpg"
      },
      {
        name: "Tali Rosen",
        role: "Design & Media",
        image: "/images/team/tali.jpg"
      },
      {
        name: "Dan Cohen",
        role: "Workshop Coordinator",
        image: "/images/team/dan.jpg"
      },
      {
        name: "Shira Levy",
        role: "Registration & Check-in",
        image: "/images/team/shira.jpg"
      },
      {
        name: "Amit Katz",
        role: "Technology Infrastructure",
        image: "/images/team/amit.jpg"
      },
      {
        name: "Liat Goldberg",
        role: "Content Coordinator",
        image: "/images/team/liat.jpg"
      },
      {
        name: "Yaron Avni",
        role: "CTF Lead",
        image: "/images/team/yaron.jpg"
      }
    ]
  },
  {
    title: "CFP Review Board",
    description: "Expert reviewers ensuring high-quality content",
    members: [
      {
        name: "Dr. Michael Stern",
        role: "Academic Review Lead",
        image: "/images/review/michael.jpg"
      },
      {
        name: "Gal Weiss",
        role: "Industry Expert",
        image: "/images/review/gal.jpg"
      },
      {
        name: "Hila Ben-David",
        role: "Technical Reviewer",
        image: "/images/review/hila.jpg"
      },
      {
        name: "Ori Shachar",
        role: "Content Quality Reviewer",
        image: "/images/review/ori.jpg"
      },
      {
        name: "Maya Goldstein",
        role: "Community Representative",
        image: "/images/review/maya_r.jpg"
      },
      {
        name: "Yossi Gottlieb",
        role: "Technical Standards",
        image: "/images/review/yossi.jpg"
      },
      {
        name: "Tamar Azoulay",
        role: "Diversity & Inclusion",
        image: "/images/review/tamar.jpg"
      },
      {
        name: "Roei Sagiv",
        role: "Innovation Track",
        image: "/images/review/roei.jpg"
      },
      {
        name: "Nir Ohad",
        role: "Practical Security",
        image: "/images/review/nir.jpg"
      }
    ]
  }
];