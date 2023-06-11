"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useWhereIsHere from "../hook/useWhereIsHere";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";
import { type } from "os";

export default function Header() {
  //서버사이드 html과 클라이언트 html 초기값 맞춰주기
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const whereIsHere = useWhereIsHere();
  const list = [
    ["intro", "#intro", "소개"],
    ["paper", "#paper", "논문"],
    ["dev", "#dev", "개발"],
  ];
  const big = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    setMounted(true);
  }, []);

  useEffect(() => {
    if (big && isOpen) setIsOpen(false);
  }, [big]);

  return (
    <>
      <header
        className={`${
          mounted && big ? "bg-[rgba(0,0,0,0.8)]" : "bg-black"
        } w-screen h-[60px] flex justify-center top-0 sticky z-10 relative`}
      >
        <nav
          className={`${
            big ? "mx-[45px]" : "mx-[20px]"
          } w-screen max-w-[1050px] flex justify-between items-center z-[100]`}
        >
          <Link href={"/"} className="flex items-center">
            <p className="text-[20px]">🐯</p>
            <span className="text-[16px] text-white font-semibold ml-1 mt-[2px]">
              이상철
            </span>
          </Link>

          {mounted && big ? (
            <>
              <div className="flex space-x-3">
                {list.map((el, idx) => (
                  <a
                    key={idx}
                    href={el[1]}
                    className={`${
                      whereIsHere === el[0] ? "text-white" : "text-[#8b95a1]"
                    } text-[14px] py-[9px] px-[10px] rounded-[5px] hover:bg-[rgba(82,82,91,0.5)]`}
                  >
                    {el[2]}
                  </a>
                ))}
              </div>
              <Link
                href={"https://github.com/zktm9903"}
                className="bg-[#f2f4f6] rounded-[6px] py-[5px] px-[12px] text-[14px] text-[#4e5968] hover:scale-105 hover:bg-zinc-300"
              >
                깃헙보기
              </Link>
            </>
          ) : (
            <>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-[28px] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-[22px] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              )}
            </>
          )}
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="absolute top-[60px] bg-black w-screen flex flex-col overflow-hidden"
            >
              {list.map((el) => (
                <a
                  href={el[1]}
                  className={`${
                    whereIsHere === el[0] ? "text-white" : "text-[#8b95a1]"
                  } py-[18px] px-[20px] text-[15px] hover:bg-zinc-900`}
                >
                  {el[2]}
                </a>
              ))}
              <Link
                href={"https://github.com/zktm9903"}
                className="bg-[#f2f4f6] rounded-[6px] my-[24px] mx-[24px] py-[10px] px-[12px] text-[16px] text-[#4e5968] hover:scale-105 hover:bg-zinc-300 text-center ease-in-out duration-300"
              >
                깃헙보기
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
