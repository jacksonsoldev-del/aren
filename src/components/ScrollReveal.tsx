import { ReactNode } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal = ({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const getTransformStart = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'fade': return 'translateY(0)';
      default: return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransformStart(),
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
