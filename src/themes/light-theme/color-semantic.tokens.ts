import colorTokens from "../shared/colors";
import { SemanticColorsT } from "../types";

export default (themePrimitives = colorTokens): SemanticColorsT => ({
  /* Background */
  background: "#ffffff",

  /* Surface */
  surface50: themePrimitives.blueGray50,
  surface100: themePrimitives.blueGray100,

  /* Text */
  text: {
    primary: "#263238",
    secondary: "#455A64",
    disabled: "#78909C",
    hint: "#78909C"
  },

  /* Status */
  positive: themePrimitives.primary700,
  negative: "#E61010",

  /* Line */
  line: themePrimitives.blueGray50,
  outline: themePrimitives.blueGray100
});
