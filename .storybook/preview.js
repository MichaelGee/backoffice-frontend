import React from "react";
import { styled } from "../src/stitches";
import "../src/index.css";
import "../src/base.css";
import { themes } from "@storybook/theming";

const Box = styled("div", {
  display: "flex",
  bg: "$background",
  color: "$text",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
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
  darkMode: {
    current: "light",
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#F6F9FC", appContentBg: "#E5E5E5" },
    // Override the default light theme
    light: { ...themes.normal, appContentBg: "#E5E5E5" },
  },
};
