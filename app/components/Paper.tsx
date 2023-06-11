import Image from "next/image";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Paper() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-[45px]">
        <motion.div initial="offscreen" whileInView="onscreen">
          <motion.div variants={variants}>
            <p className="text-4xl text-[#8B95A1]">학부 연구생 1년 반</p>
          </motion.div>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen">
          <motion.div variants={variants}>
            <p className="text-7xl text-white font-semibold text-center leading-[70px] mt-4">
              좋은 교수님을 만났습니다
            </p>
          </motion.div>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen">
          <motion.div variants={variants}>
            <div className="flex justify-center items-center space-x-[70px] mt-[100px]">
              <Link
                href={"https://www.mdpi.com/2079-9292/11/23/3868"}
                target="_blank"
              >
                <motion.div
                  className="w-[50px] h-[32.81px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={
                      "https://pub.mdpi-res.com/img/design/mdpi-pub-logo-white-small.png?71d18e5f805839ab?1685969913"
                    }
                    alt="mdpi"
                    width={50}
                    height={40}
                    className="cursor-pointer hover:scale-110"
                  />
                </motion.div>
              </Link>
              <Link
                href={"https://github.com/zktm9903/NISL_lab"}
                target="_blank"
              >
                <motion.div
                  className="w-[30px] h-[30px] cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="w-full "
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="offscreen" whileInView="onscreen">
          <motion.div variants={variants}>
            <div className="relative mt-[50px]">
              <Image
                src={"/paperPreview.jpg"}
                alt="paper"
                width={600}
                height={100}
              />
              <div className="absolute top-0  w-[600px] h-[171.56px] bg-black opacity-20"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
