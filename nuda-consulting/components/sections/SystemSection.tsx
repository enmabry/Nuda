"use client";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SystemCard } from "@/components/ui/SystemCard";
import { TechStack } from "@/components/ui/TechStack";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiAmazonwebservices, SiPostgresql, SiVuedotjs,
  SiLaravel, SiPhp, SiJavascript, SiExpress, SiMysql, SiMongodb
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React" },
  // CORRECCIÓN: Cambiado de text-black a text-white para evitar el "hueco" invisible
  { node: <SiNextdotjs className="text-white" />, title: "Next.js" }, 
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind" },
  { node: <SiFramer className="text-[#0055FF]" />, title: "Framer" },
  { node: <SiAmazonwebservices className="text-[#FF9900]" />, title: "AWS" },
  { node: <SiPostgresql className="text-[#336791]" />, title: "PostgreSQL" },
  { node: <SiVuedotjs className="text-[#42B883]" />, title: "Vue.js" },
  { node: <SiLaravel className="text-[#FF2D20]" />, title: "Laravel" },
  { node: <SiPhp className="text-[#777BB4]" />, title: "PHP" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
  { node: <SiExpress className="text-[#404D59]" />, title: "Express" },
  { node: <SiMysql className="text-[#00758F]" />, title: "MySQL" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB" },
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
        Nuda Systems
      </div>
    </section>
  );
};