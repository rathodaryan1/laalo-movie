"use client"

import { useEffect, useState } from "react"

export default function DirectorVisionSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("director")
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const themes = [
    {
      title: "Divine Devotion",
      description: "Exploring the depths of spiritual connection and faith through authentic storytelling",
    },
    {
      title: "Cultural Richness",
      description: "Celebrating Gujarati heritage and traditions with cinematic grandeur",
    },
    {
      title: "Emotional Journey",
      description: "Crafting a narrative that resonates with the human experience of destiny",
    },
    {
      title: "Visual Poetry",
      description: "Creating scenes that speak through symbolism and visual metaphors",
    },
  ]

  return (
    <section id="director" className="py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Director's Vision</h2>
          <p className="text-foreground/70 text-lg">The Creative Journey Behind Laalo</p>
          <div className="h-1 w-20 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Director Profile */}
          <div
            className={`md:col-span-1 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <img
                src="/cast/ankit.jpg"
                alt="Director Portrait"
                className="w-full h-64 object-cover rounded-lg mb-6 border-2 border-accent/20"
              />
              <h3 className="text-2xl font-bold text-accent mb-2">Ankit Sakhiya</h3>
              <p className="text-foreground/70 mb-4">Visionary Filmmaker</p>

              <div className="space-y-2 text-sm text-foreground/60">
                <p>🎬 Crafting Stories with Soul</p>
                <p>📖 Celebrating Cultural Heritage</p>
                <p>✨ Bringing Dreams to Screen</p>
              </div>
            </div>
          </div>

          {/* Vision & Themes */}
          <div
            className={`md:col-span-2 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h3 className="text-2xl font-semibold text-accent mb-4">Creative Vision</h3>

              <p className="text-foreground/80 leading-relaxed mb-6">
                "Laalo represents a commitment to authentic storytelling that honors our cultural roots while reaching
                for universal truths about faith, love, and destiny. Every frame is crafted to be a visual meditation on
                devotion—a cinematic prayer that invites the audience into a sacred space."
              </p>

              <p className="text-foreground/70 text-sm italic">- Director, Laalo</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themes.map((theme, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 p-6 rounded-lg border border-accent/20 
                  hover:border-accent/60 transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-accent mb-2 group-hover:text-accent/80 transition-colors">
                    {theme.title}
                  </h4>
                  <p className="text-foreground/70 text-sm group-hover:text-foreground/90 transition-colors">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
