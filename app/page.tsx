"use client";

import Development from "./components/Development";
import Introduce from "./components/Introduce";
import Paper from "./components/Paper";

export default function Home() {
  return (
    <main className="min-h-screen relative top-[-60px] w-screen flex flex-col items-center justify-center space-y-[300px]">
      <section className="w-screen h-[9000px]" id={"intro"}>
        <Introduce />
      </section>
      <section
        className="w-screen max-w-[1050px] mx-[45px] flex justify-between items-center py-[200px]"
        id={"paper"}
      >
        <Paper />
      </section>
      <section
        className="w-screen max-w-[1050px] mx-[45px] flex justify-between items-center py-[200px]"
        id={"dev"}
      >
        <Development />
      </section>
    </main>
  );
}
