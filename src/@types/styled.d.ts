import "styled-components";
import { defaultTheme } from "../styles/themes/default-theme";

type ColorThemes = typeof defaultTheme;

declare module "styled-components" {
	export interface DefaultTheme extends ColorThemes {}
}
