export function Reviews() {
  const reviews = [
    {
      name: "Mehdi B.",
      role: "Entrepreneur",
      content: "GoCard a complètement changé ma façon de networker. Finies les cartes papier perdues, un simple tap suffit maintenant.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sara M.",
      role: "Directrice Commerciale",
      content: "Très professionnel et élégant. Mes clients sont toujours impressionnés quand je partage mes coordonnées avec ma GoCard en métal.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Youssef K.",
      role: "Freelance",
      content: "Le profil digital est super pratique pour mettre à jour mes liens sans avoir à réimprimer des centaines de cartes.",
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-[0.25em] uppercase text-xs font-inter">Ils nous font confiance</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-barlow text-foreground">Ils ont scanne. Ils ont reussi.</h2>
          <p className="text-muted-foreground font-inter max-w-xl mx-auto">
            Rejoignez des milliers de professionnels qui ont ameliore leur facon de creer des contacts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 rounded-2xl bg-[#171920] border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground font-inter mb-8 italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold font-barlow text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground font-inter">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
