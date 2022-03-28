import React from "react";
import { styled } from "../src/stitches";

const Box = styled("div", {
	display: "flex",
	bg: "$background",
	color: "$text",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	flexWrap: "wrap",
	width: "100vw",
	height: "calc(100vh - 60px)",
});

export const decorators = [
	(Story) => (
		<Box>
			<Story />
		</Box>
	),
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
