import React, { useState } from "react"
import { motion } from "framer-motion"
import Container from "../components/Container"
import { section } from "framer-motion/client"

type Project = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  category: string
  github?: string
  demo?: string
}

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "MediBridge",
      subtitle: "Hospital Management Platform",
      description:
        "A hospital management concept focused on patient records, appointment scheduling, and improving communication between patients and healthcare providers.",
      tech: ["React", "TypeScript", "Tailwind"],
      category: "fullstack",
      github: "https://github.com/DamilareBabs1/medibridge",
      demo: "https://medi-bridge-3d5k.vercel.app",
    },
    // {
    //   title: "Task Manager",
    //   subtitle: "React Practice App",
    //   description: "A simple task tracking app built while learning React state management.",
    //   tech: ["React", "JavaScript"],
    //   category: "react",
    // },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="projects">
    <Container>
      {/* Heading */}
      <h2 className="text-3xl dark:text-white font-bold">Projects</h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Here are some of the projects I’ve built while learning full-stack development.
      </p>

      {/* Filter Buttons */}
      <div className="mt-8 flex gap-3 text-sm">
        {["all", "react", "fullstack"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 border rounded-full transition hover:scale-105 ${
              filter === item
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedProject(project)}
            className="border rounded-xl p-6 bg-white/60 dark:bg-black/40 backdrop-blur-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-xl dark:text-white font-semibold">{project.title}</h3>
            <p className="text-sm dark:text-gray-300 text-gray-500 mt-1">{project.subtitle}</p>
            <p className="mt-4 dark:text-gray-300 text-gray-600">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs border rounded-full bg-gray-50 dark:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub →</a>

              <a href={project.demo} target="_blank" rel="noreferrer" className="hover:underline">Live Demo →</a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-black w-full max-w-lg p-6 rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold">
              {selectedProject.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {selectedProject.subtitle}
            </p>

            <p className="mt-4 text-gray-600">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs border rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm font-medium">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub →
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      )}
    </Container>
    </section>
  )
}