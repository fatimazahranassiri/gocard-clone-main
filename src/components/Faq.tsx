"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Comment fonctionne la carte NFC ?",
    answer: "La carte contient une puce NFC. En l'approchant d'un smartphone compatible (la majorité des téléphones récents), vos informations sont instantanément transmises au téléphone, sans avoir besoin d'installer d'application."
  },
  {
    question: "Dois-je payer un abonnement mensuel ?",
    answer: "Non, chez GoCard le paiement est unique. Vous achetez votre carte une seule fois et vous bénéficiez de votre profil digital à vie."
  },
  {
    question: "Que se passe-t-il si je change de numéro ou d'entreprise ?",
    answer: "Vous pouvez modifier toutes vos informations (numéro, email, réseaux sociaux, entreprise) à tout moment et de manière illimitée depuis votre espace personnel."
  },
  {
    question: "Est-ce que ça marche avec tous les téléphones ?",
    answer: "La technologie NFC fonctionne avec tous les iPhone depuis le modèle XS et la quasi-totalité des téléphones Android récents. Pour les anciens modèles, un QR code est imprimé au dos de la carte."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-wider uppercase text-sm font-inter">Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold font-barlow text-foreground">Réponses claires.</h2>
          <p className="text-muted-foreground font-inter">
            Tout ce que vous devez savoir sur GoCard.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-border/50 bg-background rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold font-barlow text-lg text-foreground">{faq.question}</span>
                  <ChevronDown 
                    className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-muted-foreground font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
