import { resolve } from "path";
import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/entry.js"),
                mainStyle: resolve(__dirname, "src/scss/main.scss"),
            },
            external: ["jQuery"],
            output: {
                entryFileNames: "js/[name].js",
                assetFileNames: "css/[name].css", // Fixed the assetFileNames configuration
                sourcemap: false,
                globals: {
                    jQuery: "jQuery",
                },
            },
        },
    },
    // root: "assets",
    server: {
        cors: true,
        strictPort: true,
        port: 8080,
        https: false,
        hmr: {
            host: "thermelaa.local", // Removed "http://" from the host
        },
    },
    plugins: [liveReload(__dirname + "/**/*.php")], // Fixed the path to the PHP files
});