// /src/app/viagens/page.tsx
import { ArrowUpRight, Compass, Globe, Mountain, Sun, Trees, Umbrella, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const destinos = [
  { 
    nome: 'Costa do Descobrimento', 
    lugar: 'Brasil', 
    desc: 'Praias de águas quentes e piscinas naturais. O corpo relaxa, a mente desacelera.', 
    icone: Sun,
    href: '/planejar'
  },
  { 
    nome: 'Patagônia Andina', 
    lugar: 'Argentina / Chile', 
    desc: 'Gigantes de gelo e vento que limpam a alma. A imensidão ativa a humildade e a admiração.', 
    icone: Mountain,
    href: '/planejar'
  },
  { 
    nome: 'Cidades Históricas', 
    lugar: 'Europa', 
    desc: 'Cada pedra conta uma história. A memória coletiva nos conecta com quem fomos.', 
    icone: Compass,
    href: '/planejar'
  },
  { 
    nome: 'Lua de Mel dos Sonhos', 
    lugar: 'Destinos Exclusivos', 
    desc: 'Intimidade e cenários que ficam gravados no inconsciente como memórias felizes.', 
    icone: Umbrella,
    href: '/lua-de-mel'
  },
  { 
    nome: 'Resorts & Bem-Estar', 
    lugar: 'Nordeste Brasileiro', 
    desc: 'O descanso ativa o sistema parassimpático. Você volta mais leve.', 
    icone: Trees,
    href: '/planejar'
  },
  { 
    nome: 'Gastronomia Local', 
    lugar: 'Portugal & Itália', 
    desc: 'Sabores que ativam o prazer e criam vínculos afetivos com a cultura.', 
    icone: Utensils,
    href: '/planejar'
  },
];

export default function ViagensPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Destinos</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e]">Para onde o coração está <br /> <span className="text-[#c9a84c]">apontando?</span></h1>
          <p className="text-[#4a4a5a] text-lg">Cada destino tem uma energia única. Qual deles vai despertar a melhor versão de vocês?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinos.map((dest) => (
            <Link key={dest.nome} href={dest.href} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white hover:border-[#c9a84c]/30">
              <div className="flex items-center gap-3 text-[#1a1a2e]">
                <dest.icone className="h-6 w-6 text-[#c9a84c]" />
                <span className="text-sm font-medium text-[#4a4a5a]">{dest.lugar}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mt-3 text-[#1a1a2e]">{dest.nome}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2 leading-relaxed">{dest.desc}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-medium group-hover:gap-3 transition-all duration-300">Explorar <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
