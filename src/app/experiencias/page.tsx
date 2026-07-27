// /src/app/experiencias/page.tsx
import { ArrowUpRight, Compass, Heart, Camera, Globe, Star, TreePine, Utensils, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const experiencias = [
  { titulo: 'Aventura', desc: 'A adrenalina libera dopamina. O medo controlado vira coragem.', icone: Compass },
  { titulo: 'Romance', desc: 'A ocitocina (hormônio do amor) é ativada em cenários íntimos.', icone: Heart },
  { titulo: 'Natureza', desc: 'O contato com a terra reduz o cortisol. Acalma a mente.', icone: TreePine },
  { titulo: 'Cultura', desc: 'Aprender algo novo ativa o hipocampo. Você volta mais sábio.', icone: Globe },
  { titulo: 'Gastronomia', desc: 'O paladar ativa memórias afetivas. Cada sabor conta uma história.', icone: Utensils },
  { titulo: 'Família', desc: 'Vínculos fortalecidos criam uma rede de apoio emocional duradoura.', icone: Users },
  { titulo: 'Luxo', desc: 'O conforto extremo permite que o cérebro entre em estado de descanso profundo.', icone: Star },
  { titulo: 'Fotografia', desc: 'Registrar momentos ativa a memória autobiográfica. A história fica viva.', icone: Camera },
  { titulo: 'Autoconhecimento', desc: 'Viagens solitárias ativam o córtex pré-frontal. Você se entende melhor.', icone: Sparkles },
];

export default function ExperienciasPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Viver é sentir</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e]">Não é sobre onde você vai. <br />É sobre <span className="text-[#c9a84c]">o que você vai sentir.</span></h1>
          <p className="text-[#4a4a5a] text-lg">A neurociência mostra que as emoções são o combustível da memória. Escolha vivências que mexem com você.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {experiencias.map((exp) => (
            <Link key={exp.titulo} href="/planejar" className="group p-6 bg-[#faf8f5] rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-transparent hover:border-[#c9a84c]/30">
              <exp.icone className="h-8 w-8 mx-auto text-[#c9a84c] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display font-semibold mt-3 text-[#1a1a2e]">{exp.titulo}</h3>
              <p className="text-xs text-[#4a4a5a] mt-1 leading-relaxed">{exp.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
