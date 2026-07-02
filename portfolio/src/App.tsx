import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skill"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)

      setTimeout(() => {
        document.body.classList.add("loaded")
        setLoading(false)
      }, 500)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* glow background */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-[180px] rounded-full animate-pulse"></div>

        <div className="relative flex flex-col items-center gap-6">

          {/* LOGO */}
          <div className="text-2xl font-bold tracking-widest animate-pulse">
            Babatunde
          </div>

          {/* subtitle */}
          <div className="text-xs tracking-[0.4em] text-blue-400">
            FULLSTACK DEVELOPER
          </div>

          {/* loading dots */}
          <div className="flex gap-2 mt-2">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent text-black dark:text-white antialiased animate-fadeIn">
      <Navbar />

      <main className="space-y-40">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}