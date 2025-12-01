"use client"

import { useState, useEffect } from "react"
import { Play, ImageIcon } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/gallery/movieposter1.avif"
          alt="Laalo Movie Poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1
          className="font-serif text-5xl md:text-7xl font-bold mb-4 text-accent animate-fade-in-up"
          style={{ animationDelay: "0.2s", fontFamily: "Georgia, serif" }}
        >
          Laalo
        </h1>

        <div className="h-1 w-24 bg-accent mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}></div>

        <p
          className="text-2xl md:text-3xl font-light text-accent mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.6s", fontFamily: "Georgia, serif" }}
        >
          શ્રી કૃષ્ણ સદા સહાયતે
        </p>

        <p
          className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          A Divine Journey of Devotion and Destiny
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          {/* WATCH TRAILER */}
          <a
            href="#trailer"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg 
            hover:bg-accent/90 transition-all duration-300 flex items-center justify-center 
            gap-2 hover:scale-105 shadow-md"
          >
            <Play size={20} />
            Watch Trailer
          </a>

          {/* VIEW GALLERY — SAME DESIGN */}
                <a
            href="https://in.bookmyshow.com/explore/movies/laalo
"   // <-- replace with official ticket link later
            target="_blank"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 
                      transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-md"
          >
            🎟 Book Tickets
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
