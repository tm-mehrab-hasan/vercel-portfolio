'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';
import { useState, useMemo } from 'react';
import { SoftwareSkillType } from '@/lib/types';

const SkillsGrid = ({ softwareSkills }: { softwareSkills: SoftwareSkillType[] }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'iot' | 'tools'>('all');

  const filteredSkills = useMemo(() => {
    if (filter === 'all') return softwareSkills;
    return softwareSkills.filter((skill) => skill.category === filter);
  }, [filter, softwareSkills]);

  const stats = useMemo(() => {
    const total = softwareSkills.length;
    const avgExp = Math.round(
      softwareSkills.reduce((acc, curr) => acc + parseInt(curr.experience), 0) / total
    );
    const specialty = softwareSkills.filter((s) => s.featured).length;
    const avgProf = Math.round(
      softwareSkills.reduce((acc, curr) => acc + curr.level, 0) / total
    );
    return { total, avgExp, specialty, avgProf };
  }, [softwareSkills]);

  return (
    <div className="mt-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">Technical Proficiency</h2>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
        </div>
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-xl w-fit">
          {(['all', 'frontend', 'backend', 'iot', 'tools'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize flex items-center gap-2 ${
                filter === cat
                  ? 'bg-white hover:bg-blue-50/50 text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' && <Icon icon="mdi:layers-outline" width={18} />}
              {cat === 'frontend' && <Icon icon="mdi:palette-outline" width={18} />}
              {cat === 'backend' && <Icon icon="mdi:server" width={18} />}
              {cat === 'iot' && <Icon icon="mdi:microchip" width={18} />}
              {cat === 'tools' && <Icon icon="mdi:tools" width={18} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid Header */}
      <div className="text-center mb-12">
        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Expertise</span>
        <h3 className="text-4xl font-black text-gray-900 mt-2">Skills Showcase</h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Interactive showcase of my technical expertise and proficiency levels across different domains.
        </p>
      </div>

      {/* Interactive Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`group relative bg-white hover:bg-blue-50/50 rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow hover:-translate-y-2 overflow-hidden ${
                skill.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
              
              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={skill.icon} width={32} />
                  </div>
                  {skill.featured && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      Specialty
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-4">{skill.name}</h4>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Icon icon="mdi:clock-outline" width={14} />
                  <span>{skill.experience} Experience</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Skills Summary Stats */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-1">{stats.total}</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-1">{stats.avgExp}</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Avg Years Exp</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-1">{stats.specialty}</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Specialty Areas</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-1">{stats.avgProf}%</div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Avg Proficiency</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
