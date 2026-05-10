import { skillsSection } from '@/lib/content/skills';
import ShowLottie from '@/components/ShowLottie';
import Icon from '@/components/Icon';
import SkillsGrid from '@/components/SkillsGrid';

const Skills = () => {
  const { title, skills, softwareSkills } = skillsSection;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="space-y-32">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center`}
          >
            <div className="flex-1 w-full max-w-md">
              <ShowLottie path={skill.lottie.light} />
            </div>

            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">{skill.title}</h3>
              <div className="flex flex-wrap gap-4">
                {skill.projectSkills.map((s) => (
                  <div key={s.name} className="flex flex-col items-center gap-2 group">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                      <Icon icon={s.icon} width={32} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {skill.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-600">
                    <span className="text-blue-600 mt-1">⚡</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Grid (Client Component) */}
      <SkillsGrid softwareSkills={softwareSkills} />
    </section>
  );
};

export default Skills;
