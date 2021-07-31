import React from "react";
import type { GetServerSideProps } from "next";
import type { Infer } from "myzod";
import BasePage from "../components/Page/BasePage";
import type { StrapiMessagesResponseSchema } from "../components/Http/common";
import GetUnpublishedContent from "../components/Http/getUnpublishedContent";
import BaseCardGroup from "../components/Elements/Card/Group/BaseCardGroup";
import PostCard from "../components/Elements/Card/PostCard";

interface ReviewPageProps {
  unpublishedContent: Infer<typeof StrapiMessagesResponseSchema>;
}

function HowToReviewReadme() {
  return (
    <section className="readme-part mb-8">
      <h2 className="text-lg font-bold mb-2">如何審文？</h2>
      請到群組的 <code>#指令區</code> 傳送：
      <pre className="command-part">CISCC 我核可 #(ID)</pre>
      就表示你覺得這篇文章可以發布。假如你覺得這文章不妥，卻進入「準備發布」區，
      請到群組的 <code>#指令區</code> 傳送：
      <pre className="command-part">CISCC 我拒絕 #(ID)</pre>
      就可以擋下來，讓訊息回到待審核狀態。
    </section>
  );
}

export default function ReviewPage({ unpublishedContent }: ReviewPageProps) {
  return (
    <BasePage title="查看未發布內容">
      <HowToReviewReadme />
      <BaseCardGroup>
        {unpublishedContent.map(({ approved, message, id }) => (
          <PostCard key={`postCard-${id}`} id={id} approved={approved}>
            {message}
          </PostCard>
        ))}
      </BaseCardGroup>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<ReviewPageProps> =
  async () => ({
    props: {
      unpublishedContent: await GetUnpublishedContent(),
    },
  });
