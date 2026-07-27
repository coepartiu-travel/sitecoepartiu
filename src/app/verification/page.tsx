import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verificação | COÉ, PARTIU?',
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerificationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">COÉ, PARTIU?</h1>
        <p className="mt-2 text-text-secondary">Site verificado com sucesso!</p>
      </div>
    </main>
  );
}
