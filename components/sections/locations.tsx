"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

export default function LocationsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const locations = [
    {
      name: "Dwarka Temple",
      state: "Gujarat, India",
      description: "Historic spiritual site where key scenes were filmed",
      image: "/dwarka-temple-gujarati-ancient-monument.jpg",
    },
    {
      name: "Somnath Temple",
      state: "Gujarat, India",
      description: "Iconic location representing divine presence",
      image: "/somnath-temple-coastline-mahakal.jpg",
    },
    {
      name: "Rural Gujarat",
      state: "Rajkot District",
      description: "Pastoral landscapes capturing village life and tradition",
      image: "/gujarati-village-rural-landscape-agricultural-fiel.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.getElementById("locations-section") || new HTMLElement())
  }, [])

  return (
    <section id="locations-section" className="py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 flex items-center justify-center gap-3">
            <MapPin size={40} />
            Shooting Locations
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, idx) => (
            <div
              key={idx}
              className={`group rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="bg-card p-6 border-t border-border">
                <h3 className="text-xl font-bold text-accent mb-1">{location.name}</h3>
                <p className="text-sm text-accent/70 mb-3 flex items-center gap-1">
                  <MapPin size={14} />
                  {location.state}
                </p>
                <p className="text-foreground/70 text-sm group-hover:text-foreground/90 transition-colors">
                  {location.description}
                </p>

                {/* Map Button */}
                <button className="mt-4 w-full py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-all duration-300 text-sm font-semibold">
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
