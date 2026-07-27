import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  MapPin,
  Plane,
  Hotel,
  Users,
  Compass,
  Globe,
  Sun,
  Mountain,
  TreePine,
  Building,
  UtensilsCrossed,
  Camera,
  Star
} from 'lucide-react';

// Dados dos destinos
const destinos = [
  {
    titulo: 'Brasil',
    descricao: 'Praias paradisíacas, florestas amazônicas e cidades vibrantes. Descubra a diversidade do Brasil.',
    imagem: '/images/destinos/brasil.jpg',
    icone: Sun,
    destaque: true,
    categorias: ['Praia', 'Cultura', 'Natureza'],
    href: '/viagens/brasil',
  },
  {
    titulo: 'Internacional',
    descricao: 'Destinos incríveis na América Latina, Europa e além. Explore o mundo com conforto e segurança.',
    imagem: '/images/destinos/internacional.jpg',
    icone: Globe,
    destaque: true,
    categorias: ['Cultura', 'Aventura', 'Gastronomia'],
    href: '/viagens/internacional',
  },
  {
    titulo: 'Pacotes',
    descricao: 'Viagens completas com tudo planejado para você. Escolha seu destino e relaxe.',
    imagem: '/images/destinos/pacotes.jpg',
    icone: Plane,
    destaque: false,
    categorias: ['Completo', 'Conforto', 'Praticidade'],
    href: '/viagens/pacotes',
  },
  {
    titulo: 'Resorts',
    descricao: 'Luxo e conforto em resorts incríveis. Experiências exclusivas de hospedagem.',
    imagem: '/images/destinos/resorts.jpg',
    icone: Hotel,
    destaque: false,
    categorias: ['Luxo', 'Conforto', 'Lazer'],
    href: '/viagens/resorts',
  },
  {
    titulo: 'Família',
    descricao: 'Viagens inesquecíveis para toda a família. Momentos que ficam para sempre.',
    imagem: '/images/destinos/familia.jpg',
    icone: Users,
    destaque: true,
    categorias: ['Família', 'Lazer', 'Aventura'],
    href: '/viagens/familia',
  },
  {
    titulo: 'Cruzeiros',
    descricao: 'Navegue pelos mares em cruzeiros memoráveis. Conforto e diversão a bordo.',
    imagem: '/images/destinos/cruzeiros.jpg',
    icone: Compass,
    destaque: false,
    categorias: ['Luxo', 'Aventura', 'Lazer'],
    href: '/viagens/cruzeiros',
  },
  {
    titulo: 'Grupos',
    descricao: 'Viaje com amigos, empresas ou associações. Experiências compartilhadas.',
    imagem: '/images/destinos/grupos.jpg',
    icone: Users,
    destaque: false,
    categorias: ['Grupo', 'Empresa', 'Social'],
    href: '/viagens/grupos',
  },
];

export default function ViagensPage() {
  return (
    <main>
      {/* Hero da Página */}
      <section className="relative py-20 md:py-28 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/viagens-hero.jpg"
            alt="Viagens"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Viagens</Badge>
            <h1 className="heading-lg text-balance text-white">
              Para onde a vida está te chamando?
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-2xl">
              Descubra destinos incríveis e viva experiências únicas em cada viagem.
            </p>
          </div>
        </Container>
      </section>

      {/* Grade de Destinos */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((destino) => (
              <Link key={destino.titulo} href={destino.href}>
                <Card hover className="h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={destino.imagem}
                      alt={destino.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {destino.destaque && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">Destaque</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <destino.icone className="w-5 h-5 text-secondary" />
                      <h3 className="font-semibold text-xl">{destino.titulo}</h3>
                    </div>
                    <p className="text-text-secondary text-sm mb-4">
                      {destino.descricao}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {destino.categorias.map((categoria) => (
                        <Badge key={categoria} variant="primary" className="text-xs">
                          {categoria}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button as="a" href="/planeje" variant="primary" size="lg">
              QUERO PLANEJAR MINHA VIAGEM
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
