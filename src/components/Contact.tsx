"use client";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-wider uppercase text-sm font-inter">Nous contacter</p>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow text-foreground">Prenez contact.</h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            Vous avez des questions concernant la carte GoCard ? Notre équipe est là pour vous répondre.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-secondary/30 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-border/50 shadow-lg">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold font-inter text-foreground">Nom complet</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold font-inter text-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="jean@exemple.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold font-inter text-foreground">Sujet</label>
              <input 
                type="text" 
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Comment puis-je commander pour mon équipe ?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold font-inter text-foreground">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                placeholder="Votre message ici..."
              ></textarea>
            </div>

            <button className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:bg-foreground/90 transition-colors">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
