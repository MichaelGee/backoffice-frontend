import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import commonTheme from "./common";

const stitches = createStitches({
	...commonTheme,
	theme: {
		...commonTheme.theme,
		colors: {
			...commonTheme.theme.colors,
		},
	},
});

export const config = stitches.config;
export const createThemeBase = stitches.createTheme;
export const css = stitches.css;
export const getCssText = stitches.getCssText;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const styled = stitches.styled;
export const theme = stitches.theme;
export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T> = Stitches.VariantProps<T>;
export type StitchesTheme = typeof theme;
