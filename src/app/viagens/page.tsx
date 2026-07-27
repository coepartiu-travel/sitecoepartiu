// /src/app/viagens/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
  </svg>
);

const destinos = [
  {
    nome: 'Costa do Descobrimento',
    lugar: 'Brasil',
    desc: 'Praias de águas quentes e piscinas naturais. O corpo relaxa, a mente desacelera.',
    imagem: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Praia',
  },
  {
    nome: 'Patagônia Andina',
    lugar: 'Argentina / Chile',
    desc: 'Gigantes de gelo e vento que limpam a alma. A imensidão ativa a humildade e a admiração.',
    imagem: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Aventura',
  },
  {
    nome: 'Cidades Históricas',
    lugar: 'Europa',
    desc: 'Cada pedra conta uma história. A memória coletiva nos conecta com quem fomos.',
    imagem: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Cultura',
  },
  {
    nome: 'Lua de Mel dos Sonhos',
    lugar: 'Destinos Exclusivos',
    desc: 'Intimidade e cenários que ficam gravados no inconsciente como memórias felizes.',
    imagem: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Romance',
  },
  {
    nome: 'Resorts & Bem-Estar',
    lugar: 'Nordeste Brasileiro',
    desc: 'O descanso ativa o sistema parassimpático. Você volta mais leve.',
    imagem: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Bem-estar',
  },
  {
    nome: 'Gastronomia Local',
    lugar: 'Portugal & Itália',
    desc: 'Sabores que ativam o prazer e criam vínculos afetivos com a cultura.',
    imagem: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85',
    categoria: 'Gastronomia',
  },
];

export default function ViagensPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        {/* HEADER DA PÁGINA */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Destinos</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e]">
            Para onde o coração está <br />
            <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">apontando?</span>
          </h1>
          <p className="text-xl text-[#4a4a5a] font-light leading-relaxed">
            Cada destino tem uma energia única. Qual deles vai despertar a melhor versão de vocês?
          </p>
        </div>

        {/* GRADE DE DESTINOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((dest, i) => (
            <a
              key={i}
              href="/planejar"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.imagem}
                  alt={dest.nome}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1a1a2e] shadow-lg">
                  {dest.categoria}
                </span>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-sm text-[#4a4a5a] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  {dest.lugar}
                </div>
                <h3 className="text-2xl font-display font-bold text-[#1a1a2e] mt-2">{dest.nome}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{dest.desc}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-semibold group-hover:gap-4 transition-all duration-300">
                  Explorar destino
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#c9a84c]/10 to-[#e8c87a]/10 rounded-3xl p-8 border border-[#c9a84c]/20">
            <p className="text-lg text-[#1a1a2e] font-light">
              Não encontrou o destino perfeito ainda?
            </p>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Criar roteiro personalizado
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
