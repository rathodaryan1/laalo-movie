"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import TrailerSection from "@/components/sections/trailer"
import DirectorVisionSection from "@/components/sections/director-vision"
import CastSection from "@/components/sections/cast"
import GallerySection from "@/components/sections/gallery"
import TimelineSection from "@/components/sections/timeline"
import DialoguesSection from "@/components/sections/dialogues"
import SongsSection from "@/components/sections/songs"
import EventsSection from "@/components/sections/events"
import ContactSection from "@/components/sections/contact"


export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrailerSection />
      <DirectorVisionSection />
      <CastSection />
      <GallerySection />
      <TimelineSection />
      <DialoguesSection />
      <SongsSection />
      <EventsSection />
      <ContactSection />
      
    </main>
  )
}
