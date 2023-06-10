import { useEffect, useState } from "react";

export default function useWhereIsHere() {
  const [whereisHere, setWhereIsHere] = useState("intro");

  useEffect(() => {
    const intro = document.getElementById("intro")?.getBoundingClientRect();
    const paper = document.getElementById("paper")?.getBoundingClientRect();
    const dev = document.getElementById("dev")?.getBoundingClientRect();

    window.addEventListener("scroll", (event) => {
      const mid = window.pageYOffset + window.innerHeight / 2;

      if (intro && intro?.top <= mid && mid <= intro.bottom) {
        // console.log("1");
        setWhereIsHere("intro");
      }
      if (paper && paper?.top <= mid && mid <= paper.bottom) {
        // console.log("2");
        setWhereIsHere("paper");
      }
      if (dev && dev?.top <= mid && mid <= dev.bottom) {
        // console.log("3");
        setWhereIsHere("dev");
      }
    });
  }, []);

  return whereisHere;
}
