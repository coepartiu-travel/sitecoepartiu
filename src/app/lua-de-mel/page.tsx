import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  Heart,
  Hotel,
  Mountain,
  Sun,
  Camera,
  Wine,
  Sparkles,
  Star,
  Calendar,
  Users,
  Umbrella
} from 'lucide-react';

// Destinos de lua de mel
const destinos = [
  {
    titulo: 'Atacama Romântico',
    descricao: 'Noites estreladas e paisagens surreais para um amor único.',
    icone: Star,
    imagem: '/images/lua-de-mel/atacama.jpg',
  },
  {
    titulo: 'Resorts Exclusivos',
    descricao: 'Luxo e privacidade em resorts paradisíacos.',
    icone: Hotel,
    imagem: '/images/lua-de-mel/resorts.jpg',
  },
  {
    titulo: 'Praias do Brasil',
    descricao: 'Destinos incríveis para curtir o amor à beira-mar.',
    icone: Sun,
    imagem: '/images/lua-de-mel/praias.jpg',
  },
  {
    titulo: 'Destinos Internacionais',
    descricao: 'Viva o amor em cenários internacionais inesquecíveis.',
    icone: Mountain,
    imagem: '/images/lua-de-mel/internacional.jpg',
  },
];

// Experiências
const experiencias = [
  {
    titulo: 'Jantar Romântico',
    descricao: 'Momentos a dois em locais exclusivos.',
    icone: Wine,
  },
  {
    titulo: 'Fotografias Profissionais',
    descricao: 'Registre cada momento especial.',
    icone: Camera,
  },
  {
    titulo: 'Pacotes Especiais',
    descricao: 'Benefícios exclusivos para casais.',
    icone: Sparkles,
  },
  {
    titulo: 'Atividades a Dois',
    descricao: 'Experiências pensadas para o casal.',
    icone: Heart,
  },
];

export default function LuaDeMelPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/lua-de-mel/hero.jpg"
            alt="Lua de Mel"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Romance</Badge>
            <h1 className="heading-lg text-balance text-white">
              A viagem que começa uma nova história
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-2xl">
              Lua de mel dos sonhos, com momentos inesquecíveis para o início da sua jornada a dois.
            </p>
            <div className="mt-8">
              <Button as="a" href="/planeje" variant="secondary" size="lg">
                PLANEJAR MINHA LUA DE MEL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Destinos */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Destinos</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Destinos perfeitos para o amor
            </h2>
            <p className="text-text-secondary">
              Lugares mágicos para celebrar seu amor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinos.map((item) => (
              <Card key={item.titulo} hover className="overflow-hidden">
                <div className="relative h-56 w-full bg-primary/5">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <item.icone className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">{item.titulo}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Experiências */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Experiências Exclusivas</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Momentos pensados para vocês
            </h2>
            <p className="text-text-secondary">
              Cada detalhe planejado para tornar sua lua de mel inesquecível.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experiencias.map((item) => (
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
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="heading-md text-balance">
              Comece sua história com uma viagem dos sonhos
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Planejamos cada detalhe para o início da sua jornada a dois.
            </p>
            <Button as="a" href="/planeje" variant="secondary" size="lg">
              PLANEJAR MINHA LUA DE MEL
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
