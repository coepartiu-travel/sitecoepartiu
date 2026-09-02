'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Atacama & Chile', href: '/atacama' },
  { name: 'Viagens', href: '/viagens' },
  { name: 'Excursões', href: '/excursoes' },
  { name: 'Experiências', href: '/experiencias' },
  { name: 'Sobre Nós', href: '/sobre' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-white/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          <Logo size="md" showText={false} />

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-[#c9a84c] relative group',
                  pathname === item.href
                    ? 'text-[#1a1a2e]'
                    : isScrolled ? 'text-[#4a4a5a]' : 'text-white/80'
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full',
                    pathname === item.href && 'w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/5534999082607?text=Olá! Quero planejar minha viagem com o Carioca de Atacama"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105',
                isScrolled
                  ? 'bg-[#1a1a2e] text-white hover:bg-[#2a2a4e]'
                  : 'bg-[#c9a84c] text-[#0a0a1a] hover:bg-[#b8983e]'
              )}
            >
              PLANEJE SUA VIAGEM
            </a>
          </div>

          <button
            type="button"
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'hover:bg-surface text-[#1a1a2e]' : 'hover:bg-white/10 text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-[#1a1a2e]' : 'bg-white',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="pt-6 pb-8 space-y-2 border-t border-white/10 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-6 py-3 rounded-xl text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-[#c9a84c]/10 text-[#c9a84c]'
                    : isScrolled ? 'text-[#4a4a5a] hover:bg-surface' : 'text-white/80 hover:bg-white/10'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-6">
              <a
                href="https://wa.me/5534999082607?text=Olá! Quero planejar minha viagem com o Carioca de Atacama"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-[#c9a84c] text-[#0a0a1a] font-semibold rounded-xl transition-all duration-300 hover:bg-[#b8983e]"
              >
                PLANEJE SUA VIAGEM
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
