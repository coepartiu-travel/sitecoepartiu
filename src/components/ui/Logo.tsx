import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <div className={cn('relative', sizes[size])}>
        <Image
          src="/logo-coe-partiu.png"
          alt="COÉ, PARTIU? Travel & Experiences"
          width={size === 'sm' ? 120 : size === 'md' ? 160 : 200}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
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
