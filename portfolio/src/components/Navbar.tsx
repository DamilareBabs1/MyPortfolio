import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // ✅ SECTION TRACKING (active nav)
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -100px 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // ✅ SCROLL PROGRESS BAR
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ DARK MODE TOGGLE
  const toggleDark = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 dark:bg-gray-800 z-[60]">
        <div className="h-full bg-black dark:bg-white transition-all duration-200 ease-out" style={{ width: `${scrollProgress}%` }}/></div>

      {/* 🔥 NAVBAR */}
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
       <a href="#home" className="font-bold text-xl cursor-pointer" onClick={() => setMenuOpen(false)}>Babatunde</a>

            {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">{["home", "about", "projects", "contact"].map((item) => (<li key={item}>
          <a href={`#${item}`} className={`transition duration-200 ${active === item ? "font-semibold text-blue-600" : "text-gray-600 dark:text-gray-300 hover:text-blue-600"}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>))}
        </ul>

       {/* Right Side */}
      <div className="flex items-center gap-3">
        
        <button onClick={toggleDark} className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition">{dark ? "Light" : "Dark"}</button>
        
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">{menuOpen ? "✕" : "☰"}</button>
      
      </div>
      </div>
    </nav>
    
    {menuOpen && (
      <div className="md:hidden bg-white dark:bg-slate-900 border-b shadow-lg animate-fadeIn">{["home", "about", "projects", "contact"].map((item) => (<a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className={`block px-6 py-4 text-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition ${active === item ? "bg-blue-50 dark:bg-slate-800 font-semibold text-blue-600" : "text-gray-700 dark:text-gray-300"}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>))}
      </div>
    )}
    </>
  )
}