import { motion } from "framer-motion"
import Container from "../components/Container"

export default function Hero() {
  return (
    <section id="home">
      <Container className="py-28">

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-gray-500 dark:text-gray-300 text-sm">Full-Stack Developer</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:text-5xl font-bold text-3xl md:text-4xl mt-3 leading-tight">Hi, I'm{" "}<span className="text-blue-600 dark:text-cyan-400">Babatunde Fashina</span>{" "}👋</motion.h1>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-gray-600 text-lg dark:text-gray-300 leading-relaxed max-w-2xl">I’m currently learning full-stack development while building real projects.
          My focus is on becoming better at solving problems with code and eventually using technology to improve access to healthcare, education, and job opportunities.</motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 flex gap-4">
          
          <button onClick={()=>{
            document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})
          }} className="px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition hover:scale-[1.02] dark:bg-gradient-to-r from-emerald-500 to-cyan-500 ">View Projects</button>

          <button onClick={()=>{
            document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})
          }} className="px-6 py-3 border rounded-md hover:bg-gray-100 transition hover:scale-[1.02]">Contact Me</button>
        </motion.div>

      </Container>
    </section>
  )
}