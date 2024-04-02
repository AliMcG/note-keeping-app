import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(159, 15%, 53%)",
        "primary-foreground": "white",
        secondary: "",
        "secondary-foreground": "",
        "primary-text": "hsl(229, 84%, 5%)",
        "secondary-text": "",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        monts: ['var(--font-monts)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
