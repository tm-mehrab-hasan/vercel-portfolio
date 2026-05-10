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

    // Prioritize projects with links (url not '#' or empty)
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col h-full"
            >
              {/* Project Visual Container - Fixed aspect ratio for all */}
              <div className="mb-6 h-full aspect-video">
                {(project.id === 'baazar-x' || project.id === 'movie' || project.id === 'portfolio-v1' || (project.url && project.url !== '#')) ? (
                  <BrowserFrame url={project.url} className="h-full group-hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      {project.img ? (
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                         <div className="flex flex-col items-center gap-4">
                            <Icon icon={project.mainIcon || 'akar-icons:globe'} width={60} style={{ color: project.color }} className="animate-pulse" />
                            <span className="text-xs font-mono text-gray-400">Live Preview Available</span>
                         </div>
                      )}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>
                  </BrowserFrame>
                ) : (
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white border border-gray-100 group-hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-12 shadow-md group-hover:shadow-xl">
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{ backgroundColor: project.color }}
                    />
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg relative z-10 group-hover:rotate-12 transition-transform duration-500"
                      style={{ backgroundColor: project.color + '20', color: project.color }}
                    >
                      <Icon icon={project.mainIcon || 'akar-icons:plus'} width={40} />
                    </div>

                    {/* Decorative geometric shapes */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: project.color }} />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: project.color }} />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Case Study</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        title="View Source Code"
                      >
                        <Icon icon="akar-icons:github-fill" width={18} />
                      </Link>
                    )}
                    {project.url && project.url !== '#' && (
                      <Link
                        href={project.url}
                        target="_blank"
                        className="p-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        title="Live Demo"
                      >
                        <Icon icon="akar-icons:link-chain" width={18} />
                      </Link>
                    )}
                  </div>

                  <div className="flex -space-x-2">
                    {project.projectSkills.slice(0, 3).map((skill, index) => (
                      <div
                        key={skill.name}
                        className="w-8 h-8 rounded-full bg-white border-2 border-gray-50 p-1.5 shadow-sm"
                        title={skill.name}
                      >
                        <Icon icon={skill.icon} width="100%" />
                      </div>
                    ))}
                    {project.projectSkills.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm">
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
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="group px-8 py-3 rounded-xl flex items-center gap-3 font-bold"
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
