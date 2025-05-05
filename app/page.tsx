import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import HomeSection from "@/app/pages/home";
import AboutSection from "@/app/pages/about";
import ExperienceSection from "@/app/pages/experience";
import ProjectsSection from "@/app/pages/projects";
import ContactSection from "@/app/pages/contact";
import Box from "@mui/material/Box";

export default function Home(props: { disableCustomTheme?: boolean }) {
  // TODO: Find out how to edit the default breakpoints that materialUI uses
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
      </main> */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box component="main"> 
          <HomeSection/>
          <AboutSection/>
          <ExperienceSection/>
          {/* TODO: Incorporate Github API into the projects section */}
          {/* <ProjectsSection/> */}
          <ContactSection/>
        </Box>
      </main>
    </div>
  );
}
