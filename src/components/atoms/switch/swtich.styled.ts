import { styled, sharedVisuallyHidden, VariantProps } from "stitches/stitches.config";

export const StyledSwitchContainer = styled("label", {
	WebkitTapHighlightColor: "transparent",
	d: "inline-block",
	verticalAlign: "center",
	whiteSpace: "nowrap",
	us: "none",
	transition: "$default",
	padding: "$1 0",
	position: "relative",
	cursor: "pointer",
	"@motion": {
		transition: "none",
	},
	variants: {
		animated: {
			false: {
				transition: "none",
			},
		},
	},
});

export const StyledSwitchInput = styled("input", {}, sharedVisuallyHidden);
export const StyledSwitchCircle = styled("span", {
	position: "absolute",
	display: "flex",
	size: "calc(1.75rem * 0.7)",
	jc: "center",
	ai: "center",
	top: "50%",
	transform: "translateY(-50%)",
	left: "calc(3.25rem / 15)",
	transition: "left 0.25s ease, width 0.2s ease",
	bg: "$white",
	br: "$pill",
	"& svg": {
		bg: "transparent",
		size: "calc(1.75rem * 0.44)",
	},
	"@motion": {
		transition: "none",
	},
});

export const StyledSwitch = styled("div", {
	opacity: 1,
	width: "3.25rem",
	height: "1.75rem",
	transition: "$default",
	position: "relative",
	overflow: "hidden",
	padding: 0,
	br: "$pill",
	bg: "$purple100",
	"@motion": {
		transition: "none",
	},
	variants: {
		checked: {
			true: {
				bg: "$primary",
				[`& ${StyledSwitchCircle}`]: {
					left: "calc(100% - (3.25rem / 15) - 1.75rem * 0.7)",
				},
			},
		},
		animated: {
			true: {
				"&:active": {
					[`& ${StyledSwitchCircle}`]: {
						width: "calc(1.75rem * 0.7 + (3.25rem / 10))",
					},
				},
			},
			false: {
				transition: "none",
				[`& ${StyledSwitchCircle}`]: {
					transition: "none",
				},
			},
		},
	},
	compoundVariants: [
		// animated && !checked
		{
			animated: true,
			checked: false,
			css: {
				"&:active": {
					[`& ${StyledSwitchCircle}`]: {
						left: "calc(3.25rem / 7.5)",
					},
				},
			},
		},
		// animated && checked
		{
			animated: true,
			checked: true,
			css: {
				"&:active": {
					[`& ${StyledSwitchCircle}`]: {
						left: "calc(100% - (3.25rem / 5) - 1.75rem * 0.7)",
					},
				},
			},
		},
	],
});

export type SwitchVariantsProps = VariantProps<typeof StyledSwitch>;
export type SwitchContainerVariantsProps = VariantProps<typeof StyledSwitchContainer>;
