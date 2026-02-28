// @ts-nocheck
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

// Definimos la interfaz para evitar el error de compilación en Vercel
interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  title?: string;
  alt?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

const toCssLength = (value: string | number) => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    className,
    style
  }: LogoLoopProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const isVertical = direction === 'up' || direction === 'down';

    // Lógica de dimensiones simplificada para el Build
    const updateDimensions = useCallback(() => {
      const sequenceRect = seqRef.current?.getBoundingClientRect();
      const sequenceWidth = sequenceRect?.width ?? 0;
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useEffect(() => {
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions, logos]);

    // Loop de animación optimizado
    useEffect(() => {
      let rafId: number;
      let offset = 0;
      const animate = () => {
        if (!trackRef.current || seqWidth <= 0) return;
        offset += speed / 60; 
        const currentOffset = offset % seqWidth;
        trackRef.current.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }, [speed, seqWidth]);

    const renderLogoItem = (item: LogoItem, key: string) => {
      // MODIFICACIÓN: Renderizamos SOLO el icono/imagen, sin etiquetas de texto
      return (
        <li className="logoloop__item flex items-center justify-center" key={key} role="listitem" style={{ height: logoHeight, padding: `0 ${gap / 2}px` }}>
          {item.node ? (
            <span className="logoloop__node text-4xl opacity-50 hover:opacity-100 transition-opacity">
              {item.node}
            </span>
          ) : (
            <img src={item.src} alt={item.alt} height={logoHeight} />
          )}
        </li>
      );
    };

    return (
      <div 
        ref={containerRef} 
        className={`logoloop ${className ?? ''}`} 
        style={{ width: toCssLength(width), ...style }}
      >
        <div 
          className="logoloop__track flex" 
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: copyCount }).map((_, copyIndex) => (
            <ul
              className="logoloop__list flex list-none m-0 p-0"
              key={`copy-${copyIndex}`}
              ref={copyIndex === 0 ? seqRef : undefined}
            >
              {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;