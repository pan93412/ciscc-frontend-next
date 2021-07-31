import React, { useEffect } from "react";
import type { Infer } from "myzod";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import NProgress from "nprogress";
import Swal from "sweetalert2";
import BasePage from "../components/Page/BasePage";
import type { StrapiMessagesResponseSchema } from "../components/Http/common";
import GetUnpublishedContent from "../components/Http/getUnpublishedContent";
import BaseCardGroup from "../components/Elements/Card/Group/BaseCardGroup";
import PostCard from "../components/Elements/Card/PostCard";

function HowToReviewReadme() {
  return (
    <section className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0 readme-part">
      <div className="leading-loose">
        <h2 className="text-lg font-bold">如何審文？</h2>
        <p>
          請至群組的 <code>#指令區</code> 進行操作。
          <code>(ID)</code> 就是下方清單最左邊的數字～
        </p>
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
            允許文章發布，請在群組傳：<code>CISCC 我核可 #(ID)</code>
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
            拒絕文章發布，請在群組傳：<code>CISCC 我拒絕 #(ID)</code>
          </span>
        </p>
      </div>
    </section>
  );
}

function UnpublishedContentCardList() {
  const { data, error } = useSWR<
    Infer<typeof StrapiMessagesResponseSchema>,
    Error
  >("/messages?published=false", GetUnpublishedContent);

  useEffect(() => {
    if (!data && !error) NProgress.start();
    else NProgress.done();
  }, [data, error]);

  useEffect(() => {
    if (error)
      void Swal.fire(`發生 ${error.name} 錯誤`, `${error.message}`, "error");
  }, [error]);

  if (error) return null;

  if (!data)
    return (
      <div className="font-bold text-gray-400 mb-3 text-left">資料載入中⋯⋯</div>
    );

  return (
    <>
      <div className="font-bold text-gray-400 mb-3 text-left">
        共 {data.length} 篇未發布內容
      </div>
      <BaseCardGroup>
        {data.map(({ approved, message, id }) => (
          <PostCard key={`postCard-${id}`} id={id} approved={approved}>
            {message}
          </PostCard>
        ))}
      </BaseCardGroup>
    </>
  );
}
export default function ReviewPage() {
  return (
    <BasePage title="查看未發布內容">
      <div className="border-b border-gray-300 pb-8 mb-8">
        <HowToReviewReadme />
      </div>
      <main>
        <UnpublishedContentCardList />
      </main>
    </BasePage>
  );
}
