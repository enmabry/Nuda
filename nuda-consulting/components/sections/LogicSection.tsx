import { ArchitecturalTitle } from "@/components/ui/ArchitecturalTitle";
import { LogicGrid } from "@/components/ui/LogicGrid";

export const LogicSection = () => {
  return (
    <section id="logica" className="min-h-screen w-full flex flex-col items-center justify-center bg-black py-20 overflow-hidden">
      
      {/* 1. El Foco Principal */}
      <ArchitecturalTitle />
      
      {/* 2. El Desglose Técnico (Blueprint) */}
      <LogicGrid />
      
    </section>
  );
};