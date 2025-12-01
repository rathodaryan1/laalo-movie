"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    { id: 0, src: "/gallery/movieposter1.avif", alt: "Movie Poster 1" },
    { id: 1, src: "/gallery/movieposter2.webp", alt: "Movie Poster 2" },
    { id: 2, src: "/gallery/laooo.jpg", alt: "Behind The Scenes 1" },
    { id: 3, src: "/gallery/output-onlinepngtools.png", alt: "Movie Poster 2" },
    { id: 4, src: "/gallery/poster4.avif", alt: "Film Still 2" },
    { id: 5, src: "/gallery/actorss.jpg", alt: "Behind The Scenes 2" },
    
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    observer.observe(document.getElementById("gallery") || new HTMLElement())
  }, [])

  return (
    <section id="gallery" className="py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Gallery</h2>
          <p className="text-foreground/70 mb-6">Posters, Stills & Behind The Scenes</p>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg h-64 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <span className="text-accent text-2xl">+</span>
                  </div>
                  <p className="text-white mt-2 text-sm">View</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-accent hover:text-accent/70 transition-colors"
            >
              <X size={32} />
            </button>

            <img
              src={galleryItems[selectedImage].src || "/placeholder.svg"}
              alt={galleryItems[selectedImage].alt}
              className="w-full rounded-lg"
            />

            {/* Navigation */}
            <div className="flex justify-between mt-6 items-center">
              <button
                onClick={() => setSelectedImage((prev) => (prev === 0 ? galleryItems.length - 1 : (prev || 0) - 1))}
                className="px-6 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/40 transition-colors"
              >
                ← Previous
              </button>
              <span className="text-foreground/60 text-sm">
                {selectedImage + 1} / {galleryItems.length}
              </span>
              <button
                onClick={() => setSelectedImage((prev) => (prev === galleryItems.length - 1 ? 0 : (prev || 0) + 1))}
                className="px-6 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/40 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
