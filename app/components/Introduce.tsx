import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

// TODO:mediaquery를 적용하여 폰트 크기 조절

export default function Introduce() {
  const { scrollY } = useScroll();
  const [arrow, setArrow] = useState(true);
  const [order, setOrder] = useState("hello1");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (0 < latest && latest <= 2000) if (!arrow) setArrow(true);
    if (2000 < latest) if (arrow) setArrow(false);
    //prettier config 해야함
    if (0 < latest && latest <= 3000)
      if (order !== "hello1") setOrder("hello1");
    if (3000 < latest && latest <= 6000)
      if (order !== "hello2") setOrder("hello2");
    if (6000 < latest && latest <= 9000)
      if (order !== "hello3") setOrder("hello3");
  });

  return (
    <div className="w-full h-screen sticky top-0 relative flex justify-center ">
      <AnimatePresence>{order === "hello1" && <Hello1 />} </AnimatePresence>
      <AnimatePresence>{order === "hello2" && <Hello2 />}</AnimatePresence>
      <AnimatePresence>{order === "hello3" && <Hello3 />}</AnimatePresence>
      <AnimatePresence>{arrow && <Arrow />}</AnimatePresence>
      <video
        src="https://assets.mixkit.co/videos/30563/30563-720.mp4"
        className="absolute bottom-0 w-full"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute bottom-0 w-full h-screen z-[10]" />
    </div>
  );
}

function Hello1() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="absolute top-[150px] z-[200] w-screen max-w-[600px] h-[100px] flex flex-col items-center space-y-[20px] text-white"
    >
      <p className="text-4xl text-[#8B95A1]">학사 졸업 이후 최초</p>
      <p className="text-5xl">2023.03.01(수) -</p>
      <p className="text-7xl font-semibold text-center leading-[70px]">
        안녕하세요
        <br />웹 개발자 이상철입니다
      </p>
    </motion.div>
  );
}

function Hello2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="absolute top-[150px] z-[200] w-screen max-w-[600px] h-[100px] flex flex-col items-center space-y-[20px] text-white"
    >
      <p className="text-7xl font-semibold text-center leading-[70px]">
        포트폴리오를 <br />
        만들어봤습니다
      </p>
      <p className="text-5xl">6.4(일)-</p>
    </motion.div>
  );
}

function Hello3() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="absolute top-[150px] z-[200] w-screen max-w-[600px] h-[100px] flex flex-col items-center justify-center space-y-[20px] text-white"
    >
      <p className="text-7xl font-semibold text-center leading-[70px] mt-[100px]">
        아직 부족함이 많습니다
      </p>
      <p className="text-4xl text-[#8B95A1]">
        그래도 좋게 봐주시면 감사하겠습니다
      </p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <motion.div
      animate={{
        scale: [0.8, 1, 1, 1, 1, 0.8],
        opacity: [0, 1, 1, 1, 1, 0],
        y: [-20, 0, -10, 0, -10, -20],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0.7, 0.7, 0.7, 0.7, 0.7],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="absolute bottom-[50px] w-[70px] h-[70px] z-[100]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
      </svg>
    </motion.div>
  );
}
