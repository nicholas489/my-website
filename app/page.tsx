'use client'
import React, { useState } from "react";
import Header from "@/components/Header";
import HomeSection from "@/app/sections/home";
import AboutSection from "@/app/sections/about";
import ExperienceSection from "@/app/sections/experience";
import ProjectsSection from "@/app/sections/projects";
import SkillsSection from "@/app/sections/skills";
import ContactSection from "@/app/sections/contact";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export default function Home() {
  const [projectLinks, setProjectLinks] = useState<string[]>([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users/nicholas489/repos")
      .then((res) => res.json())
      .then((result) => {
        result.sort((a: { created_at: number; }, b: { created_at: number; }) => {
          return a.created_at > b.created_at;
        });
        
        const links: string[] = [];

        for (const project of result) {
          if (project.name === "la-liga-match-predictor" || project.name === "terrahacks-portal") {
            links.push(project.html_url);
          }
        }
        setProjectLinks(links);
      });
  }, []);

  return (
    <div className="grid items-center justify-items-center min-h-screen gap-8 mt-8 mb-8 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box component="main"> 
          <HomeSection/>
          <AboutSection/>
          <ExperienceSection/>
          <ProjectsSection 
            links={projectLinks}
          />
          <SkillsSection/>
          <ContactSection/>
        </Box>
      </main>
    </div>
  );
}
