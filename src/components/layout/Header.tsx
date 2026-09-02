'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white shadow-sm border-b border-[#e8e3dc]/50'
      )}
    >
      <nav className="container-custom py-3" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* LOGO COÉ, PARTIU? */}
          <Logo size="md" showText={false} />

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 relative group',
                    'text-[#1a1a2e]',
                    isActive && 'text-[#c9a84c]',
                    'hover:text-[#c9a84c]'
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[2px] bg-[#c9a84c] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA + BADGE CARIOCA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a2e]/5 rounded-full border border-[#c9a84c]/20">
              <img
                src="/images/carioca-atacama-logo.png"
                alt="Carioca de Atacama"
                className="h-5 w-auto object-contain"
              />
              <span className="text-[10px] font-semibold text-[#c9a84c] tracking-wide uppercase">Carioca</span>
            </div>
            <a
              href="https://wa.me/5534999082607?text=Olá! Quero planejar minha viagem com o Carioca de Atacama"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a0a1a] hover:bg-[#b8983e]"
            >
              <span>PLANEJE SUA VIAGEM</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none hover:bg-[#f5f0eb] text-[#1a1a2e]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300 bg-[#1a1a2e]',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300 bg-[#1a1a2e]',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 transition-all duration-300 bg-[#1a1a2e]',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="pt-4 pb-6 space-y-1 border-t border-[#e8e3dc] mt-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-[#c9a84c]/10 text-[#c9a84c]'
                      : 'text-[#1a1a2e] hover:bg-[#f5f0eb]'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e]/5 rounded-full border border-[#c9a84c]/20 w-fit">
                <img
                  src="/images/carioca-atacama-logo.png"
                  alt="Carioca de Atacama"
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[10px] font-semibold text-[#c9a84c] tracking-wide uppercase">Carioca de Atacama</span>
              </div>
            </div>
            <div className="pt-4 px-4">
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
