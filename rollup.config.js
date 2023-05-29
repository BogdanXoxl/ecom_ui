// https://www.youtube.com/watch?v=CROGZ0sSt6Y&t=713s&ab_channel=MaximFilanovich

const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup");
const terser = require("@rollup/plugin-terser");
const dts = require("rollup-plugin-dts");
const packageJson = require("./package.json");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");

const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      // common js
      {
        file: packageJson.module,
        format: "cjs",
        sourcemap: true,
      },
      // es module
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    // external deps
    external: ["react", "react-dom"],
    plugins: [
      // for peerDeps
      peerDepsExternal(),
      // Resolving third-party dependencies in node_modules
      resolve(),
      // Bundling to CommonJS format (module.exports/require())
      commonjs(),
      // ts
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      // scss
      postcss({
        extract: "index.css",
        modules: true,
        use: ["sass"],
        minimize: true,
      }),
      // for icons and svg
      url(),
      svgr({ icon: true }),
      // min js bundle
      terser(),
    ],
  },
  // for types
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    // exclude css/scss files from this bundle (this is only for global types)
    external: [/\.(css|scss)$/],
    plugins: [dts.default()],
  },
];

// TODO:: babel?
// TODO:: storybook
// TODO:: material ui
// TODO:: testing
// TODO:: husky & lint-staged

// "babel-loader": "^8.3.0",
// rollup-plugin-babel
// process.env is working?
