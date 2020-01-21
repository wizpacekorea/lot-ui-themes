import { AnimationT, ColorsT, SizingT, TypographyT } from "themes/types";

export { default as LightTheme } from "./themes/light";

export type ThemeT = {
  name: string;
  animation: AnimationT;
  sizing: SizingT;
  typography: TypographyT;
  colors: ColorsT; // TODO: set type.
};
