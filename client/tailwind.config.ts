
import keepPreset from "keep-react/src/keep-preset.js";
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
     "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
  },
  plugins: [],
  presets: [keepPreset],
}

export default config
