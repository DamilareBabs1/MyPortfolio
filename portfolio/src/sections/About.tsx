import { motion } from "framer-motion"
import Container from "../components/Container"

export default function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="border-t">
     
      <Container className="py-24">

        <motion.h2 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-3xl dark:text-white font-bold">About Me</motion.h2>

        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">My journey into tech started with a desire to build solutions rather than just use them. I previously worked in administration and operations, where I developed strong problem-solving and organizational skills.</motion.p>

        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">Now I’m focused on learning full-stack development and building real-world applications that can help improve access to opportunities in healthcare, education, and employment.</motion.p>

      </Container>
    </motion.section>
  )
}