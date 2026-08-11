import { Profile, SkillCategory, Experience, Project, Education, Service } from '../types/portfolio';

export const profileData: Profile = {
  name: "Lelisa Shashura",
  title: "Software Engineer | IT Professional",
  bio: "Software Engineering graduate from Bule Hora University (CGPA: 3.88). Having worked as an IT Officer at Oromia Construction Corporation (OCC), I am currently an IT Trainee under the Development Team at Amhara Bank, focusing on enterprise software application development.",
  aboutParagraphs: [
    "I studied Software Engineering at Bule Hora University, graduating in 2024 with a CGPA of 3.88. My academic program provided a solid foundation in computer science, including software architecture, database management systems, full-stack web development, and algorithms.",
    "After graduation, I worked as an IT Officer at Oromia Construction Corporation (OCC). My responsibilities included IT support, hardware and software troubleshooting, network support, user assistance, and ERP system maintenance. This role gave me practical experience in managing real-world IT infrastructure and addressing end-user operational needs.",
    "Currently, I work at Amhara Bank as an IT Trainee under the Development Team. In this role, I focus on software development, building backend services, working with databases, and supporting enterprise applications. I am interested in full-stack web development, REST APIs, database design, and continuing to grow as a software engineer."
  ],
  email: "lelisashashura@gmail.com",
  phone: "+251969642103",
  location: "Ethiopia",
  github: "https://github.com/shlelisa",
  linkedin: "https://www.linkedin.com/in/lelisa-shashura-4935a2259/",
  avatarUrl: "/images/avatar.svg"
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces.",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Developing server logic, RESTful APIs, and backend services.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PHP" },
      { name: "REST APIs" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    description: "Database modeling, SQL queries, and NoSQL storage.",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Microsoft SQL Server" },
      { name: "MongoDB" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used across software engineering and system development.",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    description: "Development tools, version control, and API testing utilities.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "VS Code" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    jobTitle: "IT Trainee — Development Team",
    organization: "Amhara Bank",
    location: "Ethiopia",
    period: "June 2026 – Present",
    type: "Full-Time",
    responsibilities: [
      "Working under the Development Team focusing on enterprise software application development, maintenance, and support.",
      "Participating in backend development workflows, database query design, and internal API integration.",
      "Collaborating with senior developers on application feature implementation and software troubleshooting."
    ],
    techUsed: ["Software Development", "Enterprise Applications", "REST APIs", "Databases", "Git"]
  },
  {
    id: "exp-2",
    jobTitle: "IT Officer",
    organization: "Oromia Construction Corporation (OCC)",
    location: "Ethiopia",
    period: "December 2024 – June 2026",
    type: "Full-Time",
    responsibilities: [
      "Provided comprehensive IT support, hardware diagnostics, and software troubleshooting across corporate departments.",
      "Managed networking support, enterprise system/ERP support, and resolved technical issues promptly.",
      "Maintained hardware inventory logs, system configurations, and user technical support."
    ],
    techUsed: ["IT Support", "Hardware & Software Troubleshooting", "Networking Support", "ERP Support", "User Support"]
  }
];

export const projectsData: Project[] = [
  {
    id: "occ-system",
    title: "OCC Management System",
    category: "Management Systems",
    problem: "Managing weekly departmental reports and meeting agendas manually with spreadsheets made tracking progress difficult.",
    solution: "Built a web-based management system for organizing department reports, scheduling weekly meetings, and monitoring performance information.",
    shortDescription: "A web-based management system for organizing department reports, weekly meetings, and performance information.",
    fullDescription: "Built a web-based management system for organizing department reports, scheduling weekly meetings, and monitoring performance information. The platform replaces manual spreadsheet tracking with centralized digital dashboards.",
    image: "/images/occ_system.svg",
    features: [
      "Departmental report submission portal",
      "Weekly meeting agenda scheduler",
      "Action item assignment & progress tracking",
      "Departmental performance overview"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "digital-library",
    title: "Digital Library Management System",
    category: "Web Apps",
    problem: "Tracking paper book loans manually led to overdue book disorganization and slow search retrieval for readers.",
    solution: "Developed a web portal to manage book catalogs, handle user authentication, and track borrowing and returns.",
    shortDescription: "A web portal for book catalog management, user authentication, and borrowing workflows.",
    fullDescription: "Developed a web portal to manage book catalogs, handle user authentication, and track borrowing and returns. Designed to help library staff index books and assist readers with instant book searches.",
    image: "/images/library_system.svg",
    features: [
      "Book catalog search & filtering",
      "Member registration & authentication",
      "Borrowing and return status tracking",
      "Basic borrowing report generation"
    ],
    techStack: ["Next.js", "TypeScript", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "house-rental",
    title: "House Rental System",
    category: "Management Systems",
    problem: "Property managers and tenants lacked a centralized online listing system to request viewings and track rental agreements.",
    solution: "Created a web application for displaying property listings, handling viewing requests, and managing tenant information.",
    shortDescription: "A property rental web application managing property listings, viewing requests, and tenant information.",
    fullDescription: "Created a web application for displaying property listings, handling viewing requests, and managing tenant information. Helps landlords manage rental records and gives tenants a clean search interface.",
    image: "/images/house_rental.svg",
    features: [
      "Property listing display & search filter",
      "Tenant viewing request submission",
      "Rental record tracking"
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "employee-hiring",
    title: "Employee Hiring System",
    category: "Enterprise IT",
    problem: "Recruitment teams needed a structured way to handle candidate job applications and monitor applicant evaluation stages.",
    solution: "Built an applicant tracking web application to manage job postings, organize candidate applications, and record interview evaluations.",
    shortDescription: "A recruitment management application for organizing job postings and candidate application pipelines.",
    fullDescription: "Built an applicant tracking web application to manage job postings, organize candidate applications, and record interview evaluations. Designed to streamline candidate review for hiring teams.",
    image: "/images/employee_hiring.svg",
    features: [
      "Job posting manager",
      "Candidate application tracking stages",
      "Interviewer evaluation notes"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "computer-gate-management",
    title: "Computer Gate Management System",
    category: "Enterprise IT",
    problem: "Recording computer hardware check-in/check-out events at physical security gates manually on paper logbooks created long queues.",
    solution: "Developed an IT asset tracking system to log computer serial numbers, record check-in/check-out events, and generate gate passes.",
    shortDescription: "An IT asset tracking system managing computer serial numbers, check-in/out logs, and gate passes.",
    fullDescription: "Developed an IT asset tracking system to log computer serial numbers, record check-in/check-out events, and generate gate passes. Used by gate security personnel to verify equipment movement.",
    image: "/images/gate_management.svg",
    features: [
      "Computer serial number check-in & check-out",
      "Visitor gate pass recording",
      "Asset access audit trail"
    ],
    techStack: ["React.js", "Node.js", "Microsoft SQL Server", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  }
];

export const educationsData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Software Engineering",
    institution: "Bule Hora University",
    location: "Ethiopia",
    graduationYear: "2020 – 2024",
    gpaOrHonors: "CGPA: 3.88",
    highlights: [
      "Graduated with a CGPA of 3.88 in Software Engineering.",
      "Completed academic projects in database systems, web development, and software architecture."
    ],
    relevantCoursework: [
      "Software Engineering & Architecture",
      "Full-Stack Web Development",
      "Database Systems (MySQL, PostgreSQL, MS SQL Server, MongoDB)",
      "Object-Oriented Programming (Java, C++, C)",
      "Data Structures & Algorithms"
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "service-fullstack",
    title: "Full-Stack Web Development",
    description: "Developing responsive web applications using React.js, Next.js, Node.js, and TypeScript.",
    deliverables: [
      "Responsive web interfaces",
      "TypeScript & JavaScript component design",
      "Frontend & backend integration"
    ],
    subjectTag: "Full-Stack Web Development Inquiry",
    iconName: "Code"
  },
  {
    id: "service-frontend",
    title: "Frontend Development",
    description: "Building accessible user interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.",
    deliverables: [
      "Mobile-first responsive web pages",
      "Dark and light theme styling",
      "Interactive UI components"
    ],
    subjectTag: "Frontend Development Inquiry",
    iconName: "Layout"
  },
  {
    id: "service-backend",
    title: "Backend & API Development",
    description: "Developing RESTful APIs, server logic, and backend endpoints using Node.js, Express.js, and PHP.",
    deliverables: [
      "RESTful API design and integration",
      "Server-side business logic",
      "Data validation and endpoint handling"
    ],
    subjectTag: "Backend / API Development Inquiry",
    iconName: "Server"
  },
  {
    id: "service-database",
    title: "Database Development",
    description: "Designing database schemas and executing queries in MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB.",
    deliverables: [
      "Relational table design & query writing",
      "NoSQL document database setup"
    ],
    subjectTag: "Database Development Inquiry",
    iconName: "Database"
  },
  {
    id: "service-itsupport",
    title: "IT Support & Systems",
    description: "Providing hardware and software troubleshooting, networking support, user assistance, and ERP support.",
    deliverables: [
      "Hardware and software troubleshooting",
      "Network support and user assistance",
      "Enterprise system/ERP support"
    ],
    subjectTag: "IT Support Inquiry",
    iconName: "ShieldCheck"
  },
  {
    id: "service-design",
    title: "System Design",
    description: "Assisting with practical software system structure, database design, and component workflows.",
    deliverables: [
      "Software component design",
      "Database schema architecture"
    ],
    subjectTag: "System Design Inquiry",
    iconName: "Cpu"
  }
];
