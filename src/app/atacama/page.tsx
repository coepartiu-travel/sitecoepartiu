// /src/app/atacama/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const atrativos = [
  { nome: 'Valle de la Luna', desc: 'Formações rochosas e pores do sol inesquecíveis.', emoji: '🌙' },
  { nome: 'Geysers del Tatio', desc: 'O campo de gêiseres mais alto do mundo.', emoji: '💨' },
  { nome: 'Salar de Atacama', desc: 'O maior salar do Chile, com flamengos e paisagens brancas.', emoji: '🧂' },
  { nome: 'Astronomia', desc: 'Céu mais limpo do mundo para observar as estrelas.', emoji: '🔭' },
  { nome: 'Lagunas Altiplánicas', desc: 'Lagos de águas cristalinas em meio ao deserto.', emoji: '🏞️' },
  { nome: 'Valle de la Muerte', desc: 'Paisagens surreais com dunas e formações únicas.', emoji: '🏜️' },
];

export default function AtacamaPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        {/* HERO DO ATACAMA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#1a1a2e] p-12 md:p-16 text-white mb-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569529461291-04a377959d11?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Destino Exclusivo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold">ATACAMA</h1>
            <p className="text-xl text-white/80 mt-4 leading-relaxed">
              O deserto mais árido do mundo. Um convite ao silêncio, à introspecção e à contemplação.
            </p>
            <p className="text-white/50 mt-2 text-sm font-light">
              A psicanálise chama isso de "encontro com o vazio fértil": é no silêncio que as respostas aparecem.
            </p>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 mt-8 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Planejar minha viagem ao Atacama
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* ATRATIVOS */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">O que explorar</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            Descubra as maravilhas do <span className="text-[#c9a84c]">Atacama</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {atrativos.map((item) => (
            <div
              key={item.nome}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white hover:border-[#c9a84c]/30 text-center"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e]">{item.nome}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
