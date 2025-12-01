"use client"

import type React from "react"
import { Instagram, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! But note: The official way to contact Laalo team is via Instagram DM.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-4 animate-fade-in-up">Contact Laalo Team</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          The Laalo team is officially reachable only via Instagram DM.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Official Contact Box */}
          <div className="space-y-8 animate-fade-in-left">

            <div className="p-6 rounded-lg bg-card border border-accent/20">
              <h3 className="text-xl font-bold text-accent mb-3">Official Contact</h3>
              <p className="text-foreground/70 mb-4">
                The only official way to contact the Laalo team is through their Instagram account.
              </p>

                              <a
                  href="https://www.instagram.com/laalothefilm.official/"
                  target="_blank"
                  className="w-full flex items-center gap-3 bg-accent text-white py-3 px-4 
                            rounded-lg font-semibold hover:bg-accent/90 transition-all 
                            shadow-lg hover:shadow-accent/30"
                >
                  <Instagram size={20} className="text-white" />
                  Message on Instagram
                </a>

            </div>

            {/* Follow Section */}
            <div className="p-6 rounded-lg bg-card border border-accent/20">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Social</h4>

              <a
                href="https://www.instagram.com/laalothefilm.official/"
                target="_blank"
                className="w-12 h-12 rounded-full border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center text-foreground hover:text-accent"
              >
                <Instagram size={20} />
              </a>

              <p className="text-xs mt-3 text-muted-foreground">Only official social media</p>
            </div>
          </div>

          {/* Contact Form (Fan Messages Only) */}
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-accent/20 rounded-lg p-8 animate-fade-in-right"
          >
            <p className="text-sm text-muted-foreground mb-6">
              *This form is only for fan messages. For official contact, please DM on Instagram.
            </p>

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
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center gap-3 bg-accent text-white py-3 px-4 
             rounded-lg font-semibold hover:bg-accent/90 transition-all 
             shadow-lg hover:shadow-accent/30"
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
