import { ReactNode, useEffect, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = '', maxTilt = 5 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const canTiltRef = useRef<boolean>(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      canTiltRef.current = hoverQuery.matches && !motionQuery.matches;
      if (!canTiltRef.current && cardRef.current) {
        cardRef.current.style.transform = '';
        cardRef.current.style.boxShadow = '';
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
    if (!canTiltRef.current || e.pointerType !== 'mouse' || !cardRef.current) return;
    cardRef.current.style.transition =
      'transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms ease-out, border-color 200ms ease-out';
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canTiltRef.current || e.pointerType !== 'mouse' || !cardRef.current) return;

    const el = cardRef.current;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const normalizedX = (clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (clientY - rect.top) / rect.height - 0.5;

      const rotateY = Number((normalizedX * 2 * maxTilt).toFixed(2));
      const rotateX = Number((-normalizedY * 2 * maxTilt).toFixed(2));

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      el.style.boxShadow =
        '0 18px 36px -14px rgba(24, 62, 67, 0.16), 0 6px 16px -4px rgba(210, 180, 122, 0.14)';
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (!cardRef.current) return;
    cardRef.current.style.transition =
      'transform 420ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 420ms cubic-bezier(0.16, 1, 0.3, 1), border-color 240ms ease-out';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    cardRef.current.style.boxShadow = '';
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      className={className}
    >
      {children}
    </div>
  );
}
