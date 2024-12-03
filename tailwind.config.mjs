
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|popover).js",

	],
	theme: {
		extend: {
		  fontFamily: {
			sans: ["Cinzel", "sans-serif"],
		  },
		  colors: {
			white: "#FFFFFF",
			black: "#000000",
			blue: {
			  50: "#e6f1fe",
			  100: "#cce3fd",
			  200: "#99c7fb",
			  300: "#66aaf9",
			  400: "#338ef7",
			  500: "#006FEE",
			  600: "#005bc4",
			  700: "#004493",
			  800: "#002e62",
			  900: "#001731",
			},
			// .. rest of the colors
		  },
		},
	  },
	  darkMode: "class",
  plugins: [nextui({
	addCommonColors: true,
  }),],
  };