import * as CSS from "csstype";

export type BaseColorT = {
  /* White */
  white: string;
  /* Black */
  black: string;
  /* Surface */
  surface: {
    light: string;
    dark: string;
  };
  /* Primary */
  primary: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  /* Secondary */
  secondary: string;
  /* Blue Gray */
  blueGray50: string;
  blueGray100: string;
  blueGray200: string;
  blueGray300: string;
  blueGray400: string;
  blueGray500: string;
  blueGray600: string;
  blueGray700: string;
  blueGray800: string;
  blueGray900: string;
  /* Gray */
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  /* Negative */
  negative: string;
  /* Text */
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
};

export type ComponentColorsT = {
  // Button: 네이밍 정의 -> {type} {color} Button {detail}
  // TODO
  // buttonPrimarySpinnerForeground: string;
  // buttonPrimarySpinnerBackground: string;

  /* Button - Contained - Default */
  containedDefaultButtonText: string;
  containedDefaultButtonFill: string;
  containedDefaultButtonActive: string;
  containedDefaultButtonHover: string;
  containedDefaultButtonSelectedText: string;
  containedDefaultButtonSelectedFill: string;

  /* Button - Contained - Primary */
  containedPrimaryButtonText: string;
  containedPrimaryButtonFill: string;
  containedPrimaryButtonActive: string;
  containedPrimaryButtonHover: string;
  containedPrimaryButtonSelectedText: string;
  containedPrimaryButtonSelectedFill: string;

  /* Button - Contained - Secondary */
  containedSecondaryButtonText: string;
  containedSecondaryButtonFill: string;
  containedSecondaryButtonActive: string;
  containedSecondaryButtonHover: string;
  containedSecondaryButtonSelectedText: string;
  containedSecondaryButtonSelectedFill: string;

  /* Button - Outlined - Default */
  outlinedDefaultButtonText: string;
  outlinedDefaultButtonBorder: string;
  outlinedDefaultButtonFill: string;
  outlinedDefaultButtonActive: string;
  outlinedDefaultButtonHover: string;
  outlinedDefaultButtonSelectedText: string;
  outlinedDefaultButtonSelectedFill: string;

  /* Button - Outlined - Primary */
  outlinedPrimaryButtonText: string;
  outlinedPrimaryButtonBorder: string;
  outlinedPrimaryButtonFill: string;
  outlinedPrimaryButtonActive: string;
  outlinedPrimaryButtonHover: string;
  outlinedPrimaryButtonSelectedText: string;
  outlinedPrimaryButtonSelectedFill: string;

  /* Button - Outlined - Secondary */
  // outlinedSecondaryButtonText: string;
  // outlinedSecondaryButtonBorder: string;
  // outlinedSecondaryButtonFill: string;
  // outlinedSecondaryButtonActive: string;
  // outlinedSecondaryButtonHover: string;
  // outlinedSecondaryButtonSelectedText: string;
  // outlinedSecondaryButtonSelectedFill: string;

  /* Button - Text - Default */
  textDefaultButtonText: string;
  textDefaultButtonFill: string;
  textDefaultButtonActive: string;
  textDefaultButtonHover: string;
  textDefaultButtonSelectedText: string;
  textDefaultButtonSelectedFill: string;

  /* Button - Text - Primary */
  textPrimaryButtonText: string;
  textPrimaryButtonFill: string;
  textPrimaryButtonActive: string;
  textPrimaryButtonHover: string;
  textPrimaryButtonSelectedText: string;
  textPrimaryButtonSelectedFill: string;

  /* Button - Text - Secondary */
  // textSecondaryButtonText: string;
  // textSecondaryButtonFill: string;
  // textSecondaryButtonActive: string;
  // textSecondaryButtonHover: string;
  // textSecondaryButtonSelectedText: string;
  // textSecondaryButtonSelectedFill: string;

  /* Button - Disabled */
  buttonDisabledFill: string;
  buttonDisabledText: string;

  /* Menu */
  menuFill: string;
  menuFillHover: string;
  menuFillSelected: string;
  menuFontDefault: string;
  menuFontDisabled: string;
  menuFontHighlighted: string;
  menuFontSelected: string;
};

export type ColorsT = BaseColorT & ComponentColorsT & {};

export type AnimationT = {
  timing100: string;
  timing400: string;
  timing700: string;
  timing1000: string;
  easeOutCurve: string;
  easeInCurve: string;
  easeInOutCurve: string;
};

export type SizingT = {
  scale0: string;
  scale100: string;
  scale200: string;
  scale300: string;
  scale400: string;
  scale500: string;
  scale550: string;
  scale600: string;
  scale650: string;
  scale700: string;
  scale750: string;
  scale800: string;
  scale900: string;
  scale1000: string;
  scale1200: string;
  scale1400: string;
  scale1600: string;
  scale2400: string;
  scale3200: string;
  scale4800: string;
};

// export type FontT = {
//   fontFamily: string;
//   fontWeight:
//     | "-moz-initial"
//     | "inherit"
//     | "initial"
//     | "revert"
//     | "unset"
//     | "bold"
//     | "normal"
//     | "bolder"
//     | "lighter"
//     | number;
//   fontSize: string;
//   lineHeight: string | number;
// };

export type FontT = Pick<
  CSS.StandardProperties,
  "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"
>;

export type TypographyT = {
  font100: FontT;
  font150: FontT;
  font200: FontT;
  font250: FontT;
  font300: FontT;
  font350: FontT;
  font400: FontT;
  font450: FontT;
  font550: FontT;
  font650: FontT;
  font750: FontT;
  font850: FontT;
  font950: FontT;
  font1050: FontT;
  font1150: FontT;
  font1250: FontT;
  font1350: FontT;
  font1450: FontT;
  ParagraphXSmall: FontT;
  ParagraphSmall: FontT;
  ParagraphMedium: FontT;
  ParagraphLarge: FontT;
  LabelXSmall: FontT;
  LabelSmall: FontT;
  LabelMedium: FontT;
  LabelLarge: FontT;
  HeadingXSmall: FontT;
  HeadingSmall: FontT;
  HeadingMedium: FontT;
  HeadingLarge: FontT;
  HeadingXLarge: FontT;
  HeadingXXLarge: FontT;
  DisplayXSmall: FontT;
  DisplaySmall: FontT;
  DisplayMedium: FontT;
  DisplayLarge: FontT;
};

export type BreakpointsT = {
  small: number;
  medium: number;
  large: number;
};

export type MediaQueryT = {
  small: string;
  medium: string;
  large: string;
};
