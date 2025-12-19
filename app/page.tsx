import React from "react";
import Header from "@/components/Header";
import HomeSection from "@/app/sections/home";
import AboutSection from "@/app/sections/about";
import ExperienceSection from "@/app/sections/experience";
import ProjectsFetcher from "@/components/ProjectsFetcher";
import SkillsSection from "@/app/sections/skills";
import ContactSection from "@/app/sections/contact";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen gap-8 mt-8 mb-8 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box component="main"> 
          <HomeSection/>
          <AboutSection/>
          <ExperienceSection/>
          <ProjectsFetcher/>
          <SkillsSection/>
          <ContactSection/>
        </Box>
      </main>
    </div>
  );
}
