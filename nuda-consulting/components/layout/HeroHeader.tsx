// components/layout/HeroHeader.tsx
import TrueFocus from "@/components/bits/TrueFocus";

interface HeroHeaderProps {
  title: string;
  subtitle: string;
}

export const HeroHeader = ({ title, subtitle }: HeroHeaderProps) => (
  <header className="flex flex-col items-center px-4 text-center">
    {/* Asegúrate de que dentro de TrueFocus la clase del texto sea responsiva. 
        Si TrueFocus te permite pasar clases, usa: "text-6xl md:text-9xl"
    */}
    <div className="scale-[0.8] md:scale-100 transition-transform duration-500">
      <TrueFocus 
        sentence={title} 
        blurAmount={8} // Un poco menos de desenfoque para que sea legible en pantallas pequeñas
        borderColor="#a31d1d"
      />
    </div>

    {/* Subtítulo: 
        - Reducimos el tracking en móvil para que no se corte.
        - Reducimos el tamaño de fuente (text-[10px] en móvil).
    */}
    <p className="mt-4 md:mt-6 text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.6em] text-nuda-muted uppercase font-mono">
      {subtitle}
    </p>
  </header>
);