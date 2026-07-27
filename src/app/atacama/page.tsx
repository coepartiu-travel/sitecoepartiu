// /src/app/atacama/page.tsx
import { ArrowUpRight, Sun, Moon, Camera, Compass, Mountain, Star } from 'lucide-react';
import Link from 'next/link';

export default function AtacamaPage() {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f5] min-h-screen">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e] p-12 md:p-16 text-white mb-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569529461291-04a377959d11?auto=format&fit=crop&w=1400&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase">Destino Exclusivo</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mt-4">ATACAMA</h1>
            <p className="text-xl text-white/80 mt-4">O deserto mais árido do mundo. Um convite ao silêncio, à introspecção e à contemplação.</p>
            <p className="text-white/60 mt-2 text-sm">A psicanálise chama isso de "encontro com o vazio fértil": é no silêncio que as respostas aparecem.</p>
            <Link href="/planejar" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#c9a84c] hover:bg-[#b8983e] text-[#1a1a2e] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">Viver essa experiência <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[ { nome: 'Valle de la Luna', icon: Sun }, { nome: 'Geysers del Tatio', icon: Moon }, { nome: 'Salar', icon: Compass }, { nome: 'Astronomia', icon: Star }, { nome: 'Lagunas', icon: Camera }, { nome: 'Vale da Morte', icon: Mountain } ].map((item) => (
            <div key={item.nome} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <item.icon className="h-8 w-8 mx-auto text-[#c9a84c]" />
              <p className="font-display font-semibold mt-2 text-[#1a1a2e]">{item.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
