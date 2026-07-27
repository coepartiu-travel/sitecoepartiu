import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  Compass,
  Heart,
  Camera,
  Globe,
  Star,
  Award,
  Mountain,
  TreePine,
  UtensilsCrossed,
  Building,
  Music,
  Palmtree,
  Sparkles
} from 'lucide-react';

// Dados das experiências
const experiencias = [
  {
    titulo: 'Aventura',
    descricao: 'Trilhas emocionantes, escaladas desafiadoras e esportes radicais em meio à natureza exuberante.',
    icone: Compass,
    cor: 'bg-orange-100 text-orange-600',
    imagem: '/images/experiencias/aventura.jpg',
  },
  {
    titulo: 'Romance',
    descricao: 'Momentos inesquecíveis para casais, com paisagens deslumbrantes e atmosferas românticas.',
    icone: Heart,
    cor: 'bg-red-100 text-red-600',
    imagem: '/images/experiencias/romance.jpg',
  },
  {
    titulo: 'Natureza',
    descricao: 'Contato profundo com a natureza em sua forma mais pura e preservada.',
    icone: TreePine,
    cor: 'bg-green-100 text-green-600',
    imagem: '/images/experiencias/natureza.jpg',
  },
  {
    titulo: 'Cultura',
    descricao: 'Museus fascinantes, história viva e tradições locais que enriquecem sua viagem.',
    icone: Building,
    cor: 'bg-purple-100 text-purple-600',
    imagem: '/images/experiencias/cultura.jpg',
  },
  {
    titulo: 'Gastronomia',
    descricao: 'Sabores autênticos, culinária regional e experiências gastronômicas inesquecíveis.',
    icone: UtensilsCrossed,
    cor: 'bg-yellow-100 text-yellow-600',
    imagem: '/images/experiencias/gastronomia.jpg',
  },
  {
    titulo: 'Família',
    descricao: 'Atividades para todas as idades, diversão garantida e momentos em família.',
    icone: Users,
    cor: 'bg-blue-100 text-blue-600',
    imagem: '/images/experiencias/familia.jpg',
  },
  {
    titulo: 'Luxo',
    descricao: 'O melhor da hospitalidade, conforto exclusivo e serviços premium.',
    icone: Award,
    cor: 'bg-amber-100 text-amber-600',
    imagem: '/images/experiencias/luxo.jpg',
  },
  {
    titulo: 'Educação',
    descricao: 'Viagens que ensinam, com conteúdo cultural e pedagógico enriquecedor.',
    icone: Sparkles,
    cor: 'bg-indigo-100 text-indigo-600',
    imagem: '/images/experiencias/educacao.jpg',
  },
];

export default function ExperienciasPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/experiencias-hero.jpg"
            alt="Experiências"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Experiências</Badge>
            <h1 className="heading-lg text-balance text-white">
              Não é sobre onde você vai. É sobre o que você vai viver.
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-2xl">
              Experiências únicas que transformam sua viagem em memórias eternas.
            </p>
          </div>
        </Container>
      </section>

      {/* Grade de Experiências */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencias.map((item) => (
              <Card key={item.titulo} hover className="h-full text-center">
                <div className="p-6">
                  <div className={`p-4 rounded-full ${item.cor} mx-auto mb-4 w-fit`}>
                    <item.icone className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                  <p className="text-text-secondary text-sm">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button as="a" href="/planeje" variant="primary" size="lg">
              QUERO VIVER ESSA EXPERIÊNCIA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
