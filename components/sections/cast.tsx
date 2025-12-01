"use client"

import { useEffect, useState } from "react"
import { Instagram } from "lucide-react"

export default function CastSection() {
  const [isVisible, setIsVisible] = useState(false)

  const castMembers = [
    {
      name: "Karan Joshi",
      character: 'Lalji Dhansukh Parmar "Laalo"',
      image: "/cast/karan.jpg",
      instagram: "https://www.instagram.com/the_karanjoshi/", // <-- UPDATE IF NEEDED
    },
    {
      name: "Reeva Rachh",
      character: "Tulsi",
      image: "/cast/reeva.jpg",
      instagram: "https://www.instagram.com/reeva.rachh/", // <-- UPDATE IF NEEDED
    },
    {
      name: "Shruhad Goswami",
      character: "Krishna",
      image: "/cast/shruhad.jpg",
      instagram: "https://www.instagram.com/shruhad.goswami/", // <-- UPDATE IF NEEDED
    },
  ]

  useEffect(() => {
    const section = document.getElementById("cast")
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cast" className="py-20 px-6 md:px-12 bg-black/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Cast & Characters</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* Cast Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {castMembers.map((member, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              {/* Image Block */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-accent font-semibold mb-1">{member.character}</p>
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/60 rounded-lg transition-colors duration-300"></div>
              </div>

              {/* Name + Character */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-1">{member.character}</p>

                {/* Instagram Button */}
                <a
                  href={member.instagram}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg 
                             hover:bg-accent/90 transition-all shadow-md hover:shadow-accent/30 text-sm font-semibold"
                >
                  <Instagram size={16} className="text-white" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
