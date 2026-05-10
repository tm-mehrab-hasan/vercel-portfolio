import { skillsSection } from '@/lib/content/skills';
import ShowLottie from '@/components/ShowLottie';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const { title, skills, softwareSkills } = skillsSection;

  // Map softwareSkills to their main categories
  const getSkillsByCategory = (categories: string[]) => {
    return softwareSkills.filter((s) => categories.includes(s.category));
  };

  const domainMapping: Record<string, string[]> = {
    fullstack: ['frontend', 'backend'],
    robotics: ['iot'],
    tools: ['tools'],
  };

  const totalStats = {
    total: softwareSkills.length,
    avgExp: Math.round(softwareSkills.reduce((acc, curr) => acc + parseInt(curr.experience), 0) / softwareSkills.length),
    specialty: softwareSkills.filter((s) => s.featured).length,
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="space-y-40">
        {skills.map((domain, index) => {
          const relatedSkills = getSkillsByCategory(domainMapping[domain.id] || []);
          
          return (
            <div key={domain.id} className="space-y-12">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Lottie Visual */}
                <div className="flex-1 w-full max-w-md">
                  <ShowLottie path={domain.lottie.light} />
                </div>

                {/* Domain Info */}
                <div className="flex-1 space-y-6">
                  <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                    Domain Expert
                  </span>
                  <h3 className="text-3xl font-black text-gray-800">{domain.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {domain.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="text-blue-600 mt-1 shrink-0">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Expertise Grid */}
              <div className="pt-8">
                <div className="flex items-center gap-4 mb-8">
                  <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest">
                    Technical Expertise
                  </h4>
                  <div className="h-[1px] bg-gray-100 flex-grow" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedSkills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Summary Stats */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full" />
        
        <div className="text-center relative z-10">
          <div className="text-5xl font-black text-blue-400 mb-2">{totalStats.total}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Technologies</div>
        </div>
        <div className="text-center relative z-10 border-y md:border-y-0 md:border-x border-gray-800 py-8 md:py-0">
          <div className="text-5xl font-black text-blue-400 mb-2">{totalStats.avgExp}+</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Avg Years Experience</div>
        </div>
        <div className="text-center relative z-10">
          <div className="text-5xl font-black text-blue-400 mb-2">{totalStats.specialty}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Core Specialties</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
