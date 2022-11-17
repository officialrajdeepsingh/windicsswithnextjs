import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
    exclude: ['node_modules', '.git', '.next'],
  },
})