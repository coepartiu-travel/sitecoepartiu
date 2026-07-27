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
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" />
  </svg>
);
const WhatsApp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.7 2.4l.5-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5 0 .7-.3 1.3-.8 1.6-.5.3-1.2.3-2 .1-2.6-.7-5.2-3.3-5.9-5.9-.2-.7-.2-1.4.1-2Z" />
  </svg>
);

// ================= DADOS (NEUROCIÊNCIA + VENDAS) =================
const destinations = [
  {
    name: 'Mar tranquilo',
    place: 'Alagoas, Brasil',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    description: 'Dias leves, água morna e tempo para desacelerar. O cérebro descansa quando o corpo flutua.',
  },
  {
    name: 'Horizonte aberto',
    place: 'Patagônia, Argentina',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    description: 'Paisagens que mudam a forma de enxergar o mundo. A imensidão desperta novos significados.',
  },
  {
    name: 'Entre história e sabor',
    place: 'Lisboa, Portugal',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85',
    description: 'Cultura, encontros e pequenas descobertas pelo caminho. A memória afetiva se constrói nos detalhes.',
  },
];

const audienceContent = {
  familias: {
    label: 'Para famílias',
    title: 'Mais presença. Menos logística.',
    description: 'Roteiros que respeitam o ritmo de cada pessoa e deixam espaço para o que realmente importa: estar junto. (Neurociência: a conexão familiar ativa o sistema de recompensa do cérebro)',
    detail: 'Conforto, segurança e descobertas para todas as idades.',
    image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=85',
  },
  noivos: {
    label: 'Para noivos',
    title: 'O começo de uma vida a dois merece um cenário à altura.',
    description: 'Da lua de mel ao destination wedding, desenhamos cada detalhe para que vocês só precisem viver o momento. (PNL: a âncora visual desse cenário ficará gravada para sempre)',
    detail: 'Intimidade, beleza e experiências que viram memória.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85',
  },
  grupos: {
    label: 'Para escolas & grupos',
    title: 'Experiências que aproximam e ensinam.',
    description: 'Viagens pedagógicas com planejamento cuidadoso, propósito claro e operação tranquila. (Psicologia: aprendizado experiencial ativa múltiplas inteligências)',
    detail: 'Coordenação próxima do primeiro briefing ao retorno.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
  },
};

export default function Home() {
  return (
    <div className="bg-[#faf8f5] text-[#1a1a2e] font-sans overflow-hidden">
      <main>
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a2a4e] to-[#0f0f1a] text-white">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/70 to-transparent" />
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-[#c9a84c] uppercase"><span className="w-8 h-[1px] bg-[#c9a84c]" /> COÉ, PARTIU? Travel &amp; Experiences</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.08] tracking-tight text-balance">O mundo fica <br /><span className="text-[#c9a84c]">mais bonito</span><br /> quando a gente parte.</h1>
              <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed">A COÉ, PARTIU? transforma vontade de viajar em experiências com sentido, cuidado e espaço para o inesperado. Sua próxima história começa aqui.</p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a href="#planejar" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] hover:bg-[#b8983e] text-[#1a1a2e] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">Quero viver essa viagem <ArrowUpRight className="h-4 w-4" /></a>
                <a href="#experiencias" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">Descobrir possibilidades <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARA QUEM (AUDIENCE) ===== */}
        <section id="para-quem" className="py-20 md:py-28 bg-[#faf8f5]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Uma viagem para cada momento</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1]">O que você quer <br /><span className="text-[#c9a84c]">sentir</span> na próxima?</h2>
                <p className="text-lg text-[#4a4a5a] max-w-md">Não começamos pelo pacote. Começamos por vocês: o momento de vida, o desejo e a memória que querem levar de volta.</p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {Object.entries(audienceContent).map(([key, value]) => (
                    <a key={key} href={`#${key}`} className="group flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-[#e5e5e5] hover:border-[#c9a84c] text-sm font-medium text-[#1a1a2e]">
                      {key === 'familias' && <Users className="h-4 w-4" />}
                      {key === 'noivos' && <Heart className="h-4 w-4" />}
                      {key === 'grupos' && <School className="h-4 w-4" />}
                      <span>{value.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#e5e5e5]">
                <img src={audienceContent.familias.image} alt="Família viajando" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-lg">Famílias</p>
                  <p className="text-white/70 text-sm">Mais presença. Menos logística.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXPERIÊNCIAS (NEUROCIÊNCIA) ===== */}
        <section id="experiencias" className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Curadoria COÉ, PARTIU?</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance">Escolha o cenário. <br /><span className="text-[#c9a84c]">A história é de vocês.</span></h2>
              <p className="text-lg text-[#4a4a5a] max-w-2xl mx-auto">Lugares que despertam alguma coisa. Roteiros pensados para que cada dia tenha seu próprio ritmo. A neurociência comprova: experiências transformadoras ativam a plasticidade cerebral.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((dest, i) => (
                <a key={i} href="#planejar" className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/5]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-8 text-white">
                    <p className="text-sm text-white/60 font-medium">{dest.place}</p>
                    <h3 className="text-2xl font-display font-bold mt-1">{dest.name}</h3>
                    <p className="text-white/80 text-sm mt-2 max-w-xs">{dest.description}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-[#c9a84c] font-medium group-hover:gap-3 transition-all duration-300">Explorar possibilidade <ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA (PROCESSO) ===== */}
        <section id="processo" className="py-20 md:py-28 bg-[#1a1a2e] text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Do desejo ao embarque</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] text-balance">Planejar pode ser <br /><span className="text-[#c9a84c]">parte da viagem.</span></h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">Um caminho claro, humano e cuidadoso para vocês aproveitarem o melhor de cada decisão. A ansiedade reduz quando o processo é transparente.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', icon: Compass, title: 'Você conta o sonho', desc: 'O que imaginam, o que precisam e o que não pode faltar.' },
                { num: '02', icon: Sparkle, title: 'A gente escuta de verdade', desc: 'Entendemos o perfil de vocês para filtrar o excesso.' },
                { num: '03', icon: Heart, title: 'Criamos o possível', desc: 'Um roteiro com intenção, beleza e escolhas que fazem sentido.' },
                { num: '04', icon: ArrowUpRight, title: 'Vocês vivem a história', desc: 'Com a tranquilidade de saber que existe alguém cuidando.' },
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4 p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-300 group">
                  <div className="text-5xl font-display font-bold text-[#c9a84c]/20">{step.num}</div>
                  <step.icon className="h-8 w-8 mx-auto text-[#c9a84c] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SOBRE NÓS ===== */}
        <section id="sobre" className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#e5e5e5]">
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85" alt="Sobre a COÉ, PARTIU?" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[#1a1a2e] shadow-lg">✨ Viajar é uma forma de voltar diferente</div>
              </div>
              <div className="space-y-6">
                <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">A agência por trás do roteiro</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1]">A melhor parte de uma viagem é ter alguém que <span className="text-[#c9a84c]">entende você.</span></h2>
                <p className="text-lg text-[#4a4a5a] leading-relaxed">Somos uma agência de viagens e experiências com olhar atento para pessoas. Em vez de entregar opções infinitas, fazemos as perguntas certas e cuidamos dos detalhes que deixam tudo mais leve. Psicologia e hospitalidade caminham juntas aqui.</p>
                <div className="space-y-3">
                  {[ 
                    { icon: Shield, text: 'Curadoria segura e parceiros escolhidos' },
                    { icon: Heart, text: 'Atendimento próximo, do seu jeito' },
                    { icon: Sparkle, text: 'Experiências que continuam depois da volta' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#1a1a2e]"><item.icon className="h-5 w-5 text-[#c9a84c]" /><span>{item.text}</span></div>
                  ))}
                </div>
                <a href="#planejar" className="inline-flex items-center gap-2 text-[#1a1a2e] font-medium hover:text-[#c9a84c] transition-colors group">Conhecer a nossa forma de cuidar <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FORMULÁRIO (PLANEJAR) ===== */}
        <section id="planejar" className="py-20 md:py-28 bg-[#1a1a2e] text-white">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Começa com uma conversa</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1]">Qual viagem está <br /><span className="text-[#c9a84c]">na cabeça de vocês?</span></h2>
                <p className="text-lg text-white/70">Conte um pouco. A primeira ideia de roteiro nasce daqui, sem compromisso e sem respostas prontas. O simples ato de nomear um desejo já ativa o córtex pré-frontal, preparando o cérebro para a realização.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-white/80"><div className="w-5 h-5 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] text-xs">✓</div><span>Atendimento humano, sem pressão para decidir</span></div>
                  <div className="flex items-center gap-3 text-white/80"><div className="w-5 h-5 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] text-xs">✓</div><span>Um ponto de partida pensado para vocês</span></div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <form action="/api/leads" method="POST" className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Como podemos chamar você?</label>
                    <input type="text" name="name" required placeholder="Seu nome" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Qual experiência combina com o momento?</label>
                    <select name="tripType" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none">
                      <option value="" className="text-[#1a1a2e]">Escolha uma opção</option>
                      <option value="familia" className="text-[#1a1a2e]">Viagem em família</option>
                      <option value="lua-de-mel" className="text-[#1a1a2e]">Lua de mel ou viagem a dois</option>
                      <option value="grupo" className="text-[#1a1a2e]">Escola, empresa ou grupo</option>
                      <option value="outro" className="text-[#1a1a2e]">Ainda estou descobrindo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Para onde o coração está apontando?</label>
                    <input type="text" name="destination" required placeholder="Pode ser um lugar ou uma sensação" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Seu melhor contato</label>
                    <input type="email" name="email" required placeholder="voce@email.com" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#c9a84c] hover:bg-[#b8983e] text-[#1a1a2e] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">Quero receber uma ideia de roteiro <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
                  <p className="text-xs text-white/40 text-center">Seus dados ficam seguros com a COÉ, PARTIU? e só serão usados para esta conversa.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
