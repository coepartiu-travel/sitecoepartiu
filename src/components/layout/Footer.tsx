import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Instagram, Youtube, Facebook, Send } from 'lucide-react';

const navigation = {
  principal: [
    { name: 'Início', href: '/' },
    { name: 'Viagens', href: '/viagens' },
    { name: 'Experiências', href: '/experiencias' },
    { name: 'Atacama & Chile', href: '/atacama' },
    { name: 'Lua de Mel', href: '/lua-de-mel' },
    { name: 'Escolas & Grupos', href: '/escolas-grupos' },
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
    name: 'WhatsApp',
    href: 'https://wa.me/5534999082607?text=Olá! Conheci a COÉ, PARTIU? Travel & Experiences e gostaria de planejar uma viagem.',
    icon: Send,
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
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
            <p className="mt-4 text-text-secondary text-sm max-w-xs">
              Sua próxima história começa aqui. Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos.
            </p>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação Principal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Navegação</h3>
            <ul className="space-y-3">
              {navigation.principal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Suporte</h3>
            <ul className="space-y-3">
              {navigation.suporte.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="https://wa.me/5534999082607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: (34) 99908-2607
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@coepartiu.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@coepartiu.com.br
                </a>
              </li>
              <li className="text-text-tertiary text-xs">
                São Paulo - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-tertiary">
              © {new Date().getFullYear()} COÉ, PARTIU? Travel & Experiences. Todos os direitos reservados.
            </p>
            <p className="text-sm text-text-tertiary">
              Feito com ❤️ para viajantes
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
