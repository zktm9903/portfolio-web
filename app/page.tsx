"use client";

import Development from "./components/Development";
import Introduce from "./components/Introduce";
import Paper from "./components/Paper";

export default function Home() {
  return (
    <main className="min-h-screen relative top-[-60px] w-screen flex flex-col items-center justify-center space-y-[600px]">
      <section className="w-screen h-[9000px]">
        <Introduce />
      </section>
      <section className="w-screen max-w-[1050px] mx-[45px] flex justify-between items-center">
        <Paper />
      </section>
      <section className="w-screen max-w-[1050px] mx-[45px] flex justify-between items-center">
        <Development />
      </section>
      <section className="bg-black h-[3000px]">hihi</section>
    </main>
  );
}
