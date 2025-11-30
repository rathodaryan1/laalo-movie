"use client"
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Story", href: "/#story" },
    { label: "Trailer", href: "/#trailer" },
    { label: "Director", href: "/#director" },
    { label: "Cast", href: "/#cast" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Songs", href: "/#songs" },
    { label: "Journey", href: "/#journey" },
    { label: "Dialogues", href: "/#dialogues" },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/laalothefilm.official/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/watch?v=TVUPpmkrvVw",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "",
    },
    {
      icon: Twitter,
      label: "X",
      href: "",
    },
  ]

  return (
    <footer className="bg-background border-t border-accent/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Branding */}
          <div className="space-y-4 animate-fade-in">
            <div className="text-2xl font-bold text-accent" style={{ fontFamily: "Georgia, serif" }}>
              લાલો
            </div>
            <p className="text-accent/80 font-medium">શ્રી કૃષ્ણ સદા સહાયતે</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A divine journey of devotion and destiny.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Fan-made website • Non-commercial tribute</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Connect With Us</h3>
            
            <div className="mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Email</p>
              <a href="mailto:info@laalomovie.com" className="text-sm text-accent hover:text-accent/80 transition-colors">
                info@laalomovie.com
              </a>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Follow</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 rounded-full border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center text-foreground hover:text-accent"
                      title={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-8">
          
          <div className="text-xs text-muted-foreground text-center md:text-left">
            © 2025 Laalo — શ્રી કૃષ્ણ સદા સહાયતે. All rights reserved.
          </div>

          <div className="text-xs text-muted-foreground text-center">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
              Fan-made tribute website
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
            </span>
          </div>

          <div className="text-xs text-center md:text-right">
            <span className="text-muted-foreground">Designed & Developed by </span>
            <a
              href="https://www.aryanrathod.com"
              target="_blank"
              className="text-accent hover:text-accent/80 font-semibold transition-colors relative group"
            >
              Aryan Rathod
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-accent mx-1">→</span>
          </div>

        </div>

        {/* Back to Top */}
        <div className="flex justify-center pt-4">
          <button
            onClick={scrollToTop}
            className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 group"
          >
            <span>Back to top</span>
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>

      </div>
    </footer>
  )
}
