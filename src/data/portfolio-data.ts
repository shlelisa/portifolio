import { Profile, SkillCategory, Experience, Project, Education, Service } from '../types/portfolio';

export const profileData: Profile = {
  name: "Lelisa Shashura",
  title: "Software Engineer | IT Professional",
  subTitle: "B.Sc. Software Engineering Graduate from Bule Hora University (CGPA: 3.88)",
  bio: "Software Engineering graduate from Bule Hora University (CGPA: 3.88) with practical IT experience as an IT Officer at Oromia Construction Corporation (OCC) and currently working at Amhara Bank as an IT Trainee under the Development Team.",
  aboutStory: [
    "I am a Software Engineering graduate from Bule Hora University with a CGPA of 3.88. I have practical IT experience from working as an IT Officer at Oromia Construction Corporation (OCC) and currently work at Amhara Bank as an IT Trainee under the Development Team.",
    "My technical interests span software engineering, full-stack web development, frontend development, backend development, REST APIs, databases, enterprise applications, and building practical software solutions.",
    "I am passionate about continuous learning, writing clean maintainable code, and applying modern software development practices to solve real-world problems."
  ],
  email: "lelisashashura@gmail.com",
  phone: "+251 969 642 103",
  location: "Ethiopia",
  github: "https://github.com/shlelisa",
  linkedin: "https://www.linkedin.com/in/lelisa-shashura-4935a2259/",
  avatarUrl: "/images/avatar.svg",
  resumeDownloadName: "Lelisa_Shashura_CV.pdf",
  pillars: [
    {
      title: "Full-Stack Web Development",
      description: "Developing scalable, high-performance web applications with React.js, Next.js, Node.js, and TypeScript.",
      icon: "Code2"
    },
    {
      title: "Backend & REST APIs",
      description: "Building resilient server logic, RESTful microservices, and enterprise API integrations in Node.js, Express, and PHP.",
      icon: "Server"
    },
    {
      title: "Database Engineering",
      description: "Designing and managing relational and NoSQL databases across MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB.",
      icon: "Database"
    },
    {
      title: "Enterprise IT & Systems",
      description: "Providing hardware & software troubleshooting, ERP support, networking support, and IT infrastructure administration.",
      icon: "Cpu"
    }
  ],
  stats: [
    { label: "Degree", value: "B.Sc.", subtext: "Software Engineering" },
    { label: "CGPA", value: "3.88", subtext: "Bule Hora University" },
    { label: "Current Role", value: "IT Trainee", subtext: "Amhara Bank Development Team" },
    { label: "Past Role", value: "IT Officer", subtext: "Oromia Construction Corp (OCC)" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating responsive, fast, and accessible user interfaces.",
    skills: [
      { name: "React.js", level: 92, badge: "Advanced" },
      { name: "Next.js", level: 90, badge: "Advanced" },
      { name: "JavaScript", level: 95, badge: "Expert" },
      { name: "TypeScript", level: 88, badge: "Proficient" },
      { name: "HTML", level: 98, badge: "Expert" },
      { name: "CSS", level: 92, badge: "Advanced" },
      { name: "Tailwind CSS", level: 94, badge: "Expert" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building resilient server applications, business logic, and RESTful APIs.",
    skills: [
      { name: "Node.js", level: 88, badge: "Advanced" },
      { name: "Express.js", level: 86, badge: "Advanced" },
      { name: "PHP", level: 84, badge: "Proficient" },
      { name: "REST APIs", level: 92, badge: "Expert" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    description: "Data modeling, query design, and administration across relational and NoSQL systems.",
    skills: [
      { name: "MySQL", level: 90, badge: "Advanced" },
      { name: "PostgreSQL", level: 88, badge: "Advanced" },
      { name: "Microsoft SQL Server", level: 85, badge: "Proficient" },
      { name: "MongoDB", level: 82, badge: "Proficient" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core software engineering programming languages for systems and application development.",
    skills: [
      { name: "JavaScript", level: 95, badge: "Expert" },
      { name: "TypeScript", level: 88, badge: "Proficient" },
      { name: "PHP", level: 84, badge: "Proficient" },
      { name: "Java", level: 82, badge: "Proficient" },
      { name: "C", level: 80, badge: "Foundational" },
      { name: "C++", level: 82, badge: "Proficient" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    description: "Version control, development tools, containerization, and API testing utilities.",
    skills: [
      { name: "Git", level: 92, badge: "Advanced" },
      { name: "GitHub", level: 94, badge: "Advanced" },
      { name: "Docker", level: 78, badge: "Intermediate" },
      { name: "Postman", level: 90, badge: "Advanced" },
      { name: "VS Code", level: 96, badge: "Expert" }
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
      "Work under the Development Team focusing on enterprise software application development, maintenance, and support.",
      "Gain practical experience in building, enhancing, and troubleshooting enterprise software solutions.",
      "Participate in daily development workflows, backend API integration, and database application support.",
      "Collaborate with engineering team members to ensure robust software application delivery."
    ],
    techUsed: ["Software Development", "Enterprise Applications", "REST APIs", "Databases", "Git"],
    achievements: [
      "Selected as IT Trainee under the Development Team at Amhara Bank."
    ]
  },
  {
    id: "exp-2",
    jobTitle: "IT Officer",
    organization: "Oromia Construction Corporation (OCC)",
    location: "Ethiopia",
    period: "December 2024 – June 2026",
    type: "Full-Time",
    responsibilities: [
      "Provided comprehensive IT support, hardware and software troubleshooting, and user assistance across departments.",
      "Managed networking support, enterprise system/ERP support, and resolved technical issues promptly.",
      "Maintained workstation security, system software configurations, and technical issue resolution workflows."
    ],
    techUsed: ["IT Support", "Hardware & Software Troubleshooting", "Networking Support", "User Support", "ERP Support"],
    achievements: [
      "Served as IT Officer managing corporate IT support and enterprise ERP operations at OCC."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "occ-system",
    title: "OCC Management System",
    category: "Management Systems",
    shortDescription: "Enterprise web management platform developed for department workflows, meeting schedules, reporting, and performance tracking.",
    fullDescription: "The OCC Management System is an organizational web platform designed to streamline department management, weekly meeting schedules, reporting workflows, action item tracking, and performance analytics.",
    image: "/images/occ_system.svg",
    features: [
      "Department management portal with administrative workflows.",
      "Weekly meeting management and agenda distribution.",
      "Performance tracking and departmental analytics.",
      "Reporting module for weekly operational tracking."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "digital-library",
    title: "Digital Library Management System",
    category: "Web Apps",
    shortDescription: "Web-based library portal for book catalog management, borrowing workflows, user authentication, and search filtering.",
    fullDescription: "A Digital Library Management System built to digitize book management, user authentication, borrowing system tracking, search and filtering, user dashboards, and operational reports.",
    image: "/images/library_system.svg",
    features: [
      "User authentication and role management.",
      "Book inventory management and borrowing system.",
      "Search and multi-criteria filtering.",
      "User dashboard and library reports."
    ],
    techStack: ["Next.js", "TypeScript", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "house-rental",
    title: "House Rental System",
    category: "Management Systems",
    shortDescription: "Property rental web application managing property listings, rental tracking, and user interactions.",
    fullDescription: "A House Rental System designed to manage property listings, tenant requests, rental agreements, and booking schedules.",
    image: "/images/house_rental.svg",
    features: [
      "Property listing management and search filtering.",
      "Tenant booking requests and rental tracking.",
      "Landlord and tenant management portal."
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "employee-hiring",
    title: "Employee Hiring System",
    category: "Enterprise IT",
    shortDescription: "Recruitment tracking platform for job posting management, candidate evaluation, and hiring pipelines.",
    fullDescription: "An Employee Hiring System designed for recruitment workflows, candidate applicant tracking, job postings, and evaluation management.",
    image: "/images/employee_hiring.svg",
    features: [
      "Applicant tracking pipeline.",
      "Job posting management and applicant screening.",
      "Evaluation rubrics and hiring workflow management."
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shlelisa",
    featured: true
  },
  {
    id: "computer-gate-management",
    title: "Computer Gate Management System",
    category: "Enterprise IT",
    shortDescription: "IT asset gate security and computer check-in/check-out tracking system for computer equipment access control.",
    fullDescription: "A Computer Gate Management System designed for IT hardware security, managing computer pass authorizations, check-in and check-out logs, visitor passes, and access security.",
    image: "/images/gate_management.svg",
    features: [
      "Computer check-in and check-out tracking.",
      "Pass authorization and visitor access logging.",
      "Security audit logs and access verification."
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
      "Graduated with a CGPA of 3.88 in Software Engineering from Bule Hora University.",
      "Completed rigorous software engineering coursework and practical development projects."
    ],
    relevantCoursework: [
      "Software Engineering & Architecture",
      "Full-Stack Web Development",
      "Frontend & Backend Development",
      "Database Management Systems (MySQL, PostgreSQL, MS SQL Server, MongoDB)",
      "Object-Oriented Programming (Java, C++, C)",
      "Data Structures & Algorithms"
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "service-fullstack",
    title: "Full-Stack Web Development",
    description: "Developing modern, responsive, and scalable web applications using Next.js, React.js, Node.js, and TypeScript.",
    iconName: "Layout",
    deliverables: [
      "Responsive web applications",
      "Clean TypeScript / JavaScript component architecture",
      "Frontend and backend integration",
      "Performance optimization"
    ],
    subjectTag: "Full-Stack Web Development Inquiry"
  },
  {
    id: "service-frontend",
    title: "Frontend Development",
    description: "Crafting clean, accessible, and responsive user interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.",
    iconName: "Code",
    deliverables: [
      "Responsive mobile-first user interfaces",
      "Dark and light theme support",
      "Interactive UI components"
    ],
    subjectTag: "Frontend Development Inquiry"
  },
  {
    id: "service-backend",
    title: "Backend & API Development",
    description: "Building RESTful APIs, server logic, and backend services using Node.js, Express.js, and PHP.",
    iconName: "Server",
    deliverables: [
      "RESTful API design and implementation",
      "Server-side business logic",
      "Secure authentication and data handling"
    ],
    subjectTag: "Backend / API Development Inquiry"
  },
  {
    id: "service-database",
    title: "Database Development",
    description: "Designing, querying, and managing relational and NoSQL databases in MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB.",
    iconName: "Database",
    deliverables: [
      "Relational schema design and ERD modeling",
      "SQL query design and indexing",
      "NoSQL document database design"
    ],
    subjectTag: "Database Development Inquiry"
  },
  {
    id: "service-itsupport",
    title: "IT Support & Enterprise Systems",
    description: "Providing IT support, hardware/software troubleshooting, networking support, user support, and enterprise system/ERP support.",
    iconName: "ShieldCheck",
    deliverables: [
      "Hardware and software troubleshooting",
      "Networking support and user support",
      "Enterprise system and ERP support"
    ],
    subjectTag: "IT Support / Enterprise Systems Inquiry"
  },
  {
    id: "service-design",
    title: "System Design & Practical Solutions",
    description: "Architecting software solutions, practical system design, and component workflows to solve real-world problems.",
    iconName: "Cpu",
    deliverables: [
      "Software requirements specification",
      "System component architecture",
      "Practical software solution engineering"
    ],
    subjectTag: "System Design Inquiry"
  }
];
