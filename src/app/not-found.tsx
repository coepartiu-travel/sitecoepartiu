import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl font-display font-bold text-primary/10 mb-4">404</h1>
          <h2 className="heading-md mb-4">Página não encontrada</h2>
          <p className="text-text-secondary mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button as="a" href="/" variant="primary">
            Voltar para o início
          </Button>
        </div>
      </Container>
    </main>
  );
}
