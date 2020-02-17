import colorTokens from "../shared/colors";
import { ComponentColorsT } from "../types";

export default (themePrimitives = colorTokens): ComponentColorsT => ({
  /* Button - Contained - Default */
  containedDefaultButtonText: themePrimitives.gray300,
  containedDefaultButtonFill: themePrimitives.surface.dark,
  containedDefaultButtonActive: "#4F4F4F",
  containedDefaultButtonHover: "#3A3A3A",
  containedDefaultButtonSelectedText: themePrimitives.gray300,
  containedDefaultButtonSelectedFill: "#4F4F4F",

  /* Button - Contained - Primary */
  containedPrimaryButtonText: themePrimitives.black,
  containedPrimaryButtonFill: themePrimitives.primary200,
  containedPrimaryButtonActive: "#A2DBC1",
  containedPrimaryButtonHover: "#96D7B9",
  containedPrimaryButtonSelectedText: themePrimitives.black,
  containedPrimaryButtonSelectedFill: "#A2DBC1",

  /* Button - Contained - Secondary */
  containedSecondaryButtonText: themePrimitives.white,
  containedSecondaryButtonFill: themePrimitives.blueGray700,
  containedSecondaryButtonActive: themePrimitives.blueGray800,
  containedSecondaryButtonHover: themePrimitives.blueGray900,
  containedSecondaryButtonSelectedText: themePrimitives.white,
  containedSecondaryButtonSelectedFill: themePrimitives.blueGray800,

  /* Button - Outlined - Default */
  outlinedDefaultButtonText: themePrimitives.gray300,
  outlinedDefaultButtonBorder: themePrimitives.gray300,
  outlinedDefaultButtonFill: "transparent",
  outlinedDefaultButtonActive: "rgba(224,224,224,0.2)",
  outlinedDefaultButtonHover: "rgba(224,224,224,0.1)",
  outlinedDefaultButtonSelectedText: themePrimitives.gray300,
  outlinedDefaultButtonSelectedFill: "rgba(224,224,224,0.1)",

  /* Button - Outlined - Primary */
  outlinedPrimaryButtonText: themePrimitives.primary200,
  outlinedPrimaryButtonBorder: themePrimitives.primary200,
  outlinedPrimaryButtonFill: "transparent",
  outlinedPrimaryButtonActive: "rgba(20,182,126,0.2)",
  outlinedPrimaryButtonHover: "rgba(20,182,126,0.1)",
  outlinedPrimaryButtonSelectedText: themePrimitives.primary200,
  outlinedPrimaryButtonSelectedFill: "rgba(20,182,115,0.2)",

  /* Button - Outlined - Secondary */
  // outlinedSecondaryButtonText: string;
  // outlinedSecondaryButtonFill: string;
  // outlinedSecondaryButtonActive: string;
  // outlinedSecondaryButtonHover: string;
  // outlinedSecondaryButtonSelectedText: string;
  // outlinedSecondaryButtonSelectedFill: string;

  /* Button - Text - Default */
  textDefaultButtonText: themePrimitives.gray300,
  textDefaultButtonFill: "transparent",
  textDefaultButtonActive: "rgba(224,224,224,0.2)",
  textDefaultButtonHover: "rgba(224,224,224,0.1)",
  textDefaultButtonSelectedText: themePrimitives.gray300,
  textDefaultButtonSelectedFill: "rgba(224,224,224,0.1)",

  /* Button - Text - Primary */
  textPrimaryButtonText: themePrimitives.primary200,
  textPrimaryButtonFill: "transparent",
  textPrimaryButtonActive: "rgba(20,182,126,0.2)",
  textPrimaryButtonHover: "rgba(20,182,126,0.1)",
  textPrimaryButtonSelectedText: themePrimitives.primary200,
  textPrimaryButtonSelectedFill: "rgba(20,182,126,0.1)",

  /* Button - Text - Secondary */
  // textSecondaryButtonText: string;
  // textSecondaryButtonFill: string;
  // textSecondaryButtonActive: string;
  // textSecondaryButtonHover: string;
  // textSecondaryButtonSelectedText: string;
  // textSecondaryButtonSelectedFill: string;

  /* Button - Disabled */
  buttonDisabledFill: "#323232",
  buttonDisabledText: "#585858",

  /* Menu */
  menuFill: "#272727",
  menuFillHover: "#323232",
  menuFillSelected: "#323232",
  menuFontDefault: themePrimitives.gray300,
  menuFontDisabled: themePrimitives.gray700,
  menuFontHighlighted: themePrimitives.gray300,
  menuFontSelected: themePrimitives.gray300
});
