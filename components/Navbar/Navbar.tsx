import Link from "next/link";
import React from "react";
import BaseBadge from "../Elements/Badge/BaseBadge";
import BaseButton from "../Elements/Button/BaseButton";
import BaseButtonGroup from "../Elements/Button/Group/BaseButtonGroup";
import { PRODUCT_NAME } from "../../consts";

export default function Navbar() {
  return (
    <section className="p-10 grid sm:grid-cols-2 grid-cols-1 pb-4 mb-4 border-b border-gray-300 items-center">
      <div className="justify-self-center sm:justify-self-start">
        <h1 className="text-2xl font-bold text-center">
          {PRODUCT_NAME}
          <BaseBadge className="bg-green-800 text-white">v2.0</BaseBadge>
        </h1>
      </div>
      <div className="justify-self-center sm:justify-self-end mt-1 sm:mt-auto">
        <BaseButtonGroup>
          <Link href="/review" passHref>
            <BaseButton>審文</BaseButton>
          </Link>
          <Link href="/" passHref>
            <BaseButton solid>發文</BaseButton>
          </Link>
        </BaseButtonGroup>
      </div>
    </section>
  );
}
