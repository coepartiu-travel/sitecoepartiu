import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={cn('container-custom', className)}>
      {children}
    </Component>
  );
}
