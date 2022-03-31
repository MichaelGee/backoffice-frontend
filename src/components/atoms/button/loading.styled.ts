import { styled, keyframes, VariantProps } from "stitches/stitches.config";

const rotate = keyframes({
	"0%": {
		transform: "rotate(0deg)",
	},
	"100%": {
		transform: "rotate(360deg)",
	},
});

export const StyledLoadingContainer = styled("span", {
	d: "inline-flex",
	fd: "column",
	ai: "center",
	position: "relative",
	dflex: "center",
});

export const StyledSpinner = styled("span", {
	d: "flex",
	br: "$rounded",
	position: "relative",
	size: "20px",
	dflex: "center",
	i: {
		top: "-2px",
		size: "100%",
		position: "absolute",
		br: "inherit",
	},
	"._1": {
		border: "2px solid $white",
		br: "$rounded",
		borderTop: "2px solid transparent",
		borderLeft: "2px solid transparent",
		borderRight: "2px solid transparent",
		animation: `${rotate} 0.8s ease infinite`,
	},
	"._2": {
		border: "2px dotted $white",
		borderTop: "2px solid transparent",
		borderLeft: "2px solid transparent",
		borderRight: "2px solid transparent",
		animation: `${rotate} 0.8s linear infinite`,
		opacity: 0.5,
	},
	"._3": {
		display: "none",
	},
});

export type LoadingVariantsProps = VariantProps<typeof StyledLoadingContainer>;
export type SpinnerVariantsProps = VariantProps<typeof StyledSpinner>;
