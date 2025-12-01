"use client"

import { useEffect, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }  
    })
    observer.observe(document.getElementById("story") || new HTMLElement())
  }, [])

  return (
    <section id="story" className="py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Story & Synopsis</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="bg-card p-8 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-sm bg-opacity-50">
              <h3 className="text-2xl font-semibold text-accent mb-4" style={{ fontFamily: "Georgia, serif" }}>
                ગુજરાતી પરિચય
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                લાલો એ કૃષ્ણનો ભક્તિ, તેમના સમર્પણ અને નિયતિના માર્ગે તેમની પ્રવાહમાન બોધ વર્ણન કરે છે. આ અનંત પ્રેમની કથા મણીને એક માનવીય સ્વર આપે છે.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-sm bg-opacity-50">
              <h3 className="text-2xl font-semibold text-accent mb-4">English Synopsis</h3>
              <p className="text-foreground/80 leading-relaxed">
                Laalo is a cinematic exploration of devotion and divine destiny, following a journey through spiritual awakening. The story delves into themes of faith, sacrifice, and the eternal bond between the soul and the divine.
              </p>
            </div>
          </div>

          {/* Right: Image (FIXED SIZE) */}
          <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="relative flex justify-center">
              <div className="w-[168px] h-[299px] md:w-[220px] md:h-[390px] lg:w-[260px] lg:h-[460px]">
                <img
                  src="/gallery/images.jpg"
                  alt="Story Visualization"
                  className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-accent/20"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
