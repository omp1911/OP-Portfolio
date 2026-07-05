import React from 'react';
import { achievements } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const AchievementCard = ({ item, index }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 5) + 1} ${visible ? 'is-visible' : ''} border-t border-[var(--hairline-strong)] pt-6`}
      data-testid={`achievement-${index}`}
    >
      <div className="font-serif text-[46px] md:text-[58px] leading-none tracking-[-0.03em]" style={{ color: 'var(--accent)' }}>
        {item.metric}
      </div>
      <div className="font-serif text-[19px] md:text-[21px] mt-3 tracking-[-0.01em]">
        {item.label}
      </div>
      <p className="mt-2 text-[13px] text-[var(--muted)] font-mono tracking-wide">
        {item.note}
      </p>
    </div>
  );
};

const Achievements = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="achievements" className="section" data-testid="achievements-section">
      <div className="rail">Impact · 05</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mb-16`}>
          <p className="section-label mb-6">Numbers that mattered</p>
          <h2 className="display text-[42px] md:text-[64px]">Measurable wins.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-x-14 gap-y-14">
          {achievements.map((a, i) => (
            <AchievementCard item={a} index={i} key={a.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
