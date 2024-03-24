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
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            primary: "#84CC16",
        },
        fontFamily: {
            headers: ["Helvetica", "sans-serif"],
            body: ["Roboto", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
