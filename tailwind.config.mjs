import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: [
    "variant",
    [
      '&:is(.dark *)',
      '&:is([data-theme="dark"] *)',
      "&:is(.dark)",
      '&:is([data-theme="dark"])',
    ],
  ],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Pretendard Variable",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Gowun Batang",
          "KoPub World Batang",
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
