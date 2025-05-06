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
