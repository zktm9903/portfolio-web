"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useWhereIsHere from "../hook/useWhereIsHere";

export default function Header() {
  const whereIsHere = useWhereIsHere();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <header className="w-screen h-[60px] bg-[rgba(0,0,0,0.8)] flex justify-center top-0 sticky z-10">
      <nav className="w-screen max-w-[1050px] mx-[45px] flex justify-between items-center">
        <Link href={"/"} className="flex items-center">
          <p className="text-[20px]">🐯</p>
          <span className="text-[16px] text-white font-semibold ml-1 mt-[2px]">
            이상철
          </span>
        </Link>

        <section className="flex space-x-3">
          <a
            href={"#intro"}
            className={`${
              whereIsHere === "intro" ? "text-white" : "text-[#8b95a1]"
            } text-[14px] py-[9px] px-[10px] rounded-[5px] hover:bg-[rgba(82,82,91,0.5)]`}
          >
            소개
          </a>
          <a
            href={"#paper"}
            className={`${
              whereIsHere === "paper" ? "text-white" : "text-[#8b95a1]"
            } text-[14px] py-[9px] px-[10px] rounded-[5px] hover:bg-[rgba(82,82,91,0.5)]`}
          >
            논문
          </a>
          <a
            href={"#dev"}
            className={`${
              whereIsHere === "dev" ? "text-white" : "text-[#8b95a1]"
            } text-[14px] py-[9px] px-[10px] rounded-[5px] hover:bg-[rgba(82,82,91,0.5)]`}
          >
            개발
          </a>
        </section>

        <Link
          href={"https://github.com/zktm9903"}
          className="bg-[#f2f4f6] rounded-[6px] py-[5px] px-[12px] text-[14px] text-[#4e5968] hover:scale-105 hover:bg-zinc-300"
        >
          깃헙보기
        </Link>
      </nav>
    </header>
  );
}
