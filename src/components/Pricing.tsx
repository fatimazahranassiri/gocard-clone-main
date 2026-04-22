export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "190dh",
      oldPrice: "290 dh",
      features: [
        "Couleurs personnalisees - Noir, Blanc ou Argent",
        "Votre logo grave au laser sur la carte",
        "Page de profil en marque blanche",
        "Activation double NFC + QR code",
        "Blocs sociaux et liens illimites",
        "Analyses avancees + capture de leads",
        "Production et livraison prioritaires",
      ],
      isPopular: false,
    },
    {
      name: "Personnalisee",
      price: "290dh",
      oldPrice: "370 dh",
      features: [
        "Couleurs personnalisees - Noir, Blanc ou Argent",
        "Votre logo grave au laser sur la carte",
        "Page de profil en marque blanche",
        "Activation double NFC + QR code",
        "Blocs sociaux et liens illimites",
        "Analyses avancees + capture de leads",
        "Production et livraison prioritaires",
      ],
      isPopular: true,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-3xl flex flex-col border ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-neutral-700 to-neutral-900 border-white/40 shadow-2xl z-10' 
                  : 'bg-gradient-to-b from-neutral-700 to-neutral-900 border-white/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2a2d33] border border-white/20 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  LE PLUS POPULAIRE
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-5xl font-extrabold font-barlow text-white leading-none">{plan.name}</h3>
                <div className="text-right">
                  <p className="text-5xl font-extrabold font-barlow text-white leading-none">{plan.price}</p>
                  <p className="text-sm text-neutral-200 bg-white rounded px-1 inline-block mt-1 leading-none">{plan.oldPrice}</p>
                </div>
              </div>

              <div className="h-44 rounded-xl border border-white/20 bg-black/45 mb-6" />

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-300 leading-6">+</span>
                    <span className="text-neutral-300 font-inter text-sm">{feature}</span>
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
                className={`w-full py-3.5 rounded-full font-bold text-2xl transition-transform hover:scale-[1.01] ${
                plan.isPopular 
                  ? 'bg-[#2d2f36] text-white border border-white/20' 
                  : 'bg-white text-[#222]'
              }`}>
                {plan.isPopular ? "Personnalisez votre carte" : "Acheter Basic"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
