import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Instagram, Youtube, Facebook, Send } from 'lucide-react';

const navigation = {
  principal: [
    { name: 'Início', href: '/' },
    { name: 'Atacama & Chile', href: '/atacama' },
    { name: 'Viagens', href: '/viagens' },
    { name: 'Excursões', href: '/excursoes' },
    { name: 'Experiências', href: '/experiencias' },
    { name: 'Sobre Nós', href: '/sobre' },
  ],
  suporte: [
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
    { name: 'Como Funciona', href: '/como-funciona' },
    { name: 'Contato', href: '/contato' },
  ],
};

const social = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/coepartiu',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@coepartiu',
    icon: Youtube,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/coepartiu',
    icon: Facebook,
  },
  {
    name: 'Fale com Especialista',
    href: 'https://wa.me/5534999082607?text=Olá! Conheci a COÉ, PARTIU? e gostaria de planejar uma viagem com o Carioca de Atacama.',
    icon: Send,
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8e3dc]">
      <Container className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <div className="relative h-16 w-auto">
              <Image
                src="/logo-coe-partiu.png"
                alt="COÉ, PARTIU? Travel & Experiences"
                width={240}
                height={64}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-[#4a4a5a] text-sm max-w-xs leading-relaxed">
              O Chile que só um carioca que virou atacamenho pode te mostrar.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#f5f0eb] hover:bg-[#c9a84c] hover:text-white transition-all duration-300 text-[#1a1a2e] hover:scale-110"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação Principal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5 text-[#1a1a2e]">Navegação</h3>
            <ul className="space-y-3">
              {navigation.principal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#4a4a5a] hover:text-[#c9a84c] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5 text-[#1a1a2e]">Suporte</h3>
            <ul className="space-y-3">
              {navigation.suporte.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#4a4a5a] hover:text-[#c9a84c] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-5 text-[#1a1a2e]">Contato</h3>
            <ul className="space-y-3 text-sm text-[#4a4a5a]">
              <li>
                <a
                  href="https://wa.me/5534999082607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#c9a84c]" />
                  Fale com Especialista: (34) 99908-2607
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@coepartiu.com.br"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  contato@coepartiu.com.br
                </a>
              </li>
              <li className="text-[#7a7a8a] text-xs">
                🌵 Carioca de Atacama
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-[#e8e3dc]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#7a7a8a] flex items-center gap-2">
              <img
                src="/images/carioca-atacama-logo.png"
                alt="Carioca de Atacama"
                className="h-5 w-auto object-contain"
              />
              © {new Date().getFullYear()} COÉ, PARTIU? Travel & Experiences — by Carioca de Atacama
            </p>
            <p className="text-sm text-[#7a7a8a]">
              Feito com ❤️ para viajantes
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
