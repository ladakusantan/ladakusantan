export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: "var(--theme-color)",
            },
            screens: {
                'xs': '475px',
            },
            fontFamily: {
                primary: ["var(--font-primary)"],
                heading: ["var(--font-heading)"],
                mono: ["var(--font-mono)"],
            },
            boxShadow: {
                theme: "0 0 15px var(--theme-glow)",
            },
        },
    },
    plugins: [],
};
