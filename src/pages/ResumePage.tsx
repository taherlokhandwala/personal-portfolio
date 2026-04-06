import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export const ResumePage = () => (
  <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
    <Link
      to="/"
      className="group mb-4 inline-flex items-center font-semibold leading-tight text-accent"
    >
      <ArrowRight className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" />
      Taher Lokhandwala
    </Link>
    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
      Resume
    </h1>
    <div className="mt-12 space-y-12">
      <section>
        <h2 className="text-xl font-bold text-foreground">Summary</h2>
        <p className="mt-4 text-muted leading-relaxed">
          Full Stack Software Engineer with 3+ years of experience at Walmart,
          Johnson & Johnson and American Mathematical Society, driving
          end-to-end product development and successful launches of large-scale
          software solutions for 5M+ users. Seeking software engineering
          internship opportunities for summer/fall 2026.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-foreground">Education</h2>
        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                Purdue University
              </h3>
              <span className="text-sm text-muted font-medium">
                West Lafayette, IN
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">
                Master of Engineering Management — GPA: 3.64
              </p>
              <span className="text-sm text-muted">May 2027</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                PES University
              </h3>
              <span className="text-sm text-muted font-medium">
                Bangalore, India
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">
                Bachelor of Technology in Computer Science — GPA: 3.98
              </p>
              <span className="text-sm text-muted">May 2022</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  <span className="font-medium text-foreground">Honors:</span>{" "}
                  MRD Scholarship Awardee (Top 1% of the cohort)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  <span className="font-medium text-foreground">
                    Publication:
                  </span>{" "}
                  Blockchain based Transcript Processing, IEEE Xplore — May 2022
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
        <div className="mt-6 space-y-10">
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                The Data Mine
              </h3>
              <span className="text-sm text-muted font-medium">
                West Lafayette, IN
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">Technical Lead (Part-time)</p>
              <span className="text-sm text-muted">August 2025 — Present</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Architected J&J clinical trial app utilizing a multi LLM
                  framework for automated code generation, unit testing and
                  result validation, increasing next phase decision accuracy by
                  28%.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Engineered a data pipeline for 75+ years of AMS survey data by
                  migrating from legacy FileMaker Pro to Tableau, replacing a
                  2-week manual reporting process with real-time analytics.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                Walmart Global Tech
              </h3>
              <span className="text-sm text-muted font-medium">
                Bangalore, India
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">
                Software Development Engineer 3
              </p>
              <span className="text-sm text-muted">July 2024 — July 2025</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Doubled adoption and added $50M Gross Merchandise Value (GMV)
                  in 3 months (earning an Excellence Award) by developing Sam’s
                  Club Rx-To-Go using React, TypeScript, and Node.js to
                  introduce digital prescription ordering and home delivery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Migrated entire Sam’s Club tire fitment journey into Walmart’s
                  unified platform using Next.js, GraphQL and Apollo Federation
                  to streamline codebases, reduce duplicate work and cut feature
                  launch time by 50%.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Developed a GenAI powered feature using NLP and Google Gemini
                  API to analyze cake messages and recommend products,
                  increasing average cart value for cake orders by 30%.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Built CI/CD pipelines using Jenkins, Docker and Kubernetes for
                  web and orchestration servers. Led all frontend deployments by
                  coordinating with UAT, UX and DevOps teams to speed up
                  releases and maintain zero rollbacks.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                Walmart Global Tech
              </h3>
              <span className="text-sm text-muted font-medium">
                Bangalore, India
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">
                Software Development Engineer 2
              </p>
              <span className="text-sm text-muted">July 2022 — July 2024</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Increased revenue by 40% for a user base of 5M+ and earned a
                  Bravo Award plus promotion by developing UI and REST APIs for
                  multiple digital pharmacy features using React and Node.js.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Developed a no code solution using cloud configuration
                  variables to eliminate immunization deployments, reducing
                  vaccine launch time from 2 weeks to 30 minutes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Reduced issue detection time to under 30 minutes, improving
                  visibility into sales, orders, and user engagement across 10M+
                  sessions by building Splunk, Grafana and Adobe Analytics
                  dashboards and setting up alerts to monitor system performance
                  and business metrics.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Saved $650K annually by identifying a critical flaw in the
                  digital photos payment module through analysis of Splunk logs
                  and Quantum Metric sessions.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-foreground text-lg">
                Walmart Global Tech
              </h3>
              <span className="text-sm text-muted font-medium">
                Bangalore, India
              </span>
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <p className="text-muted italic">Software Development Intern</p>
              <span className="text-sm text-muted">
                January 2022 — July 2022
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Built a digital check-in flow for immunization appointments
                  using React and Node.js to reduce in-club wait times from 30
                  minutes to under 5 minutes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>
                  Achieved 100% unit and 95% automation coverage, strengthening
                  code quality by creating unit and automation tests using React
                  Testing Library, Jest and WebDriver.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-foreground">Skills</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"].map(
                (s) => (
                  <span
                    key={s}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Django",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "Figma",
                "Node.js",
                "Spring Boot",
                "MongoDB",
                "GraphQL",
                "RESTful APIs",
                "Microservices",
                "Docker",
                "Kubernetes",
                "Jenkins",
                "Azure",
                "Splunk",
                "Grafana",
                "Redis",
                "Kafka",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
              Tools & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Integration",
                "DSA",
                "System Design",
                "Github",
                "Agile Methodologies",
                "Jira",
                "Confluence",
                "Jest",
                "React Testing Library",
                "WebDriver",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 pt-8 border-t border-slate-200/10">
        <a
          href="https://drive.google.com/file/d/1EDOkxPchiEOxRG0gfFsP12V8ekoj4b6u/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center font-semibold leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-accent">
            See PDF Resume
          </span>
          <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
);
