/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        devops: {
          dark: '#0a0e27',
          darker: '#050714',
          cyan: '#00f5ff',
          green: '#00ff88',
          purple: '#a855f7',
          orange: '#ff6b35',
        },
      },
      backgroundImage: {
        'devops-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
        'devops-radial': 'radial-gradient(circle at top, #1a1f3a 0%, #0a0e27 100%)',
      },
    },
  },
  plugins: [],
}

