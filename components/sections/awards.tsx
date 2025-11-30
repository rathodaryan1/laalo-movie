"use client"

import { Trophy, Star } from "lucide-react"

export default function AwardsSection() {
  const awards = [
    {
      category: "Best Film",
      title: "Gujarat Film Festival",
      status: "Won",
      year: "2024",
      icon: Trophy,
    },
    {
      category: "Best Director",
      title: "National Film Awards",
      status: "Nominated",
      year: "2024",
      icon: Star,
    },
    {
      category: "Best Cinematography",
      title: "International Cinema Festival",
      status: "Won",
      year: "2024",
      icon: Trophy,
    },
    {
      category: "Best Music",
      title: "Gujarati Music Awards",
      status: "Won",
      year: "2024",
      icon: Trophy,
    },
    {
      category: "Best Actor",
      title: "National Awards",
      status: "Nominated",
      year: "2024",
      icon: Star,
    },
    {
      category: "Cultural Excellence",
      title: "Ministry of Culture",
      status: "Coming Soon",
      year: "2024",
      icon: Star,
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-4 animate-fade-in-up">
          Awards & Recognition
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Celebrating Laalo's achievements in cinema
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            const isWon = award.status === "Won"

            return (
              <div
                key={index}
                className={`relative bg-card border rounded-lg p-6 overflow-hidden animate-fade-in-up transition-all duration-300 ${
                  isWon
                    ? "border-accent/50 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                    : "border-accent/20 hover:border-accent/40"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isWon && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
                )}

                <div className="relative flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${isWon ? "bg-accent/20" : "bg-muted/30"}`}>
                    <IconComponent size={24} className={isWon ? "text-accent" : "text-muted-foreground"} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{award.category}</p>
                    <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold ${
                          isWon
                            ? "text-accent"
                            : award.status === "Coming Soon"
                              ? "text-muted-foreground"
                              : "text-accent/60"
                        }`}
                      >
                        {award.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
