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
    id: "house-rental",
    title: "House Rental Management System",
    category: "Academic Projects",
    projectType: "Academic Project",
    period: "Bule Hora University · 2020–2024",
    problem: "Property managers and tenants lacked a centralized online listing system to view available rental properties, submit viewing requests, and manage rental agreements.",
    solution: "A web-based system developed to help manage houses, tenants, property listings, viewing requests, and rental records.",
    shortDescription: "A web-based academic system developed to manage house rental information, tenants, property listings, and rental records.",
    fullDescription: "A web-based academic project developed to help manage house rental information, tenants, property listings, and rental records. Designed during my Software Engineering degree at Bule Hora University to demonstrate web development and database management principles.",
    image: "/images/house_rental.svg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Property listing display & filtering",
      "Tenant rental request submission form",
      "Property manager admin dashboard",
      "Rental record & lease agreement tracking"
    ],
    phases: [
      {
        phase: "01 — Requirements",
        description: "Identified functional requirements for managing rental listings, tenant applications, and landlord property records."
      },
      {
        phase: "02 — Analysis & Design",
        description: "Designed database tables, entity relationships, navigation workflows, and user interface wireframes."
      },
      {
        phase: "03 — Development",
        description: "Implemented frontend pages using HTML, CSS, and JavaScript, and coded server-side logic in PHP connected to a MySQL database."
      },
      {
        phase: "04 — Testing",
        description: "Tested user login, listing additions, tenant registration forms, and SQL queries to fix implementation errors."
      },
      {
        phase: "05 — Final Result",
        description: "Completed a functional academic web application for managing house rental records."
      }
    ],
    contribution: [
      "MySQL database schema design for properties and tenants",
      "PHP backend script development for CRUD operations and session login",
      "Frontend user interfaces using HTML, CSS, and JavaScript",
      "Form input validation and data sanitization"
    ],
    outcome: "Successfully demonstrated practical web development, database modeling, and CRUD workflows as an academic software engineering project at Bule Hora University.",
    featured: true
  },
  // {
  //   id: "digital-library",
  //   title: "Digital Library Management System",
  //   category: "Academic Projects",
  //   projectType: "Academic Project",
  //   period: "Bule Hora University · 2020–2024",
  //   problem: "Tracking physical book loans manually led to overdue book disorganization and slow search retrieval for library readers.",
  //   solution: "A web portal developed to manage book catalogs, handle student member registrations, and track borrowing and returns.",
  //   shortDescription: "A web portal developed to manage book catalogs, handle member registrations, and track borrowing and returns.",
  //   fullDescription: "A web portal developed during university studies to manage book catalogs, handle member registrations, and track borrowing and returns. Built to assist library staff with indexing books and enabling instant book searches.",
  //   image: "/images/library_system.svg",
  //   techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  //   features: [
  //     "Book catalog search & category filtering",
  //     "Member registration & authentication",
  //     "Borrowing and return status logging",
  //     "Basic borrowing report overview"
  //   ],
  //   phases: [
  //     {
  //       phase: "01 — Requirements",
  //       description: "Gathered functional requirements for book indexing, student borrowing limits, and return date tracking."
  //     },
  //     {
  //       phase: "02 — Analysis & Design",
  //       description: "Created database ER diagrams, search workflows, and library admin dashboard mockups."
  //     },
  //     {
  //       phase: "03 — Development",
  //       description: "Built frontend web forms using HTML, CSS, and JavaScript, and implemented backend logic using PHP and MySQL."
  //     },
  //     {
  //       phase: "04 — Testing",
  //       description: "Verified catalog search response, borrowing duration logic, and multi-user login permissions."
  //     },
  //     {
  //       phase: "05 — Final Result",
  //       description: "Delivered a functional academic library management system prototype."
  //     }
  //   ],
  //   contribution: [
  //     "Designed relational database tables for books, categories, and borrowing transactions",
  //     "Built search and catalog filtering using PHP and SQL queries",
  //     "Created frontend interfaces for library staff and student members"
  //   ],
  //   outcome: "Demonstrated relational database design and backend PHP application development for educational catalog management.",
  //   featured: true
  // },
  // {
  //   id: "occ-system",
  //   title: "OCC Departmental Management System",
  //   category: "Academic Projects",
  //   projectType: "Academic Project",
  //   period: "Bule Hora University · 2020–2024",
  //   problem: "Organizing weekly departmental reports and meeting schedules manually with spreadsheets made tracking action items difficult.",
  //   solution: "A web-based system developed for submitting department reports, scheduling weekly meetings, and monitoring progress.",
  //   shortDescription: "A web-based system developed for submitting department reports, scheduling weekly meetings, and monitoring progress.",
  //   fullDescription: "A web-based academic project developed to organize department reports, schedule weekly meetings, and track performance information.",
  //   image: "/images/occ_system.svg",
  //   techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  //   features: [
  //     "Departmental report submission form",
  //     "Weekly meeting agenda scheduler",
  //     "Action item progress status tracking",
  //     "Departmental overview display"
  //   ],
  //   phases: [
  //     {
  //       phase: "01 — Requirements",
  //       description: "Identified reporting needs and departmental progress tracking parameters."
  //     },
  //     {
  //       phase: "02 — Analysis & Design",
  //       description: "Structured report formats, meeting agenda workflows, and database tables."
  //     },
  //     {
  //       phase: "03 — Development",
  //       description: "Coded backend submission logic in PHP and built interactive frontend forms with HTML, CSS, and JavaScript."
  //     },
  //     {
  //       phase: "04 — Testing",
  //       description: "Tested form submissions, data storage accuracy, and report viewing filters."
  //     },
  //     {
  //       phase: "05 — Final Result",
  //       description: "Completed a functional departmental management academic tool."
  //     }
  //   ],
  //   contribution: [
  //     "PHP backend scripts for report submissions and meeting records",
  //     "MySQL database schema for departmental metrics",
  //     "Frontend layout design using HTML and CSS"
  //   ],
  //   outcome: "Provided a structured web implementation for administrative report tracking.",
  //   featured: true
  // },
  {
    id: "employee-hiring",
    title: "Employee Hiring System",
    category: "Academic Projects",
    projectType: "Academic Project",
    period: "Bule Hora University · 2020–2024",
    problem: "Managing candidate applications and interview evaluation notes manually caused delays in recruitment review workflows.",
    solution: "A recruitment management web application developed to record job postings, organize candidate applications, and log evaluation notes.",
    shortDescription: "A recruitment management application for organizing job postings and candidate application pipelines.",
    fullDescription: "A recruitment management web application built during university studies to record job postings, organize candidate applications, and log interview evaluations.",
    image: "/images/employee_hiring.svg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Job vacancy posting manager",
      "Candidate application submission",
      "Interviewer evaluation recording",
      "Application stage status overview"
    ],
    phases: [
      {
        phase: "01 — Requirements",
        description: "Defined recruitment stages, applicant fields, and interviewer evaluation criteria."
      },
      {
        phase: "02 — Analysis & Design",
        description: "Designed application status workflows and database schema relationships."
      },
      {
        phase: "03 — Development",
        description: "Built candidate submission forms and admin application pipelines in PHP and MySQL."
      },
      {
        phase: "04 — Testing",
        description: "Executed validation checks on form inputs and status updates."
      },
      {
        phase: "05 — Final Result",
        description: "Produced a functional recruitment management academic prototype."
      }
    ],
    contribution: [
      "Designed MySQL database tables for job vacancies and applicant records",
      "Implemented PHP backend endpoints for application processing",
      "Built frontend applicant review tables using HTML, CSS, and JavaScript"
    ],
    outcome: "Demonstrated application tracking pipeline logic and database relational mapping.",
    featured: true
  },
  {
    id: "computer-gate-management",
    title: "Computer Gate Management System",
    category: "Academic Projects",
    projectType: "Academic Project",
    period: "Bule Hora University · 2020–2024",
    problem: "Recording computer hardware serial numbers and check-in/out events manually on paper logbooks caused gate delays and entry errors.",
    solution: "An IT asset tracking system developed to record computer serial numbers, check-in/out events, and generate gate passes.",
    shortDescription: "An IT asset tracking system managing computer serial numbers, check-in/out logs, and gate passes.",
    fullDescription: "An IT asset tracking system developed during university studies to record computer serial numbers, check-in/out events, and generate gate passes.",
    image: "/images/gate_management.svg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Computer serial number check-in & check-out",
      "Visitor gate pass logging",
      "Asset entry audit trail"
    ],
    phases: [
      {
        phase: "01 — Requirements",
        description: "Identified equipment identification fields and entry pass security rules."
      },
      {
        phase: "02 — Analysis & Design",
        description: "Designed database schema for hardware assets, security personnel logs, and timestamp tracking."
      },
      {
        phase: "03 — Development",
        description: "Implemented backend log handlers using PHP and MySQL, and designed frontend pass forms with HTML, CSS, and JavaScript."
      },
      {
        phase: "04 — Testing",
        description: "Tested serial number search retrieval, timestamp generation, and log record accuracy."
      },
      {
        phase: "05 — Final Result",
        description: "Delivered a working gate security asset tracking academic web system."
      }
    ],
    contribution: [
      "Created MySQL database structure for equipment serial numbers and gate passes",
      "Implemented PHP script handlers for recording check-in and check-out logs",
      "Designed quick-entry web forms using HTML, CSS, and JavaScript"
    ],
    outcome: "Applied database logging and input validation principles to physical IT asset entry control.",
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
