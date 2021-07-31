import React from "react";
import type { Meta, Story } from "@storybook/react";
import BaseTextarea from "./BaseTextarea";
import type { BaseTextareaProps } from "./BaseTextarea";

export default {
  title: "Elements/Input/BaseTextarea",
  component: BaseTextarea,
} as Meta;

const Template: Story<BaseTextareaProps> = (props: BaseTextareaProps) => (
  // That is too much to enumerate all of them.
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BaseTextarea {...props} />
);

export const BaseTextareaExample = Template.bind({});
BaseTextareaExample.args = {
  value: "Hello, World!",
  onChange: () => null,
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  value: "",
  onChange: () => null,
  placeholder: "在此鍵入內文⋯⋯",
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  ...BaseTextareaExample.args,
  className: "border-2 border-black",
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  ...BaseTextareaExample.args,
  cols: 50,
  rows: 10,
};
