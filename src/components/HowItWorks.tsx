export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Commandez votre carte",
      description: "Choisissez le design qui vous correspond et personnalisez votre profil avec vos informations."
    },
    {
      number: "02",
      title: "Scannez ou Tap",
      description: "Approchez simplement la carte d'un smartphone compatible NFC ou scannez le QR code."
    },
    {
      number: "03",
      title: "Partagez instantanément",
      description: "Vos contacts s'enregistrent directement dans le répertoire de votre interlocuteur."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-wider uppercase text-sm font-inter">Comment ça marche</p>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow text-foreground">Voyez-le en action</h2>
          <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
            La carte NFC GoCard simplifie la façon dont vous partagez vos informations professionnelles. En trois étapes simples, soyez connecté.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors">
              <div className="text-6xl font-black font-barlow text-border mb-6 opacity-50">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold font-barlow text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
