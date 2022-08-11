import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./index";

export default {
  title: "Components/Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Join Meeting</Text>;

export const text = Template.bind({});
text.args = {
  h1: true,
  color: "#000",
  size: "40px",
  i: false,
  span: false,
  weight: "bold",
  margin: 0,
  marginTop: 0,
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  transform: "uppercase",
};
