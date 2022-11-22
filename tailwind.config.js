/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				sentiment: {
					red: "#E54545",
					yellow: "#F2C230",
					green: "#44CC29",
				},
				gray: {
					10: "#18181A",
					30: "#494A4D",
					40: "#616266",
					50: "#797A80",
					60: "#919399",
					70: "#AAABB3",
					98: "#F5F6FA",
				},
			},
		},
	},
	plugins: [],
};
