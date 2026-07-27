import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { 
  ArrowRight,
  Heart,
  Users,
  Globe,
  Award,
  Star,
  MapPin,
  Compass
} from 'lucide-react';

// Valores da empresa
const valores = [
  {
    titulo: 'Humanidade',
    descricao: 'Atendimento próximo e personalizado para cada viajante.',
    icone: Heart,
  },
  {
    titulo: 'Excelência',
    descricao: 'Curadoria cuidadosa de cada experiência oferecida.',
    icone: Star,
  },
  {
    titulo: 'Segurança',
    descricao: 'Parceiros confiáveis e viagens planejadas com responsabilidade.',
    icone: Award,
  },
  {
    titulo: 'Descoberta',
    descricao: 'Incentivamos a exploração e o aprendizado em cada viagem.',
    icone: Compass,
  },
];

export default function SobrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-primary text-white overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Sobre Nós</Badge>
            <h1 className="heading-lg text-balance text-white">
              Quem somos
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-2xl">
              COÉ, PARTIU? Travel & Experiences — uma nova geração de turismo.
            </p>
          </div>
        </Container>
      </section>

      {/* História */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Nossa História</Badge>
              <h2 className="heading-md mb-4">
                Uma nova forma de viajar
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  A COÉ, PARTIU? nasceu do desejo de transformar a forma como as pessoas 
                  viajam. Não queremos ser apenas mais uma agência de viagens — queremos 
                  ser seus parceiros na criação de histórias inesquecíveis.
                </p>
                <p>
                  Com uma abordagem moderna e humana, selecionamos cuidadosamente cada 
                  destino, experiência e parceiro para garantir que sua viagem seja 
                  única e especial.
                </p>
                <p>
                  Nossa paixão é conectar pessoas a lugares, culturas e experiências 
                  que vão além do turismo convencional.
                </p>
              </div>
              <div className="mt-6">
                <Button as="a" href="/planeje" variant="primary">
                  PLANEJAR MINHA VIAGEM
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-large">
              <Image
                src="/images/sobre/historia.jpg"
                alt="Sobre a COÉ, PARTIU?"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Nossos Valores</Badge>
            <h2 className="heading-md mb-4 text-balance">
              O que nos move
            </h2>
            <p className="text-text-secondary">
              Princípios que guiam cada viagem que planejamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((item) => (
              <Card key={item.titulo} className="text-center h-full">
                <div className="p-6">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary mx-auto mb-4 w-fit">
                    <item.icone className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                  <p className="text-text-secondary text-sm">{item.descricao}</p>
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
              Vamos criar sua próxima história?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Você escolhe o destino. A gente cuida do caminho.
            </p>
            <Button as="a" href="/planeje" variant="secondary" size="lg">
              COMEÇAR AGORA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
