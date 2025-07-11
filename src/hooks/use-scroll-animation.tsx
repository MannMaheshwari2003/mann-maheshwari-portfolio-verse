import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = ({ 
  threshold = 0.1, 
  triggerOnce = true,
  delay = 0 
}: UseScrollAnimationProps = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    delay,
  });

  return { ref, inView };
};
