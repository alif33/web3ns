import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        //"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        customSlate:{
          50:"rgb(230, 230, 230)"
        },
        customBlue:{
          50:'rgb(84, 84, 218)'
        },
        'custom-purple': '#833AB4',
        'custom-pink': '#FD1D1D',
        'custom-orange': '#FCB069',
      }
    },
    gradientColorStops: {
      // ['custom-radial']: ['var(--custom-purple)', 'var(--custom-pink)', 'var(--custom-orange)'],
    }
    
    // theme => ({
    //   'custom-radial': ['var(--custom-purple)', 'var(--custom-pink)', 'var(--custom-orange)'],
    // }),
  },
  plugins: [],
};
export default config;
