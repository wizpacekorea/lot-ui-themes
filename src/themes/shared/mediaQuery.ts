import breakpoints from "./breakpoints";
import { MediaQueryT } from "../types";

export const getMediaQuery = (breakpoint: number): string =>
  `@media screen and (min-width: ${breakpoint}px)`;

const mediaQuery: MediaQueryT = {
  small: getMediaQuery(breakpoints.small),
  medium: getMediaQuery(breakpoints.medium),
  large: getMediaQuery(breakpoints.large)
};

export default mediaQuery;
