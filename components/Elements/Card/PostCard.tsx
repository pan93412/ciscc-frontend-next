import type { ReactNode } from "react";
import React from "react";

export interface PostCardProps {
  id: number;
  approved: boolean;
  children: ReactNode;
}

type PostCardStatusProps = Omit<PostCardProps, "children">;
type PostCardContentProps = PostCardProps;

function PostCardStatus({ id, approved }: PostCardStatusProps) {
  const approvedCss = approved ? "bg-green-500" : "bg-yellow-500";

  return (
    <div
      className={`${approvedCss} text-white flex justify-center`}
      style={{
        gridArea: "status",
      }}
    >
      <div className="self-center text-3xl">{id}</div>
    </div>
  );
}

function PostCardContent({ id, approved, children }: PostCardContentProps) {
  const approvedString = approved ? "準備發布" : "待核可";

  return (
    <div
      className="content p-3"
      style={{
        gridArea: "content",
      }}
    >
      <small className="text-sm text-gray-400">
        ID: {id} | {approvedString}
      </small>
      <pre className="max-h-36 overflow-scroll whitespace-pre-wrap">
        {children}
      </pre>
    </div>
  );
}

export default function PostCard({ id, approved, children }: PostCardProps) {
  return (
    <div className="rounded overflow-hidden shadow min-w-full min-h-min cursor-pointer">
      <div className="grid post-card-layout h-full">
        <PostCardStatus id={id} approved={approved} />
        <PostCardContent id={id} approved={approved}>
          {children}
        </PostCardContent>
      </div>
      <style jsx>{`
        .post-card-layout {
          grid-template: "status content" 100% / 6em auto;
        }
      `}</style>
    </div>
  );
}
