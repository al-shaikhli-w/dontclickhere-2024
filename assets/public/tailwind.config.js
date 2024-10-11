module.exports = {
    mode: "jit",
    content: ["../**/*.php", "../../*.php", "../../**/*.php"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "15px",
                },
                screens: {
                    'sm': '90%',
                    'md': '768px',
                    'lg': '960px',
                    'xl': '1024px',
                    '2xl': '1200px',
                    '3xl': '1320px',
                },
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000",
            primary: "#00FFC2",
            gray: "#ececfb",
            red:"#DC2626",
        },
        fontFamily: {
            BespokeStencil: ["BespokeStencil", "sans-serif"],
            helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
            orbitron: ["Orbitron", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
