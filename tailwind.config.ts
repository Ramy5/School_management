import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainSky: "#C3EBFA",
        mainSkyLight: "#EDF9FD",
        secondPurple: "#CFCEFF",
        secondPurpleLight: "#F1F0FF",
        thirdYellow: "#FAE27C",
        thirdYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [require("tailwindcss-mixins")],
} satisfies Config;
