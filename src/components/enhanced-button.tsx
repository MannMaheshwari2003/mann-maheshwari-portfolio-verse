
import React, { useRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { soundManager } from '@/utils/soundManager';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonProps {
  enableSounds?: boolean;
  soundOnHover?: boolean;
  soundOnClick?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    enableSounds = true, 
    soundOnHover = true, 
    soundOnClick = true,
    onMouseEnter,
    onClick,
    ...props 
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSounds && soundOnHover) {
        soundManager.play('hover', 'hover');
      }
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSounds && soundOnClick) {
        soundManager.play('click', 'click');
      }
      
      // Add ripple effect
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
      
      onClick?.(e);
    };

    return (
      <Button
        ref={ref || buttonRef}
        className={cn(
          'transition-all duration-300 hover:shadow-lg hover:shadow-primary/20',
          'hover:scale-105 active:scale-95',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };
