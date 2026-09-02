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
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
  };

  const widths = {
    sm: 140,
    md: 180,
    lg: 220,
  };

  return (
    <Link href="/" className={cn('flex items-center group', className)}>
      <div className={cn('relative transition-transform duration-300 group-hover:scale-105', sizes[size])}>
        <Image
          src="/logo-coe-partiu.png"
          alt="COÉ, PARTIU? Travel & Experiences"
          width={widths[size]}
          height={size === 'sm' ? 40 : size === 'md' ? 48 : 56}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
