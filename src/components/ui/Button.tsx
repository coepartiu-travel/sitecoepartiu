import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as = 'button',
  href,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#1a1a2e] text-white hover:bg-[#2a2a4e] focus:ring-[#1a1a2e]/50',
    secondary: 'bg-[#c9a84c] text-[#0a0a1a] hover:bg-[#b8983e] focus:ring-[#c9a84c]/50',
    outline: 'border-2 border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white focus:ring-[#1a1a2e]/50',
    ghost: 'text-[#1a1a2e] hover:bg-[#1a1a2e]/10 focus:ring-[#1a1a2e]/50',
    link: 'text-[#1a1a2e] hover:underline focus:ring-[#1a1a2e]/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as any)}>
      {children}
    </button>
  );
}
