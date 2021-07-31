import React from "react";
import type { Meta, Story } from "@storybook/react";
import BaseBadge from "./BaseBadge";
import type { BaseBadgeProps } from "./BaseBadge";

export default {
  title: "Elements/Badge/BaseBadge",
  component: BaseBadge,
} as Meta;

const Template: Story<BaseBadgeProps> = ({
  badgeBasicStyle,
  children,
  className,
  style,
}: BaseBadgeProps) => (
  <BaseBadge
    className={className}
    badgeBasicStyle={badgeBasicStyle}
    style={style}
  >
    {children}
  </BaseBadge>
);

export const BaseBadgeExample = Template.bind({});
BaseBadgeExample.args = {
  children: "v1.0",
};

export const RedBadgeExample = Template.bind({});
RedBadgeExample.args = {
  className: "bg-red-800 text-white",
  children: "v2.0",
};

export const GreenBadgeExample = Template.bind({});
GreenBadgeExample.args = {
  className: "bg-green-200 text-black",
  children: "v2.1",
};
