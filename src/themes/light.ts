import animation from "./shared/animation";
import sizing from "./shared/sizing";
import getTypography from "./shared/typography";
import colors from "./shared/colors";
import getColorComponentTokens from "./light-theme/color-component-tokens";
import { ThemeT } from "index";
export default {
  name: "lightTheme",
  animation,
  typography: getTypography(),
  sizing,
  colors: {
    ...colors,
    ...getColorComponentTokens()
  }
} as ThemeT;
