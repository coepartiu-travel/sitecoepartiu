// /src/app/escolas-grupos/page.tsx
import { ArrowUpRight, BookOpen, Briefcase, Globe, GraduationCap, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default function EscolasGruposPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Aprendizado em movimento</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e]">A melhor sala de aula <br /><span className="text-[#c9a84c]">não tem paredes.</span></h1>
          <p className="text-lg text-[#4a4a5a] max-w-2xl mx-auto">A psicologia cognitiva comprova: vivências práticas consolidam o aprendizado muito mais do que a teoria. Viagens pedagógicas ativam a curiosidade e a retenção de conhecimento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ { titulo: 'Escolas', desc: 'Viagens que ensinam história, ciência e cultura de forma viva.', icon: GraduationCap, href: '/planejar' }, { titulo: 'Empresas', desc: 'Team building e integração em cenários que inspiram novas ideias.', icon: Briefcase, href: '/planejar' }, { titulo: 'Grupos de Amigos', desc: 'Fortaleça os laços em experiências compartilhadas.', icon: Users, href: '/planejar' }, { titulo: 'Associações', desc: 'Eventos e encontros em lugares que elevam o propósito do grupo.', icon: Globe, href: '/planejar' } ].map((item) => (
            <Link key={item.titulo} href={item.href} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white hover:border-[#c9a84c]/30 group">
              <item.icon className="h-8 w-8 text-[#c9a84c] mb-4" />
              <h3 className="text-2xl font-display font-semibold text-[#1a1a2e]">{item.titulo}</h3>
              <p className="text-[#4a4a5a] text-sm mt-2">{item.desc}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-[#c9a84c] font-medium group-hover:gap-3 transition-all duration-300">Solicitar proposta <ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
