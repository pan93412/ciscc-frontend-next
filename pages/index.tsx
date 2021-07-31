import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import NProgress from "nprogress";
import BasePage from "../components/Page/BasePage";
import BaseButton from "../components/Elements/Button/BaseButton";
import BaseButtonGroup from "../components/Elements/Button/Group/BaseButtonGroup";
import SendMessage from "../components/Http/sendMessage";

const DiscordMarkdownEditor = dynamic(
  () => import("../components/Forms/DiscordMarkdownEditor")
);

export default function Home() {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (isSendingMessage) NProgress.start();
    else NProgress.done();
  }, [isSendingMessage]);

  const confirmProcessor = async () => {
    const response = await Swal.fire({
      title: "你確定要送出去嗎？",
      text: "我們會記下你的 IP，請謹慎發言。如果沒打錯字的話就可以送出囉！",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
    });

    return response.isConfirmed;
  };

  const sendMessageProcessor = async () => {
    setIsSendingMessage(true);

    try {
      const message = await SendMessage(userInput);
      await Swal.fire(
        "很好，很成功！",
        `您的文章編號是 #${message.data.id}。`,
        "success"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        await Swal.fire("好像出了點問題⋯⋯", `${e.name}: ${e.message}`, "error");
      } else {
        await Swal.fire("好像出了點問題⋯⋯", `${e}`, "error");
      }
    }

    setIsSendingMessage(false);
  };

  return (
    <BasePage title="匿名靠北！">
      <main>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            if (userInput.length > 0) {
              // user entered anything.
              const confirmed = await confirmProcessor();
              if (confirmed) await sendMessageProcessor();
            }
          }}
        >
          <DiscordMarkdownEditor
            userInput={userInput}
            setUserInput={setUserInput}
          />
          <section className="text-center mt-8">
            <BaseButtonGroup>
              <BaseButton solid submit disabled={isSendingMessage}>
                送出
              </BaseButton>
            </BaseButtonGroup>
          </section>
        </form>
      </main>
    </BasePage>
  );
}
