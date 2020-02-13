import animation from "./shared/animation";
import sizing from "./shared/sizing";
import getTypography from "./shared/typography";
import colors from "./shared/colors";
import getColorComponentTokens from "./dark-theme/color-component-tokens";
import { ThemeT } from "../index";
import breakpoints from "./shared/breakpoints";
import mediaQuery from "./shared/mediaQuery";

export default {
  name: "darkTheme",
  animation,
  typography: getTypography(),
  sizing,
  breakpoints,
  mediaQuery,
  colors: {
    ...colors,
    ...getColorComponentTokens()
  }
} as ThemeT;
