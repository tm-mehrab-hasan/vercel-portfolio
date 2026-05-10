import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FeaturedProjectsSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
  PublicationsSectionType,
  EducationSectionType,
  AchievementsSectionType,
  TestimonialsSectionType,
  ActivitiesSectionType,
} from '../types/sections';
import { aboutSection } from './about';
import { contactSection } from './contact';
import { experienceSection } from './experience';
import { featuredProjectsSection } from './featured-projects';
import { footerSection } from './footer';
import { heroSection } from './hero';
import { navbarSection } from './navbar';
import { projectsSection } from './projects';
import { skillsSection } from './skills';
import { socialSection } from './social';
import { publicationsSection } from './publications';
import { educationSection } from './education';
import { achievementsSection } from './achievements';
import { testimonialsSection } from './testimonials';
import { activitiesSection } from './activities';

export const portfolioData: {
  navbarSection: NavbarSectionType;
  heroSection: HeroSectionType;
  aboutSection: AboutSectionType;
  skillsSection: SkillsSectionType;
  educationSection: EducationSectionType;
  experienceSection: ExperienceSectionType;
  featuredProjectsSection: FeaturedProjectsSectionType;
  projectsSection: ProjectsSectionType;
  publicationsSection: PublicationsSectionType;
  achievementsSection: AchievementsSectionType;
  testimonialsSection: TestimonialsSectionType;
  activitiesSection: ActivitiesSectionType;
  contactSection: ContactSectionType;
  socialSection: SocialSectionType;
  footerSection: FooterSectionType;
} = {
  navbarSection,
  heroSection,
  aboutSection,
  skillsSection,
  educationSection,
  experienceSection,
  featuredProjectsSection,
  projectsSection,
  publicationsSection,
  achievementsSection,
  testimonialsSection,
  activitiesSection,
  contactSection,
  socialSection,
  footerSection,
};
