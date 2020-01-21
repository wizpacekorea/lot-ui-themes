import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",

  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions
    }),
    babel({
      extensions,
      exclude: "node_modules/**",
      include: ["src/**/*"]
    }),
    typescript({
      typescript: require("typescript")
    }),
    commonjs({ extensions: [".js", ".ts"], include: /node_modules/ })
  ]
};
