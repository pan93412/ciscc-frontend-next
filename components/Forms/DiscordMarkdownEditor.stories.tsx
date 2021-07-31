import React from "react";
import type { Meta, Story } from "@storybook/react";
import DiscordMarkdownEditor from "./DiscordMarkdownEditor";
import type { DiscordMarkdownEditorProps } from "./DiscordMarkdownEditor";

export default {
  title: "Forms/DiscordMarkdownEditor",
  component: DiscordMarkdownEditor,
} as Meta;

const Template: Story<DiscordMarkdownEditorProps> = ({
  setUserInput,
  userInput,
}: DiscordMarkdownEditorProps) => (
  <DiscordMarkdownEditor userInput={userInput} setUserInput={setUserInput} />
);

export const DiscordMarkdownEditorExample = Template.bind({});
DiscordMarkdownEditorExample.args = {
  userInput: "Hello, **World**!",
  setUserInput: () => null,
};
