"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CardColor = "black" | "white" | "gold";

export default function PersonnaliserCartePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [showName, setShowName] = useState(true);
  const [showRole, setShowRole] = useState(true);
  const [showCompany, setShowCompany] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [logoName, setLogoName] = useState("");
  const [autoFitLogo, setAutoFitLogo] = useState(false);
  const [cardColor, setCardColor] = useState<CardColor>("black");

  const cardStyle = useMemo(() => {
    if (cardColor === "white") {
      return "from-[#f1f1f2] via-[#dcdde1] to-[#f4f4f5] border-black/10 text-black";
    }
    if (cardColor === "gold") {
      return "from-[#695413] via-[#d8b032] to-[#6c5817] border-[#f6d870]/40 text-black";
    }
    return "from-[#2a2d36] via-[#15181f] to-[#2a2d36] border-white/15 text-white";
  }, [cardColor]);

  const mutedText = cardColor === "white" ? "text-black/70" : "text-white/75";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-4 w-full z-50 flex justify-center px-4 pointer-events-none">
        <div className="bg-[#101114]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between w-full max-w-5xl shadow-2xl pointer-events-auto">
          <Link href="/" className="flex items-center gap-2 pr-12">
            <img src="https://mygocard.ma/assets/logo-GOCard-White-HZCokBTL.png" alt="GoCard Logo" className="h-6" />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium text-neutral-300">
            <Link href="/#how-it-works" className="hover:text-white transition-colors">Comment ca marche</Link>
            <Link href="/#reviews" className="hover:text-white transition-colors">Avis</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Tarifs</Link>
            <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          <Link
            href="/#contact"
            className="bg-[#191b20] border border-white/20 text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-[#232632] transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#171a22] to-[#0f1117] p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="flex justify-center pt-8">
                <div className={`w-full max-w-[520px] aspect-[1.586/1] rounded-[28px] border bg-gradient-to-br p-8 flex flex-col justify-between shadow-[0_0_70px_rgba(255,255,255,0.07)] ${cardStyle}`}>
                  <div className="flex justify-center pt-6">
                    {showLogo ? (
                      <span className="text-5xl font-black tracking-tight">GOCARD</span>
                    ) : (
                      <span className={`text-sm ${mutedText}`}>Logo masque</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    {showName && <h3 className="text-4xl md:text-5xl font-bold tracking-wide">{name || "VOTRE NOM"}</h3>}
                    {showRole && <p className={`text-base md:text-lg uppercase tracking-[0.2em] ${mutedText}`}>{role || "VOTRE POSTE"}</p>}
                    {showCompany && <p className={`text-sm md:text-base ${mutedText}`}>{company || "VOTRE ENTREPRISE"}</p>}
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-barlow">Personnalisez votre carte</h1>
                <p className="mt-2 text-neutral-400">
                  La carte NFC intelligente la plus premium au monde. Touchez une fois pour partager toute votre identite professionnelle.
                </p>

                <form className="mt-8 space-y-5">
                  <FieldWithToggle
                    label="Nom sur la carte : *"
                    checked={showName}
                    onToggle={(checked) => setShowName(checked)}
                  >
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder="Votre nom"
                    />
                  </FieldWithToggle>

                  <FieldWithToggle
                    label="Poste : *"
                    checked={showRole}
                    onToggle={(checked) => setShowRole(checked)}
                  >
                    <input
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={inputClass}
                      placeholder="Votre poste"
                    />
                  </FieldWithToggle>

                  <FieldWithToggle
                    label="Nom d'entreprise :"
                    checked={showCompany}
                    onToggle={(checked) => setShowCompany(checked)}
                  >
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputClass}
                      placeholder="Votre entreprise"
                    />
                  </FieldWithToggle>

                  <FieldWithToggle
                    label="Logo : *"
                    checked={showLogo}
                    onToggle={(checked) => setShowLogo(checked)}
                  >
                    <label className="w-full block">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setLogoName(e.target.files?.[0]?.name || "")}
                        accept=".png,.jpg,.jpeg,.webp"
                      />
                      <span className="w-full min-h-24 rounded-lg border border-white/15 bg-black/30 flex flex-col items-center justify-center text-neutral-300 cursor-pointer hover:border-white/30 transition-colors px-4 py-3 text-center">
                        <span className="font-semibold">Deposez votre logo ou parcourez</span>
                        <span className="text-xs text-neutral-500 mt-1">PNG, WEBP ou JPG (max 10MB)</span>
                        {logoName && <span className="text-xs text-white mt-2">{logoName}</span>}
                      </span>
                    </label>
                  </FieldWithToggle>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Adapter automatiquement le logo a la carte</span>
                    <button
                      type="button"
                      onClick={() => setAutoFitLogo((prev) => !prev)}
                      className={`w-11 h-6 rounded-full border transition-colors ${
                        autoFitLogo ? "bg-white/25 border-white/40" : "bg-transparent border-white/25"
                      }`}
                      aria-label="Activer adaptation logo"
                    >
                      <span
                        className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                          autoFitLogo ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Couleur de la carte :</p>
                    <div className="grid grid-cols-3 gap-3">
                      <ColorButton id="black" active={cardColor === "black"} label="NOIR" swatchClass="bg-black border-white/20" onClick={() => setCardColor("black")} />
                      <ColorButton id="white" active={cardColor === "white"} label="BLANC" swatchClass="bg-white border-black/10" onClick={() => setCardColor("white")} />
                      <ColorButton id="gold" active={cardColor === "gold"} label="OR" swatchClass="bg-[#d2ad30] border-[#f6d870]/40" onClick={() => setCardColor("gold")} />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-2 bg-[#d1d5db] text-[#22252b] font-bold py-4 rounded-full text-xl hover:bg-white transition-colors"
                  >
                    Continuer vers les details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const inputClass =
  "w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-shadow";

function FieldWithToggle({
  label,
  checked,
  onToggle,
  children,
}: {
  label: string;
  checked: boolean;
  onToggle: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        <label className="inline-flex items-center gap-2 text-sm text-neutral-300">
          <input type="checkbox" checked={checked} onChange={(e) => onToggle(e.target.checked)} />
          Afficher
        </label>
      </div>
      {children}
    </div>
  );
}

function ColorButton({
  label,
  active,
  swatchClass,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  swatchClass: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 flex flex-col items-center gap-2 transition-colors ${
        active ? "border-white/60 bg-white/10" : "border-white/20 bg-transparent"
      }`}
    >
      <span className={`w-8 h-8 rounded-md border ${swatchClass}`} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
