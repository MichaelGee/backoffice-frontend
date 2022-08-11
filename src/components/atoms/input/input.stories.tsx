import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  type: "text",
  placeholder: "Johndoe@iddera.com",
  label: "Email Address",
};
