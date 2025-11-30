"use client"

import { useState, useEffect } from "react"

export default function TrailerSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("trailer")
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    observer.observe(section)
  }, [])

  return (
    <section id="trailer" className="py-20 px-6 md:px-12 bg-black/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Watch The Trailer</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* YOUTUBE EMBED */}
        <div
          className={`relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/TVUPpmkrvVw?si=-y7GCsAAjhsRVt_3" 
            title="Laalo Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-center mt-8 text-foreground/70 text-sm">
          The trailer plays directly on the website and views count on YouTube.
        </p>
      </div>
    </section>
  )
}
