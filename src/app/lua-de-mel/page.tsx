// /src/app/lua-de-mel/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const destinos = [
  {
    nome: 'Atacama Romântico',
    desc: 'Noites estreladas que vão ficar gravadas na memória afetiva para sempre.',
    emoji: '🌌',
    cor: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-200/50',
  },
  {
    nome: 'Resorts Paradisíacos',
    desc: 'O luxo silencioso que permite ao corpo descansar e à mente se conectar.',
    emoji: '🏖️',
    cor: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-200/50',
  },
  {
    nome: 'Praias do Brasil',
    desc: 'O som do mar ativa o sistema de relaxamento profundo do cérebro.',
    emoji: '🌊',
    cor: 'from-teal-500/20 to-emerald-500/20',
    border: 'border-teal-200/50',
  },
  {
    nome: 'Destinos Europeus',
    desc: 'Cenários que parecem saídos de um conto de fadas, ativando a imaginação.',
    emoji: '🏰',
    cor: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-200/50',
  },
];

export default function LuaDeMelPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Amor em movimento</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e]">
            O começo de uma vida a dois <br />
            <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">merece um cenário à altura.</span>
          </h1>
          <p className="text-xl text-[#4a4a5a] max-w-2xl mx-auto font-light leading-relaxed">
            A neurociência afirma que ambientes novos e belos potencializam a liberação de ocitocina, o hormônio do vínculo. Sua lua de mel é mais que uma viagem: é a construção de uma memória afetiva para toda a vida.
          </p>
        </div>

        {/* DESTINOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinos.map((dest) => (
            <a
              key={dest.nome}
              href="/planejar"
              className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${dest.cor} border ${dest.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-500">{dest.emoji}</span>
                <h3 className="text-2xl font-display font-bold text-[#1a1a2e]">{dest.nome}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{dest.desc}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-semibold group-hover:gap-4 transition-all duration-300">
                  Planejar agora
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA ROMÂNTICO */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-200/50">
            <span className="text-3xl block mb-2">💕</span>
            <p className="text-lg text-[#1a1a2e] font-light">
              Cada amor tem sua história. Vamos criar a roteiro perfeito para vocês?
            </p>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 mt-4 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Criar lua de mel dos sonhos
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
