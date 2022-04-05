import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "./index";

export default {
	title: "Components/Atoms/Switch",
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const switchTogggle = Template.bind({});
switchTogggle.args = {
	checked: false,
};
