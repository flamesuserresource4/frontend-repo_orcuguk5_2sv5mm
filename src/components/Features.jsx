import { Heart, ShieldCheck, Clock, BookOpen } from "lucide-react";

const features = [
  {
    title: "Validasi & Edukasi",
    desc: "Penjelasan sederhana dan berbasis bukti agar Anda tidak tersesat dalam pikiran sendiri.",
    icon: BookOpen,
  },
  {
    title: "Ketenangan Terstruktur",
    desc: "Panduan langkah-demi-langkah untuk meredakan kecemasan secara cepat dan aman.",
    icon: ShieldCheck,
  },
  {
    title: "Dukungan Empatik",
    desc: "Teknik self-talk yang sehat agar hati tetap tenang dan rasional.",
    icon: Heart,
  },
  {
    title: "Cepat & Praktis",
    desc: "Latihan 3–5 menit yang bisa dilakukan di mana saja, kapan saja.",
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Mengapa ini bekerja</h2>
          <p className="mt-3 text-slate-600">Kami menggabungkan ilmu psikologi, edukasi kesehatan, dan latihan mindful yang mudah diikuti.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
