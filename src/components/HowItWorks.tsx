export function HowItWorks() {
  const brands = ["APEX VENTURES", "CLOUDSYNC", "DIGITAL EDGE", "NEXGEN", "VELOCITY", "PRISMA LABS"];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="border-y border-white/10 bg-[#101218] mb-16">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs md:text-sm font-semibold tracking-wide text-neutral-500">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-[0.25em] uppercase text-xs font-inter">Comment ca marche</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-barlow text-foreground">Voyez-le en action</h2>
          <p className="text-muted-foreground font-inter max-w-xl mx-auto leading-relaxed">
            La carte NFC intelligente la plus premium au monde. Touchez une seule fois et toute votre identite professionnelle s ouvre instantanement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="h-[420px] rounded-2xl border border-white/10 bg-gradient-to-r from-[#1a1f2c] via-[#171a24] to-[#1a2234] flex items-center justify-center">
            <button
              type="button"
              className="w-24 h-24 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Lancer la video"
            >
              <span className="ml-1 text-3xl text-white">▶</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-32 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1d2230] via-[#171a24] to-[#1b2438]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
