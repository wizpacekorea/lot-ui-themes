import * as CSS from "csstype";

export type BaseColorT = {
  white: string;
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
  secondary: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
};

export type ComponentColorsT = {
  // Button
  buttonPrimaryText: string;
  buttonPrimaryFill: string;
  buttonPrimaryActive: string;
  buttonPrimaryHover: string;
  buttonPrimarySelectedFill: string;
  buttonPrimarySelectedText: string;
  buttonPrimarySpinnerForeground: string;
  buttonPrimarySpinnerBackground: string;
  buttonSecondaryFill: string;
  buttonSecondaryText: string;
  buttonSecondaryHover: string;
  buttonSecondaryActive: string;
  buttonSecondarySelectedFill: string;
  buttonSecondarySelectedText: string;
  buttonSecondarySpinnerForeground: string;
  buttonSecondarySpinnerBackground: string;
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
