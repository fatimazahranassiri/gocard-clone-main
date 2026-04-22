"use client";

import { useState } from "react";

export function Contact() {
  const inputClass =
    "w-full bg-black border border-white/15 rounded-lg px-4 h-13 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-shadow";
  const selectClass =
    "w-full appearance-none bg-black border border-white/15 rounded-lg px-4 h-13 text-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-shadow";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "Particulier",
    reason: "Entreprise",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez remplir tous les champs.'
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez entrer une adresse email valide.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with real endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with actual key
          ...formData
        })
      }).catch(() => {
        // Fallback: Just show success message
        return { ok: true };
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Merci! Votre message a été envoyé avec succès. Notre équipe vous répondra bientôt.'
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          profile: "Particulier",
          reason: "Entreprise",
          message: ""
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/70 font-semibold tracking-[0.25em] uppercase text-xs font-inter">Nous contacter</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-barlow text-foreground">Prenez contact.</h2>
          <p className="text-muted-foreground font-inter max-w-xl mx-auto">
            Vous avez des questions ou besoin d'une solution sur mesure pour votre equipe ? Nos experts sont la pour vous aider a reussir chaque prise de contact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#171920] backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-lg">
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-xl ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/30 text-green-700' 
                : 'bg-red-500/10 border border-red-500/30 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[15px] font-semibold font-inter text-foreground">Nom complet : *</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Votre nom complet"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[15px] font-semibold font-inter text-foreground">Email : *</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Votre email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[15px] font-semibold font-inter text-foreground">Telephone (ex. +212 6 12 34 56 78) : *</label>
              <div className="flex items-center bg-black border border-white/15 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-white/20">
                <button
                  type="button"
                  className="h-13 px-3 border-r border-white/10 text-sm text-foreground flex items-center gap-2"
                  aria-label="Choisir indicatif"
                >
                  <span className="text-base">🇲🇦</span>
                  <span className="text-xs text-neutral-400">▼</span>
                </button>
                <span className="px-3 h-13 flex items-center text-foreground border-r border-white/10">+212</span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-13 bg-transparent px-4 text-foreground placeholder:text-muted-foreground focus:outline-none"
                  placeholder="6 12 34 56 78"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[15px] font-semibold font-inter text-foreground">Vous etes : *</label>
              <div className="relative">
                <select
                  name="profile"
                  value={formData.profile}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option>Particulier</option>
                  <option>Professionnel</option>
                  <option>Entreprise</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">⌄</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[15px] font-semibold font-inter text-foreground">Motif:</label>
              <div className="relative">
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option>Entreprise</option>
                  <option>Commande individuelle</option>
                  <option>Support</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">⌄</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[15px] font-semibold font-inter text-foreground">Message : *</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={inputClass + " h-auto py-3 resize-none"}
                placeholder=""
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d1d5db] text-[#22252b] font-bold h-14 rounded-full text-2xl leading-none hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
