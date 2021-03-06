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
        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        ????????????????????????????????????????????????????????????
      </p>
    </>
  ),
};

export const DiscordCardWithInlineCode = Template.bind({});
DiscordCardWithInlineCode.args = {
  date: new Date(),
  children: (
    <p>
      ?????? secret ???????????????????????????????????????
      <code>1145141919810</code>
    </p>
  ),
};

export const DiscordCardWithCodeBlock = Template.bind({});
DiscordCardWithCodeBlock.args = {
  date: new Date(),
  children: (
    <pre>
      ?????? secret ???????????????????????????????????????
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;1145141919810
      <br />
      <br />
      ?????????????????? CISCC-SECRET ????????????????????????
    </pre>
  ),
};
