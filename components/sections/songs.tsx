"use client"

import { useEffect, useState } from "react"
import { Music } from "lucide-react"

export default function SongsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const songs = [
    {
      title: "Mann Mohan",
      artist: "Krishna Beuraa",
      duration: "7:19",
      spotify: "https://open.spotify.com/embed/track/34pAXgGDTgJBHH0JqUiI3e?utm_source=generator",
    },
    {
      title: "Manorath Jeev",
      artist: "Kirtidan Gadhvi",
      duration: "4:17",
      spotify: "https://open.spotify.com/embed/track/2HYpjZhTbJo6g5xANbmaKS?utm_source=generator",
    },
    {
      title: "Maade Mane Lai Ja",
      artist: "Yashita Sharma, Ashish Kulkarni, Kirtidan Gadhvi",
      duration: "5:16",
      spotify: "https://open.spotify.com/embed/track/2NAAKFUdUAVjhJ47A9N3rC?utm_source=generator",
    },
    {
      title: "Krishna Theme",
      artist: "Divya Kumar",
      duration: "2:55",
      spotify: "https://open.spotify.com/embed/track/3YvoNsui4X5QCT1EbcRErX?utm_source=generator",
    },
    {
      title: "Kaan Tari Re",
      artist: "Aishwarya Majmudar, Kirtidan Gadhvi",
      duration: "4:58",
      spotify: "https://open.spotify.com/embed/track/6Y3slmwRoFNY5Dh05YhZxw?utm_source=generator",
    },
    {
      title: "Navee Savaar",
      artist: "Parthiv Gohil",
      duration: "2:38",
      spotify: "https://open.spotify.com/embed/track/4top9bnkKR7V0qzBQdusRn?utm_source=generator",
    },
    {
      title: "Dwarika No Naath",
      artist: "Jaysinh Gadhavi",
      duration: "3:38",
      spotify: "https://open.spotify.com/embed/track/1562sW6y1DTaObngmoy8X4?utm_source=generator",
    },
  ]

  useEffect(() => {
    const section = document.getElementById("songs")
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })

    observer.observe(section)
  }, [])

  return (
    <section id="songs" className="py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 flex items-center justify-center gap-3">
            <Music size={40} />
            Original Soundtrack
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {songs.map((song, idx) => (
            <div
              key={idx}
              className={`group bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-accent mb-1">{song.title}</h3>
              <p className="text-sm text-foreground/60 mb-3">{song.artist}</p>

              {/* Spotify Embed */}
              <iframe
                src={song.spotify}
                width="100%"
                height="80"
                className="rounded-lg mt-4"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>

              <div className="flex justify-between items-center pt-4 border-t border-border/50 mt-4">
                <span className="text-xs text-foreground/50">Duration</span>
                <span className="text-sm font-semibold text-accent">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
