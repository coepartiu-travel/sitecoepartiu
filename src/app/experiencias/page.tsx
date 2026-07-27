// /src/app/experiencias/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const experiencias = [
  { titulo: 'Aventura', desc: 'A adrenalina libera dopamina. O medo controlado vira coragem.', emoji: '🏔️', cor: 'from-orange-500/20 to-red-500/20', border: 'border-orange-200/50' },
  { titulo: 'Romance', desc: 'A ocitocina (hormônio do amor) é ativada em cenários íntimos.', emoji: '💑', cor: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-200/50' },
  { titulo: 'Natureza', desc: 'O contato com a terra reduz o cortisol. Acalma a mente.', emoji: '🌿', cor: 'from-emerald-500/20 to-green-500/20', border: 'border-emerald-200/50' },
  { titulo: 'Cultura', desc: 'Aprender algo novo ativa o hipocampo. Você volta mais sábio.', emoji: '🎭', cor: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-200/50' },
  { titulo: 'Gastronomia', desc: 'O paladar ativa memórias afetivas. Cada sabor conta uma história.', emoji: '🍷', cor: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-200/50' },
  { titulo: 'Família', desc: 'Vínculos fortalecidos criam uma rede de apoio emocional duradoura.', emoji: '👨‍👩‍👧‍👦', cor: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-200/50' },
  { titulo: 'Luxo', desc: 'O conforto extremo permite que o cérebro entre em estado de descanso profundo.', emoji: '✨', cor: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-200/50' },
  { titulo: 'Fotografia', desc: 'Registrar momentos ativa a memória autobiográfica. A história fica viva.', emoji: '📸', cor: 'from-slate-500/20 to-gray-500/20', border: 'border-slate-200/50' },
  { titulo: 'Autoconhecimento', desc: 'Viagens solitárias ativam o córtex pré-frontal. Você se entende melhor.', emoji: '🧘', cor: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-200/50' },
];

export default function ExperienciasPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Viver é sentir</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e]">
            Não é sobre onde você vai. <br />
            <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">É sobre o que você vai sentir.</span>
          </h1>
          <p className="text-xl text-[#4a4a5a] font-light leading-relaxed max-w-2xl mx-auto">
            A neurociência mostra que as emoções são o combustível da memória. Escolha vivências que mexem com você.
          </p>
        </div>

        {/* GRADE DE EXPERIÊNCIAS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {experiencias.map((exp) => (
            <a
              key={exp.titulo}
              href="/planejar"
              className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${exp.cor} border ${exp.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-500">{exp.emoji}</span>
                <h3 className="text-xl font-display font-bold text-[#1a1a2e]">{exp.titulo}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{exp.desc}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-[#c9a84c] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Explorar
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/planejar"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
          >
            Quero viver essa experiência
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
