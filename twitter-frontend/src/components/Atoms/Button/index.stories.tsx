import Button from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// 青色用
export const BlueButton = Template.bind({});
BlueButton.args = {
  text: "This is a blue button",
  btnColor: "blue",
  borderColor: "transparent",
  textColor: "rgba(255, 255, 255, 1)",
  isBold: true,
  isDeactive: true,
};

// 白色用
export const WhiteButton = Template.bind({});
WhiteButton.args = {
  text: "This is a white",
  btnColor: "white",
  borderColor: "rgba(229, 231, 235, 1)",
  isBold: false,
  isDeactive: true,
};
