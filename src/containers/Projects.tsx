'use client';
import { projectsSection } from '@/lib/content/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import BrowserFrame from '@/components/BrowserFrame';
import Button from '@/components/Button';

const Projects = () => {
  const { title, projects } = projectsSection;
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', 'software', 'iot', 'robotics', 'ml', 'web'];

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      if (filter === 'all') return true;
      return project.category.toLowerCase().includes(filter);
    });

    return [...filtered].sort((a, b) => {
      const aHasLink = a.url && a.url !== '#';
      const bHasLink = b.url && b.url !== '#';
      if (aHasLink && !bHasLink) return -1;
      if (!aHasLink && bHasLink) return 1;
      return 0;
    });
  }, [projects, filter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <motion.section
      id="projects"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{title}</h2>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize',
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {cat === 'ml' ? 'Machine Learning' : cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 p-4 transition-all duration-500 hover:shadow-2xl hover:border-blue-100"
            >
              {/* Project Visual Container - Strictly fixed height */}
              <div className="mb-6 h-[220px] w-full relative">
                {(project.id === 'baazar-x' || project.id === 'movie' || project.id === 'portfolio-v1' || (project.url && project.url !== '#')) ? (
                  <Link 
                    href={project.url} 
                    target="_blank" 
                    className="block h-full group/link"
                    onClick={(e) => {
                      if (!project.url || project.url === '#') e.preventDefault();
                    }}
                  >
                    <BrowserFrame url={project.url} className="h-full group-hover:-translate-y-2 transition-transform duration-500 shadow-lg group-hover/link:shadow-blue-200/50">
                      <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
                        {project.img ? (
                          <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-4">
                              <Icon icon={project.mainIcon || 'akar-icons:globe'} width={48} style={{ color: project.color }} className="animate-pulse" />
                              <span className="text-[10px] font-mono text-gray-400">Live Preview Available</span>
                          </div>
                        )}
                        <div
                          className="absolute inset-0 opacity-5"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                    </BrowserFrame>
                  </Link>
                ) : (
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-50 group-hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-8">
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundColor: project.color }}
                    />
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md relative z-10 group-hover:rotate-12 transition-transform duration-500"
                      style={{ backgroundColor: project.color + '20', color: project.color }}
                    >
                      <Icon icon={project.mainIcon || 'akar-icons:plus'} width={32} />
                    </div>

                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: project.color }} />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: project.color }} />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Case Study</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info - Uses flex-grow and min-h for alignment */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.name}
                </h3>

                <p className="text-xs text-gray-500 mb-6 line-clamp-3 leading-relaxed min-h-[4.5em]">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300 border border-transparent hover:border-gray-900"
                        title="View Source Code"
                      >
                        <Icon icon="akar-icons:github-fill" width={16} />
                      </Link>
                    )}
                    {project.url && project.url !== '#' && (
                      <Link
                        href={project.url}
                        target="_blank"
                        className="p-2 bg-blue-50 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-transparent hover:border-blue-600"
                        title="Live Demo"
                      >
                        <Icon icon="akar-icons:link-chain" width={16} />
                      </Link>
                    )}
                  </div>

                  <div className="flex -space-x-1.5">
                    {project.projectSkills.slice(0, 3).map((skill) => (
                      <div
                        key={skill.name}
                        className="w-7 h-7 rounded-full bg-white border border-gray-100 p-1.5 shadow-sm group-hover:border-blue-100 transition-colors"
                        title={skill.name}
                      >
                        <Icon icon={skill.icon} width="100%" />
                      </div>
                    ))}
                    {project.projectSkills.length > 3 && (
                      <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-400 shadow-sm">
                        +{project.projectSkills.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      {filteredProjects.length > 6 && (
        <div className="mt-20 flex justify-center">
          <Button
            onClick={() => {
              if (showAll) {
                setShowAll(false);
                // Use a slight delay to allow the grid to collapse before scrolling
                setTimeout(() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    const rect = element.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    window.scrollTo({
                      top: scrollTop + rect.bottom - window.innerHeight + 100, // Scroll so the bottom of the section is visible
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              } else {
                setShowAll(true);
              }
            }}
            variant="outline"
            className="group px-10 py-4 rounded-2xl flex items-center gap-3 font-bold border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 transition-all duration-500"
          >
            {showAll ? (
              <>
                Show Less <Icon icon="akar-icons:chevron-up" width={18} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                See More Projects <Icon icon="akar-icons:chevron-down" width={18} className="group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
