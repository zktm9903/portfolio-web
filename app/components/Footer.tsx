import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen bg-[#191919] pt-[50px] pb-[70px] flex justify-center space-y-[30px]">
      <div className="w-full max-w-[1050px] mx-[45px]">
        <div className="flex space-x-[40px]">
          <SectionForm
            title={"개인"}
            list={[{ name: "깃허브", href: "https://github.com/zktm9903" }]}
          />
          <SectionForm
            title={"컨택"}
            list={[
              {
                name: "zktm9903@gmail.com",
                href: "mailto:zktm9903@gmail.com",
              },
            ]}
          />
        </div>
        <SectionForm
          title={"Copyright ⓒ LeeSang Securities. All Rights Reserved"}
          list={[
            { name: "대표 : 이상철" },
            { name: "대한민국 경기도 성남시 어딘가" },
          ]}
        />
      </div>
    </footer>
  );
}

interface FormProps {
  title: string;
  list: { name: string; href?: string }[];
}

function SectionForm({ title, list }: FormProps) {
  return (
    <p className="text-[#8b95a1] text-[13px] mb-4 leading-[22px]">
      <strong className="text-[#b0b8c1] text-[15px] leading-[50px]">
        {title}
      </strong>
      {list.map((el, idx) => (
        <React.Fragment key={idx}>
          <br />
          <Link
            href={el.href ? el.href : ""}
            className={`${
              el.href
                ? "cursor-pointer hover:underline hover:decoration-1"
                : "cursor-default"
            }`}
          >
            {el.name}
          </Link>
        </React.Fragment>
      ))}
    </p>
  );
}
