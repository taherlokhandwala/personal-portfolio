import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useInView, useTransform } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from './lib/utils';
import { projects } from './data/projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { ResumePage } from './pages/ResumePage';
// import { ProjectsPage } from './pages/ProjectsPage';

const GlowCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 132, 199, 0.06), transparent 70%)`,
      }}
    />
  );
};

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex flex-col items-center justify-center -mt-16 md:-mt-24 lg:-mt-32 pb-12"
    >
      <a
        href="#experience"
        className="group cursor-pointer transition-colors hover:text-accent"
        aria-label="Scroll to experience"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-muted/60 transition-colors group-hover:text-accent"
        >
          <ChevronDown size={36} strokeWidth={1.5} />
        </motion.div>
      </a>
    </motion.div>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
};

const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <a
    href={`#${to}`}
    className={cn(
      "group flex items-center py-3 transition-all",
      active ? "text-accent" : "text-muted hover:text-foreground"
    )}
  >
    <span
      className={cn(
        "mr-4 h-px transition-all group-hover:w-20 group-hover:bg-accent group-hover:h-0.5",
        active ? "w-20 bg-accent h-0.5" : "w-8 bg-muted"
      )}
    />
    <span className={cn(
      "text-xs font-bold uppercase tracking-widest transition-all",
      active ? "scale-110 origin-left" : ""
    )}>
      {label}
    </span>
  </a>
);

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-muted transition-colors hover:text-foreground"
  >
    <Icon size={24} />
  </a>
);

const ExperienceCard = ({
  period,
  role,
  company,
  description,
  tags,
  link = "#",
}: {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
}) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-sm" />
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">
      {period}
    </header>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-foreground">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {role} · <span className="inline-block">{company}</span>
              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
        </div>
      </h3>
      <p className="mt-2 text-sm leading-normal text-muted">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
        {tags.map((tag) => (
          <li key={tag} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  imageUrl,
}) => (
  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-sm" />
    <div className="z-10 sm:order-2 sm:col-span-6">
      <h3>
        <Link
          className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group/link text-base"
          to={`/project/${id}`}
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
          <span>
            {title}
            <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none" />
          </span>
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-normal text-muted">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
        {tags.map((tag) => (
          <li key={tag} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
    <img
      alt={title}
      loading="lazy"
      width="200"
      height="48"
      decoding="async"
      className="z-10 rounded border-2 border-slate-900/10 transition group-hover:border-slate-900/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      src={imageUrl}
      referrerPolicy="no-referrer"
    />
  </div>
);

// --- Pages ---

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    ['about', 'experience', 'projects'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <Link to="/">Taher<br />Lokhandwala</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
              Full-Stack Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted">
              I build accessible, high-performance digital experiences for the web.
            </p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <NavLink to="about" label="About" active={activeSection === 'about'} />
                </li>
                <li>
                  <NavLink to="experience" label="Experience" active={activeSection === 'experience'} />
                </li>
                <li>
                  <NavLink to="projects" label="Projects" active={activeSection === 'projects'} />
                </li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
            <li>
              <SocialLink href="https://github.com/taherlokhandwala" icon={Github} />
            </li>
            <li>
              <SocialLink href="https://www.linkedin.com/in/t-lokhandwala" icon={Linkedin} />
            </li>
            <li>
              <SocialLink href="https://www.instagram.com/taher__lokhandwala" icon={Instagram} />
            </li>
            <li>
              <SocialLink href="mailto:tlokhandwala17@gmail.com" icon={Mail} />
            </li>
          </ul>
        </header>

        {/* Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <Section id="about" title="About">
            <div className="space-y-4 text-muted">
              <p>
                Back in my undergrad, I stumbled into a course called Web Technologies knowing absolutely nothing about building for the web. 
                What started as a reluctant elective quickly turned into the thing I couldn't stop thinking about.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of shipping software at <span className="font-bold text-slate-950">Walmart, Johnson & Johnson</span>, and the American Mathematical Society. 
                My focus has always been the same : building products that are <span className="font-bold text-slate-950">intuitive, accessible</span>, and genuinely make life a little <span className="font-bold text-slate-950">easier</span> for the people using them, 
                whether that's <span className="font-bold text-slate-950">5 million</span> customers or a researcher buried in 75 years of survey data.
              </p>
              <p>
                These days I'm at <span className="font-bold text-slate-950">Purdue</span> pursuing my Master's, where I get to keep building innovative ideas while sharpening everything I thought I already knew.
              </p>
              <p>
                When I'm not at the computer, I'm usually mountaineering, cycling, or swimming. Occasionally I resurface for friends, good food, and the rare full night of sleep.
              </p>
            </div>
          </Section>

          <ScrollIndicator />

          <Section id="experience" title="Experience">
            <div className="group/list space-y-12">
              <ExperienceCard
                period="2025 — Present"
                role="Technical Lead"
                company="The Data Mine"
                link="https://datamine.purdue.edu"
                description="Building clinical trial tooling for Johnson & Johnson using a multi-LLM framework, and modernizing 75 years of AMS survey data from FileMaker Pro into a live Tableau pipeline. Working directly with industry partners to scope and deliver both projects end-to-end."
                tags={['Multi-LLM Frameworks', 'Python', 'Tableau', 'Data Pipelines','Agile Methodologies']}
              />
              <ExperienceCard
                period="2024 — 2025"
                role="Software Engineer 3"
                company="Walmart Global Tech"
                link="https://www.walmart.com"
                description="Developed and launched Sam's Club Rx-To-Go and the tire fitment platform migration, collaborating across product, design, and infrastructure teams throughout. Owned all frontend deployments, coordinating with UAT, DevOps, and UX to keep every release stable."
                tags={['React', 'TypeScript', 'Next.js', 'GraphQL','Apollo Federation','Node.js','Docker','Kubernetes']}
              />
              <ExperienceCard
                period="2022 — 2024"
                role="Software Engineer 2"
                company="Walmart Global Tech"
                link="https://www.walmart.com"
                description="Built UI and REST APIs for Sam's Club digital pharmacy features used by millions of members, alongside observability dashboards in Splunk and Grafana to monitor system health and business metrics. Also designed a configuration-driven system that let the business team launch new vaccines independently, no engineering involvement needed."
                tags={['React', 'Node.js', 'REST APIs', 'Splunk','Grafana','Adobe Analytics','Cloud Configuration']}
              />
              <ExperienceCard
                period="2022 — 2022"
                role="Software Engineer Intern"
                company="Walmart Global Tech"
                link="https://www.walmart.com"
                description="Built a digital check-in flow for immunization appointments that cut in-club wait times significantly, working alongside senior engineers from design through delivery. Wrote unit and automation tests using Jest, React Testing Library, and WebDriver to get to full coverage before launch."
                tags={['React', 'Node.js', 'Jest', 'React Testing Library','WebDriver','Test Automation']}
              />
            </div>
            <div className="mt-12">
              <Link
                className="inline-flex items-center font-semibold leading-tight text-foreground group"
                to="/resume"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-accent">
                  View Full Resume
                </span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="group/list space-y-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
            {/*
            <div className="mt-12">
              <Link
                className="inline-flex items-center font-semibold leading-tight text-foreground group"
                to="/projects"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-accent">
                  View Full Project Archive
                </span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
            */}
          </Section>

          <footer className="max-w-md pb-16 text-sm text-muted sm:pb-0">
            <p>
              Designed in <span className="font-semibold text-[#864FFF]">Figma</span> and coded in <span className="font-semibold text-[#0078D4]">WebStorm</span>. Built with <span className="font-semibold text-[#57C4DC]">React</span> and <span className="font-semibold text-[#00BCFF]">Tailwind CSS</span>, deployed with <span className="font-semibold text-[#000000]">Vercel</span>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <GlowCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        {/*<Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}
