export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
  name: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: string;
  upto: string;
  tasks: string[];
  logo?: string;
  tags?: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  url: string;
  year: number | string;
  img: string;
  lottie?: string;
  mainIcon?: string;
  color?: string;
  repo: string;
  projectSkills: SkillType[];
  description?: string;
};

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  tasks?: string;
}

export type PublicationType = {
  title: string;
  type: 'Journal' | 'Conference';
  year: number;
  conference?: string;
  url?: string;
  authors?: string;
  status?: 'Published' | 'Under Review' | 'Accepted';
};

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type EducationType = {
  schoolName: string;
  subTitle: string;
  degree?: string;
  duration: string;
  desc: string;
  grade?: string;
  specialization?: string[];
  icon?: string;
  url?: string;
};

export type AchievementType = {
  title: string;
  date: string;
  issuer?: string;
  desc?: string;
  certificate?: string;
};

export type TestimonialType = {
  name: string;
  role: string;
  feedback: string;
  relationship?: string;
};

export type ActivityType = {
  title: string;
  role: string;
  duration: string;
  icon: string;
  desc: string;
  points?: string[];
};


export type SkillType = { name: string; icon: string };

export type SoftwareSkillType = {
  name: string;
  icon: string;
  level: number;
  experience: string;
  description: string;
  category: 'frontend' | 'backend' | 'iot' | 'tools';
  featured?: boolean;
};

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
