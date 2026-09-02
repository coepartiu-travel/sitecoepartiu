// /src/app/excursoes/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const categorias = [
  {
    titulo: 'Romarias',
    desc: 'Viagens organizadas para destinos religiosos e eventos especiais.',
    emoji: '🙏',
    cor: 'from-purple-500/10 to-pink-500/10',
    border: 'hover:border-purple-400/50',
  },
  {
    titulo: 'Praias',
    desc: 'Excursões para destinos de praia com todo conforto e segurança.',
    emoji: '🏖️',
    cor: 'from-blue-500/10 to-cyan-500/10',
    border: 'hover:border-blue-400/50',
  },
  {
    titulo: 'Viagens em Grupo',
    desc: 'Experiências para grupos, famílias, amigos e comunidades.',
    emoji: '👥',
    cor: 'from-green-500/10 to-emerald-500/10',
    border: 'hover:border-green-400/50',
  },
  {
    titulo: 'Passeios Regionais',
    desc: 'Viagens de curta duração e destinos próximos para bater perna.',
    emoji: '🚌',
    cor: 'from-amber-500/10 to-orange-500/10',
    border: 'hover:border-amber-400/50',
  },
  {
    titulo: 'Eventos',
    desc: 'Excursões para shows, festas e experiências únicas.',
    emoji: '🎉',
    cor: 'from-red-500/10 to-rose-500/10',
    border: 'hover:border-red-400/50',
  },
  {
    titulo: 'Viagens Personalizadas',
    desc: 'Grupos que desejam montar sua própria viagem com acompanhamento.',
    emoji: '🎯',
    cor: 'from-indigo-500/10 to-blue-500/10',
    border: 'hover:border-indigo-400/50',
  },
];

const transportes = [
  {
    titulo: 'Ônibus',
    desc: 'Para excursões e grupos. Passagens, excursões organizadas e roteiros em grupo.',
    emoji: '🚌',
    detalhe: 'Parceiros regularizados',
  },
  {
    titulo: 'Carro Privativo',
    desc: 'Para famílias ou pequenos grupos. Mais conforto, privacidade e liberdade.',
    emoji: '🚗',
    detalhe: 'Com motorista e guia',
  },
];

export default function ExcursoesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#0a0a1a] p-12 md:p-16 text-white mb-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Excursões</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold">Partiu excursão?</h1>
            <p className="text-xl text-white/80 mt-4 leading-relaxed">
              Você escolhe o destino.
              <br />
              <span className="text-[#c9a84c]">A gente organiza o caminho.</span>
            </p>
            <a
              href="https://wa.me/5534999082607?text=Olá! Vi as excursões no site da COÉ, PARTIU? e gostaria de receber informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Quero participar
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* CATEGORIAS */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">O que oferecemos</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            Escolha seu <span className="text-[#c9a84c]">estilo de viagem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categorias.map((cat) => (
            <a
              key={cat.titulo}
              href={`https://wa.me/5534999082607?text=Olá! Tenho interesse na excursão ${cat.titulo} da COÉ, PARTIU?`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${cat.cor} border border-white/50 ${cat.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/50 backdrop-blur-sm`}
            >
              <div className="relative z-10">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>
                <h3 className="text-xl font-display font-bold text-[#1a1a2e]">{cat.titulo}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-[#c9a84c] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Quero participar
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* TRANSPORTE */}
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Transporte</span>
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl font-display font-bold text-[#1a1a2e]">
              Como <span className="text-[#c9a84c]">vamos te levar</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportes.map((item) => (
              <div key={item.titulo} className="bg-[#faf8f5] p-8 rounded-2xl text-center">
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="font-display font-bold text-[#1a1a2e] text-xl">{item.titulo}</h3>
                <p className="text-[#4a4a5a] text-sm mt-2">{item.desc}</p>
                <span className="inline-block mt-3 px-4 py-1 bg-[#c9a84c]/10 rounded-full text-xs text-[#c9a84c] font-medium">{item.detalhe}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#c9a84c]/10 to-[#e8c87a]/10 rounded-3xl p-8 border border-[#c9a84c]/20">
            <p className="text-lg text-[#1a1a2e] font-light">
              Não encontrou o que procura? Monte sua própria excursão!
            </p>
            <a
              href="https://wa.me/5534999082607?text=Olá! Quero montar minha própria excursão com a COÉ, PARTIU?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Quero montar minha excursão
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
