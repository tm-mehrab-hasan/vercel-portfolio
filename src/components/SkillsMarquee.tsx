import Icon from '@/components/Icon';
import { SkillType } from '@/lib/types';

interface SkillsMarqueeProps {
  skills: SkillType[];
  /** true = scrolls left→right, false (default) = scrolls right→left */
  reverse?: boolean;
  /** seconds for one full cycle */
  duration?: number;
}


/** Skills list this long or more → split into 2 rows */
const DUAL_ROW_THRESHOLD = 7;

/* ─── Individual skill pill ─────────────────────────────────────── */
const SkillPill = ({ name, icon }: SkillType) => (
  <div className="group flex items-center gap-3 px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200/80 hover:-translate-y-1 transition-all duration-300 cursor-default select-none shrink-0">
    <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
      <Icon
        icon={icon}
        width={26}
        className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
      />
    </div>
    <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

/* ─── Gap separator between loop cycles ─────────────────────────── */
const LoopGap = () => (
  <div className="shrink-0 w-14 flex items-center justify-center gap-1.5">
    <div className="w-1 h-1 rounded-full bg-gray-200" />
    <div className="w-1 h-1 rounded-full bg-gray-300" />
    <div className="w-1 h-1 rounded-full bg-gray-200" />
  </div>
);

/* ─── Single marquee row ─────────────────────────────────────────── */
interface MarqueeRowProps {
  skills: SkillType[];
  reverse: boolean;
  duration: number;
  /** Negative value = start mid-cycle. Use to de-sync rows. */
  delay?: number;
}

const MarqueeRow = ({ skills, reverse, duration, delay = 0 }: MarqueeRowProps) => (
  <div className="marquee-track py-1">
    <div
      className={`marquee-inner ${reverse ? 'marquee-inner--ltr' : 'marquee-inner--rtl'}`}
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      {/* First copy + gap */}
      {skills.map((skill, i) => (
        <SkillPill key={`a-${skill.name}-${i}`} {...skill} />
      ))}
      <LoopGap />

      {/* Second copy + gap — must mirror first for seamless loop */}
      {skills.map((skill, i) => (
        <SkillPill key={`b-${skill.name}-${i}`} {...skill} />
      ))}
      <LoopGap />
    </div>
  </div>
);

/* ─── Public component ───────────────────────────────────────────── */
const SkillsMarquee = ({
  skills,
  reverse = false,
  duration = 28,
}: SkillsMarqueeProps) => {
  if (skills.length >= DUAL_ROW_THRESHOLD) {
    // Split list roughly in half, rows scroll in opposite directions
    const mid = Math.ceil(skills.length / 2);
    const row1 = skills.slice(0, mid);
    const row2 = skills.slice(mid);

    return (
      <div className="space-y-3">
        <MarqueeRow skills={row1} reverse={reverse} duration={duration} delay={0} />
        <MarqueeRow skills={row2} reverse={!reverse} duration={duration} delay={-(duration / 2)} />
      </div>
    );
  }

  return <MarqueeRow skills={skills} reverse={reverse} duration={duration} />;
};

export default SkillsMarquee;
