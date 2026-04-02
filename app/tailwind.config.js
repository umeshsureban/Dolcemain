/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lampoon: ['Lampoon Brush', 'Brush Script MT', 'cursive'],
        avenir: ['Avenir', 'Lato', 'sans-serif'],
      },
      colors: {
        // Dolce Primary Brand Colors
        'dolce-red': '#AB162B',
        'dolce-dark-red': '#AB162B',
        'dolce-orange': '#E2231A',
        'dolce-yellow': '#F38A00',
        'dolce-gray': '#58585B',
        'dolce-dark-gray': '#555555',
        'dolce-light': '#D9D9D9',
        'dolce-link': '#C47108',
        'dolce-link-knockout': '#F4D59E',
        
        // Digital Style Guide
        'primary-btn': '#B72027',
        'primary-btn-hover': '#880D22',
        'dark-bg': '#555555',
        'light-bg': '#D9D9D9',
        'divider': '#333333',
        'inactive': '#AAAAAA',
        'nav-border': '#888888',
        
        // Legacy section tokens (About, Amenities, Experiences, Location, Testimonials)
        'gold': '#C47108',
        'warm-white': '#F5F4F0',
        'dark': '#333333',
        'dark-secondary': '#58585B',

        // shadcn overrides
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
