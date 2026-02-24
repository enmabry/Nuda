// Importa el componente TrueFocus para mostrar el título con efecto de desenfoque
import TrueFocus from "@/components/bits/TrueFocus";

// Define las props que recibe el header
interface HeroHeaderProps {
  title: string; // Título principal
  subtitle: string; // Subtítulo
}

// Componente HeroHeader: encabezado animado para la sección principal
export const HeroHeader = ({ title, subtitle }: HeroHeaderProps) => (
  // header con estilos para centrar contenido
  <header className="flex flex-col items-center">
    {/* TrueFocus muestra el título con desenfoque animado */}
    <TrueFocus sentence={title} blurAmount={10} />
    {/* Subtítulo estilizado debajo del título */}
    <p className="mt-6 text-sm tracking-[0.6em] text-nuda-muted uppercase">
      {subtitle}
    </p>
  </header>
);