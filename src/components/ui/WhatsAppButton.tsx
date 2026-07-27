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
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '5534999082607';
  const defaultMessage = 'Olá! Conheci a COÉ, PARTIU? Travel & Experiences e gostaria de planejar uma viagem.';
  
  const whatsappMessage = message || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-large transition-all duration-300',
        'bg-green-500 hover:bg-green-600 text-white',
        'hover:scale-105 active:scale-95',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        className
      )}
      aria-label="WhatsApp"
    >
      <Send className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
    </a>
  );
}
