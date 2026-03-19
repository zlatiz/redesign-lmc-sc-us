import { defineConfig } from "vite"
import { resolve } from "path"
export default defineConfig({ build: { rollupOptions: { input: { main: resolve(__dirname, "index.html"), "about": resolve(__dirname, "about/index.html"), "products": resolve(__dirname, "products/index.html"), "facilities": resolve(__dirname, "facilities/index.html"), "contact": resolve(__dirname, "contact/index.html") } } } })