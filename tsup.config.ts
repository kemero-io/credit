import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.tsx"],
  external: ["react", "react/jsx-runtime"],
  format: ["esm"],
  // CSS:en emitteras som dist/index.css och importeras av dist/index.js,
  // så konsumentens Vite (Astro likaväl som TanStack Start) plockar upp den
  // automatiskt. Inget importsteg att glömma.
  injectStyle: false,
  treeshake: true,
});
