import Link from "next/link";
import { ThreeDCard } from "./ui/3d-card";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-background to-background" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold font-barlow text-white tracking-tight">
              Un tap.
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold font-barlow text-white tracking-tight">
              Un impact infini.
            </h1>
          </div>
          
          <p className="text-lg text-neutral-400 font-inter max-w-lg mx-auto lg:mx-0 leading-relaxed">
            La carte NFC intelligente la plus premium au monde. Un tap et
            toute votre identité professionnelle — CV, portfolio, réseaux —
            s'affiche instantanément sur n'importe quel téléphone.
            Aucune application requise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Link href="#pricing" className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform">
              Obtenez votre carte
            </Link>
            <Link href="#how-it-works" className="inline-flex items-center justify-center bg-[#222222] border border-white/5 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-neutral-800 transition-colors">
              Comment ça marche
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
            <div className="text-left">
              <p className="text-2xl font-extrabold text-white">50K+</p>
              <p className="text-xs text-neutral-500 font-medium">Cartes expédiées</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-extrabold text-white">2M+</p>
              <p className="text-xs text-neutral-500 font-medium">Connexions créées</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-extrabold text-white flex items-center gap-1">
                4.9
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </p>
              <p className="text-xs text-neutral-500 font-medium">Note utilisateurs</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Card */}
        <div className="flex justify-center items-center py-12 lg:py-0 relative">
          <ThreeDCard containerClassName="w-full max-w-[450px] aspect-[1.586/1] md:max-w-[600px] xl:max-w-[700px]">
            <div className="relative w-full h-full [transform-style:preserve-3d]">
              
              {/* Verso de la carte (Now facing front by default to match screenshot) */}
              <div className="absolute inset-0 w-full h-full bg-[#111111] rounded-[20px] md:rounded-[32px] border border-neutral-800 flex items-center justify-center [backface-visibility:hidden]">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-[20px] md:rounded-[32px] shadow-[0_0_80px_rgba(255,255,255,0.03)] pointer-events-none"></div>
                
                {/* QR Code */}
                <div className="w-[30%] max-w-[200px] aspect-square bg-white rounded-xl p-2 flex items-center justify-center">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://mygocard.ma" alt="QR Code" className="w-full h-full" />
                </div>
              </div>

              {/* Recto de la carte (Now on the back) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-[20px] md:rounded-[32px] border border-neutral-700/50 p-6 md:p-10 flex flex-col justify-between overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                {/* Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay"></div>
                
                <div className="flex justify-between items-start z-10">
                  <img src="https://mygocard.ma/assets/logo-GOCard-White-HZCokBTL.png" alt="Logo" className="h-6 md:h-8" />
                  <div className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center bg-black/20 backdrop-blur-md">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                <div className="z-10 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-barlow text-white tracking-widest">GoCard Black</h3>
                  <p className="text-neutral-400 font-inter text-sm md:text-base">Premium NFC Edition</p>
                </div>
              </div>

            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  );
}
