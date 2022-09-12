const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: "Rubik, sans-serif",
            },
            colors: {
                "dark-theme": "#121212",
                "primary-dark": "#BB86FC",
                "primary-500": "#6200EE",
                "primary-700": "#3700B3",
                secondary: "#03DAC5",
            },
        },
        screens: {
            xs: "390px",
            ...defaultTheme.screens,
        },
        flex: {
            "0-auto": "0 0 auto",
            ...defaultTheme.flex,
        },
    },
    important: true,
    darkMode: "class",
}
