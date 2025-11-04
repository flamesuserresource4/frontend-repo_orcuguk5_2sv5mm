import { Sparkles, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-4 w-4" />
              Ketenangan pikiran pasca-intim
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Jangan OVERTHINKING setelah berhubungan
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Kelola emosi, validasi kekhawatiran, dan temukan kepastian dengan panduan praktis berbasis sains dan dukungan profesional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition">
                Mulai Gratis
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-medium bg-white hover:border-slate-400 transition">
                Lihat Manfaat
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/32?img=1" alt="user1" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/32?img=2" alt="user2" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img src="https://i.pravatar.cc/32?img=3" alt="user3" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              10k+ orang merasa lebih tenang
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 p-1 shadow-lg">
              <div className="h-full w-full rounded-xl bg-white grid grid-rows-3">
                <div className="p-5 border-b border-slate-100">
                  <p className="text-slate-800 font-semibold">Rencana 7 Hari Anti-Overthinking</p>
                  <p className="text-slate-500 text-sm mt-1">Latihan singkat, refleksi diri, dan verifikasi fakta.</p>
                </div>
                <div className="p-5 flex items-center justify-between border-b border-slate-100">
                  <div>
                    <p className="text-sm text-slate-500">Hari ini</p>
                    <p className="font-medium text-slate-800">Latihan pernapasan 4-7-8</p>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">3 menit</span>
                </div>
                <div className="p-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-slate-800 font-medium">Butuh kepastian?</p>
                    <p className="text-slate-500 text-sm">Akses FAQ kesehatan reproduksi dan konsultasi daring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
