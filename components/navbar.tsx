"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Story", href: "/#story" },
    { label: "Trailer", href: "/#trailer" },
    { label: "Director", href: "/#director" },
    { label: "Cast", href: "/#cast" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Songs", href: "/#songs" },
    { label: "Journey", href: "/#journey" },
    { label: "Dialogues", href: "/#dialogues" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo - tight spacing */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-3xl font-bold text-accent" style={{ fontFamily: "Georgia, serif" }}>
              લાલો
            </div>
          </Link>

          {/* Desktop Menu - proper spacing */}
          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-accent hover:text-accent/80 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-accent/20 animate-fade-in-down">
            <div className="px-6 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
