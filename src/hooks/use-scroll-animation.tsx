
import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  rootMargin?: string;
}

export const useScrollAnimation = ({ 
  threshold = 0.1, 
  triggerOnce = true,
  delay = 0,
  rootMargin = '0px'
}: UseScrollAnimationProps = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    delay,
    rootMargin,
  });

  return { ref, inView };
};

// Multiple animation variants for different effects
export const useStaggeredScrollAnimation = (count: number, baseDelay: number = 100) => {
  const animations = [];
  for (let i = 0; i < count; i++) {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true,
      delay: baseDelay * i,
    });
    animations.push({ ref, inView });
  }
  return animations;
};
