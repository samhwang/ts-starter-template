import { defineConfig } from "tsup";

export default defineConfig({
  entry: ['src/index.ts', 'bin/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
});
