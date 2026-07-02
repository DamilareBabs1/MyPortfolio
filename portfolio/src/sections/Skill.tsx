import React from 'react'
import Container from "../components/Container"

export default function Skills() {
  return (
    <section id="skills" className="border-t">
      <Container className="py-24">
        <h2 className="text-3xl dark:text-white font-bold">Skills</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Technologies and tools I'm currently learning and using.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <span className="px-4 py-2 border rounded-full">HTML</span>
          <span className="px-4 py-2 border rounded-full">CSS</span>
          <span className="px-4 py-2 border rounded-full">JavaScript</span>
          <span className="px-4 py-2 border rounded-full">TypeScript</span>
          <span className="px-4 py-2 border rounded-full">React</span>
          <span className="px-4 py-2 border rounded-full">Tailwind CSS</span>
          <span className="px-4 py-2 border rounded-full">Node.js</span>
          <span className="px-4 py-2 border rounded-full">Express.js</span>
          <span className="px-4 py-2 border rounded-full">MongoDB</span>
          <span className="px-4 py-2 border rounded-full">Git</span>
          <span className="px-4 py-2 border rounded-full">GitHub</span>
        </div>
      </Container>
    </section>
  )
}