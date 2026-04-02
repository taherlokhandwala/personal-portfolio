import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectsPage = () => (
  <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
    <Link to="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-accent">
      <ArrowRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
      Taher Lokhandwala
    </Link>
    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">All Projects</h1>
    <div className="mt-12 overflow-x-auto">
      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-background/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-foreground">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-foreground">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-foreground lg:table-cell">Made at</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-foreground lg:table-cell">Built with</th>
            <th className="py-4 text-sm font-semibold text-foreground">Link</th>
          </tr>
        </thead>
        <tbody>
          {[
            { year: '2024', name: 'Spotify Profile', at: 'Personal', tech: ['React', 'Node.js', 'Chart.js'], link: 'spotify-profile.com' },
            { year: '2024', name: 'Build a Spotify App', at: 'Personal', tech: ['React', 'Express', 'Spotify API'], link: 'spotify-course.com' },
            { year: '2023', name: 'Harvard Business School', at: 'Upstatement', tech: ['Next.js', 'TypeScript', 'Tailwind'], link: 'hbs.edu' },
            { year: '2022', name: 'Everytown for Gun Safety', at: 'Upstatement', tech: ['WordPress', 'PHP', 'SCSS'], link: 'everytown.org' },
            { year: '2021', name: 'Apple Music Widget', at: 'Apple', tech: ['JavaScript', 'SwiftUI', 'Web Components'], link: 'apple.com' },
          ].map((proj, i) => (
            <tr key={i} className="border-b border-slate-900/10 last:border-none hover:bg-slate-200/20 transition-colors">
              <td className="py-4 pr-8 text-sm text-muted">{proj.year}</td>
              <td className="py-4 pr-8 text-sm font-semibold text-foreground">{proj.name}</td>
              <td className="hidden py-4 pr-8 text-sm text-muted lg:table-cell">{proj.at}</td>
              <td className="hidden py-4 pr-8 text-sm lg:table-cell">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{t}</span>
                  ))}
                </div>
              </td>
              <td className="py-4 text-sm">
                <a href="#" className="inline-flex items-center font-medium text-muted hover:text-accent group/link">
                  {proj.link} <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
