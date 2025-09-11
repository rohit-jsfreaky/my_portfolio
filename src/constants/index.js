import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  resume,
  job,
  zidio,
  Next,
  Express,
  GitHub,
  aws,
  MySQL,
  ReactNative,
  AiInterview,
  CsvEditor,
  cogent,
  corider,
  revenza,
  techorigins,
  pg,
  skillArena,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: Next,
  },
  {
    name: "React Native",
    icon: ReactNative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: Express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "PostgreSQL",
    icon: pg,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Techorigins",
    icon: techorigins,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Developed and optimized responsive UIs with React.js, improving page load performance by 30% and enhancing user retention",
      "Implemented reusable component libraries with TypeScript and Tailwind CSS, reducing development time by 25% across projects.",
      "Collaborated with backend teams to integrate REST and GraphQL APIs, cutting integration issues by 40%",
      "Improved accessibility and SEO scores of web apps, achieving 95+ Lighthouse scores and boosting organic traffic",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Revenza Tech",
    icon: revenza,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Developed and deployed custom ERP systems, streamlining workflows and reducing manual processing time by 30%.",
      "Built responsive web applications that improved user engagement and led to a 25% faster load time across platforms.",
      "Delivered cross-platform mobile apps that enhanced customer reach, achieving 40% higher user adoption within the first release cycle.",
      "Managed full-stack development independently, completing projects 20% ahead of deadlines while ensuring 99.9% uptime",
    ],
  },
  {
    title: "Software Developer Engineer intern (React-native)",
    company_name: "CoRider",
    icon: corider,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Improved UI Performance by 40% – Optimized re-renders and data flow to enhance app responsiveness and user experience.",
      "Integrated 100% Functional Features – Successfully implemented Google APIs, user KYC verification, and real-time chat, ensuring seamless interactions.",
      "Ensured 99.9% Uptime on Both Platforms – Fixed Android and iOS-specific issues, enabling smooth cross-platform functionality.",
      "Enhanced State Management by 60% – Optimized data handling for real-time updates, reducing lag and improving app efficiency.",
    ],
  },
  {
    title: "Software Developer intern",
    company_name: "Cogent Web Services",
    icon: cogent,
    iconBg: "#383E56",
    date: "July 2024 - Dec 2024",
    points: [
      "Developed 5+ full-stack web applications using MERN stack and PostgreSQL, including complex platforms like an esports tournament management system with secure authentication, payment integration, and admin control.",
      "Engineered complete backend and frontend architecture for multiple client projects, handling RESTful APIs, responsive UI, and real-time data using React, Node.js, and Express.",
      "Built and deployed a cross-platform mobile application using React Native under NDA, integrating secure user flows, API consumption, and native device capabilities.",
      "Delivered production-ready solutions for businesses, from modern portfolio websites to scalable multi-user platforms, improving user engagement and functionality by 40%+.",
    ],
  },
  {
    title: "Mern Stack Developer intern",
    company_name: "Zidio Development",
    icon: zidio,
    iconBg: "#383E56",
    date: "Apr 2024 - June 2024",
    points: [
      "Developed a full-stack AI-powered resume builder using React, Node.js, and MongoDB, integrating Gemini API for AI-driven suggestions and Clerk for secure authentication.",
      "Built a dynamic job portal using the MERN stack, implementing recruiter and student authentication, job posting features, and job application tracking.",
      "Utilized RESTful APIs to handle user authentication, job data retrieval, and secure communication between frontend and backend systems.",
      "Ensured seamless UI/UX with Tailwind CSS and Shadcn UI, improving user experience across devices while optimizing performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Skill Arena",
    description:
      "This project is a robust CSV management platform that combines dynamic table editing, cloud storage with AWS S3, and secure authentication to deliver a seamless and user-friendly experience for managing and editing CSV files. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Shad cn",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "green-text-gradient",
      },
    ],
    image: skillArena,
    source_code_link: "https://github.com/rohit-jsfreaky/skill-arena-frontend",
  },

  {
    name: "Csv Editor",
    description:
      "This project is a robust CSV management platform that combines dynamic table editing, cloud storage with AWS S3, and secure authentication to deliver a seamless and user-friendly experience for managing and editing CSV files. ",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Aws S3",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Shad cn",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "NextApi",
        color: "blue-text-gradient",
      },
    ],
    image: CsvEditor,
    source_code_link: "https://github.com/rohit-jsfreaky/Csv-Editor",
    web_link: "https://csv-editor-steel.vercel.app/",
  },
  {
    name: "Ai Mock Interview",
    description:
      "Built an AI-powered mock interview platform with Next.js, Drizzle ORM, and NeonDB, enhancing user preparation by 80%. Integrated Gemini API for tailored questions and Clerk for secure authentication, ensuring efficiency and scalability.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Drizzle ORM",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "NeonDB",
        color: "green-text-gradient",
      },
      {
        name: "Shad cn",
        color: "blue-text-gradient",
      },
    ],
    image: AiInterview,
    source_code_link: "https://github.com/rohit-jsfreaky/Ai-mock-interview",
    web_link: "https://ai-mock-interview-umber.vercel.app/",
  },
  {
    name: "Ai Resume Builder",
    description:
      "I've developed an AI-powered resume builder using React, Node.js, and MongoDB, featuring AI-driven suggestions via Gemini API and secure authentication with Clerk.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://github.com/rohit-jsfreaky/resume-builder-ai",
    web_link: "https://resume-builder-ai-ashy.vercel.app/",
  },
  {
    name: "Job Portal",
    description:
      "Developed a job portal using React, Node.js, and MongoDB. Features include secure authentication, job postings, and application management, bridging the gap between students andemployers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
    ],
    image: job,
    source_code_link: "https://github.com/rohit-jsfreaky/job-portal",
  },
];

export { services, technologies, experiences, testimonials, projects };
