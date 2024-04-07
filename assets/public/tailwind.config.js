module.exports = {
    mode: "jit",
    content: ["../**/*.php", "../../*.php"],
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
            black: "#020617",
            primary: "#00FFC2",
            gray: "#ececfb"
        },
        fontFamily: {
            BespokeStencil: ["BespokeStencil", "sans-serif"],
            helvetica: ["Helvetica", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
