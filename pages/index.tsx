import React, { useState } from "react";
import dynamic from "next/dynamic";
import BasePage from "../components/Page/BasePage";
import BaseButton from "../components/Elements/Button/BaseButton";
import BaseButtonGroup from "../components/Elements/Button/Group/BaseButtonGroup";

const DiscordMarkdownEditor = dynamic(
  () => import("../components/Forms/DiscordMarkdownEditor")
);

export default function Home() {
  const [userInput, setUserInput] = useState("");

  return (
    <BasePage title="匿名靠北！">
      <main>
        <DiscordMarkdownEditor
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </main>

      <div className="text-center mt-8">
        <BaseButtonGroup>
          <BaseButton solid>送出</BaseButton>
        </BaseButtonGroup>
      </div>
    </BasePage>
  );
}
