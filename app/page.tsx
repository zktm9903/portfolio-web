"use client";

import Introduce from "./components/Introduce";

export default function Home() {
  return (
    <main className="min-h-screen relative top-[-60px] w-screen">
      <section>
        <Introduce />
      </section>
      <section className="bg-black h-[3000px]">hihi</section>
    </main>
  );
}
