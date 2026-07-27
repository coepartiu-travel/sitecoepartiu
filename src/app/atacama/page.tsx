// /src/app/lua-de-mel/page.tsx
import { ArrowUpRight, Heart, Hotel, Mountain, Sun, Camera, Wine, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LuaDeMelPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Amor em movimento</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e]">O começo de uma vida a dois <br /><span className="text-[#c9a84c]">merece um cenário à altura.</span></h1>
          <p className="text-lg text-[#4a4a5a] max-w-2xl mx-auto">A neurociência afirma que ambientes novos e belos potencializam a liberação de ocitocina, o hormônio do vínculo. Sua lua de mel é mais que uma viagem: é a construção de uma memória afetiva para toda a vida.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[ { nome: 'Atacama Romântico', desc: 'Noites estreladas que vão ficar gravadas na memória afetiva.', icon: Sun }, { nome: 'Resorts Paradisíacos', desc: 'O luxo silencioso que permite ao corpo descansar e à mente se conectar.', icon: Hotel }, { nome: 'Praias do Brasil', desc: 'O som do mar ativa o sistema de relaxamento profundo.', icon: Mountain }, { nome: 'Destinos Europeus', desc: 'Cenários que parecem saídos de um conto de fadas, ativando a imaginação.', icon: Sparkles } ].map((dest) => (
            <Link key={dest.nome} href="/planejar" className="group relative p-8 bg-[#faf8f5] rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-transparent hover:border-[#c9a84c]/30">
              <dest.icon className="h-10 w-10 text-[#c9a84c] mb-4" />
              <h3 className="text-2xl font-display font-semibold text-[#1a1a2e]">{dest.nome}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2">{dest.desc}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-medium group-hover:gap-3 transition-all duration-300">Planejar <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
