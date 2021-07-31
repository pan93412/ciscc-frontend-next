import React from "react";
import type { Meta, Story } from "@storybook/react";
import DiscordCard from "./DiscordCard";
import type { DiscordCardProps } from "./DiscordCard";

export default {
  title: "Elements/Card/DiscordCard",
  component: DiscordCard,
} as Meta;

const Template: Story<DiscordCardProps> = ({
  children,
  date,
}: DiscordCardProps) => <DiscordCard date={date}>{children}</DiscordCard>;

export const DiscordCardExample = Template.bind({});
DiscordCardExample.args = {
  date: new Date(),
  children: <p>Hello, World!</p>,
};
