import { skillsSection } from '@/lib/content/skills';
import ShowLottie from '@/components/ShowLottie';
import SkillsMarquee from '@/components/SkillsMarquee';

const Skills = () => {
  const { title, skills } = skillsSection;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="space-y-40">
        {skills.map((domain, index) => (
          <div key={domain.id} className="space-y-10">
            {/* Domain layout — alternates each row */}
            <div
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="text-blue-600 mt-1 shrink-0">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Marquee ticker — alternates direction each domain */}
            <div className="space-y-2">
              <div className="flex items-center gap-4 mb-5">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest shrink-0">
                  Technologies
                </h4>
                <div className="h-[1px] bg-gray-100 flex-grow" />
              </div>

              <SkillsMarquee
                skills={domain.projectSkills}
                reverse={index % 2 !== 0}
                duration={0 + domain.projectSkills.length * 0.8}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
