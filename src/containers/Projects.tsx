'use client';
import { projectsSection } from '@/lib/content/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import BrowserFrame from '@/components/BrowserFrame';

const Projects = () => {
  const { title, projects } = projectsSection;
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'software', 'iot', 'robotics', 'ml', 'web'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category.toLowerCase().includes(filter);
  });

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
              onClick={() => setFilter(cat)}
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
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col h-full"
            >
              {/* Project Visual */}
              {(project.id === 'baazar-x' || project.id === 'movie' || project.id === 'portfolio-v1') ? (
                <div className="mb-6">
                  <BrowserFrame url={project.url} className="group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      {project.img && (
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{ backgroundColor: project.color }}
                      />
                      <Icon 
                        icon={project.mainIcon || 'akar-icons:globe'} 
                        width={60} 
                        style={{ color: project.color }} 
                        className={cn("relative z-10", project.img ? "opacity-0 group-hover:opacity-20 animate-none" : "animate-pulse")} 
                      />
                    </div>
                  </BrowserFrame>
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-6 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center p-12">
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
                </div>
              )}

              {/* Project Content */}
              <div className="flex-grow flex flex-col px-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{project.category.split(' ')[0]}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-[10px] font-bold text-gray-400 font-mono">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex gap-3 text-gray-400 pt-1">
                    {project.repo !== '#' && (
                      <Link href={project.repo} target="_blank" className="hover:text-blue-600 transition-colors">
                        <Icon icon="akar-icons:github-fill" width={20} />
                      </Link>
                    )}
                    {project.url !== '#' && (
                      <Link href={project.url} target="_blank" className="hover:text-blue-600 transition-colors">
                        <Icon icon="akar-icons:link-out" width={20} />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pb-4">
                  {project.projectSkills.slice(0, 5).map((skill) => (
                    <div key={skill.name} className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                      <Icon icon={skill.icon} width={14} />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
