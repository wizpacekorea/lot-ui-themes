import colorTokens from "../shared/colors";
import { ComponentColorsT } from "../types";

export default (themePrimitives = colorTokens): ComponentColorsT => ({
  buttonPrimaryFill: themePrimitives.primary600,
  buttonPrimaryText: themePrimitives.white,
  buttonPrimaryHover: themePrimitives.primary800,
  buttonPrimaryActive: themePrimitives.primary700,
  buttonPrimarySelectedFill: themePrimitives.primary700,
  buttonPrimarySelectedText: themePrimitives.white,
  buttonPrimarySpinnerForeground: themePrimitives.primary50,
  buttonPrimarySpinnerBackground: themePrimitives.primary500,

  buttonSecondaryFill: themePrimitives.primary100,
  buttonSecondaryText: themePrimitives.primary,
  buttonSecondaryHover: themePrimitives.primary200,
  buttonSecondaryActive: themePrimitives.primary300,
  buttonSecondarySelectedFill: themePrimitives.primary200,
  buttonSecondarySelectedText: themePrimitives.primary,
  buttonSecondarySpinnerForeground: themePrimitives.primary700,
  buttonSecondarySpinnerBackground: themePrimitives.primary300,

  buttonDisabledFill: themePrimitives.blueGray100,
  buttonDisabledText: themePrimitives.blueGray400
});
