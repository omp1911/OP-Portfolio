import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroIdle from '../assets/hero.png';
import heroWaving from '../assets/hero-waving.png';
import officeBg from '../assets/office-bg.jpg';

/**
 * IntroHero
 * Cinematic full-screen intro that sits before the main portfolio.
 * - Animated office backdrop (slow ken-burns + soft drifting orbs).
 * - Hero starts in idle pose; on first user interaction (hover on hero / scroll
 *   / touch / keypress) audio plays AND the hero cross-fades to a "waving" pose
 *   with a gentle wave oscillation — feels like he's actively raising his hand
 *   to greet you.
 * - When audio ends, hand lowers back to idle and a scroll prompt appears.
 *
 * Browsers block audio autoplay without a user gesture; using "first interaction"
 * makes it feel like autoplay because users almost always move/scroll within
 * a few hundred ms of landing on the page.
 */
const IntroHero = () => {
  const [state, setState] = useState('idle'); // 'idle' | 'speaking' | 'done'
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // First-interaction → trigger audio (hover counts on desktop, scroll/touch/key on mobile).
  useEffect(() => {
    const start = async () => {
      if (startedRef.current) return;
      startedRef.current = true;
      cleanup();
      setState('speaking');
      try {
        const audio = audioRef.current;
        if (audio) {
          audio.currentTime = 0;
          await audio.play();
        }
      } catch (err) {
        // If the browser still refuses, fall through to the done state so the
        // user can scroll on.
        setState('done');
      }
    };

    const heroEl = document.getElementById('intro-hero-stage');
    const events = [
      [heroEl, 'mouseenter'],
      [window, 'scroll'],
      [window, 'touchstart'],
      [window, 'keydown'],
      [window, 'click'],
    ];

    function cleanup() {
      events.forEach(([target, ev]) => {
        if (target) target.removeEventListener(ev, start);
      });
    }

    events.forEach(([target, ev]) => {
      if (target) target.addEventListener(ev, start, { passive: true, once: true });
    });

    return cleanup;
  }, []);

  const scrollToMain = () => {
    const next = document.getElementById('hero');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  const isSpeaking = state === 'speaking';
  const isDone = state === 'done';
  const showWaving = isSpeaking; // hand up only while he is greeting

  return (
    <section
      id="intro"
      data-testid="intro-hero-section"
      className="relative min-h-screen w-full bg-[#0f0f0f] flex items-end justify-center overflow-hidden"
    >
      {/* === Cinematic office backdrop with slow ken-burns === */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={officeBg}
          alt=""
          aria-hidden
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover animate-intro-kenburns"
          style={{ filter: 'brightness(0.55) saturate(0.9)' }}
        />
        {/* Vignette + dark vertical fade to keep the hero readable */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 70% at 50% 45%, rgba(0,0,0,0) 0%, rgba(15,15,15,0.55) 70%, rgba(15,15,15,0.95) 100%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,15,15,0) 0%, rgba(15,15,15,0.85) 70%, #0f0f0f 100%)',
          }}
        />
        {/* Drifting blue accent orbs */}
        <span
          aria-hidden
          className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/12 blur-3xl animate-intro-orb-a"
        />
        <span
          aria-hidden
          className="absolute -right-32 bottom-1/4 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-3xl animate-intro-orb-b"
        />
      </div>

      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/audio/intro.mp3`}
        preload="auto"
        onEnded={() => setState('done')}
        data-testid="intro-audio"
      />

      {/* === Hero stage (centered, bottom-aligned so he "stands" in the office) === */}
      <div
        id="intro-hero-stage"
        data-testid="intro-hero-stage"
        className={`relative z-10 flex flex-col items-center pb-6 md:pb-10 transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Soft floor glow under the hero */}
        <span
          aria-hidden
          className="absolute bottom-2 left-1/2 -translate-x-1/2 h-10 w-[55%] rounded-[50%] bg-blue-500/25 blur-2xl"
        />

        <div className="relative h-[440px] w-[300px] md:h-[620px] md:w-[440px]">
          {/* Idle (no hand) */}
          <img
            src={heroIdle}
            alt="Om Patel"
            draggable="false"
            className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-700 ease-out ${
              showWaving ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.55))' }}
          />
          {/* Waving (raised hand) — animated with wave oscillation while speaking */}
          <img
            src={heroWaving}
            alt=""
            aria-hidden
            draggable="false"
            className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-700 ease-out ${
              showWaving ? 'opacity-100 animate-intro-wave-pose' : 'opacity-0'
            }`}
            style={{
              transformOrigin: '50% 90%',
              filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.55))',
            }}
          />
        </div>

        {/* Soft hint while idle — replaces the old click splash */}
        {state === 'idle' && (
          <div
            data-testid="intro-idle-hint"
            className="mt-2 flex items-center gap-2 text-gray-400 text-xs md:text-sm tracking-[0.25em] uppercase animate-intro-hint-pulse"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Hover to meet Om</span>
          </div>
        )}

        {/* Speaking indicator */}
        {isSpeaking && (
          <div
            data-testid="intro-speaking-eq"
            className="mt-2 flex items-end gap-1.5 h-7"
            aria-label="Om is speaking"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="block w-1.5 rounded-full bg-blue-400/80 animate-intro-bar"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        )}

        {/* Done — scroll prompt */}
        {isDone && (
          <div className="mt-3 flex flex-col items-center gap-3 animate-intro-fade-in">
            <p className="text-gray-200 text-base md:text-xl tracking-wide">
              Scroll down to know more about me
            </p>
            <button
              type="button"
              onClick={scrollToMain}
              data-testid="intro-scroll-down-button"
              aria-label="Scroll to portfolio"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ChevronDown size={36} className="animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntroHero;
