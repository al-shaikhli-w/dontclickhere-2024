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
                    xl: '1200px',
                    sm: '90svw',
                },
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            primary: "#00FFC2",
        },
        fontFamily: {

            //helvetica: ["Helvetica", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
