import React, { useEffect, useState } from "react";
import { toHTML } from "discord-markdown";
import ReactHtmlParser from "react-html-parser";
import dynamic from "next/dynamic";
import BaseTextarea from "../Elements/Input/BaseTextarea";

const DiscordCard = dynamic(() => import("../Elements/Card/DiscordCard"));

export interface DiscordMarkdownEditorProps {
  userInput: string;
  setUserInput: (newUserInput: string) => void;
}

export default function DiscordMarkdownEditor({
  userInput,
  setUserInput,
}: DiscordMarkdownEditorProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const autoUpdateCurrentDate = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(autoUpdateCurrentDate);
    };
  }, []);

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1">
      <div className="mb-4 lg:pr-4 lg:border-r lg:border-gray-300">
        <div className="text-center font-bold mb-2">✍️ 撰寫區</div>
        <BaseTextarea
          value={userInput}
          onValueChange={setUserInput}
          className="border-b-1 bg-gray-50 shadow p-4 w-full h-full"
        />
      </div>
      <div className="border lg:border-0 p-4 lg:py-0">
        <div className="text-center font-bold mb-2">📄 預覽</div>
        <DiscordCard date={currentDate}>
          <div>#1 | {currentDate?.toLocaleString("zh-TW") ?? "（載入中）"}</div>
          <div>---</div>
          <div>
            {userInput.length ? (
              ReactHtmlParser(toHTML(userInput))
            ) : (
              <p className="text-gray-400">
                這裡會即時顯示「撰寫區」在 Discord 的渲染結果。
              </p>
            )}
          </div>
          <div>---</div>
          <div>想匿名說什麼？ → https://ciscc.pan93.tk</div>
          <div>想當訊息審核員？ → https://ciscc.pan93.tk/review</div>
        </DiscordCard>
      </div>
    </section>
  );
}
