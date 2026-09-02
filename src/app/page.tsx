// /src/app/page.tsx
import { type SVGProps } from 'react';

// ================= ICONES =================
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

const Compass = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8.5" /><path d="m14.9 9.1-2 3.8-3.8 2 2-3.8 3.8-2Z" />
  </svg>
);

const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
  </svg>
);

const Users = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="9" cy="8" r="3" /><path d="M3.5 19c.5-3.1 2.4-4.7 5.5-4.7s5 1.6 5.5 4.7" /><path d="M15.5 5.4a3 3 0 0 1 0 5.8M17.4 14.5c1.8.6 2.8 2 3.1 4.5" />
  </svg>
);

const School = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m3 10 9-5 9 5-9 5-9-5Z" /><path d="M6 12.2V17c3.7 2.3 8.3 2.3 12 0v-4.8M21 10v6" />
  </svg>
);

const Sparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m12 3 1.1 5.9L19 10l-5.9 1.1L12 17l-1.1-5.9L5 10l5.9-1.1L12 3ZM19 16l.5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" />
  </svg>
);

const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 3 20 6v5.5c0 4.8-3.2 7.9-8 9.5-4.8-1.6-8-4.7-8-9.5V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" />
  </svg>
);

// ================= DADOS =================
const destinations = [
  {
    name: 'Mar Tranquilo',
    place: 'Alagoas, Brasil',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    description: 'Dias leves, água morna e tempo para desacelerar.',
  },
  {
    name: 'Horizonte Aberto',
    place: 'Patagônia, Argentina',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    description: 'Paisagens que mudam a forma de enxergar o mundo.',
  },
  {
    name: 'Entre História e Sabor',
    place: 'Lisboa, Portugal',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85',
    description: 'Cultura, encontros e pequenas descobertas pelo caminho.',
  },
];

const audienceContent = {
  familias: {
    label: 'Famílias',
    tag: 'Conexão',
    title: 'Mais presença. Menos logística.',
    description: 'Roteiros que respeitam o ritmo de cada pessoa e deixam espaço para o que realmente importa: estar junto.',
    detail: 'Conforto, segurança e descobertas para todas as idades.',
    image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=85',
    bg: 'from-amber-50/80 to-orange-50/80',
    border: 'border-amber-200/50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  noivos: {
    label: 'Noivos',
    tag: 'Romance',
    title: 'O começo de uma vida a dois merece um cenário à altura.',
    description: 'Da lua de mel ao destination wedding, desenhamos cada detalhe para que vocês só precisem viver o momento.',
    detail: 'Intimidade, beleza e experiências que viram memória.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85',
    bg: 'from-rose-50/80 to-pink-50/80',
    border: 'border-rose-200/50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  grupos: {
    label: 'Escolas & Grupos',
    tag: 'Propósito',
    title: 'Experiências que aproximam e ensinam.',
    description: 'Viagens pedagógicas com planejamento cuidadoso, propósito claro e operação tranquila.',
    detail: 'Coordenação próxima do primeiro briefing ao retorno.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
    bg: 'from-blue-50/80 to-indigo-50/80',
    border: 'border-blue-200/50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
};

export default function Home() {
  return (
    <div className="bg-white text-[#1a1a2e] font-sans overflow-hidden">
      <main>
        {/* ============================================================
            HERO - CARIOCA DE ATACAMA
            ============================================================ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="Atacama - Carioca de Atacama"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/85 via-[#1a1a2e]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]/50" />
          </div>

          <div className="absolute top-20 right-20 z-0 opacity-20">
            <div className="w-96 h-96 rounded-full bg-[#c9a84c]/10 blur-3xl" />
          </div>

          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl">
              {/* BADGE - CARIOCA DE ATACAMA CORRIGIDO */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#1a1a2e]/90 backdrop-blur-md rounded-full border border-[#c9a84c]/40 mb-8 shadow-lg shadow-[#c9a84c]/20">
                <img
                  src="/images/carioca-atacama-logo.png"
                  alt="Carioca de Atacama"
                  className="h-10 w-auto object-contain"
                />
                <span className="w-px h-8 bg-[#c9a84c]/40" />
                <span className="text-sm font-semibold tracking-[0.2em] text-[#c9a84c] uppercase">
                  Carioca de Atacama
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Eu não apenas conheço o Chile.</span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c] bg-clip-text text-transparent">
                    Eu sou o Carioca de Atacama.
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#c9a84c]/30 via-[#e8c87a]/50 to-[#c9a84c]/30 rounded-full blur-sm" />
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
                Em 2019, saí de Niterói, no Rio de Janeiro, para viver uma experiência que mudaria minha história.
              </p>
              <p className="mt-3 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                Morei no Atacama, trabalhei com turismo, fui guia, administrei uma agência e vivi de perto as experiências que fazem desse lugar um dos destinos mais fascinantes do mundo.
              </p>
              <p className="mt-4 text-white/60 max-w-2xl font-light leading-relaxed">
                Hoje, levo essa experiência para a <span className="text-[#c9a84c] font-medium">COÉ, PARTIU? Travel & Experiences</span>, ajudando você a descobrir o Chile com mais segurança, personalidade e significado.
              </p>

              <div className="mt-6 space-y-1">
                <p className="text-[#c9a84c] font-medium text-sm tracking-wide">Do Rio ao Atacama.</p>
                <p className="text-[#c9a84c]/80 font-medium text-sm tracking-wide">Da experiência vivida à sua próxima história.</p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5534999082607?text=Olá! Vi que você é o Carioca de Atacama e quero planejar minha viagem."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/30 hover:shadow-[#c9a84c]/50 hover:scale-105"
                >
                  <span>PLANEJE SUA VIAGEM</span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="#historia"
                  className="group inline-flex items-center gap-2 px-6 py-4 text-white/60 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-[#c9a84c]"
                >
                  Conheça a história
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌵</span>
                  <div>
                    <span className="block text-sm font-medium text-white">Viveu no Atacama</span>
                    <span className="text-xs text-white/40">1 ano de experiência real</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏔️</span>
                  <div>
                    <span className="block text-sm font-medium text-white">Guia e Agente</span>
                    <span className="text-xs text-white/40">Trabalhou no turismo local</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <span className="block text-sm font-medium text-white">Consultor Especialista</span>
                    <span className="text-xs text-white/40">Conhecimento autêntico do destino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-[0.2em] uppercase font-medium">Descubra</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
          </div>
        </section>

        {/* ============================================================
            QUEM ESTÁ POR TRÁS - RAUL RAMALHO (TEXTO ATUALIZADO)
            ============================================================ */}
        <section id="historia" className="py-20 bg-[#faf8f5] border-y border-[#e8e3dc]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {/* FOTO */}
              <div className="md:col-span-1">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center shadow-xl">
                  <img
                    src="/images/carioca-perfil.jpg"
                    alt="Raul Ramalho - Carioca de Atacama"
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
              </div>

              {/* CONTEÚDO ATUALIZADO */}
              <div className="md:col-span-2 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-[#c9a84c]" />
                  <span className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Quem está por trás</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
                  Raul Ramalho
                </h2>
                <p className="text-xl text-[#c9a84c] font-display font-semibold">
                  O Carioca de Atacama
                </p>
                
                <p className="text-[#4a4a5a] text-base leading-relaxed max-w-2xl">
                  Carioca de Niterói, Raul Ramalho transformou sua paixão por viagens em uma missão: ajudar pessoas a viverem destinos que realmente marcam a vida.
                </p>
                <p className="text-[#4a4a5a] text-base leading-relaxed max-w-2xl">
                  Ele morou no Atacama, no Chile, e conhece de perto a essência do turismo e tudo aquilo que faz uma viagem deixar de ser apenas um roteiro para se tornar uma experiência.
                </p>
                <p className="text-[#4a4a5a] text-base leading-relaxed max-w-2xl">
                  Hoje, à frente da <span className="font-semibold text-[#1a1a2e]">COÉ, PARTIU? Travel & Experiences</span>, leva esse olhar para destinos no Brasil e no mundo, conectando cada viajante ao lugar, à experiência e ao momento certo.
                </p>

                <div className="pt-2">
                  <p className="text-base font-display font-semibold text-[#1a1a2e]">
                    Você escolhe o destino.
                    <br />
                    <span className="text-[#c9a84c]">A gente ajuda a transformar a viagem em uma história para contar.</span>
                  </p>
                </div>

                <a
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all duration-300 text-sm group"
                >
                  CONHEÇA A HISTÓRIA
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PARA QUEM
            ============================================================ */}
        <section className="py-28 bg-gradient-to-b from-white to-[#faf8f5]">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Para cada alma, uma jornada</span>
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e] leading-[1.1]">
                Uma viagem para <br />
                <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">cada momento</span>
              </h2>
              <p className="mt-6 text-xl text-[#4a4a5a] max-w-2xl mx-auto font-light leading-relaxed">
                Não começamos pelo pacote. Começamos por vocês: o momento de vida, o desejo e a memória que querem levar de volta.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {Object.entries(audienceContent).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 border ${value.border} bg-gradient-to-r ${value.bg} hover:shadow-xl hover:-translate-y-1`}
                >
                  <span className={`p-2 rounded-full ${value.iconBg} ${value.iconColor}`}>
                    {key === 'familias' && <Users className="h-5 w-5" />}
                    {key === 'noivos' && <Heart className="h-5 w-5" />}
                    {key === 'grupos' && <School className="h-5 w-5" />}
                  </span>
                  <span className="font-semibold text-[#1a1a2e]">{value.label}</span>
                  <span className="text-xs text-[#4a4a5a] font-medium bg-white/50 px-3 py-1 rounded-full">{value.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#4a4a5a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(audienceContent).map(([key, value]) => (
                <div
                  key={key}
                  id={key}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${value.bg} border ${value.border} p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${value.iconBg} ${value.iconColor}`}>
                        {value.tag}
                      </span>
                      <span className="text-4xl font-display font-bold text-[#c9a84c]/10 group-hover:scale-110 transition-transform duration-500">
                        {key === 'familias' && '👨‍👩‍👧‍👦'}
                        {key === 'noivos' && '💑'}
                        {key === 'grupos' && '🎓'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#1a1a2e] leading-[1.2]">{value.title}</h3>
                    <p className="mt-4 text-[#4a4a5a] leading-relaxed">{value.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-[#4a4a5a]/60">
                      <span className="w-8 h-[1px] bg-[#c9a84c]" />
                      <span>{value.detail}</span>
                    </div>
                    <a
                      href="#planejar"
                      className="inline-flex items-center gap-2 mt-8 text-[#c9a84c] font-semibold group-hover:gap-4 transition-all duration-300"
                    >
                      Planejar agora
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            EXPERIÊNCIAS EM DESTAQUE
            ============================================================ */}
        <section className="py-28 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Curadoria Exclusiva</span>
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a2e] leading-[1.1]">
                Escolha o cenário. <br />
                <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">A história é de vocês.</span>
              </h2>
              <p className="text-xl text-[#4a4a5a] max-w-2xl mx-auto font-light">
                Lugares que despertam alguma coisa. Roteiros pensados para que cada dia tenha seu próprio ritmo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((dest, i) => (
                <a
                  key={i}
                  href="#planejar"
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 aspect-[4/5]"
                >
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/90 via-[#0a0a1a]/40 to-transparent" />
                  <div className="absolute bottom-0 p-8 text-white">
                    <p className="text-sm text-white/50 font-medium tracking-wider uppercase">{dest.place}</p>
                    <h3 className="text-3xl font-display font-bold mt-2">{dest.name}</h3>
                    <p className="text-white/70 text-sm mt-2 max-w-xs leading-relaxed">{dest.description}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-medium group-hover:gap-4 transition-all duration-300">
                      Explorar possibilidade
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/viagens"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a1a] text-[#1a1a2e] font-semibold rounded-full transition-all duration-500"
              >
                Ver todos os destinos
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            EXPERIÊNCIAS - 6 ÍCONES
            ============================================================ */}
        <section className="py-20 bg-[#faf8f5]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Vivências</span>
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
                Experiências que <span className="text-[#c9a84c]">transformam</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { emoji: '🏔️', label: 'Aventura' },
                { emoji: '💑', label: 'Romance' },
                { emoji: '🌿', label: 'Natureza' },
                { emoji: '🎭', label: 'Cultura' },
                { emoji: '🍷', label: 'Gastronomia' },
                { emoji: '✨', label: 'Luxo' },
              ].map((item) => (
                <a
                  key={item.label}
                  href="/experiencias"
                  className="group bg-white p-6 rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white hover:border-[#c9a84c]/30"
                >
                  <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                  <span className="text-sm font-semibold text-[#1a1a2e]">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            COMO FUNCIONA
            ============================================================ */}
        <section className="py-32 relative overflow-hidden bg-[#0a0a1a]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/10 to-transparent" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/10 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
              <div className="flex items-center justify-center gap-6">
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.4em] text-[#c9a84c] uppercase bg-[#c9a84c]/10 backdrop-blur-sm px-8 py-3 rounded-full border border-[#c9a84c]/20 shadow-lg shadow-[#c9a84c]/5">
                  Do Desejo ao Embarque
                </span>
                <div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-[#c9a84c]" />
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05]">
                Planejar pode ser
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c] bg-clip-text text-transparent">
                    parte da viagem.
                  </span>
                  <svg className="absolute -bottom-4 left-0 w-full" height="6" viewBox="0 0 800 6" fill="none">
                    <path d="M0 3C100 0 200 6 300 3C400 0 500 6 600 3C700 0 800 3 800 3" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.1"/>
                        <stop offset="30%" stopColor="#c9a84c" stopOpacity="0.6"/>
                        <stop offset="50%" stopColor="#f0d080" stopOpacity="1"/>
                        <stop offset="70%" stopColor="#c9a84c" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                Um caminho claro, humano e cuidadoso para vocês aproveitarem o melhor de cada decisão.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', icon: Compass, title: 'Você conta o sonho', desc: 'O que imaginam, o que precisam e o que não pode faltar.' },
                { num: '02', icon: Sparkle, title: 'A gente escuta de verdade', desc: 'Entendemos o perfil de vocês para filtrar o excesso.' },
                { num: '03', icon: Heart, title: 'Criamos o possível', desc: 'Um roteiro com intenção, beleza e escolhas que fazem sentido.' },
                { num: '04', icon: ArrowUpRight, title: 'Vocês vivem a história', desc: 'Com a tranquilidade de saber que existe alguém cuidando.' },
              ].map((step, i) => (
                <div key={i} className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]">
                  <div className="absolute -top-3 -right-3 text-7xl font-display font-bold text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-base leading-relaxed">{step.desc}</p>
                    <div className="mt-6 w-12 h-[2px] bg-[#c9a84c]/30 group-hover:w-full group-hover:bg-[#c9a84c] transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://wa.me/5534999082607?text=Olá! Quero começar minha jornada com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
              >
                <span className="text-lg">Quero começar minha jornada</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="mt-4 text-sm text-white/30 font-light">
                Sem compromisso. Apenas uma conversa para entender o que vocês sonham.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            DIFERENCIAIS
            ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Diferenciais</span>
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
                Por que <span className="text-[#c9a84c]">COÉ, PARTIU?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: '⭐', title: 'Curadoria', desc: 'Opções selecionadas de acordo com seu perfil e preferências.' },
                { emoji: '❤️', title: 'Atendimento Humano', desc: 'Você fala com pessoas que entendem sua viagem.' },
                { emoji: '🛡️', title: 'Segurança', desc: 'Parceiros e fornecedores cuidadosamente selecionados.' },
                { emoji: '📸', title: 'Experiência', desc: 'Pensamos além do destino, criamos memórias.' },
              ].map((item) => (
                <div key={item.title} className="group bg-[#faf8f5] p-8 rounded-3xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#c9a84c]/30">
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                  <h3 className="font-display font-semibold text-[#1a1a2e]">{item.title}</h3>
                  <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SOBRE NÓS
            ============================================================ */}
        <section className="py-28 bg-[#faf8f5]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#f0ece6]">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85"
                  alt="Sobre a COÉ, PARTIU?"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                  <span className="text-sm font-medium text-[#1a1a2e]">✨ Viajar é uma forma de voltar diferente</span>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-[2px] bg-[#c9a84c]" />
                    <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">A agência por trás do roteiro</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e] leading-[1.1]">
                    A melhor parte de uma viagem é ter alguém que <br />
                    <span className="bg-gradient-to-r from-[#c9a84c] to-[#e8c87a] bg-clip-text text-transparent">entende você.</span>
                  </h2>
                </div>
                <p className="text-lg text-[#4a4a5a] leading-relaxed font-light">
                  Somos uma agência de viagens e experiências com olhar atento para pessoas. Em vez de entregar opções infinitas, fazemos as perguntas certas e cuidamos dos detalhes que deixam tudo mais leve.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: 'Curadoria segura e parceiros escolhidos' },
                    { icon: Heart, text: 'Atendimento próximo, do seu jeito' },
                    { icon: Sparkle, text: 'Experiências que continuam depois da volta' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[#1a1a2e] group">
                      <div className="p-2 rounded-full bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-[#c9a84c]" />
                      </div>
                      <span className="text-[#1a1a2e]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/sobre"
                  className="inline-flex items-center gap-3 text-[#c9a84c] font-semibold group text-lg"
                >
                  Conhecer a nossa história
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            DEPOIMENTOS
            ============================================================ */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
                <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Depoimentos</span>
                <span className="w-12 h-[2px] bg-[#c9a84c]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
                Quem viajou com a gente <span className="text-[#c9a84c]">recomenda</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: 'O Carioca de Atacama transformou nossa viagem. Ele realmente conhece cada detalhe do deserto.', author: 'Ana e Pedro', place: 'Lua de Mel - Atacama' },
                { text: 'Nossa viagem em família foi perfeita. Roteiro adaptado para todas as idades, com surpresas incríveis.', author: 'Família Silva', place: 'Férias - Alagoas' },
                { text: 'A excursão escolar foi um sucesso! Os alunos aprenderam muito e voltaram inspirados.', author: 'Escola Nova Geração', place: 'Turismo Pedagógico - Chile' },
              ].map((testimonial, i) => (
                <div key={i} className="bg-[#faf8f5] p-8 rounded-3xl transition-all duration-500 hover:shadow-xl border border-transparent hover:border-[#c9a84c]/30">
                  <div className="flex text-[#c9a84c] mb-4">
                    <span>★★★★★</span>
                  </div>
                  <p className="text-[#4a4a5a] leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="mt-4 pt-4 border-t border-[#e8e3dc]">
                    <p className="font-semibold text-[#1a1a2e]">{testimonial.author}</p>
                    <p className="text-xs text-[#4a4a5a]">{testimonial.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FORMULÁRIO - "COMEÇA COM UMA CONVERSA"
            ============================================================ */}
        <section id="planejar" className="py-32 relative overflow-hidden bg-[#0a0a1a]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/10 to-transparent" />
          </div>

          <div className="container-custom max-w-5xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#c9a84c]" />
                    <span className="text-sm font-medium tracking-[0.4em] text-[#c9a84c] uppercase bg-[#c9a84c]/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#c9a84c]/20">
                      Começa com uma conversa
                    </span>
                    <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#c9a84c]" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
                    Qual viagem está <br />
                    <span className="bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c] bg-clip-text text-transparent">
                      na cabeça de vocês?
                    </span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/60 font-light leading-relaxed">
                  Conte um pouco. A primeira ideia de roteiro nasce daqui, sem compromisso e sem respostas prontas.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-7 h-7 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] text-xs font-bold border border-[#c9a84c]/20 flex-shrink-0">✓</div>
                    <span>Atendimento humano, sem pressão para decidir</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-7 h-7 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] text-xs font-bold border border-[#c9a84c]/20 flex-shrink-0">✓</div>
                    <span>Um ponto de partida pensado para vocês</span>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-xs font-bold text-[#c9a84c] border border-[#c9a84c]/30">A</div>
                    <div className="w-9 h-9 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-xs font-bold text-[#c9a84c] border border-[#c9a84c]/30">P</div>
                    <div className="w-9 h-9 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-xs font-bold text-[#c9a84c] border border-[#c9a84c]/30">+</div>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">500+ viajantes confiam na COÉ, PARTIU?</p>
                    <p className="text-xs text-white/40">Experiências que transformam vidas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl shadow-[#c9a84c]/5">
                <form action="/api/leads" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Como podemos chamar você? <span className="text-[#c9a84c]">*</span></label>
                    <input type="text" name="name" required placeholder="Seu nome" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Qual experiência combina com o momento? <span className="text-[#c9a84c]">*</span></label>
                    <select name="tripType" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-300 appearance-none">
                      <option value="" className="text-[#1a1a2e]">Escolha uma opção</option>
                      <option value="familia" className="text-[#1a1a2e]">Viagem em família</option>
                      <option value="lua-de-mel" className="text-[#1a1a2e]">Lua de mel ou viagem a dois</option>
                      <option value="grupo" className="text-[#1a1a2e]">Escola, empresa ou grupo</option>
                      <option value="outro" className="text-[#1a1a2e]">Ainda estou descobrindo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Para onde o coração está apontando? <span className="text-[#c9a84c]">*</span></label>
                    <input type="text" name="destination" required placeholder="Pode ser um lugar ou uma sensação" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Seu melhor contato <span className="text-[#c9a84c]">*</span></label>
                    <input type="email" name="email" required placeholder="voce@email.com" className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-300" />
                  </div>

                  <input type="hidden" name="origin" value="site" />

                  <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-[1.02]">
                    Quero receber uma ideia de roteiro
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-xs text-white/30 text-center">
                    Seus dados ficam seguros com a COÉ, PARTIU? e só serão usados para esta conversa.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
