import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home(props: { disableCustomTheme?: boolean }) {
  // TODO: Find out how to edit the default breakpoints that materialUI uses
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/tools.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">This webpage is currently under construction</h1>
          <p className="text-md">Checkback soon for the updated version!</p>
        </div>
      </main>
    </div>
  );
}
