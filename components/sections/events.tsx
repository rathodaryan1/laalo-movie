import Navbar from "@/components/navbar"


export default function EventsPage() {

  const events = [
    {
      id: 1,
      title: "Ahmedabad – Meet the Laalo Team",
      date: "29 Nov 2025 • 9:30 PM",
      image: "/gallery/laloooo4.jpg",
      description: "Official Gujarat Tour event featuring Karan Joshi, Reeva Rachh & Shruhad Goswami at Drive-In Cinema, Ahmedabad.",
    },
    {
      id: 2,
      title: "Bhavnagar – Fan Interaction",
      date: "30 Nov 2025 • 6:30 PM",
      image: "/gallery/bhavnagar.jpg",
      description: "Cast meets fans, shares behind-the-scenes stories, and celebrates the success of Laalo.",
    },
    {
      id: 3,
      title: "Surat – Special Screening",
      date: "Coming Soon",
      image: "/gallery/images.jpg",
      description: "Exclusive fan screening followed by Q&A with the Laalo cast.",
    },
    {
      id: 4,
      title: "Patan – Devotional Evening",
      date: "Coming Soon",
      image: "/gallery/images.jpg",
      description: "A spiritual musical gathering inspired by Laalo’s devotional soundtrack.",
    },
    {
      id: 5,
      title: "Rajkot – Meet & Greet",
      date: "Coming Soon",
      image: "/gallery/images.jpg",
      description: "Interact with the lead actors, take photos, and celebrate Laalo.",
    },
    {
      id: 6,
      title: "Dwarka – Krishna Blessings Tour",
      date: "Coming Soon",
      image: "/gallery/images.jpg",
      description: "A divine fan event where the Laalo team visits Dwarka with audience members.",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Gujarat Tour Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the cast of Laalo across Gujarat — Live interactions, screenings & celebrations
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={event.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                
                <div className="relative overflow-hidden rounded-lg h-72 mb-4">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                <div className="text-accent text-sm font-semibold mb-2">{event.date}</div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>

                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
            
    </>
  )
}
