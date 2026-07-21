/**
 * Every site-wide fact lives here. Edit this file — never the components —
 * to change contact details, the headline, experience, or skills.
 */

export const site = {
  name: 'Marc-Andy Noel Jeune',
  role: 'Full-Stack & AI Engineer',
  headline:
    'I build production web and mobile apps end to end — React, TypeScript, Node, and Python on AWS — and AI-driven automation that keeps humans in the loop.',
  status:
    'Software consultant at Lotnivo since 2021 · open to full-time engineering roles',
  location: 'New York City metro · Remote',
  email: 'marcandy.nj@gmail.com',
  github: 'https://github.com/Marcandy',
  linkedin: 'https://www.linkedin.com/in/marcandy/',
  repo: 'https://github.com/Marcandy/marcandy.github.io',
  resume: {
    available: true,
    path: '/resume.pdf',
    label: 'Resume (PDF)',
  },
  description:
    'Full-stack software engineer with 10 years shipping production web and mobile apps — React, TypeScript, Node, Python, AWS — now building AI-driven automation and agent pipelines.',
};

export const about: string[] = [
  'My family moved from Haiti to the United States when I was 15, and a teenage fascination with how the web works turned into freelance WordPress builds for local businesses — then into a career.',
  "Since then I've shipped software at enterprise scale — JCPenney's retail loyalty platform, internal financial applications at Wells Fargo — and since 2021 I've run my own consulting practice, Lotnivo, delivering full-stack products and AI-driven automation for clients.",
  'I care about the unglamorous things that make software trustworthy: tests, accessibility, clear architecture, and documentation that tells the truth.',
  "I'm now looking for a full-time software engineering role where that range is useful — and where I can keep learning from a strong team.",
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: 'Lotnivo',
    role: 'Software Consultant',
    period: 'Mar 2021 – Present',
    location: 'Remote',
    bullets: [
      'Architect and deliver full-stack web and mobile applications end to end — React, Next.js, React Native, Node.js, TypeScript — owning UI and backend services.',
      'Design REST and GraphQL APIs (Node/Express, Python/Django) integrating relational databases and AWS (S3, Lambda, EC2).',
      'Build AI-driven automation, including a multi-stage agent pipeline that scores inputs with cost-tiered models behind human-approval guardrails.',
      'Ship with tests (Jest, React Testing Library, Playwright), code review, Docker, and GitHub Actions CI/CD; mentor developers through pairing.',
    ],
  },
  {
    company: 'Wells Fargo',
    role: 'Software Engineer',
    period: 'May 2019 – Jun 2020',
    location: 'Charlotte, NC',
    bullets: [
      'Developed internal financial web applications in a large, regulated, multi-team codebase alongside security, compliance, and product teams.',
      'Implemented accessibility and internationalization across all pages to WCAG/ARIA guidance, expanding the usable audience by over 25%.',
    ],
  },
  {
    company: 'JCPenney',
    role: 'Software Engineer',
    period: 'Jun 2017 – May 2019',
    location: 'Plano, TX',
    bullets: [
      'Built front-end features and integrated backend services for a high-traffic retail loyalty platform serving millions of users.',
      'Refactored a legacy monolith into modular, component-driven architecture, improving scalability and long-term maintainability.',
    ],
  },
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    group: 'Front End',
    items: ['React', 'Next.js', 'React Native', 'Redux', 'Angular', 'Tailwind CSS'],
  },
  {
    group: 'Back End',
    items: ['Node.js', 'Express', 'Django', 'REST API design', 'GraphQL', 'PostgreSQL'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (S3, Lambda, EC2)', 'Docker', 'GitHub Actions', 'CI/CD', 'Git', 'Linux/Bash'],
  },
  {
    group: 'Testing & AI',
    items: [
      'Jest',
      'React Testing Library',
      'Playwright',
      'Cypress',
      'Claude Code',
      'Codex',
      'Agentic workflow design',
    ],
  },
  {
    group: 'Practices',
    items: [
      'Agile/Scrum',
      'Accessibility (WCAG)',
      'Code review',
      'Mentorship',
      'Technical documentation',
    ],
  },
];
