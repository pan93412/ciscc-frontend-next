import React from "react";
import type { GetServerSideProps } from "next";
import type { Infer } from "myzod";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <section className="flex justify-between readme-part">
      <div className="leading-loose">
        <h2 className="text-lg font-bold">如何審文？</h2>
        請至群組的 <code>#指令區</code> 進行操作。
      </div>
      <div className="leading-loose text-right">
        <p>
          <span>
            <FontAwesomeIcon
              icon={faCheck}
              className="fill-current text-green-400 mr-2"
            />
          </span>
          <span>
            允許文章發布，請輸入 <code>CISCC 我核可 #(ID)</code>
          </span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon
              icon={faTimes}
              className="fill-current text-red-400 mr-2"
            />
          </span>
          <span>
            拒絕文章發布，請輸入 <code>CISCC 我拒絕 #(ID)</code>
          </span>
        </p>
      </div>
    </section>
  );
}

export default function ReviewPage({ unpublishedContent }: ReviewPageProps) {
  return (
    <BasePage title="查看未發布內容">
      <div className="border-b border-gray-300 pb-8 mb-8">
        <HowToReviewReadme />
      </div>
      <div className="font-bold text-gray-400 mb-3 text-left">
        共 {unpublishedContent.length} 篇未發布內容
      </div>
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
