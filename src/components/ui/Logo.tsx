import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className, size = 'md', showText = false }: LogoProps) {
  const sizes = {
    sm: 'h-12',   // ~1.5cm
    md: 'h-16',   // ~2cm
    lg: 'h-20',   // ~2.5cm
  };

  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <div className={cn('relative', sizes[size])}>
        <Image
          src="/logo-coe-partiu.png"
          alt="COÉ, PARTIU? Travel & Experiences"
          width={size === 'sm' ? 180 : size === 'md' ? 240 : 300}
          height={size === 'sm' ? 48 : size === 'md' ? 64 : 80}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span className="font-display text-lg font-bold text-primary">
            COÉ, PARTIU?
          </span>
          <span className="block text-xs text-text-secondary font-medium tracking-wide">
            Travel & Experiences
          </span>
        </div>
      )}
    </Link>
  );
}
