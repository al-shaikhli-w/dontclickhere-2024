import {resolve} from "path";
import {defineConfig} from "vite";
import obfuscator from 'rollup-plugin-obfuscator';


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                mainJS: resolve(__dirname, "src/js/main.js"),
                mainStyle: resolve(__dirname, "src/scss/main.scss"),
            },
            output: {
                entryFileNames: "[name].js",
                assetFileNames: "[name].css", // Fixed the assetFileNames configuration
                sourcemap: false,
            },
        },
        plugins: [
            obfuscator({
                transformObjectKeys: true,
                unicodeEscapeSequence: true,
                numbersToExpressions: true,
                shuffleStringArray: true,
                splitStrings: true,
                identifierNamesGenerator: 'hexadecimal'
            })
        ]
    }
});
