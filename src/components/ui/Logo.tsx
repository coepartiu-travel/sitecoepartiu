import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <div className={cn('font-display font-bold text-primary', sizes[size])}>
        COÉ, PARTIU?
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span className="block text-xs text-text-secondary font-medium tracking-wide">
            Travel & Experiences
          </span>
        </div>
      )}
    </Link>
  );
}
