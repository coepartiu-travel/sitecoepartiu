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

// ================= PASSEIOS =================
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

// ================= DEPOIMENTOS =================
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
            HERO - ULTRA PREMIUM
            ============================================================ */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] p-12 md:p-16 lg:p-20 text-white mb-16">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569529461291-04a377959d11?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#1a1a2e]/70 to-transparent" />
          
          {/* Elementos decorativos */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#c9a84c]/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            {/* Badge Carioca de Atacama */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#c9a84c]/10 backdrop-blur-sm rounded-full border border-[#c9a84c]/20 mb-8">
              <img
                src="/images/carioca-atacama-logo.png"
                alt="Carioca de Atacama"
                className="h-6 w-auto object-contain"
              />
              <span className="w-px h-6 bg-[#c9a84c]/30" />
              <span className="text-xs font-medium tracking-[0.2em] text-[#c9a84c] uppercase">
                Carioca de Atacama
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
              Atacama & Chile
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mt-4 leading-relaxed">
              Mais do que conhecer. <span className="text-[#c9a84c]">Viver o destino.</span>
            </p>
            <p className="text-white/50 mt-2 text-base font-light max-w-xl">
              Conheça o Chile com quem já viveu o destino por dentro. 
              <span className="block text-white/30 text-sm mt-1">— Do Rio de Janeiro ao Atacama. Do sonho à experiência.</span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
              >
                Quero montar minha viagem
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#passeios"
                className="inline-flex items-center gap-2 px-6 py-4 text-white/60 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-[#c9a84c]"
              >
                Ver passeios
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Indicadores de autoridade */}
            <div className="mt-10 flex flex-wrap gap-8">
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
        </section>

        {/* ============================================================
            QUEM SOU EU - CONSULTOR E DONO (RESUMO NA PÁGINA ATACAMA)
            ============================================================ */}
        <section className="mb-16 bg-gradient-to-br from-[#faf8f5] to-[#f0ece6] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Foto - Placeholder para sua foto */}
            <div className="md:col-span-1">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center">
                <div className="text-center text-white/30">
                  <span className="text-5xl block mb-2">🌵</span>
                  <span className="text-xs">Sua foto aqui</span>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#c9a84c]" />
                <span className="text-xs font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Quem está por trás</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1a2e]">
                Eu sou o <span className="text-[#c9a84c]">Carioca de Atacama</span>
              </h2>
              <p className="text-[#4a4a5a] text-sm leading-relaxed max-w-2xl">
                Durante um ano, vivi no Atacama. Trabalhei com turismo, fui guia, administrei uma agência local. 
                Conheci cada duna, cada lagoa, cada nascer do sol no deserto mais árido do mundo. 
                <span className="block mt-2 text-[#1a1a2e] font-medium">Do Rio de Janeiro ao Atacama. Do sonho à experiência.</span>
              </p>
              <a
                href="/sobre"
                className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:gap-3 transition-all duration-300 text-sm"
              >
                Conheça minha história completa
                <ArrowRight className="h-4 w-4" />
              </a>
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
              Você escolhe o destino. A gente cuida do caminho.
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
