// ─────────────────────────────────────────────────────────────────────────────
// Global TypeScript types for the GoCard project
// ─────────────────────────────────────────────────────────────────────────────

/** Pricing plan shown on the Pricing section */
export interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

/** Step shown on the HowItWorks section */
export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

/** User review / testimonial */
export interface Review {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}
