/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Inter Tight', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 🔥 Vibrant Fiery Basirion color palette
        basirion: {
          white: "hsl(var(--basirion-white))",
          'off-white': "hsl(var(--basirion-off-white))",
          gray: {
            50: "hsl(var(--basirion-gray-50))",
            100: "hsl(var(--basirion-gray-100))",
            200: "hsl(var(--basirion-gray-200))",
            300: "hsl(var(--basirion-gray-300))",
            400: "hsl(var(--basirion-gray-400))",
            500: "hsl(var(--basirion-gray-500))",
            600: "hsl(var(--basirion-gray-600))",
            700: "hsl(var(--basirion-gray-700))",
            800: "hsl(var(--basirion-gray-800))",
            900: "hsl(var(--basirion-gray-900))",
          },
          primary: "hsl(var(--basirion-primary))",
          'primary-hover': "hsl(var(--basirion-primary-hover))",
          // Fire colors
          fire: {
            ember: "hsl(var(--fire-ember))",
            flame: "hsl(var(--fire-flame))",
            gold: "hsl(var(--fire-gold))",
            magenta: "hsl(var(--fire-magenta))",
            purple: "hsl(var(--fire-purple))",
          },
          // Accent colors
          cyan: "hsl(var(--basirion-cyan))",
          purple: "hsl(var(--basirion-purple))",
          pink: "hsl(var(--basirion-pink))",
          blue: "hsl(var(--basirion-blue))",
          indigo: "hsl(var(--basirion-indigo))",
          amber: "hsl(var(--basirion-amber))",
          orange: "hsl(var(--basirion-orange))",
          red: "hsl(var(--basirion-red))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 