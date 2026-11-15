import { ReactNode, useEffect, useRef } from 'react';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  maxPull?: number;
  fullWidth?: boolean;
}

export function Magnetic({
  children,
  className = '',
  maxPull = 6.5,
  fullWidth = false,
}: MagneticProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const enabledRef = useRef<boolean>(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      enabledRef.current = hoverQuery.matches && !motionQuery.matches;
      if (!enabledRef.current && innerRef.current) {
        innerRef.current.style.transform = '';
      }
    };

    updateCapability();
    hoverQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);

    return () => {
      hoverQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabledRef.current || e.pointerType !== 'mouse' || !innerRef.current) return;
    innerRef.current.style.transition = 'transform 160ms cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabledRef.current || e.pointerType !== 'mouse' || !outerRef.current || !innerRef.current) {
      return;
    }

    const clientX = e.clientX;
    const clientY = e.clientY;
    const outer = outerRef.current;
    const inner = innerRef.current;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = outer.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const offsetX = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const offsetY = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      const clampedX = Math.max(-1, Math.min(1, offsetX));
      const clampedY = Math.max(-1, Math.min(1, offsetY));

      const tx = Number((clampedX * maxPull).toFixed(2));
      const ty = Number((clampedY * maxPull).toFixed(2));

      inner.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (!innerRef.current) return;
    innerRef.current.style.transition = 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)';
    innerRef.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={outerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`${
        fullWidth ? 'block w-full -my-3 py-3' : 'inline-flex -m-3 p-3'
      } ${className}`}
    >
      <div
        ref={innerRef}
        style={{ willChange: 'transform' }}
        className={fullWidth ? 'w-full' : 'inline-flex'}
      >
        {children}
      </div>
    </div>
  );
}
