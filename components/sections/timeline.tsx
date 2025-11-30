"use client"

import { useEffect, useState } from "react"

export default function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false)

  const timelineEvents = [
    { phase: "Script Development", date: "Jan 2024", icon: "📝", description: "Crafting the divine narrative" },
    { phase: "Pre-Production", date: "Feb 2024", icon: "🎬", description: "Preparing sets and casting" },
    { phase: "Filming Begins", date: "Mar 2024", icon: "🎥", description: "Capturing cinematic moments" },
    { phase: "Teaser Release", date: "Aug 2024", icon: "🎞️", description: "First glimpse revealed" },
    { phase: "Trailer Launch", date: "Sep 2024", icon: "🚀", description: "Full story preview" },
    { phase: "Music Release", date: "Oct 2024", icon: "🎵", description: "Soundtrack premiere" },
    { phase: "Grand Release", date: "Nov 2024", icon: "⭐", description: "Cinemas Worldwide" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.getElementById("journey") || new HTMLElement())
  }, [])

  return (
    <section id="journey" className="py-20 px-6 md:px-12 bg-black/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Film Journey</h2>
          <p className="text-foreground/70">From Script to Screen</p>
          <div className="h-1 w-20 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 ${idx % 2 === 0 ? "" : "md:grid-cols-2"}`}>
                  {/* Left Content */}
                  <div className={`${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    {idx % 2 === 0 && (
                      <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
                        <div className="text-3xl mb-3">{event.icon}</div>
                        <h3 className="text-xl font-bold text-accent mb-2">{event.phase}</h3>
                        <p className="text-sm text-accent/70 mb-3 font-semibold">{event.date}</p>
                        <p className="text-foreground/70">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-accent border-4 border-background z-10"></div>
                  </div>

                  {/* Right Content */}
                  <div className={`${idx % 2 === 1 ? "md:pl-12" : ""}`}>
                    {idx % 2 === 1 && (
                      <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
                        <div className="text-3xl mb-3">{event.icon}</div>
                        <h3 className="text-xl font-bold text-accent mb-2">{event.phase}</h3>
                        <p className="text-sm text-accent/70 mb-3 font-semibold">{event.date}</p>
                        <p className="text-foreground/70">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Timeline */}
                  <div className="md:hidden">
                    <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
                      <div className="text-3xl mb-3">{event.icon}</div>
                      <h3 className="text-xl font-bold text-accent mb-2">{event.phase}</h3>
                      <p className="text-sm text-accent/70 mb-3 font-semibold">{event.date}</p>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
