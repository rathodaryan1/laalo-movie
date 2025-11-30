"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

export default function DialoguesSection() {
  const [isVisible, setIsVisible] = useState(false)

  const dialogues = [
    {
      gujarati: '"જ્યારે રસ્તો નજરે ના પડે… ત્યારે કૃષ્ણ રસ્તો બનાવી આપે."',
      english: '"When you see no path… Krishna creates one for you."',
      character: "Krishna (Inner Voice)",
    },
    {
      gujarati: '"જિંદગીમાં દુઃખ તો આવશે, પરંતુ એની સાથે કૃષ્ણ હશે… તો બધું સહેલું લાગે."',
      english: '"Life brings pain, but when Krishna is with you… everything becomes bearable."',
      character: "Tulsi",
    },
    {
      gujarati: '"ભગવાન સમય પર નથી આવતા… સાચા સમયે આવે છે."',
      english: '"God doesn’t come on your time… He comes at the right time."',
      character: "Krishna (Voice)",
    },
    {
      gujarati: '"દુઃખનું ભારણ મોટું છે… પણ કૃષ્ણનો આશીર્વાદ વધારે મોટો છે."',
      english: '"The pain may be heavy… but Krishna’s blessing is heavier."',
      character: "Laalo",
    },
  ]

  useEffect(() => {
    const section = document.getElementById("dialogues")
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect() // 🔥 important fix
      }
    })

    observer.observe(section)
  }, [])

  return (
    <section id="dialogues" className="py-20 px-6 md:px-12 bg-black/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 flex items-center justify-center gap-3">
            <Quote size={40} />
            Iconic Dialogues
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        {/* Dialogues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dialogues.map((dialogue, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-card to-black/30 p-8 rounded-lg border border-accent/20 
                hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              <p className="text-lg font-serif text-accent mb-4 leading-relaxed">
                {dialogue.gujarati}
              </p>

              <p className="text-sm italic text-foreground/70 mb-6">
                {dialogue.english}
              </p>

              <p className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">
                — {dialogue.character}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
