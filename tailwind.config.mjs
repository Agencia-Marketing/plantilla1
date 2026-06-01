import { colors, fonts } from "./src/config/theme.mjs";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        "section-padding-desktop": "120px",
        "section-padding-mobile": "64px",
        base: "8px",
        "container-max": "1280px",
      },
      fontFamily: {
        "display-hero": [fonts.display],
        "display-hero-mobile": [fonts.display],
        "headline-lg": [fonts.display],
        "headline-lg-mobile": [fonts.display],
        "headline-md": [fonts.display],
        "body-lg": [fonts.body],
        "body-md": [fonts.body],
        "label-sm": [fonts.body],
      },
      fontSize: {
        "display-hero": ["72px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-hero-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.65", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "glass": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
};
