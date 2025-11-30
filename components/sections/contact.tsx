"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We appreciate your support for Laalo.")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-4 animate-fade-in-up">Contact Us</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Reach out with your questions, feedback, or fan messages
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-accent/10 h-fit">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                <p className="text-foreground/70">contact@laalofilm.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-accent/10 h-fit">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                <p className="text-foreground/70">+91 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-accent/10 h-fit">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-foreground/70">
                  Akshat Productions
                  <br />
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-accent/20">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "YouTube", "Twitter", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 rounded-full border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all flex items-center justify-center text-foreground hover:text-accent"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-accent/20 rounded-lg p-8 animate-fade-in-right"
          >
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-accent/20 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                rows={5}
                placeholder="Share your thoughts about Laalo..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
