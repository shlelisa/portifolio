export interface Project {
  id: string;
  title: string;
  category: 'Web Apps' | 'Management Systems' | 'Enterprise IT';
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  badge?: string;
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
  achievements: string[];
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
  iconName: string;
  deliverables: string[];
  subjectTag: string;
}

export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  aboutStory: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeDownloadName: string;
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
