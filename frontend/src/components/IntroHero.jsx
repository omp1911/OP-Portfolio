import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import heroImage from '../assets/hero.png';

/**
 * IntroHero
 * Full-screen splash that sits before the main portfolio.
 * State machine:
 *   idle      -> initial CTA, user clicks to start (browser autoplay policy)
 *   speaking  -> wave + portrait pulses, TTS audio plays
 *   done      -> "scroll down" arrow appears, intro stays as the first scrollable screen
 * On scroll past the section the existing site appears naturally.
 */
const IntroHero = () => {
  const [state, setState] = useState('idle'); // 'idle' | 'speaking' | 'done'
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const start = async () => {
    if (state !== 'idle') return;
    setState('speaking');
    try {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        await audio.play();
      }
    } catch (err) {
      // If audio blocked or missing, skip directly to the final state.
      setState('done');
    }
  };

  const scrollToMain = () => {
    const next = document.getElementById('hero');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="intro"
      data-testid="intro-hero-section"
      className="relative min-h-screen w-full bg-[#0f0f0f] flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(59,130,246,0.10) 0%, rgba(15,15,15,0) 60%)',
        }}
      />

      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/audio/intro.mp3`}
        preload="auto"
        onEnded={() => setState('done')}
        data-testid="intro-audio"
      />

      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Portrait with concentric speaking rings */}
        <div className="relative flex items-center justify-center">
          {/* Pulse rings (only while speaking) */}
          {state === 'speaking' && (
            <>
              <span
                aria-hidden
                className="absolute inline-flex h-[260px] w-[260px] md:h-[340px] md:w-[340px] rounded-full bg-blue-500/10 animate-intro-ping"
              />
              <span
                aria-hidden
                className="absolute inline-flex h-[260px] w-[260px] md:h-[340px] md:w-[340px] rounded-full bg-blue-500/10 animate-intro-ping"
                style={{ animationDelay: '0.6s' }}
              />
            </>
          )}

          <div
            className={`relative h-[220px] w-[220px] md:h-[300px] md:w-[300px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_-15px_rgba(59,130,246,0.35)] ${
              state === 'speaking' ? 'animate-intro-breathe' : ''
            }`}
          >
            <img
              src={heroImage}
              alt="Om Patel"
              className="h-full w-full object-cover object-top scale-[1.15]"
              draggable="false"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08), rgba(0,0,0,0.25) 70%)',
              }}
            />
          </div>

          {/* Waving hand — visible once user starts the intro */}
          {state !== 'idle' && (
            <div
              aria-hidden
              className="absolute -top-2 -right-2 md:-top-3 md:-right-4 text-5xl md:text-6xl select-none"
              style={{
                transformOrigin: '70% 70%',
                animation: 'intro-wave 1.2s ease-in-out 0s 3',
                filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.6))',
              }}
            >
              👋
            </div>
          )}
        </div>

        {/* Idle CTA */}
        {state === 'idle' && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-gray-500 tracking-[0.25em] text-xs md:text-sm uppercase">
              An introduction
            </p>
            <button
              type="button"
              onClick={start}
              data-testid="intro-start-button"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur px-7 py-3.5 text-white transition-all duration-300 hover:border-blue-400/60"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/90 text-white shadow-[0_0_24px_-2px_rgba(59,130,246,0.65)] group-hover:scale-110 transition-transform">
                <Play size={14} fill="currentColor" />
              </span>
              <span className="text-base md:text-lg font-medium">Tap to meet Om</span>
            </button>
            <p className="text-gray-600 text-xs md:text-sm">
              Audio enabled · ~9 seconds
            </p>
          </div>
        )}

        {/* Speaking equalizer (no transcript, per request) */}
        {state === 'speaking' && (
          <div className="mt-10 flex items-end gap-1.5 h-8" aria-label="Om is speaking">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="block w-1.5 rounded-full bg-blue-400/80 animate-intro-bar"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        )}

        {/* Done: scroll prompt */}
        {state === 'done' && (
          <div className="mt-12 flex flex-col items-center gap-5 animate-intro-fade-in">
            <p className="text-gray-300 text-base md:text-xl tracking-wide">
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
