export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export const portfolio = {
  person: {
    firstName: "Adithya",
    lastName: "Thaninki",
    headline: "Graduate student in Computer Science at Carleton University (Co-op) — hands-on experience from TCS, building full-stack & AI systems.",
    email: "adithya040@gmail.com",
    locationLabel: "Ottawa, ON, Canada",
    availabilityLabel: "Available for Co-op · May 2026",
  },
  nav: [
    { label: "Index", href: "#index" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Let's talk", href: "#contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/adithyathaninki" },
    { label: "GitHub", href: "https://github.com/adithyalee" },
    { label: "Email", href: "mailto:adithya040@gmail.com" },
  ] satisfies SocialLink[],
  stats: [
    { label: "Experience", value: "1+ year" },
    { label: "Education", value: "MCS Co-op" },
    { label: "Focus", value: "Full-Stack · AI · Cloud" },
    { label: "Status", value: "Co-op candidate" },
  ],
  awards: [
    { label: "AWS Certified Cloud Practitioner", year: "2024", project: "Cloud" },
    { label: "Azure AI-900", year: "2024", project: "AI/ML" },
    { label: "Azure AZ-900", year: "2024", project: "Cloud" },
    { label: "IBM ML Professional Certificate", year: "2023", project: "ML" },
  ],
  services: ["Full-Stack Development", "AI/ML Systems", "Cloud & DevOps"],
  projects: [
    {
      slug: "bitmex",
      title: "BitMEX",
      subtitle: "Brand strategy & product design refresh for a global exchange.",
      year: "2023",
      role: "Head of Design & Brand",
      description:
        "Led a repositioning effort across brand and product surfaces with a focus on trust, clarity, and consistency across a complex ecosystem.",
      tags: ["Brand", "Product", "Design Systems"],
    },
    {
      slug: "defiscan",
      title: "DeFiScan",
      subtitle: "Explorer experience for a DeFi ecosystem.",
      year: "2021",
      role: "Lead Product Designer",
      description:
        "Designed an information-dense explorer that stays readable under pressure, balancing power-user workflows with approachable navigation.",
      tags: ["Data UX", "Web App", "Information Architecture"],
    },
    {
      slug: "tyme",
      title: "Tyme Bank",
      subtitle: "Investment suite + cohesive branding in a fast-moving digital bank.",
      year: "2021",
      role: "Lead Product Designer",
      description:
        "Owned end-to-end flows and visuals across investment products; collaborated cross-functionally to ship features and align teams around a shared design language.",
      tags: ["Fintech", "Mobile", "Brand"],
    },
  ] satisfies Project[],
  testimonials: [
    {
      name: "Long (Peter) Tran",
      title: "Motion & Interaction Designer",
      quote:
        "Deep design intuition, calm leadership, and an ability to turn messy problems into clear, usable interfaces.",
    },
    {
      name: "Chris Azzopardi",
      title: "Chief Product Officer",
      quote:
        "Strategic, user-centric, and relentlessly quality-focused. A rare blend of craft and product thinking.",
    },
    {
      name: "Silvano D'Orazio",
      title: "Group Head of UX and Brand",
      quote:
        "Versatile across product, brand, and systems. Great collaborator who raises the bar for everyone around them.",
    },
  ] satisfies Testimonial[],
} as const;

