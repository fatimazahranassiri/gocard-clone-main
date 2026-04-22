export function Pricing() {
  const plans = [
    {
      name: "GoCard Classique",
      price: "249",
      currency: "MAD",
      description: "L'essentiel pour commencer à networker intelligemment.",
      features: [
        "1 Carte NFC GoCard (PVC premium)",
        "Profil digital personnalisé",
        "Mise à jour illimitée",
        "Statistiques de base",
        "Aucun abonnement mensuel",
      ],
      isPopular: false,
    },
    {
      name: "GoCard Pro",
      price: "349",
      currency: "MAD",
      description: "Pour les professionnels exigeants avec des besoins avancés.",
      features: [
        "1 Carte NFC GoCard (Métal/Bois)",
        "Profil digital complet",
        "Capture de leads",
        "Statistiques avancées",
        "Aucun abonnement mensuel",
        "Support prioritaire",
      ],
      isPopular: true,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-wider uppercase text-sm font-inter">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow text-white">Choisissez votre carte.</h2>
          <p className="text-neutral-400 font-inter max-w-2xl mx-auto">
            Paiement unique. Sans engagement. Profitez de votre GoCard à vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl flex flex-col ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-neutral-800 to-neutral-900 border-2 border-primary/50 shadow-2xl scale-105 z-10' 
                  : 'bg-neutral-800/50 border border-neutral-700 hover:border-neutral-600 transition-colors'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  LE PLUS POPULAIRE
                </div>
              )}
              
              <h3 className="text-2xl font-bold font-barlow text-white mb-2">{plan.name}</h3>
              <p className="text-neutral-400 font-inter text-sm h-10">{plan.description}</p>
              
              <div className="my-8">
                <span className="text-5xl font-black font-barlow text-white">{plan.price}</span>
                <span className="text-xl text-neutral-400 font-inter ml-2">{plan.currency}</span>
              </div>

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-300 font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  // Scroll to contact form
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] ${
                plan.isPopular 
                  ? 'bg-white text-black' 
                  : 'bg-neutral-700 text-white hover:bg-neutral-600'
              }`}>
                Commander
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
