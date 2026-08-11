export interface DevelopmentPhase {
  phase: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Academic Projects' | 'Management Systems' | 'Web Apps' | 'Enterprise IT';
  projectType: 'Academic Project' | 'Personal Project' | 'Professional Project';
  period: string;
  problem: string;
  solution: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  techStack: string[];
  phases: DevelopmentPhase[];
  contribution: string[];
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  jobTitle: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  techUsed: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: string;
  gpaOrHonors?: string;
  highlights: string[];
  relevantCoursework: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  subjectTag: string;
  iconName: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  aboutParagraphs: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
}
