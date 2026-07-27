// /src/app/escolas-grupos/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const modalidades = [
  {
    titulo: 'Escolas',
    desc: 'Viagens que ensinam história, ciência e cultura de forma viva e inesquecível.',
    emoji: '🎓',
    cor: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-200/50',
  },
  {
    titulo: 'Empresas',
    desc: 'Team building e integração em cenários que inspiram novas ideias e fortalecem equipes.',
    emoji: '💼',
    cor: 'from-slate-500/20 to-gray-500/20',
    border: 'border-slate-200/50',
  },
  {
    titulo: 'Grupos de Amigos',
    desc: 'Fortaleça os laços em experiências compartilhadas que viram histórias para sempre.',
    emoji: '👥',
    cor: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-200/50',
  },
  {
    titulo: 'Associações',
    desc: 'Eventos e encontros em lugares que elevam o propósito do grupo e criam conexões.',
    emoji: '🤝',
    cor: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-200/50',
  },
];

export default function EscolasGruposPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Aprendizado em movimento</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e]">
            A melhor sala de aula <br />
            <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">não tem paredes.</span>
          </h1>
          <p className="text-xl text-[#4a4a5a] max-w-2xl mx-auto font-light leading-relaxed">
            A psicologia cognitiva comprova: vivências práticas consolidam o aprendizado muito mais do que a teoria. Viagens pedagógicas ativam a curiosidade e a retenção de conhecimento.
          </p>
        </div>

        {/* MODALIDADES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modalidades.map((item) => (
            <a
              key={item.titulo}
              href="/planejar"
              className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${item.cor} border ${item.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                <h3 className="text-2xl font-display font-bold text-[#1a1a2e]">{item.titulo}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-semibold group-hover:gap-4 transition-all duration-300">
                  Solicitar proposta
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#1a1a2e] to-[#2a1a3e] rounded-3xl p-8 border border-white/10">
            <span className="text-3xl block mb-2">🌟</span>
            <p className="text-lg text-white/80 font-light">
              Transforme o aprendizado em uma experiência inesquecível.
            </p>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 mt-4 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Solicitar proposta agora
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
