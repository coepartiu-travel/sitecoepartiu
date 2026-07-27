import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Globe,
  MapPin,
  Calendar,
  Camera,
  Star,
  Award,
  School,
  Briefcase
} from 'lucide-react';

// Dados das escolas
const escolas = [
  {
    titulo: 'Turismo Pedagógico',
    descricao: 'Viagens educativas que combinam aprendizado e diversão.',
    icone: BookOpen,
    imagem: '/images/escolas/pedagogico.jpg',
  },
  {
    titulo: 'Viagens Culturais',
    descricao: 'Imersão em cultura, história e tradições locais.',
    icone: Globe,
    imagem: '/images/escolas/culturais.jpg',
  },
  {
    titulo: 'Viagens Internacionais',
    descricao: 'Experiências globais para ampliar horizontes.',
    icone: MapPin,
    imagem: '/images/escolas/internacional.jpg',
  },
];

// Dados dos grupos
const grupos = [
  {
    titulo: 'Amigos',
    descricao: 'Viagens inesquecíveis com o melhor da vida.',
    icone: Users,
    imagem: '/images/grupos/amigos.jpg',
  },
  {
    titulo: 'Empresas',
    descricao: 'Experiências corporativas e de integração.',
    icone: Briefcase,
    imagem: '/images/grupos/empresas.jpg',
  },
  {
    titulo: 'Associações',
    descricao: 'Viagens planejadas para grupos organizados.',
    icone: Users,
    imagem: '/images/grupos/associacoes.jpg',
  },
];

export default function EscolasGruposPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-hero text-white overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Escolas & Grupos</Badge>
            <h1 className="heading-lg text-balance text-white">
              Viagens que também ensinam
            </h1>
            <p className="text-xl text-white/80 mt-4 max-w-2xl">
              Turismo pedagógico, viagens educacionais e experiências em grupo 
              que transformam e inspiram.
            </p>
          </div>
        </Container>
      </section>

      {/* Escolas */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Turismo Educacional</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Viagens que ensinam
            </h2>
            <p className="text-text-secondary">
              Experiências educacionais que vão além da sala de aula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {escolas.map((item) => (
              <Card key={item.titulo} hover className="overflow-hidden">
                <div className="relative h-48 w-full bg-primary/5">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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

          <div className="mt-10 text-center">
            <Button as="a" href="/planeje" variant="primary" size="lg">
              SOLICITAR PROPOSTA PARA MINHA ESCOLA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Grupos */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Grupos</Badge>
            <h2 className="heading-md mb-4 text-balance">
              Quando a viagem é melhor compartilhada
            </h2>
            <p className="text-text-secondary">
              Experiências coletivas que fortalecem laços e criam memórias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grupos.map((item) => (
              <Card key={item.titulo} hover className="overflow-hidden">
                <div className="relative h-48 w-full bg-primary/5">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
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

          <div className="mt-10 text-center">
            <Button as="a" href="/planeje" variant="primary" size="lg">
              ORGANIZAR MEU GRUPO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="heading-md text-balance">
              Pronto para uma viagem que ensina?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Planejamos experiências educacionais e em grupo com todo cuidado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/planeje" variant="secondary" size="lg">
                SOLICITAR PROPOSTA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
