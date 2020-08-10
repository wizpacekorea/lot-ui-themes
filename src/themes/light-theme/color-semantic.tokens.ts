import colorTokens from "../shared/colors";
import { SemanticColorsT } from "../types";

export default (themePrimitives = colorTokens): SemanticColorsT => ({
  /* Background */
  background: "#ffffff",
  backgroundInvert: "#121212",

  /* Surface */
  surface50: themePrimitives.blueGray50,
  surface100: themePrimitives.blueGray100,

  /* Text */
  text: {
    primary: themePrimitives.blueGray900,
    secondary: themePrimitives.blueGray700,
    disabled: themePrimitives.blueGray400,
    hint: themePrimitives.blueGray400,
    invertPrimary: themePrimitives.gray300,
    invertSecondary: themePrimitives.gray500,
    invertDisabled: themePrimitives.gray700,
    invertHint: themePrimitives.gray700
  },

  /* Status */
  positive: themePrimitives.primary700,
  negative: "#E61010",

  /* Line */
  line: themePrimitives.blueGray50,
  outline: themePrimitives.blueGray100,

  /* User Type */
  userType: {
    media: "#2086D4",
    official: themePrimitives.primary700
  }
});
