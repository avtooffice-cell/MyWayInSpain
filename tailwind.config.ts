import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        veris: {
          red: '#EC0000',
          redDark: '#C90000',
          ink: '#101010',
          body: '#333333',
          soft: '#F7F4F1',
          line: '#E8E2DC',
          white: '#FFFFFF',
          footerBg: '#333333',
          green: '#5FA777',
          greenBg: '#E8F3EC',
          amber: '#E2A23B',
          amberBg: '#FBF0DE',
          redBg: '#FDEAEA',
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
