import { styled, VariantProps } from "stitches/stitches.config";

export const StyledInputMainContainer = styled("div", {
	width: "100%",
	minW: "15rem",
});

export const StyledInput = styled("input", {
	bg: "$white",
	br: "$xs",
	fs: "14px",
	fWeight: "$medium",
	lh: "22px",
	border: "1px solid $purple100",
	bs: "$input",
	p: "10px 38px 12px 13px",
	color: "$purple300",
	width: "100%",
	mt: "5px",
	"&:focus": {
		border: "1px solid $primary",
		outline: "none",
		transition: "$button",
	},
	"&::placeholder": {
		color: "$purple100",
	},
});

export const StyledInputLabel = styled("p", {
	fs: "14px",
	fWeight: "$normal",
	color: "$purple400",
});

export const StyledInnerContainer = styled("div", {
	position: "relative",
	"& svg": {
		position: "absolute",
		top: "35%",
		right: "15px",
		cursor: "pointer",
	},
});

export type InputVariantsProps = VariantProps<typeof StyledInput>;
