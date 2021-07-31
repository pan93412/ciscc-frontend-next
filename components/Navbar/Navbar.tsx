import React from "react";
import BaseBadge from "../Elements/Badge/BaseBadge";
import BaseButton from "../Elements/Button/BaseButton";

export default function Navbar() {
  return (
    <section className="p-10 grid sm:grid-cols-2 grid-cols-1 pb-4 mb-4 border-b border-gray-300 items-center">
      <div className="justify-self-center sm:justify-self-start">
        <h1 className="text-2xl font-bold text-center">
          CISCC 靠北系統
          <BaseBadge className="bg-green-800 text-white">v2.0β</BaseBadge>
        </h1>
      </div>
      <div className="justify-self-center sm:justify-self-end mt-1 sm:mt-auto">
        <BaseButton>進入審文系統</BaseButton>
      </div>
    </section>
  );
}
