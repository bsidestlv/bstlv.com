export interface TeamMember {
  name: string;
  type: "team" | "cfpboard";
  subtitle?: string;
  key: string;
  image?: string; // Optional profile image path
  socials?: {
    link: string;
    name: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Elad Shuster",
    type: "team",
    key: "elad_shuster",
  },
  {
    name: "Guy Barnhart-Magen",
    type: "team",
    subtitle: "Profero, founder and CTO",
    key: "guy_bm",
    image: "/images/team/guy_bm.jpg",
    socials: [
      { link: "https://twitter.com/barnhartguy", name: "Twitter" },
      {
        link: "https://www.linkedin.com/in/guy-barnhart-magen",
        name: "LinkedIn",
      },
      { link: "https://productsecurity.info", name: "Site" },
    ],
  },
  {
    name: "Irena Damsky",
    type: "team",
    key: "ID",
    socials: [
      { link: "https://twitter.com/DmaskyIrena", name: "Twitter" },
      { link: "http://damsky.tech", name: "Site" },
      { link: "https://www.linkedin.com/in/irenadam", name: "LinkedIn" },
    ],
  },
  {
    name: "Inbar Raz",
    type: "team",
    subtitle: "CEO, Unarmed Security | Hacker of Things.",
    key: "inbar_raz",
    image: "/images/team/inbar_raz.jpg",
    socials: [
      { link: "https://twitter.com/inbarraz", name: "Twitter" },
      { link: "https://www.linkedin.com/in/inbarraz/", name: "LinkedIn" },
    ],
  },
  {
    name: "Keren Elazari",
    type: "team",
    subtitle: "Hack The Planet | Founder, BSidesTLV & Leading Cyber Ladies",
    key: "keren_elazari",
    image: "/images/team/keren_elazari.jpg",
    socials: [
      { link: "https://twitter.com/k3r3n3", name: "Twitter" },
      { link: "http://www.k3r3n3.com/", name: "Site" },
      { link: "https://www.linkedin.com/in/kerene", name: "LinkedIn" },
    ],
  },
  {
    name: "Omer Cohen",
    type: "team",
    subtitle: "CSO, Descope",
    key: "omer_cohen",
    image: "/images/team/omer_cohen.jpg",
    socials: [
      { link: "https://www.twitter.com/omercnet", name: "Twitter" },
      { link: "http://omer.cohen.io/", name: "Site" },
      { link: "https://www.linkedin.com/in/omercohen", name: "LinkedIn" },
      { link: "https://github.com/omercnet", name: "Github" },
    ],
  },
  {
    name: "Reut Menashe",
    type: "team",
    subtitle:
      "CEO, Tetrisponse.io | Co-Leader, Leading Cyber Ladies | BSidesTLV Producer",
    key: "reut_menashe",
    socials: [
      { link: "https://www.reut-menashe.com/", name: "Site" },
      { link: "https://twitter.com/Reutooo_", name: "Twitter" },
      { link: "https://wwww.linkedin.com/in/reutmenashe", name: "LinkedIn" },
      { link: "https://leadingcyberladies.com/", name: "Site" },
    ],
  },
  {
    name: "Roei Sherman",
    type: "team",
    subtitle: "Not how many, but where.",
    key: "RS",
    image: "/images/team/RS.jpg",
    socials: [
      { link: "https://twitter.com/x_Freed0m", name: "Twitter" },
      { link: "http://betheadversary.com/", name: "Site" },
      { link: "https://www.linkedin.com/in/freed0m/", name: "LinkedIn" },
      { link: "https://github.com/xfreed0m", name: "Github" },
    ],
  },
  {
    name: "Inbal Pearlson",
    type: "team",
    key: "inbal",
    socials: [
      {
        link: "https://www.linkedin.com/in/inbal-pearlson-91709730/",
        name: "Linkdin",
      },
    ],
  },
  {
    name: "Eden Katz",
    type: "team",
    subtitle: "Security Researcher, GenAI Security Tech Lead",
    key: "eden_katz",
    socials: [
      { link: "https://www.linkedin.com/in/edenkatz5", name: "LinkedIn" },
      { link: "https://x.com/wwcyber", name: "Twitter" },
    ],
  },
  {
    name: "Guy Halfon",
    type: "team",
    key: "guy_halfon",
    socials: [],
  },
  {
    name: "Nofar Terenyo",
    type: "team",
    key: "nofar_terenyo",
    socials: [],
  },
  {
    name: "Lavie Ben-Baruch",
    type: "team",
    key: "lavie_ben_baruch",
    socials: [],
  },
  {
    name: "Benny Meisels",
    type: "team",
    key: "benny_meisels1",
    socials: [],
  },
  {
    name: "Michal Kamensky",
    type: "team",
    key: "michal_kamensky",
    socials: [],
  },
];

export const cfpBoardMembers: TeamMember[] = [
  {
    name: "Limor Kessem",
    type: "cfpboard",
    subtitle: "X-Force Cyber Crisis Management, Global Lead at IBM",
    key: "limor_kessem",
    socials: [
      {
        link: "https://www.linkedin.com/in/limor-sylvie-kessem/",
        name: "LinkedIn",
      },
      { link: "https://twitter.com/iCyberFighter", name: "Twitter" },
    ],
  },
  {
    name: "Marion Marschalek",
    type: "cfpboard",
    subtitle: "Founder, BlackHoodie women RE workshop",
    key: "marion_marschalek",
    socials: [
      {
        link: "https://www.linkedin.com/in/marion-marschalek-06b79642/",
        name: "LinkedIn",
      },
    ],
  },
  {
    name: "Migo Kedem",
    type: "cfpboard",
    subtitle: "VP, Office of the CEO & Strategic Initiatives at CrowdStrike",
    key: "migo_kedem",
    socials: [
      { link: "https://www.linkedin.com/in/migokedem/", name: "LinkedIn" },
    ],
  },
  {
    name: "Ohad Zaidenberg",
    type: "cfpboard",
    subtitle: "Strategic Threat Intelligence Leader | CTI Researcher",
    key: "ohad_zaidenberg",
    socials: [
      {
        link: "https://www.linkedin.com/in/ohad-zaidenberg/",
        name: "LinkedIn",
      },
      { link: "https://twitter.com/ohad_mz", name: "Twitter" },
    ],
  },
  {
    name: "Noy Pearl",
    type: "cfpboard",
    subtitle: "Security Researcher at Planet Nine",
    key: "noy_pearl",
    socials: [
      {
        link: "https://www.linkedin.com/in/noy-pearl-419812188/",
        name: "LinkedIn",
      },
    ],
  },
  {
    name: "Sharon Brizinov",
    type: "cfpboard",
    subtitle: "Director of Research at Claroty",
    key: "sharon_brizinov",
    socials: [
      { link: "https://www.linkedin.com/in/sharonbrizinov/", name: "LinkedIn" },
    ],
  },
  {
    name: "Ilil Blum Shem-Tov",
    type: "cfpboard",
    subtitle: "Security Research Team Manager at Intel",
    key: "ilil_blum",
    socials: [
      {
        link: "https://www.linkedin.com/in/ilil-blum-shem-tov-ph-d-aa5a4321/",
        name: "LinkedIn",
      },
    ],
  },
  {
    name: "Gal Bitensky",
    type: "cfpboard",
    subtitle: "Principal Security Researcher at Palo Alto Networks",
    key: "gal_bitensky",
    socials: [
      { link: "https://www.linkedin.com/in/gal-bitensky/", name: "LinkedIn" },
    ],
  },
  {
    name: "Yossi Sassi",
    type: "cfpboard",
    subtitle: "Co-Founder, Chief Security Architect at Ten Root Cyber Security",
    key: "yossi_sassi",
    socials: [
      { link: "https://www.linkedin.com/in/yossisassi/", name: "LinkedIn" },
    ],
  },
];
