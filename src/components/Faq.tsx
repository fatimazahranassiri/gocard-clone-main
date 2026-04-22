"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "L'autre personne a-t-elle besoin d'une application ?",
    answer: "Non. GoCard utilise la technologie NFC integree a 99 % des smartphones modernes. La personne touche votre carte et votre profil s'ouvre instantanement dans son navigateur."
  },
  {
    question: "Puis-je modifier mon profil apres avoir partage ma carte ?",
    answer: "Oui. Toutes vos informations se mettent a jour en temps reel, sans changer la carte."
  },
  {
    question: "Livrez-vous a l'international ?",
    answer: "Oui, nous livrons au Maroc et a l'international selon votre adresse de livraison."
  },
  {
    question: "Puis-je ajouter le logo et les couleurs de mon entreprise ?",
    answer: "Absolument. Nous proposons des options de personnalisation avec gravure et identite visuelle."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-[0.25em] uppercase text-xs font-inter">Questions</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-barlow text-foreground">Reponses claires.</h2>
          <p className="text-muted-foreground font-inter max-w-xl mx-auto">
            Tout ce que vous devez savoir pour passer au niveau superieur dans votre networking.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-white/10 bg-[#191b20] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold font-barlow text-2xl text-foreground">{faq.question}</span>
                  <ChevronDown 
                    className={cn("w-6 h-6 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pt-0 text-muted-foreground font-inter leading-relaxed">
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
