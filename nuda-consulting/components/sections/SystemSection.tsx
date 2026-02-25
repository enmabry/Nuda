"use client";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SystemCard } from "@/components/ui/SystemCard";
import { TechStack } from "@/components/ui/TechStack";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiRust, SiAmazonwebservices, SiPostgresql 
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-white" />, title: "React" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
  { node: <SiTypescript className="text-white" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-white" />, title: "Tailwind" },
  { node: <SiFramer className="text-white" />, title: "Framer" },
  { node: <SiRust className="text-white" />, title: "Rust" }, 
  { node: <SiAmazonwebservices className="text-white" />, title: "AWS" },
  { node: <SiPostgresql className="text-white" />, title: "PostgreSQL" },
];

const systemsData = [
  { id: "01", title: "Aplicaciones Web", desc: "Interfaces de alto rendimiento adaptadas a tu diseño." },
  { id: "02", title: "Automatización", desc: "Bots y flujos de trabajo inteligentes sin fricción." },
  { id: "03", title: "Infraestructura", desc: "Gestión de hosting y despliegue (IONOS/Cloud)." },
];

export const SystemsSection = () => {
  return (
    <section id="sistemas" className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-32 px-6 relative">
      <SectionHeader number="02" title="Servicios" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-7xl border-t border-white/10">
        {systemsData.map((sys, index) => (
          <SystemCard key={sys.id} {...sys} index={index} />
        ))}
      </div>

      <TechStack logos={techLogos} />

      <div className="absolute bottom-10 font-mono text-[8px] text-gray-800 tracking-[1em] uppercase">
        Nuda_Systems_Core_v1.0
      </div>
    </section>
  );
};