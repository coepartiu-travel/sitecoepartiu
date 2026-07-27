import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

// Fontes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | COÉ, PARTIU? Travel & Experiences',
    default: 'COÉ, PARTIU? — Sua próxima história começa aqui',
  },
  description: 'Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos. Atacama, Chile, Lua de Mel, Escolas e Grupos.',
  keywords: 'agência de viagens, viagens personalizadas, pacotes de viagem, Atacama, Chile, lua de mel, turismo pedagógico, viagens escolares, viagens em grupo',
  authors: [{ name: 'COÉ, PARTIU? Travel & Experiences' }],
  creator: 'COÉ, PARTIU?',
  publisher: 'COÉ, PARTIU?',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'COÉ, PARTIU? Travel & Experiences',
    title: 'COÉ, PARTIU? — Sua próxima história começa aqui',
    description: 'Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'COÉ, PARTIU? Travel & Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COÉ, PARTIU? — Sua próxima história começa aqui',
    description: 'Viagens e experiências cuidadosamente planejadas para você viver mais e se preocupar menos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-google-verification-code',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <Providers>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
