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

export const DiscordCardWithLongMultiLineText = Template.bind({});
DiscordCardWithLongMultiLineText.args = {
  date: new Date(),
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, choro ponderum elaboraret vix ei. Nulla
        iusto aliquip est et. Modus nihil evertitur eu nec, nec te ubique
        eirmod. Te has nemore audiam recteque. Nullam eripuit atomorum his ea.
        Laudem eligendi delicatissimi at mea.
      </p>
      <p />
      <p>
        Per quot abhorreant scripserit ex, ex has euripidis conceptam, est debet
        omittantur at. Ei dicat oporteat cum, lorem bonorum efficiendi ut mea.
        Ad est solum nostro accommodare, sea ad falli viris. Eirmod accusamus
        persequeris eu mea.
      </p>
      <p />
      <p>
        Sea cu offendit omittantur, duo mucius tibique dolores an, ut amet
        inciderint appellantur his. Quo ex brute cotidieque, pro quot dicam id.
        At vis noluisse cotidieque, eum labores voluptatibus ut. Eu inani
        civibus phaedrum eam. Atqui suscipit usu eu, cu ius nominati principes
        democritum, idque diceret usu ut. Eu nec delicata consequuntur. Mei eu
        utinam delicata definitiones, at porro regione meliore usu.
      </p>
      <p />
      <p>
        Dolor verterem dissentias at sit. Sit malorum numquam et. Quas
        liberavisse mediocritatem an eum, eam ex rebum congue facete. Pro quis
        mazim habemus an, usu nostrum sententiae no. Id persius inimicus
        efficiantur ius, ea vix cibo diceret electram, cu adhuc homero
        appellantur quo. Ne cetero discere appareat vix, no commune iracundia
        nam, sit viris perpetua at.
      </p>
      <p />
      <p>
        Tempor detraxit nec ei, modus munere corrumpit est in. Harum incorrupte
        mea an. Duo ad putant regione. Id per errem suscipit tractatos.
      </p>
      <p>
        美首了路意點多？是視案年園歡案……綠客房少事，他不買，學示們機看如專操真小了目中後少小營處、
        來天人光球，算戰重意意作緊科有？而如會，選發你呢個的服支有把舉入科每三了任語關國生這，
        找大業人晚金使高談部人四最型新，了對小公自，司滿生眼；歌地房中他中品了一同經灣士黃綠臉臺遊天而負能年人制過、
        不球就定星在，教亞還定一然造能算條臉英愛去車電中改內投但，而獨這統！苦動一車人而試古我半明未公子的他作，
        但年學費而路加十程同且值吃品只，無進只開代，又性業全，兒度傳：其樓為查晚快也地合要發，改我魚能，最初進考業續頭的，
        交提提知頭，口供了業……度樂得題好心筆輪情養難明點。他信了，外那華現表樣親坐意家腦樣媽價重重的太費紙，升實張保經！家而土，
        率你進者一一各製傳作育。料最取營感傷點。心海路果是院言加，我面極山何麼過世年學種看願！位最水間，死是好；我夜頭起多？
        當期政頭他，李麼好識各，親飛育不路：位現小水營邊外落講港不世所再的看小識。足建家人問居也評，思電種場要致、從幾法屋要部：
        經就動，飯有光密、看廣特所的我當當愛呢。
      </p>
    </>
  ),
};

export const DiscordCardWithInlineCode = Template.bind({});
DiscordCardWithInlineCode.args = {
  date: new Date(),
  children: (
    <p>
      這個 secret 只會出現一次，請妥善保存：
      <code>1145141919810</code>
    </p>
  ),
};

export const DiscordCardWithCodeBlock = Template.bind({});
DiscordCardWithCodeBlock.args = {
  date: new Date(),
  children: (
    <pre>
      這個 secret 只會出現一次，請妥善保存：
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;1145141919810
      <br />
      <br />
      這個是您登入 CISCC-SECRET 系統必須的憑證。
    </pre>
  ),
};
