import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
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
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá! Conheci a COÉ, PARTIU? Travel & Experiences e gostaria de planejar uma viagem.'
    )}`,
    icon: Send,
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-text-light">
      <Container className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo size="lg" showText={false} />
            <p className="mt-4 text-primary-200 text-sm max-w-xs">
              Sua próxima história começa aqui. Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos.
            </p>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação Principal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigation.principal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              {navigation.suporte.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@coepartiu.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@coepartiu.com.br
                </a>
              </li>
              <li className="text-primary-300 text-xs">
                São Paulo - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-primary-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-300">
              © {new Date().getFullYear()} COÉ, PARTIU? Travel & Experiences. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-400">
              Feito com ❤️ para viajantes
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
