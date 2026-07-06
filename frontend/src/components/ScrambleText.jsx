import React, { useRef, useCallback, useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrambleString = (text) =>
  text
    .split('')
    .map((char) => (char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join('');

const ScrambleText = ({ text, as: Tag = 'span', trigger = 'hover', speed = 55, style, ...props }) => {
  const [display, setDisplay] = useState(() =>
    (trigger === 'mount' || trigger === 'inView') && !prefersReducedMotion() ? scrambleString(text) : text
  );
  const intervalRef = useRef(null);
  const elRef = useRef(null);

  const runScramble = useCallback(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    clearInterval(intervalRef.current);
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
        return;
      }
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (trigger === 'mount') {
      runScramble();
      return () => clearInterval(intervalRef.current);
    }

    if (trigger === 'inView' && elRef.current) {
      if (prefersReducedMotion()) return undefined;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runScramble();
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(elRef.current);
      return () => observer.disconnect();
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlers = trigger === 'hover' ? { onMouseEnter: runScramble } : {};

  return (
    <Tag
      ref={trigger === 'inView' ? elRef : undefined}
      style={{ color: 'inherit', ...style }}
      {...handlers}
      {...props}
    >
      {display}
    </Tag>
  );
};

export default ScrambleText;
