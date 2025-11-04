import { Rocket, ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span>OVERTHINK NO MORE</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition">Manfaat</a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition">Testimoni</a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
        </div>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500 transition">
          <ShieldCheck className="h-4 w-4" />
          Mulai Tenang
        </a>
      </nav>
    </header>
  );
}
