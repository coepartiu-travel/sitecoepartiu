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
    desc: 'Paisagens que parecem de outro planeta. Um dos pores do sol mais impressionantes do mundo.',
    emoji: '🌙',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Valle de la Muerte',
    desc: 'Dunas, montanhas e paisagens surreais que desafiam a imaginação.',
    emoji: '🏜️',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Geysers del Tatio',
    desc: 'Uma das experiências mais marcantes do Atacama. Gêiseres ao amanhecer a mais de 4.000m.',
    emoji: '💨',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Lagunas Altiplânicas',
    desc: 'Paisagens de altitude e natureza impressionante. Lagos de águas cristalinas.',
    emoji: '🏞️',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Piedras Rojas',
    desc: 'Uma das paisagens mais emblemáticas do deserto. Formações rochosas vermelhas.',
    emoji: '🪨',
    nivel: '🌿 Fácil',
    destaque: false,
  },
  {
    nome: 'Astronomia',
    desc: 'Experiência de observação do céu em uma das regiões mais famosas do mundo para astronomia.',
    emoji: '🔭',
    nivel: '🌿 Fácil',
    destaque: true,
  },
  {
    nome: 'Vulcões',
    desc: 'Experiências para viajantes que buscam aventura e altitude.',
    emoji: '🌋',
    nivel: '🏔️ Médio',
    destaque: false,
  },
  {
    nome: 'Salar de Atacama',
    desc: 'O maior salar do Chile. Paisagem branca com flamengos e vistas únicas.',
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
            HERO - ATACAMA & CHILE (TEXTO REVISADO)
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
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#c9a84c]/15 backdrop-blur-sm rounded-full border border-[#c9a84c]/30 mb-8">
              <div className="bg-[#1a1a2e]/80 p-1 rounded-full">
                <img
                  src="/images/carioca-atacama-logo.png"
                  alt="Carioca de Atacama"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="w-px h-7 bg-[#c9a84c]/40" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#c9a84c] uppercase">
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
            <p className="text-white/40 text-sm font-light">
              Experiências reais. Consultoria especializada. Viagens pensadas para você.
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
            QUEM É O CARIOCA DE ATACAMA (TEXTO REVISADO - VERSÃO COMPLETA)
            ============================================================ */}
        <section className="mb-16 bg-gradient-to-br from-[#faf8f5] to-[#f0ece6] rounded-3xl p-8 md:p-12 border border-[#e8e3dc] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* FOTO */}
            <div className="md:col-span-1">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center shadow-lg">
                <img
                  src="/images/atacama/carioca-atacama.jpg"
                  alt="Carioca de Atacama no deserto"
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

            {/* CONTEÚDO */}
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#c9a84c]" />
                <span className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Quem é o Carioca de Atacama</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e]">
                Do Rio de Janeiro <span className="text-[#c9a84c]">ao deserto</span>
              </h2>

              <div className="space-y-3 text-[#4a4a5a] text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-[#1a1a2e]">Eu sou Raul Ramalho</span>, nascido em Niterói, no Rio de Janeiro.
                </p>
                <p>
                  Em abril de 2019, cheguei a Calama, no Chile, com destino ao Atacama.
                </p>
                <p>
                  Uma nova língua. Uma nova cultura. Novos hábitos. Um novo desafio.
                </p>
                <p className="text-[#1a1a2e] font-medium">
                  E uma experiência que acabaria mudando minha trajetória.
                </p>
                <p>
                  Durante um ano, vivi no Atacama. Primeiro em uma hospedaria construída em adobe. Depois, consegui alugar minha primeira casa e comecei a construir, pouco a pouco, minha vida naquele lugar.
                </p>
                <p className="text-[#1a1a2e] font-medium">
                  Foi ali que comecei minha história no turismo.
                </p>
                <p>
                  Comecei trabalhando como <span className="font-semibold text-[#1a1a2e]">agente de turismo em uma agência renomada da região</span>.
                </p>
                <p>
                  Precisei me reinventar. Aprendi espanhol latino, treinei meu inglês e mergulhei em uma cultura completamente diferente da minha.
                </p>
                <p>
                  Aos poucos, fui conquistando meu espaço naquela pequena cidade.
                </p>
                <p>
                  E foi na famosa <span className="text-[#c9a84c] font-semibold">Caracoles</span>, uma simples rua de terra no coração de San Pedro de Atacama, que parte importante dessa trajetória aconteceu.
                </p>
                <p>
                  Conheci viajantes de diferentes lugares do mundo, atendi clientes, aprendi sobre os passeios, os caminhos, a cultura e a realidade daquele destino.
                </p>
                <p>
                  Com o tempo, passei a <span className="font-semibold text-[#1a1a2e]">administrar uma agência de turismo</span> e também me tornei <span className="font-semibold text-[#1a1a2e]">guia turístico</span>.
                </p>
                <p className="text-[#1a1a2e] font-medium">
                  Foi quando o Atacama deixou de ser apenas o lugar onde eu estava morando.
                </p>
                <p className="text-[#c9a84c] font-semibold text-base">
                  Passou a fazer parte de quem eu sou.
                </p>
              </div>

              {/* EXPERIÊNCIAS VIVIDAS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                {[
                  { emoji: '🏜️', label: 'Caminhei por dunas' },
                  { emoji: '💧', label: 'Mergulhei em lagoas de sal' },
                  { emoji: '❄️', label: 'Enfrentei -11°C' },
                  { emoji: '🌋', label: 'Subi vulcões' },
                  { emoji: '🌌', label: 'Contemplei o céu' },
                  { emoji: '🤝', label: 'Fiz amigos' },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 text-[10px] text-[#4a4a5a] bg-white/70 px-2.5 py-1.5 rounded-full border border-white/50">
                    <span>{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  E, acima de tudo, aprendi a enxergar o turismo de uma maneira diferente.
                </p>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  Não apenas como venda de passeios.
                </p>
                <p className="text-[#1a1a2e] font-medium text-base">
                  Mas como <span className="text-[#c9a84c]">experiência, descoberta, conexão e memória.</span>
                </p>
              </div>

              {/* POR QUE ISSO IMPORTA */}
              <div className="pt-3 border-t border-[#e8e3dc] space-y-3">
                <h3 className="text-sm font-semibold text-[#1a1a2e]">Por que isso importa para a sua viagem?</h3>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  Porque existe uma diferença entre <span className="font-semibold text-[#1a1a2e]">conhecer um destino</span> e simplesmente <span className="font-semibold text-[#1a1a2e]">vender um destino</span>.
                </p>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  Minha experiência no Atacama me permitiu conhecer não apenas os lugares que aparecem nas fotografias, mas também entender a dinâmica do turismo, os diferentes perfis de viajantes e os detalhes que podem fazer diferença na experiência de quem está chegando pela primeira vez.
                </p>
                <p className="text-[#1a1a2e] font-medium text-sm">
                  É essa experiência que hoje levo para a <span className="text-[#c9a84c]">COÉ, PARTIU? Travel & Experiences</span>.
                </p>
              </div>

              {/* CONSULTORIA ESPECIALIZADA */}
              <div className="pt-3 space-y-3">
                <h3 className="text-sm font-semibold text-[#1a1a2e]">Consultoria especializada em Chile</h3>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  Você não precisa chegar ao Chile com todas as respostas.
                </p>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  A COÉ, PARTIU? ajuda você a entender as possibilidades e construir uma viagem de acordo com <span className="font-semibold text-[#1a1a2e]">seu perfil, seu tempo, seus interesses e seu orçamento</span>.
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <span className="px-4 py-1.5 bg-[#c9a84c]/10 rounded-full text-xs text-[#c9a84c] border border-[#c9a84c]/20 font-medium">🌵 Atacama</span>
                  <span className="px-4 py-1.5 bg-[#c9a84c]/10 rounded-full text-xs text-[#c9a84c] border border-[#c9a84c]/20 font-medium">🏙️ Santiago</span>
                  <span className="px-4 py-1.5 bg-[#c9a84c]/10 rounded-full text-xs text-[#c9a84c] border border-[#c9a84c]/20 font-medium">🌊 Chile</span>
                </div>
              </div>

              {/* SUA VIAGEM COMEÇA ANTES */}
              <div className="pt-3 border-t border-[#e8e3dc] space-y-3">
                <h3 className="text-sm font-semibold text-[#1a1a2e]">Sua viagem começa antes do embarque.</h3>
                <div className="grid grid-cols-2 gap-1 text-xs text-[#4a4a5a]">
                  <span>✅ A gente conversa</span>
                  <span>✅ Entende o que você procura</span>
                  <span>✅ Apresenta as possibilidades</span>
                  <span>✅ Ajuda a montar seu roteiro</span>
                </div>
                <p className="text-[#4a4a5a] text-sm leading-relaxed">
                  E conecta você às experiências que fazem sentido para a sua viagem.
                </p>
                <div className="pt-1">
                  <p className="text-base font-display font-bold text-[#1a1a2e]">
                    Você escolhe o destino.
                    <br />
                    <span className="text-[#c9a84c]">A gente ajuda a cuidar do caminho.</span>
                  </p>
                </div>
                <a
                  href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  QUERO MONTAR MINHA VIAGEM
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            POR QUE VIAJAR COM A COÉ, PARTIU?
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
            { emoji: '🌵', title: 'Experiência Real', desc: 'Conhecimento adquirido vivendo e trabalhando no Chile, não em pesquisas na internet.' },
            { emoji: '🤝', title: 'Consultoria Especializada', desc: 'Ajudamos você a escolher destinos, passeios, duração, hospedagem e experiências.' },
            { emoji: '🎯', title: 'Viagem Personalizada', desc: 'Seu roteiro é pensado de acordo com seu perfil, tempo e orçamento.' },
          ].map((item) => (
            <div key={item.title} className="bg-[#faf8f5] p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#c9a84c]/30 text-center">
              <span className="text-4xl block mb-4">{item.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e]">{item.title}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ============================================================
            CONSULTORIA ESPECIALIZADA
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
              Nossa proposta é ajudar você a montar uma viagem coerente com seu perfil, seu tempo e seu orçamento.
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
            PASSEIOS DO ATACAMA
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
            <p className="text-[#4a4a5a] text-base font-light max-w-2xl mx-auto">
              Cada lugar conta uma história que só quem viveu pode contar.
            </p>
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
                    href={`https://wa.me/5534999082607?text=Olá! Quero conhecer o passeio ${passeio.nome} no Atacama com o Carioca de Atacama`}
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
              Quem viajou com o <span className="text-[#c9a84c]">Carioca de Atacama</span>
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
