'use client';

import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface WhatsAppButtonProps {
  className?: string;
  message?: string;
}

export function WhatsAppButton({ className, message }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '5534999082607';
  const defaultMessage = 'Olá! Conheci a COÉ, PARTIU? Travel & Experiences e gostaria de planejar uma viagem com o Carioca de Atacama.';
  const whatsappMessage = message || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-500',
        'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54]',
        'text-white hover:scale-110 active:scale-95',
        'group',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        className
      )}
      aria-label="Fale com Especialista"
    >
      <Send className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-[#1a1a2e]/90 backdrop-blur-sm text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale com Especialista
      </span>
    </a>
  );
}
