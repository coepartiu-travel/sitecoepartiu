// /src/app/atacama/page.tsx
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

const passeios = [
  {
    nome: 'Valle de la Luna',
    desc: 'Paisagens que parecem de outro planeta.',
    emoji: '🌙',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Valle de la Muerte',
    desc: 'Dunas e paisagens surreais.',
    emoji: '🏜️',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Geysers del Tatio',
    desc: 'Gêiseres ao amanhecer a 4.000m.',
    emoji: '💨',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Lagunas Altiplânicas',
    desc: 'Lagos de águas cristalinas.',
    emoji: '🏞️',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Piedras Rojas',
    desc: 'Formações rochosas vermelhas.',
    emoji: '🪨',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Astronomia',
    desc: 'Céu estrelado no deserto.',
    emoji: '🔭',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Vulcões',
    desc: 'Aventura e altitude.',
    emoji: '🌋',
    nivel: '🏔️ Médio',
    destaque: false,
  },
  {
    nome: 'Salar de Atacama',
    desc: 'O maior salar do Chile.',
    emoji: '🧂',
    nivel: '🌿 Fácil',
    destaque: false,
  },
];

const depoimentos = [
  {
    nome: 'Ana e Pedro',
    texto: 'O Carioca de Atacama transformou nossa viagem. Ele realmente conhece cada detalhe do deserto.',
    lugar: 'Lua de Mel - Atacama',
  },
  {
    nome: 'Família Oliveira',
    texto: 'Viajar com quem viveu lá faz toda diferença. Recomendamos a todos!',
    lugar: 'Férias em Família - Atacama',
  },
];

export default function AtacamaPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* ============================================================
            HERO - ATACAMA
            ============================================================ */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] p-12 md:p-16 lg:p-20 text-white mb-16">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'url(/images/atacama/hero-bg.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#1a1a2e]/70 to-transparent" />
          
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            {/* BADGE CARIOCA */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#c9a84c]/20 backdrop-blur-sm rounded-full border border-[#c9a84c]/40 mb-8 shadow-lg shadow-[#c9a84c]/10">
              <div className="bg-[#1a1a2e] p-1.5 rounded-full">
                <img
                  src="/images/carioca-atacama-logo.png"
                  alt="Carioca de Atacama"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="w-px h-7 bg-[#c9a84c]/40" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
                Carioca de Atacama
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
              Atacama & Chile
            </h1>
            
            <div className="mt-4 space-y-2">
              <p className="text-2xl md:text-3xl font-display font-bold text-white/90">
                Mais do que conhecer.
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold text-[#c9a84c]">
                Viver o destino.
              </p>
            </div>

            <p className="text-white/60 mt-4 text-base font-light max-w-xl">
              Conheça o Chile com quem já viveu o destino por dentro.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
              >
                MONTE MINHA VIAGEM
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            QUEM É O CARIOCA - VERSÃO RESUMIDA E EQUILIBRADA
            ============================================================ */}
        <section className="mb-16 bg-[#faf8f5] rounded-3xl p-8 md:p-10 border border-[#e8e3dc]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* FOTO - PROPORCIONAL */}
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] shadow-lg max-w-sm mx-auto md:mx-0">
              <img
                src="/images/atacama/carioca-atacama.jpg"
                alt="Carioca de Atacama"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#c9a84c]/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <div className="bg-[#1a1a2e]/80 p-0.5 rounded-full">
                  <img
                    src="/images/carioca-atacama-logo.png"
                    alt="Carioca de Atacama"
                    className="h-4 w-auto object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-[#0a0a1a]">Carioca de Atacama</span>
              </div>
            </div>

            {/* CONTEÚDO - EQUILIBRADO */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#c9a84c]" />
                <span className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Quem é</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e]">
                Do Rio ao <span className="text-[#c9a84c]">deserto</span>
              </h2>
              
              <div className="space-y-2 text-[#4a4a5a] text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-[#1a1a2e]">Raul Ramalho</span> viveu no Atacama, 
                  trabalhou como agente, guia e administrou uma agência local.
                </p>
                <p>
                  Caminhou por dunas, mergulhou em lagoas de sal, enfrentou -11°C e subiu vulcões.
                </p>
                <p className="text-[#1a1a2e] font-medium">
                  <span className="text-[#c9a84c]">Hoje</span>, transforma essa vivência em viagens para você.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { emoji: '🏜️', label: 'Dunas' },
                  { emoji: '🏊', label: 'Lagoas' },
                  { emoji: '❄️', label: '-11°C' },
                  { emoji: '🌋', label: 'Vulcões' },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1 text-[10px] text-[#4a4a5a] bg-white/80 px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
                    <span>{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>

              <a
                href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#b8983e] text-[#0a0a1a] font-semibold rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
              >
                Planejar minha viagem
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            POR QUE VIAJAR
            ============================================================ */}
        <section className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Por que viajar com quem viveu lá?</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            Conhecimento que <span className="text-[#c9a84c]">ninguém tem</span>
          </h2>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { emoji: '🌵', title: 'Experiência Real', desc: 'Viveu e trabalhou no Chile, não pesquisou na internet.' },
            { emoji: '🤝', title: 'Consultoria', desc: 'Ajudamos a escolher destinos, passeios e hospedagem.' },
            { emoji: '🎯', title: 'Personalizada', desc: 'Roteiro feito para seu perfil, tempo e orçamento.' },
          ].map((item) => (
            <div key={item.title} className="bg-[#faf8f5] p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#c9a84c]/30 text-center">
              <span className="text-4xl block mb-4">{item.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e]">{item.title}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ============================================================
            CONSULTORIA
            ============================================================ */}
        <section className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] rounded-3xl p-12 text-white mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Consultoria Especializada</span>
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Planejar uma viagem ao Chile pode parecer simples.
              <br />
              <span className="text-[#c9a84c]">Mas escolher a melhor região, época e passeios faz toda a diferença.</span>
            </h2>
            <p className="text-white/60 text-base font-light leading-relaxed max-w-2xl mx-auto">
              Ajudamos você a montar uma viagem coerente com seu perfil, tempo e orçamento.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#c9a84c]/10 rounded-full text-sm text-[#c9a84c] border border-[#c9a84c]/20">🌵 Atacama</span>
              <span className="px-4 py-2 bg-[#c9a84c]/10 rounded-full text-sm text-[#c9a84c] border border-[#c9a84c]/20">🏙️ Santiago</span>
              <span className="px-4 py-2 bg-[#c9a84c]/10 rounded-full text-sm text-[#c9a84c] border border-[#c9a84c]/20">🌊 Chile</span>
            </div>
            <a
              href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Chile com o Carioca de Atacama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Quero montar minha viagem
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ============================================================
            PASSEIOS
            ============================================================ */}
        <section id="passeios" className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Passeios do Atacama</span>
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
              Conheça os destinos que <span className="text-[#c9a84c]">eu vivi</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {passeios.map((passeio) => (
              <div
                key={passeio.nome}
                className={`group bg-white p-5 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${passeio.destaque ? 'border-[#c9a84c]/30' : 'border-white'} hover:border-[#c9a84c]/30`}
              >
                {passeio.destaque && (
                  <span className="inline-block mb-2 text-[10px] font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full">⭐ Destaque</span>
                )}
                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-500">{passeio.emoji}</span>
                <h3 className="font-display font-semibold text-[#1a1a2e] text-sm">{passeio.nome}</h3>
                <p className="text-[#4a4a5a] text-[10px] mt-1 leading-relaxed">{passeio.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] text-[#4a4a5a]/60 font-medium">{passeio.nivel}</span>
                  <a
                    href={`https://wa.me/5534999082607?text=Olá! Quero conhecer o passeio ${passeio.nome} no Atacama`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a84c] text-[10px] font-semibold hover:underline"
                  >
                    Quero conhecer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            DEPOIMENTOS
            ============================================================ */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Depoimentos</span>
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e]">
              Quem viajou com o <span className="text-[#c9a84c]">Carioca</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((dep, i) => (
              <div key={i} className="bg-[#faf8f5] p-6 rounded-2xl border border-transparent hover:border-[#c9a84c]/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex text-[#c9a84c] text-sm mb-3">★★★★★</div>
                <p className="text-[#4a4a5a] text-sm leading-relaxed italic">"{dep.texto}"</p>
                <div className="mt-3 pt-3 border-t border-[#e8e3dc]">
                  <p className="font-semibold text-[#1a1a2e] text-sm">{dep.nome}</p>
                  <p className="text-xs text-[#4a4a5a]">{dep.lugar}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            CTA FINAL
            ============================================================ */}
        <section className="text-center bg-gradient-to-br from-[#c9a84c]/10 to-[#e8c87a]/10 rounded-3xl p-10 border border-[#c9a84c]/20">
          <div className="max-w-2xl mx-auto">
            <span className="text-4xl block mb-4">🌵</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e]">
              Pronto para viver o Atacama <span className="text-[#c9a84c]">com quem viveu lá?</span>
            </h2>
            <p className="text-[#4a4a5a] mt-3 text-sm font-light">
              Você escolhe o destino. A gente ajuda a cuidar do caminho.
            </p>
            <a
              href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Quero montar minha viagem agora
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
