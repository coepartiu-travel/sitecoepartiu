/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        // PALETA OFICIAL - Extraída da logo COÉ, PARTIU?
        // Substitua os valores HEX pelos extraídos da sua logo
        primary: {
          DEFAULT: '#1a1a2e', // Cor principal da logo
          50: '#f0f0f5',
          100: '#d9d9e6',
          200: '#b3b3cc',
          300: '#8c8cb3',
          400: '#666699',
          500: '#404080',
          600: '#1a1a2e',
          700: '#141422',
          800: '#0e0e17',
          900: '#07070b',
        },
        secondary: {
          DEFAULT: '#c9a84c', // Cor secundária da logo
          50: '#f9f5e8',
          100: '#f3ebd1',
          200: '#e7d7a3',
          300: '#dbc375',
          400: '#cfaf47',
          500: '#c9a84c',
          600: '#b3963d',
          700: '#8c752f',
          800: '#665521',
          900: '#403514',
        },
        accent: {
          DEFAULT: '#e67e22', // Cor de destaque
          50: '#fdf2e8',
          100: '#fae5d1',
          200: '#f5cba3',
          300: '#f0b175',
          400: '#eb9747',
          500: '#e67e22',
          600: '#c96f1e',
          700: '#a85e19',
          800: '#874c14',
          900: '#66390f',
        },
        background: {
          DEFAULT: '#ffffff',
          light: '#faf9f7',
          dark: '#1a1a2e',
        },
        surface: {
          DEFAULT: '#f8f7f4',
          hover: '#f0efeb',
          pressed: '#e8e7e2',
        },
        text: {
          DEFAULT: '#1a1a2e',
          secondary: '#4a4a5a',
          tertiary: '#7a7a8a',
          light: '#ffffff',
          muted: '#b0b0c0',
        },
        border: {
          DEFAULT: '#e5e5e5',
          light: '#f0f0f0',
          dark: '#2a2a3e',
        },
        success: {
          DEFAULT: '#10b981',
          light: '#d1fae5',
          dark: '#065f46',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
          dark: '#92400e',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fecaca',
          dark: '#991b1b',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 40px rgba(0, 0, 0, 0.08)',
        'large': '0 16px 60px rgba(0, 0, 0, 0.12)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 40px rgba(201, 168, 76, 0.15)',
        'glow-primary': '0 0 40px rgba(26, 26, 46, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a1a2e 0%, #404080 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #c9a84c 0%, #e7d7a3 100%)',
        'gradient-accent': 'linear-gradient(135deg, #e67e22 0%, #f0b175 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1a1a2e 0%, #141422 50%, #0e0e17 100%)',
      },
    },
  },
  plugins: [],
};
