import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  MapPin,
  Sun,
  Moon,
  Mountain,
  Camera,
  Star,
  Clock,
  Calendar,
  Users,
  Award,
  Compass
} from 'lucide-react';

// Dados dos atrativos
const atrativos = [
  {
    titulo: 'San Pedro de Atacama',
    descricao: 'O coração do deserto, com sua arquitetura colonial e atmosfera mágica.',
    icone: MapPin,
    imagem: '/images/atacama/san-pedro.jpg',
  },
  {
    titulo: 'Valle de la Luna',
    descricao: 'Formações rochosas impressionantes e pores do sol inesquecíveis.',
    icone: Sun,
    imagem: '/images/atacama/valle-luna.jpg',
  },
  {
    titulo: 'Valle de la Muerte',
    descricao: 'Paisagens surreais com dunas e formações geológicas únicas.',
    icone: Mountain,
    imagem: '/images/atacama/valle-muerte.jpg',
  },
  {
    titulo: 'Geysers del Tatio',
    descricao: 'O campo de gêiseres mais alto do mundo, um espetáculo da natureza.',
    icone: Camera,
    imagem: '/images/atacama/geysers.jpg',
  },
  {
    titulo: 'Lagunas Altiplánicas',
    descricao: 'Lagos de águas cristalinas em meio à imensidão do deserto.',
    icone: Compass,
    imagem: '/images/atacama/lagunas.jpg',
  },
  {
    titulo: 'Salar de Atacama',
    descricao: 'O maior salar do Chile, com flamengos e paisagens brancas.',
    icone: Star,
    imagem: '/images/atacama/salar.jpg',
  },
];

// Dados dos diferenciais
const diferenciais = [
  {
    titulo: 'Astronomia',
    descricao: 'Céu mais limpo do mundo para observar as estrelas.',
    icone: Star,
  },
  {
    titulo: 'Altitude',
    descricao: 'Experiência única a mais de 4.000 metros de altura.',
    icone: Mountain,
  },
  {
    titulo: 'Cultura',
    descricao: 'Herança indígena e arquitetura colonial preservada.',
    icone: Award,
  },
  {
    titulo: 'Natureza',
    descricao: 'Paisagens que parecem de outro planeta.',
    icone: Camera,
  },
];

export default function AtacamaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/atacama/hero.jpg"
            alt="Atacama"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Destino Exclusivo</Badge>
            <h1 className="heading-lg text-balance text-white">
              ATACAMA
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Uma experiência que você nunca esquece.
            </p>
            <p className="text-white/80 mt-2 max-w-2xl">
              O deserto mais árido do mundo, paisagens surreais e céus estrelados 
              que vão transformar sua visão de viagem.
            </p>
            <div className="mt-8">
              <Button as="a" href="/planeje" variant="secondary" size="lg">
                PLANEJAR MEU ATACAMA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Atrativos */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">O que explorar</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Descubra as maravilhas do Atacama
            </h2>
            <p className="text-text-secondary">
              Cada lugar conta uma história única no deserto mais fascinante do mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atrativos.map((item) => (
              <Card key={item.titulo} hover className="overflow-hidden">
                <div className="relative h-48 w-full bg-primary/5">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icone className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-lg">{item.titulo}</h3>
                  </div>
                  <p className="text-text-secondary text-sm">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Por que Atacama</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Uma experiência única no mundo
            </h2>
            <p className="text-text-secondary">
              Motivos que fazem do Atacama um destino incomparável.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diferenciais.map((item) => (
              <Card key={item.titulo} className="text-center">
                <div className="p-6">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary mx-auto mb-3 w-fit">
                    <item.icone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.titulo}</h3>
                  <p className="text-text-secondary text-xs mt-1">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-balance">
              Pronto para o Atacama?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Viva uma experiência que vai mudar sua forma de ver o mundo.
            </p>
            <Button as="a" href="/planeje" variant="secondary" size="lg">
              PLANEJAR MINHA VIAGEM AO ATACAMA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
