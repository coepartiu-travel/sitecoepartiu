// /src/app/atacama/page.tsx
import { type SVGProps } from 'react';

const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
);

const passeios = [
  {
    nome: 'Valle de la Luna',
    desc: 'Paisagens que parecem de outro planeta. Um dos pores do sol mais impressionantes do mundo.',
    emoji: '🌙',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Valle de la Muerte',
    desc: 'Dunas, montanhas e paisagens surreais que desafiam a imaginação.',
    emoji: '🏜️',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Geysers del Tatio',
    desc: 'Uma das experiências mais marcantes do Atacama. Gêiseres ao amanhecer a mais de 4.000m de altitude.',
    emoji: '💨',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Lagunas Altiplânicas',
    desc: 'Paisagens de altitude e natureza impressionante. Lagos de águas cristalinas.',
    emoji: '🏞️',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Piedras Rojas',
    desc: 'Uma das paisagens mais emblemáticas do deserto. Formações rochosas vermelhas.',
    emoji: '🪨',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Astronomia',
    desc: 'Experiência de observação do céu em uma das regiões mais famosas do mundo para astronomia.',
    emoji: '🔭',
    nivel: '🌿 Fácil',
  },
  {
    nome: 'Vulcões',
    desc: 'Experiências para viajantes que buscam aventura e altitude.',
    emoji: '🌋',
    nivel: '🏔️ Médio',
  },
  {
    nome: 'Salar de Atacama',
    desc: 'O maior salar do Chile. Paisagem branca com flamengos e vistas únicas.',
    emoji: '🧂',
    nivel: '🌿 Fácil',
  },
];

export default function AtacamaPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        {/* HERO DA PÁGINA ATACAMA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#0a0a1a] p-12 md:p-16 text-white mb-16">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569529461291-04a377959d11?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Carioca de Atacama</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold">Atacama & Chile</h1>
            <p className="text-xl text-white/80 mt-4 leading-relaxed">
              Mais do que conhecer. <span className="text-[#c9a84c]">Viver o destino.</span>
            </p>
            <p className="text-white/50 mt-2 text-sm font-light">
              Conheça o Chile com quem já viveu o destino por dentro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5534999082607?text=Olá! Quero montar minha viagem para o Atacama com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
              >
                Montar minha viagem
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Badge Carioca de Atacama */}
          <div className="absolute bottom-6 right-6 z-10 bg-[#c9a84c]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#c9a84c]/20 flex items-center gap-2">
            <img
              src="/images/carioca-atacama-logo.png"
              alt="Carioca de Atacama"
              className="h-5 w-auto object-contain"
            />
            <span className="text-xs text-[#c9a84c] font-medium tracking-wide">Carioca de Atacama</span>
          </div>
        </div>

        {/* POR QUE VIAJAR COM A COÉ, PARTIU? */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Por que viajar com quem viveu lá?</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            Conhecimento que <span className="text-[#c9a84c]">ninguém tem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { emoji: '🌵', title: 'Experiência Real', desc: 'Conhecimento adquirido vivendo e trabalhando no Chile, não em pesquisas na internet.' },
            { emoji: '🤝', title: 'Consultoria Especializada', desc: 'Ajudamos você a escolher destinos, passeios, duração, hospedagem e experiências.' },
            { emoji: '🎯', title: 'Viagem Personalizada', desc: 'Seu roteiro é pensado de acordo com seu perfil, tempo e orçamento.' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white hover:border-[#c9a84c]/30 text-center">
              <span className="text-4xl block mb-4">{item.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e]">{item.title}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CONSULTORIA ESPECIALIZADA */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] rounded-3xl p-12 text-white mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Consultoria Especializada</span>
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Planejar uma viagem ao Chile pode parecer simples.
              <br />
              <span className="text-[#c9a84c]">Mas escolher a melhor região, época e passeios faz toda a diferença.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
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
        </div>

        {/* PASSEIOS DO ATACAMA */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Passeios do Atacama</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            Conheça os destinos que <span className="text-[#c9a84c]">eu vivi</span>
          </h2>
          <p className="text-[#4a4a5a] text-lg font-light">Cada lugar conta uma história que só quem viveu pode contar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passeios.map((passeio) => (
            <div key={passeio.nome} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white hover:border-[#c9a84c]/30">
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-500">{passeio.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e] text-lg">{passeio.nome}</h3>
              <p className="text-[#4a4a5a] text-xs mt-1 leading-relaxed">{passeio.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] text-[#4a4a5a]/60 font-medium">{passeio.nivel}</span>
                <a
                  href={`https://wa.me/5534999082607?text=Olá! Quero conhecer o passeio ${passeio.nome} no Atacama com o Carioca de Atacama`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] text-xs font-semibold hover:underline"
                >
                  Quero conhecer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
