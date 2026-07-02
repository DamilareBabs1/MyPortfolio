import React from 'react'
import Container from "../components/Container"

export default function Contact() {
  return (
    <section id="contact" className="border-t">
      <Container className="py-28">

        <h2 className="text-3xl dark:text-white font-bold">Contact</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">I'm currently open to learning opportunities, collaborations, and internships. If you have a project or just want to connect, feel free to reach out.</p>

        <div className="mt-10 space-y-4 text-gray-700 dark:text-gray-300">

            <div>
                <p className="text-sm dark:text-gray-500 text-gray-500">Email</p>
                <a href="mailto:Fashinababatunde200@gmail.com" className="hover:underline">Fashinababatunde200@gmail.com</a>
            </div>
            
            <div>
                <p className="text-sm dark:text-gray-500 text-gray-500">GitHub</p>
                <a href="https://github.com/DamilareBabs1" target="_blank" className="hover:underline">github.com/DamilareBabs1</a>
            </div>
            
         <div>
            <p className="text-sm dark:text-gray-500 text-gray-500">LinkedIn</p>
            <a href="https://www.linkedin.com/in/babatunde-fashina" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/babatunde-fashina</a>
         </div>

        </div>

      </Container>
    </section>
  )
}