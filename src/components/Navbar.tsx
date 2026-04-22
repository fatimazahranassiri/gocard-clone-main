import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 pr-12">
          <img src="https://mygocard.ma/assets/logo-GOCard-White-HZCokBTL.png" alt="GoCard Logo" className="h-6" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium text-neutral-400">
          <Link href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</Link>
          <Link href="#reviews" className="hover:text-white transition-colors">Avis</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Tarifs</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center pl-12">
          <button className="bg-[#1a1a1a] border border-white/10 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#222] transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </nav>
  );
}
