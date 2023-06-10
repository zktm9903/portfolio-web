import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { developList } from "../constant/developList";
import Link from "next/link";

const variants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const delayVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0 },
};

export default function Development() {
  return (
    <div className="w-full px-[45px]">
      <motion.div initial="offscreen" whileInView="onscreen">
        <motion.p
          variants={variants}
          className="text-[45px] text-white font-semibold text-center leading-[70px]"
        >
          만들어본 것들
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 grid-rows-auto w-full gap-6 mt-[100px]"
      >
        {developList.map((el, idx) => (
          <motion.div key={idx} initial="offscreen" whileInView="onscreen">
            <motion.div variants={idx % 2 === 0 ? variants : delayVariants}>
              <Link href={el.github} target="_blank">
                <div className="bg-zinc-900 w-full aspect-video rounded-[15px]">
                  <Image
                    src={el.img}
                    alt={el.title}
                    className="rounded-[15px]"
                    style={{
                      objectFit: "scale-down",
                      width: "100%",
                      height: "100%",
                    }}
                    width={600}
                    height={600}
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center mt-3">
                <p className="text-white text-[30px] font-semibold">
                  {el.title}
                </p>
                <div className="flex space-x-3">
                  <Link href={el.github} target="_blank">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-[25px] cursor-pointer"
                      fill="white"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </motion.svg>
                  </Link>
                  {el.link && (
                    <Link href={el.link} target="_blank">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-[25px] cursor-pointer"
                        fill="white"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <svg>
                          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM12.1779 7.17624C11.8055 7.06167 11.41 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 10.59 14.9383 10.1945 14.8238 9.82212C14.5102 10.5166 13.8115 11 13 11C11.8954 11 11 10.1046 11 9C11 8.18846 11.4834 7.48982 12.1779 7.17624Z"></path>{" "}
                        </svg>
                      </motion.svg>
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-[#8B95A1] text-[23px] font-semibold mt-4">
                {el.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
