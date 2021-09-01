import type { ReactNode } from "react";
import React from "react";
import Image from "next/image";
import BaseBadge from "../Badge/BaseBadge";
import discordIcon from "../../../public/discord-icon.svg";

export interface DiscordCardProps {
  children: ReactNode;
  date: Date;
}

interface DiscordContentHeaderProps {
  currentDate: Date;
}

function DiscordContentHeader({ currentDate }: DiscordContentHeaderProps) {
  return (
    <div className="flex content-header-part space-x-2 items-center">
      <div className="text-discord">ciscc</div>
      <BaseBadge
        badgeBasicStyle="px-2 py-1 rounded-lg max-w-max text-xs center hidden md:block"
        className="bg-discord-blue text-white"
      >
        機器人
      </BaseBadge>
      <div className="text-discord">
        {currentDate.toLocaleTimeString("zh-TW", {})}
      </div>
    </div>
  );
}

export default function DiscordCard({ children, date }: DiscordCardProps) {
  return (
    <section className="discord-card grid message-section gap-6 p-10 rounded-xl bg-discord text-white font-medium">
      <div className="icon-part">
        <Image src={discordIcon as StaticImageData} alt="Discord's Icon" />
      </div>
      <div className="content-part leading-relaxed">
        <DiscordContentHeader currentDate={date} />
        <div className="content-main-part">{children}</div>
      </div>
      <style jsx scoped>{`
        .message-section {
          grid-template: "icon message" 100% / 3em auto;
        }
      `}</style>
    </section>
  );
}
