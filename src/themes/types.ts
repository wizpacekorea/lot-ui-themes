import { CSSProperties } from "@emotion/serialize";

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
  /* Rank */
  rank: {
    goldText: string;
    goldFill: string;
    silverText: string;
    silverFill: string;
    bronzeText: string;
    bronzeFill: string;
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
  /* Accent */
  accent50: string;
  accent100: string;
  accent200: string;
  accent300: string;
  accent400: string;
  accent500: string;
  accent600: string;
  accent700: string;
};

export type SemanticColorsT = {
  /* Background */
  background: string;
  backgroundInvert: string;

  /* Surface */
  surface50: string;
  surface100: string;

  /* Text */
  text: {
    primary: string; // High Emphasis
    secondary: string; // Medium Emphasis
    disabled: string;
    hint: string; // Same as Disabled
    invertPrimary: string;
    invertSecondary: string;
    invertDisabled: string;
    invertHint: string;
  };

  /* Status */
  negative: string; // Error
  positive: string; // Rank Up
  accent: string; // Accent

  /* Line */
  line: string;
  outline: string;

  /* User Type */
  userType: {
    media: string;
    official: string;
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

  /* Input */
  inputTextPlaceholder: string;
  inputText: string;
  inputTextDisabled: string;
  inputBorder: string;
  inputFill: string;

  // inputTextDisabled: string;
  // inputPlaceholder: string;
  // inputPlaceholderDisabled: string;
  // inputBorder: string;
  // inputFill: string;
  // inputFillActive: string;
  // inputFillError: string;
  // inputFillDisabled: string;

  /* Switch */
  switchIndicator: string;
  switchFill: string;
  switchFillChecked: string;

  /* Modal Bottom Sheet */
  modalBottomSheetOverlay: string;
  modalBottomSheetContentBackground: string;
};

export type ColorsT = BaseColorT & ComponentColorsT & SemanticColorsT & {};

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

export type FontT = Pick<
  CSSProperties,
  "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"
>;

export type TypographyT = {
  caption1: FontT;
  caption2: FontT;
  caption3: FontT;
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
  Caption1: FontT;
  Caption2: FontT;
  Caption3: FontT;
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

export type ElevationStyleT = Pick<
  CSSProperties,
  "boxShadow" | "backgroundColor"
>;

export type ElevationT = {
  elevation0: ElevationStyleT;
  elevation100: ElevationStyleT;
  elevation200: ElevationStyleT;
  elevation300: ElevationStyleT;
  elevation400: ElevationStyleT;
};
