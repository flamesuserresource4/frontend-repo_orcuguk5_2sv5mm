import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        {/* Get Started / CTA anchor */}
        <section id="get-started" className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-1 shadow-lg">
              <div className="rounded-2xl bg-white px-8 py-10">
                <h3 className="text-2xl font-bold text-slate-900">Siap berhenti overthinking?</h3>
                <p className="mt-2 text-slate-600">Mulai dengan rencana 7 hari: latihan singkat, edukasi jelas, dan ruang refleksi.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#benefits" className="rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition">Coba Sekarang</a>
                  <a href="#testimonials" className="rounded-lg border border-slate-300 bg-white text-slate-700 px-5 py-3 font-medium hover:border-slate-400 transition">Lihat Testimoni</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} OVERTHINK NO MORE. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
            <a href="#benefits" className="hover:text-slate-700">Manfaat</a>
            <a href="#get-started" className="hover:text-slate-700">Mulai</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
