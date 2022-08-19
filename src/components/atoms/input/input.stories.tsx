import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";
import { Icon } from "components/atoms/icon";

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

export const inputaddon = () => {
  return (
    <Input
      type='text'
      placeholder='Search'
      addon={
        <Icon
          icon='search'
          fill='none'
          viewBox='0 0 16 17'
          stroke='#7464B3'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      }
    />
  );
};
