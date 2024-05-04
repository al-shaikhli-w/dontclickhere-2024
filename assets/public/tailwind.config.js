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
                    sm: '90svw',
                },
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000",
            primary: "#00FFC2",
            gray: "#ececfb"
        },
        fontFamily: {
            BespokeStencil: ["BespokeStencil", "sans-serif"],
            helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
