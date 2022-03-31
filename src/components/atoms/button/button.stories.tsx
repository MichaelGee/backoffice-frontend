import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";

export default {
	title: "Compoennts/Atoms/Buttons/Primary Button",
	component: Button,
	argTypes: {
		type: { options: ["button", "submit", "reset"], control: { type: "radio" } },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Join Meeting</Button>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	fullWidth: false,
	disabled: false,
	loading: false,
	rounded: false,
	type: "button",
};
