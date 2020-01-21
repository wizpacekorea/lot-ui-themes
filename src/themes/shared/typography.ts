import { FontT, TypographyT } from "themes/types";

const getFontStyles = (
  fontFamily: string,
  size: string,
  weight: number,
  lineHeight: string
): FontT => ({
  fontFamily,
  fontSize: size,
  fontWeight: weight,
  lineHeight
});

export const fontTokens = {
  primaryFontFamily:
    '"Spoqa Han Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};

export default (themePrimitives = fontTokens): TypographyT => {
  const font100: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "12px", 400, "20px")
  };

  const font150: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "12px", 600, "16px")
  };

  const font200: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "14px", 400, "20px")
  };

  const font250: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "14px", 600, "16px")
  };

  const font300: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "16px", 400, "24px")
  };

  const font350: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "16px", 600, "20px")
  };

  const font400: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "18px", 400, "28px")
  };

  const font450: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "18px", 600, "24px")
  };

  const font550: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "20px", 600, "28px")
  };

  const font650: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "24px", 600, "32px")
  };

  const font750: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "28px", 600, "36px")
  };

  const font850: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "32px", 600, "40px")
  };

  const font950: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "36px", 600, "44px")
  };

  const font1050: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "40px", 600, "52px")
  };

  const font1150: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "36px", 600, "44px")
  };

  const font1250: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "44px", 600, "52px")
  };

  const font1350: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "52px", 600, "64px")
  };

  const font1450: FontT = {
    ...getFontStyles(themePrimitives.primaryFontFamily, "96px", 600, "112px")
  };

  return {
    font100,
    font150,
    font200,
    font250,
    font300,
    font350,
    font400,
    font450,
    font550,
    font650,
    font750,
    font850,
    font950,
    font1050,
    font1150,
    font1250,
    font1350,
    font1450,
    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450
  };
};
