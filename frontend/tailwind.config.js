/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        'neo-base': '#1a1a2e',
        'neo-surface': '#1e1e36',
        'neo-text': '#f8f9fa',
        'neo-secondary': '#a0a0b8',
        'neo-muted': '#6a6a8c',
        'neo-cyan': '#00f2fe',
        'neo-purple': '#9d4cdd',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'data-flow': {
          '0%, 100%': { offsetDistance: '0%' },
          '50%': { offsetDistance: '100%' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'data-flow': 'data-flow 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      },
      boxShadow: {
        'neo': '6px 6px 16px rgba(0,0,0,0.6), -4px -4px 12px rgba(157,76,221,0.06)',
        'neo-hover': '0 0 20px rgba(0,242,254,0.15), 6px 6px 16px rgba(0,0,0,0.6)',
        'neo-glow': 'inset 0 0 10px rgba(0,242,254,0.1), 0 0 15px rgba(0,242,254,0.1)',
        'neo-glow-hover': 'inset 0 0 15px rgba(0,242,254,0.3), 0 0 25px rgba(0,242,254,0.2)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
