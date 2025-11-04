export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Cerita nyata. Hasil nyata.</h2>
          <p className="mt-3 text-slate-600">Mereka berhasil berdamai dengan pikiran sendiri—Anda juga bisa.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[{
            name: "Nadia",
            role: "23 tahun",
            quote: "Dulu panik tiap kali selesai. Sekarang punya langkah jelas apa yang harus dilakukan, jadi lebih tenang.",
          },{
            name: "Raka",
            role: "26 tahun",
            quote: "FAQ-nya membantu banget memilah mana fakta, mana pikiran berlebihan. Tidur jadi nyenyak.",
          },{
            name: "Salsa",
            role: "21 tahun",
            quote: "Latihan 3 menitnya simple tapi efektif. Aku nggak kebawa drama kepala sendiri lagi.",
          }].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-medium text-slate-800">{t.name}</span> • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
