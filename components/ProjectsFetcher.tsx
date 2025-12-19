'use client';

import { useEffect, useState } from 'react';
import ProjectsSection from '@/app/sections/projects';

export default function ProjectsFetcher() {
  const [projectLinks, setProjectLinks] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nicholas489/repos')
      .then((res) => res.json())
      .then((result) => {
        result.sort((a: { created_at: number }, b: { created_at: number }) => {
          return a.created_at > b.created_at;
        });

        const links: string[] = [];

        for (const project of result) {
          if (project.name === 'la-liga-match-predictor' || project.name === 'terrahacks-portal') {
            links.push(project.html_url);
          }
        }
        setProjectLinks(links);
      });
  }, []);

  return <ProjectsSection links={projectLinks} />;
}
