import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavLinkType,
  ProjectType,
  SkillType,
  SocialLinkType,
  PublicationType,
  EducationType,
  AchievementType,
  TestimonialType,
  ActivityType,
} from '.';

export interface Section {
  title: string;
}

export interface EducationSectionType extends Section {
  education: EducationType[];
}

export interface AchievementsSectionType extends Section {
  achievements: AchievementType[];
}

export interface TestimonialsSectionType extends Section {
  testimonials: TestimonialType[];
}

export interface ActivitiesSectionType extends Section {
  activities: ActivityType[];
}

export interface HeroSectionType {
  title: string;
  subtitle?: string;
  tagline: string[];
  description?: string;
  specialText?: string;
  ctas?: (CTAType & {
    hideInDesktop?: boolean;
    hideInMobile?: boolean;
  })[];
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface AboutSectionType extends Section {
  list: {
    title: string;
    items: string[];
  };
  img: string;
  paragraphs: string[];
}

export type SkillsType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  projectSkills: SkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillsType[];
  softwareSkills: import('.').SoftwareSkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface FeaturedProjectsSectionType extends Section {
  projects: FeaturedProjectType[];
}

export interface PublicationsSectionType extends Section {
  publications: PublicationType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}
