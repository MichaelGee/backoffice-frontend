import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./index";

export default {
  title: "Components/Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const card = Template.bind({});

card.args = {
  children: "In the land of the blind, the one-eyed man is king",
  margin: 0,
  marginY: 0,
  marginX: 0,
  padding: 0,
  paddingY: 0,
  paddingX: 0,
};
