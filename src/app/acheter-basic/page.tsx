"use client";

import Link from "next/link";
import { useState } from "react";

export default function AcheterBasicPage() {
  const inputClass =
    "w-full bg-black border border-white/15 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-shadow";

  const [formData, setFormData] = useState({
    cardName: "",
    cardRole: "",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    quantity: "1",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-4 w-full z-50 flex justify-center px-4 pointer-events-none">
        <div className="bg-[#101114]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between w-full max-w-5xl shadow-2xl pointer-events-auto">
          <Link href="/" className="flex items-center gap-2 pr-12">
            <img
              src="https://mygocard.ma/assets/logo-GOCard-White-HZCokBTL.png"
              alt="GoCard Logo"
              className="h-6"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium text-neutral-300">
            <Link href="/#how-it-works" className="hover:text-white transition-colors">
              Comment ca marche
            </Link>
            <Link href="/#reviews" className="hover:text-white transition-colors">
              Avis
            </Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">
              Tarifs
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
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
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-[520px] aspect-[1.586/1] rounded-[28px] border border-white/15 bg-gradient-to-br from-[#2a2d36] via-[#15181f] to-[#2a2d36] p-8 flex flex-col justify-end shadow-[0_0_70px_rgba(255,255,255,0.07)]">
                  <h3 className="text-3xl md:text-4xl font-bold text-white/90 tracking-wide">
                    {formData.cardName || "VOTRE NOM"}
                  </h3>
                  <p className="mt-1 text-base md:text-lg text-neutral-300">
                    {formData.cardRole || "VOTRE POSTE"}
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-barlow">Entrez vos informations</h1>
                <p className="mt-2 text-neutral-400">
                  Nous imprimerons et expedierons votre carte a l&apos;adresse ci-dessous.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Nom sur la carte *">
                      <input
                        name="cardName"
                        value={formData.cardName}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Votre Nom"
                      />
                    </Field>
                    <Field label="Poste sur la carte *">
                      <input
                        name="cardRole"
                        value={formData.cardRole}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Votre Poste"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Nom complet *">
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Votre nom complet"
                      />
                    </Field>
                    <Field label="Nom de l'entreprise *">
                      <input
                        name="companyName"
                        value={formData.companyName}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Votre entreprise"
                      />
                    </Field>
                  </div>

                  <Field label="Email *">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Votre email"
                      type="email"
                    />
                  </Field>

                  <Field label="Telephone (ex. +212 6 12 34 56 78) *">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="+212"
                    />
                  </Field>

                  <Field label="Adresse de livraison *">
                    <input
                      name="address"
                      value={formData.address}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Votre adresse de livraison"
                    />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Ville *">
                      <input
                        name="city"
                        value={formData.city}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Votre ville"
                      />
                    </Field>
                    <Field label="Quantite *">
                      <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="1"
                        type="number"
                        min={1}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-white text-black font-bold py-3.5 rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Continuer la commande
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}
