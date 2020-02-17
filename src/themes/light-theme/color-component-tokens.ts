import colorTokens from "../shared/colors";
import { ComponentColorsT } from "../types";

export default (themePrimitives = colorTokens): ComponentColorsT => ({
  /* Button - Contained - Default */
  containedDefaultButtonText: themePrimitives.blueGray900,
  containedDefaultButtonFill: "#EDEFF1",
  containedDefaultButtonActive: "#C9CBCD",
  containedDefaultButtonHover: "#D4D6D8",
  containedDefaultButtonSelectedText: themePrimitives.blueGray900,
  containedDefaultButtonSelectedFill: "#C9CBCD",

  /* Button - Contained - Primary */
  containedPrimaryButtonText: themePrimitives.white,
  containedPrimaryButtonFill: themePrimitives.primary700,
  containedPrimaryButtonActive: "#007343",
  containedPrimaryButtonHover: "#007A46",
  containedPrimaryButtonSelectedText: themePrimitives.white,
  containedPrimaryButtonSelectedFill: "#007343",

  /* Button - Contained - Secondary */
  containedSecondaryButtonText: themePrimitives.white,
  containedSecondaryButtonFill: themePrimitives.blueGray700,
  containedSecondaryButtonActive: themePrimitives.blueGray800,
  containedSecondaryButtonHover: themePrimitives.blueGray900,
  containedSecondaryButtonSelectedText: themePrimitives.white,
  containedSecondaryButtonSelectedFill: themePrimitives.blueGray800,

  /* Button - Outlined - Default */
  outlinedDefaultButtonText: themePrimitives.blueGray900,
  outlinedDefaultButtonBorder: themePrimitives.blueGray100,
  outlinedDefaultButtonFill: "transparent",
  outlinedDefaultButtonActive: "rgba(38,50,56,0.10)",
  outlinedDefaultButtonHover: "rgba(38,50,56,0.06)",
  outlinedDefaultButtonSelectedText: themePrimitives.blueGray900,
  outlinedDefaultButtonSelectedFill: "rgba(38,50,56,0.10)",

  /* Button - Outlined - Primary */
  outlinedPrimaryButtonText: themePrimitives.primary700,
  outlinedPrimaryButtonBorder: themePrimitives.primary700,
  outlinedPrimaryButtonFill: "transparent",
  outlinedPrimaryButtonActive: "rgba(20,182,126,0.15)",
  outlinedPrimaryButtonHover: "rgba(20,182,126,0.06)",
  outlinedPrimaryButtonSelectedText: themePrimitives.primary700,
  outlinedPrimaryButtonSelectedFill: "rgba(20,182,126,0.15)",

  /* Button - Outlined - Secondary */
  // outlinedSecondaryButtonText: string;
  // outlinedSecondaryButtonFill: string;
  // outlinedSecondaryButtonActive: string;
  // outlinedSecondaryButtonHover: string;
  // outlinedSecondaryButtonSelectedText: string;
  // outlinedSecondaryButtonSelectedFill: string;

  /* Button - Text - Default */
  textDefaultButtonText: themePrimitives.blueGray900,
  textDefaultButtonFill: "transparent",
  textDefaultButtonActive: "rgba(38,50,56,0.10)",
  textDefaultButtonHover: "rgba(38,50,56,0.06)",
  textDefaultButtonSelectedText: themePrimitives.blueGray900,
  textDefaultButtonSelectedFill: "rgba(38,50,56,0.10)",

  /* Button - Text - Primary */
  textPrimaryButtonText: themePrimitives.primary700,
  textPrimaryButtonFill: "transparent",
  textPrimaryButtonActive: "rgba(20,182,126,0.15)",
  textPrimaryButtonHover: "rgba(20,182,126,0.06)",
  textPrimaryButtonSelectedText: themePrimitives.primary700,
  textPrimaryButtonSelectedFill: "rgba(20,182,126,0.15)",

  /* Button - Text - Secondary */
  // textSecondaryButtonText: string;
  // textSecondaryButtonFill: string;
  // textSecondaryButtonActive: string;
  // textSecondaryButtonHover: string;
  // textSecondaryButtonSelectedText: string;
  // textSecondaryButtonSelectedFill: string;

  /* Button - Disabled */
  buttonDisabledFill: themePrimitives.blueGray100,
  buttonDisabledText: themePrimitives.blueGray400,

  /* Menu */
  menuFill: themePrimitives.white,
  menuFillHover: "#EDEFF1",
  menuFillSelected: "#EDEFF1",
  menuFontDefault: themePrimitives.blueGray900,
  menuFontDisabled: themePrimitives.blueGray400,
  menuFontHighlighted: themePrimitives.blueGray900,
  menuFontSelected: themePrimitives.blueGray900
});
