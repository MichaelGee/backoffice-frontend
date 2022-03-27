import type * as Stitches from "@stitches/react";

export const defaultTokens = {
	breakpoints: {
		xs: "650px",
		sm: "960px",
		md: "1280px",
		lg: "1400px",
		xl: "1920px",
	},
};
export const defaultColors = {};

export const defaultMedia = {
	xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
	sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
	md: `(min-width: ${defaultTokens.breakpoints.md})`,
	lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
	xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
	xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
	smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
	mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
	lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
	xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
	motion: "(prefers-reduced-motion)",
	safari: "not all and (min-resolution:.001dpcm)",
	hover: "(any-hover: hover)",
};

export const defaultUtils = {
	p: (value: Stitches.PropertyValue<"padding">) => ({
		padding: value,
	}),
	pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
		paddingTop: value,
	}),
	pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
		paddingRight: value,
	}),
	pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
		paddingBottom: value,
	}), 
	pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
		paddingLeft: value,
	}),
	px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	py: (value: Stitches.PropertyValue<"paddingTop">) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	m: (value: Stitches.PropertyValue<"margin">) => ({
		margin: value,
	}),
	mt: (value: Stitches.PropertyValue<"marginTop">) => ({
		marginTop: value,
	}),
	mr: (value: Stitches.PropertyValue<"marginRight">) => ({
		marginRight: value,
	}),
	mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
		marginBottom: value,
	}),
	ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
		marginLeft: value,
	}),
	mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
		marginLeft: value,
		marginRight: value,
	}),
	my: (value: Stitches.PropertyValue<"marginTop">) => ({
		marginTop: value,
		marginBottom: value,
	}),
	ta: (value: Stitches.PropertyValue<"textAlign">) => ({
		textAlign: value,
	}),
	tt: (value: Stitches.PropertyValue<"textTransform">) => ({
		textTransform: value,
	}),
	to: (value: Stitches.PropertyValue<"textOverflow">) => ({
		textOverflow: value,
	}),
	d: (value: Stitches.PropertyValue<"display">) => ({ display: value }),
	dflex: (value: Stitches.PropertyValue<"alignItems">) => ({
		display: "flex",
		alignItems: value,
		justifyContent: value,
	}),
	fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
		flexDirection: value,
	}),
	fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),
	ai: (value: Stitches.PropertyValue<"alignItems">) => ({
		alignItems: value,
	}),
	ac: (value: Stitches.PropertyValue<"alignContent">) => ({
		alignContent: value,
	}),
	jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
		justifyContent: value,
	}),
	as: (value: Stitches.PropertyValue<"alignSelf">) => ({
		alignSelf: value,
	}),
	fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
	fs: (value: Stitches.PropertyValue<"fontSize">) => ({
		fontSize: value,
	}),
	fb: (value: Stitches.PropertyValue<"flexBasis">) => ({
		flexBasis: value,
	}),
	bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
		backgroundColor: value,
	}),
	bf: (value: Stitches.PropertyValue<"backdropFilter">) => ({
		backdropFilter: value,
	}),
	bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
		background: value,
	}),
	bgColor: (value: Stitches.PropertyValue<"backgroundColor">) => ({
		backgroundColor: value,
	}),
	backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
		WebkitBackgroundClip: value,
		backgroundClip: value,
	}),
	bgClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
		WebkitBackgroundClip: value,
		backgroundClip: value,
	}),
	br: (value: Stitches.PropertyValue<"borderRadius">) => ({
		borderRadius: value,
	}),
	bw: (value: Stitches.PropertyValue<"borderWidth">) => ({
		borderWidth: value,
	}),
	btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
		borderTopRightRadius: value,
	}),
	bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
		borderBottomRightRadius: value,
	}),
	bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
		borderBottomLeftRadius: value,
	}),
	btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
		borderTopLeftRadius: value,
	}),
	bs: (value: Stitches.PropertyValue<"boxShadow">) => ({
		boxShadow: value,
	}),
	lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
		lineHeight: value,
	}),
	ov: (value: Stitches.PropertyValue<"overflow">) => ({ overflow: value }),
	ox: (value: Stitches.PropertyValue<"overflowX">) => ({
		overflowX: value,
	}),
	oy: (value: Stitches.PropertyValue<"overflowY">) => ({
		overflowY: value,
	}),
	pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
		pointerEvents: value,
	}),
	events: (value: Stitches.PropertyValue<"pointerEvents">) => ({
		pointerEvents: value,
	}),
	us: (value: Stitches.PropertyValue<"userSelect">) => ({
		WebkitUserSelect: value,
		userSelect: value,
	}),
	userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
		WebkitUserSelect: value,
		userSelect: value,
	}),
	w: (value: Stitches.PropertyValue<"width">) => ({ width: value }),
	h: (value: Stitches.PropertyValue<"height">) => ({ height: value }),
	mw: (value: Stitches.PropertyValue<"maxWidth">) => ({ maxWidth: value }),
	maxW: (value: Stitches.PropertyValue<"maxWidth">) => ({
		maxWidth: value,
	}),
	mh: (value: Stitches.PropertyValue<"maxHeight">) => ({
		maxHeight: value,
	}),
	maxH: (value: Stitches.PropertyValue<"maxHeight">) => ({
		maxHeight: value,
	}),
	size: (value: Stitches.PropertyValue<"width">) => ({
		width: value,
		height: value,
	}),
	minSize: (value: Stitches.PropertyValue<"width">) => ({
		minWidth: value,
		minHeight: value,
		width: value,
		height: value,
	}),
	sizeMin: (value: Stitches.PropertyValue<"width">) => ({
		minWidth: value,
		minHeight: value,
		width: value,
		height: value,
	}),
	maxSize: (value: Stitches.PropertyValue<"width">) => ({
		maxWidth: value,
		maxHeight: value,
	}),
	sizeMax: (value: Stitches.PropertyValue<"width">) => ({
		maxWidth: value,
		maxHeight: value,
	}),
	appearance: (value: Stitches.PropertyValue<"appearance">) => ({
		WebkitAppearance: value,
		appearance: value,
	}),
	scale: (value: Stitches.PropertyValue<"scale">) => ({
		transform: `scale(${value})`,
	}),
	linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
		backgroundImage: `linear-gradient(${value})`,
	}),
	tdl: (value: Stitches.PropertyValue<"textDecorationLine">) => ({
		textDecorationLine: value,
	}),
	textGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
		backgroundImage: `linear-gradient(${value})`,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		"&::selection": {
			WebkitTextFillColor: "$colors$text",
		},
	}),
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	theme: {
		...defaultTokens,
		colors: defaultColors,
	},
	media: defaultMedia,
	utils: defaultUtils,
};
