// /src/app/sobre/page.tsx
import { type SVGProps } from 'react';

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
  </svg>
);

const valores = [
  { titulo: 'Humanidade', desc: 'Atendimento próximo e personalizado para cada viajante.', emoji: '❤️' },
  { titulo: 'Excelência', desc: 'Curadoria cuidadosa de cada experiência oferecida.', emoji: '⭐' },
  { titulo: 'Segurança', desc: 'Parceiros confiáveis e viagens planejadas com responsabilidade.', emoji: '🛡️' },
  { titulo: 'Descoberta', desc: 'Incentivamos a exploração e o aprendizado em cada viagem.', emoji: '🔭' },
];

export default function SobrePage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#2a1a3e] to-[#1a1a2e] p-12 md:p-16 text-white mb-16">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Sobre Nós</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Quem somos
            </h1>
            <p className="text-xl text-white/80 mt-4 leading-relaxed">
              COÉ, PARTIU? Travel & Experiences — uma nova geração de turismo, feita para pessoas que acreditam que a vida pede passagem.
            </p>
          </div>
        </div>

        {/* HISTÓRIA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#c9a84c]" />
              <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Nossa História</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
              Uma nova forma de <span className="text-[#c9a84c]">viajar</span>
            </h2>
            <div className="space-y-4 text-[#4a4a5a] leading-relaxed">
              <p>
                A COÉ, PARTIU? nasceu do desejo de transformar a forma como as pessoas viajam. Não queremos ser apenas mais uma agência de viagens — queremos ser seus parceiros na criação de histórias inesquecíveis.
              </p>
              <p>
                Com uma abordagem moderna e humana, selecionamos cuidadosamente cada destino, experiência e parceiro para garantir que sua viagem seja única e especial.
              </p>
              <p className="font-medium text-[#1a1a2e]">
                COÉ, PARTIU? — Você escolhe o destino. A gente cuida do caminho.
              </p>
            </div>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Planejar minha viagem
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#f0ece6]">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85"
              alt="Sobre a COÉ, PARTIU?"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* VALORES */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
            <span className="text-sm font-medium tracking-[0.3em] text-[#c9a84c] uppercase">Nossos Valores</span>
            <span className="w-12 h-[2px] bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a2e]">
            O que nos <span className="text-[#c9a84c]">move</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {valores.map((item) => (
            <div
              key={item.titulo}
              className="group bg-[#faf8f5] p-6 rounded-3xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#c9a84c]/30"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
              <h3 className="font-display font-semibold text-[#1a1a2e]">{item.titulo}</h3>
              <p className="text-[#4a4a5a] text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#c9a84c]/10 to-[#e8c87a]/10 rounded-3xl p-8 border border-[#c9a84c]/20">
            <p className="text-lg text-[#1a1a2e] font-light">
              Vamos criar sua próxima história juntos?
            </p>
            <a
              href="/planejar"
              className="inline-flex items-center gap-3 mt-4 px-10 py-5 bg-gradient-to-r from-[#c9a84c] to-[#b8983e] hover:from-[#b8983e] hover:to-[#a08830] text-[#0a0a1a] font-semibold rounded-full transition-all duration-500 shadow-2xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 hover:scale-105"
            >
              Começar agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
