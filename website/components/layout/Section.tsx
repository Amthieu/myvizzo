import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'cream' | 'dark';
  spacing?: 'compact' | 'standard' | 'spacious' | 'hero';
  id?: string;
  className?: string;
}

export function Section({
  children,
  background = 'white',
  spacing = 'standard',
  id,
  className
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-cream-50',
    dark: 'bg-stone-950 text-cream-50',
  };

  const spacingClasses = {
    compact: 'py-12 lg:py-16',
    standard: 'py-16 lg:py-24',
    spacious: 'py-20 lg:py-32',
    hero: 'py-24 lg:py-40',
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
