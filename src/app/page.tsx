import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  MapPin, 
  Compass, 
  Heart, 
  Users, 
  Globe, 
  Camera, 
  Star,
  ArrowRight,
  CheckCircle,
  Plane,
  Hotel,
  Shield,
  Award
} from 'lucide-react';

// Dados das viagens
const viagens = [
  {
    titulo: 'Brasil',
    descricao: 'Praias paradisíacas, florestas amazônicas e cidades vibrantes.',
    icone: MapPin,
    href: '/viagens',
  },
  {
    titulo: 'Internacional',
    descricao: 'Destinos incríveis na América Latina, Europa e além.',
    icone: Globe,
    href: '/viagens',
  },
  {
    titulo: 'Pacotes',
    descricao: 'Viagens completas com tudo planejado para você.',
    icone: Plane,
    href: '/viagens',
  },
  {
    titulo: 'Resorts',
    descricao: 'Luxo e conforto em resorts incríveis.',
    icone: Hotel,
    href: '/viagens',
  },
  {
    titulo: 'Família',
    descricao: 'Viagens inesquecíveis para toda a família.',
    icone: Users,
    href: '/viagens',
  },
  {
    titulo: 'Cruzeiros',
    descricao: 'Navegue pelos mares em cruzeiros memoráveis.',
    icone: Compass,
    href: '/viagens',
  },
  {
    titulo: 'Grupos',
    descricao: 'Viaje com amigos, empresas ou associações.',
    icone: Users,
    href: '/escolas-grupos',
  },
];

// Dados das experiências
const experiencias = [
  {
    titulo: 'Aventura',
    descricao: 'Trilhas, escaladas e esportes radicais.',
    icon: Compass,
  },
  {
    titulo: 'Romance',
    descricao: 'Experiências perfeitas para casais.',
    icon: Heart,
  },
  {
    titulo: 'Natureza',
    descricao: 'Contato com a natureza em sua forma mais pura.',
    icon: Camera,
  },
  {
    titulo: 'Cultura',
    descricao: 'Museus, história e tradições locais.',
    icon: Globe,
  },
  {
    titulo: 'Gastronomia',
    descricao: 'Sabores incríveis e experiências culinárias.',
    icon: Star,
  },
  {
    titulo: 'Luxo',
    descricao: 'O melhor da hospitalidade e conforto.',
    icon: Award,
  },
];

// Diferenciais
const diferenciais = [
  {
    titulo: 'Curadoria',
    descricao: 'Opções selecionadas de acordo com seu perfil e preferências.',
    icon: Star,
  },
  {
    titulo: 'Atendimento Humano',
    descricao: 'Você fala com pessoas que entendem sua viagem.',
    icon: Heart,
  },
  {
    titulo: 'Segurança',
    descricao: 'Parceiros e fornecedores cuidadosamente selecionados.',
    icon: Shield,
  },
  {
    titulo: 'Experiência',
    descricao: 'Pensamos além do destino, criamos memórias.',
    icon: Camera,
  },
];

// Como funciona
const passos = [
  {
    numero: '01',
    titulo: 'Você conta seu sonho',
    descricao: 'Compartilhe suas ideias e desejos para a viagem.',
  },
  {
    numero: '02',
    titulo: 'A gente entende seu perfil',
    descricao: 'Analisamos seus gostos e preferências únicas.',
  },
  {
    numero: '03',
    titulo: 'Criamos sua proposta',
    descricao: 'Desenvolvemos um roteiro personalizado para você.',
  },
  {
    numero: '04',
    titulo: 'Você parte',
    descricao: 'Sua história começa e nós cuidamos de tudo.',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section - SEM IMAGEM */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 z-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

        {/* Conteúdo do Hero */}
        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Badge variant="secondary">COÉ, PARTIU? Travel & Experiences</Badge>
            </div>
            
            <h1 className="heading-xl text-balance mb-6 text-white">
              Sua próxima história começa aqui.
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                as="a" 
                href="/planeje" 
                variant="secondary" 
                size="lg"
              >
                PLANEJE SUA VIAGEM
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                as="a" 
                href="/experiencias" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                CONHEÇA NOSSAS EXPERIÊNCIAS
              </Button>
            </div>

            {/* Indicadores de confiança */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm text-white/80">+100 viagens planejadas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm text-white/80">Destinos exclusivos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm text-white/80">Atendimento personalizado</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Seção Viagens */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Destinos</Badge>
            <h2 className="heading-lg mb-4 text-balance">
              Para onde a vida está te chamando?
            </h2>
            <p className="text-text-secondary text-lg">
              Descubra os destinos incríveis que preparamos para você.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {viagens.map((item) => (
              <Link key={item.titulo} href={item.href}>
                <Card hover className="h-full">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                      <item.icone className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                    <p className="text-text-secondary text-sm">{item.descricao}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button as="a" href="/viagens" variant="outline" size="lg">
              ENCONTRAR MINHA VIAGEM
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Seção Experiências */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="accent" className="mb-4">Experiências</Badge>
            <h2 className="heading-lg mb-4 text-balance">
              Não é sobre onde você vai. É sobre o que você vai viver.
            </h2>
            <p className="text-text-secondary text-lg">
              Experiências únicas que vão transformar sua viagem em memórias eternas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {experiencias.map((item) => (
              <Card key={item.titulo} className="text-center hover:shadow-medium transition-all duration-300">
                <div className="p-4">
                  <div className="p-3 rounded-full bg-secondary/10 text-secondary mx-auto mb-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-sm">{item.titulo}</h3>
                  <p className="text-text-tertiary text-xs mt-1">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção Como Funciona */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="primary" className="mb-4">Como Funciona</Badge>
            <h2 className="heading-lg mb-4 text-balance">
              Do sonho à partida em 4 passos
            </h2>
            <p className="text-text-secondary text-lg">
              Um processo simples e transparente para realizar sua viagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((passo, index) => (
              <div key={passo.numero} className="relative">
                {index < passos.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-secondary/20 -translate-y-1/2" />
                )}
                <Card className="text-center h-full">
                  <div className="p-6">
                    <div className="text-5xl font-display font-bold text-secondary/20 mb-4">
                      {passo.numero}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{passo.titulo}</h3>
                    <p className="text-text-secondary text-sm">{passo.descricao}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção Por que COÉ, PARTIU? */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Diferenciais</Badge>
            <h2 className="heading-lg mb-4 text-balance">
              Por que COÉ, PARTIU?
            </h2>
            <p className="text-text-secondary text-lg">
              Motivos para escolher quem entende de viagens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item) => (
              <Card key={item.titulo} className="text-center h-full">
                <div className="p-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                  <p className="text-text-secondary text-sm">{item.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="section-padding-lg bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-balance mb-4">
              Pronto para sua próxima história?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Você escolhe o destino. A gente cuida do caminho.
            </p>
            <Button 
              as="a" 
              href="/planeje" 
              variant="secondary" 
              size="lg"
            >
              COMEÇAR A PLANEJAR
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
