import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  X,
} from "lucide-react";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(false);
    next();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(false);
    prev();
  };

  useEffect(() => {
    if (!isPlaying || isModalOpen) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [images.length, isPlaying, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  return (
    <>
      <div className="relative group overflow-hidden rounded-xl border border-slate-200/10 bg-slate-200/5 aspect-video">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            referrerPolicy="no-referrer"
            onClick={() => {
              setIsModalOpen(true);
              setIsPlaying(false);
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors pointer-events-auto cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors pointer-events-auto cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? (
              <Pause size={14} fill="currentColor" />
            ) : (
              <Play size={14} fill="currentColor" />
            )}
          </button>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsPlaying(false);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted/50 hover:bg-muted",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-6 md:p-12"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="absolute inset-x-4 flex items-center justify-between z-10 pointer-events-none">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors pointer-events-auto"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors pointer-events-auto"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  alt="Enlarged view"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Close enlarged view"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
      <Link
        to="/"
        className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Taher Lokhandwala
      </Link>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                Overview
              </h2>
              <p className="text-muted leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3">
                Key Functionality
              </h2>
              <ul className="space-y-2">
                {project.functionality.map((item, i) => (
                  <li key={i} className="flex items-start text-muted text-sm">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>
        </div>

        {/* Right Column: Visuals */}
        <div className="lg:col-span-7 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel images={project.images} />
            <div className="flex flex-wrap gap-4 pt-6 justify-center">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200/20 bg-slate-200/5 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-slate-200/10"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
