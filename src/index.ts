import {
  AnimationT,
  BreakpointsT,
  ColorsT,
  MediaQueryT,
  SizingT,
  TypographyT
} from "./themes/types";

export { default as LightTheme } from "./themes/light";
export { default as DarkTheme } from "./themes/dark";

export * from "./themes/types";

export type ThemeT = {
  name: string;
  animation: AnimationT;
  sizing: SizingT;
  typography: TypographyT;
  colors: ColorsT; // TODO: set type.
  breakpoints: BreakpointsT;
  mediaQuery: MediaQueryT;
};
