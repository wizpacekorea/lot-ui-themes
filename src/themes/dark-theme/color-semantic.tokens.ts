import colorTokens from "../shared/colors";
import { SemanticColorsT } from "../types";

export default (themePrimitives = colorTokens): SemanticColorsT => ({
    /* Background */
    background: "#121212",

    /* Surface */
    surface50: "#242424",
    surface100: "#323232",

    /* Text */
    text: {
        primary: themePrimitives.gray300,
        secondary: themePrimitives.gray500,
        disabled: themePrimitives.gray700,
        hint: themePrimitives.gray700
    },

    /* Status */
    positive: themePrimitives.primary200,
    negative: "#ef6363",

    /* Line */
    line: "#242424",
    outline: themePrimitives.gray800,
});
