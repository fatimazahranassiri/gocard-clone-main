# GoCard Clone

Une landing page moderne, interactive et haut de gamme pour des cartes de visite numériques (NFC), construite avec Next.js et Framer Motion.

![GoCard Preview](https://mygocard.ma/og-image.jpg) <!-- Remplacer par l'image de prévisualisation réelle -->

## ✨ Fonctionnalités

- **Physique 3D Ultra-Fluide** : Interaction de carte en 3D avec Framer Motion (`useSpring`) offrant une sensation de réalisme et de réactivité de haut niveau (sensible au glisser-déposer).
- **Design Premium** : Thème sombre (Dark Mode) par défaut avec des effets de "glassmorphism", des gradients subtils et une hiérarchie visuelle forte.
- **Entièrement Responsive** : Optimisé pour le mobile (`use-mobile`), tablette et bureau.
- **Performance & SEO** : Métadonnées optimisées, rendu côté serveur (SSR) via Next.js App Router, et prévention des erreurs d'hydratation liées aux extensions navigateur.

## 🛠️ Stack Technique

- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **Librairie UI** : [React 19](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)

## 🚀 Installation et Lancement

1. **Cloner le dépôt** (ou télécharger le code) :
   ```bash
   git clone <URL_DU_REPO>
   cd fati
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📂 Structure du Projet

```text
├── src/
│   ├── app/                # Configuration des pages (App Router Next.js), Layout, Globals CSS
│   ├── components/         # Composants UI globaux (Hero, Features, Pricing, Navbar, Footer...)
│   │   └── ui/             # Composants réutilisables et interactifs (ex: 3d-card.tsx)
│   ├── hooks/              # Hooks personnalisés (ex: use-mobile.ts)
│   └── types/              # Définitions TypeScript globales (index.ts)
├── public/                 # Assets statiques (images, SEO)
└── package.json            # Dépendances et scripts du projet
```

## 🔧 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile l'application pour la production.
- `npm run start` : Lance le serveur de production (après le build).
- `npm run lint` : Vérifie les erreurs de code avec ESLint.

## 🌐 Déploiement

Ce projet est optimisé pour être déployé sur [Vercel](https://vercel.com/new).

1. Poussez votre code sur GitHub/GitLab.
2. Connectez le dépôt sur Vercel.
3. Les paramètres de build par défaut pour Next.js seront détectés automatiquement. Cliquez sur **Deploy**.

## 📝 Notes de développement

- **Fluidité de la carte 3D** : Les réglages physiques se trouvent dans `src/components/ui/3d-card.tsx`. Les valeurs de ressort (stiffness: 150, damping: 20) ont été ajustées pour une expérience de glissement optimale.
- **Erreurs d'hydratation** : Un attribut `suppressHydrationWarning` est présent sur la balise `<html>` pour éviter les conflits avec les extensions de navigateur (ex: Grammarly, Dark Reader).
