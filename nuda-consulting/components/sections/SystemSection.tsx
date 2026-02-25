// components/sections/SystemsSection.tsx
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  { id: "01", name: "Web Systems", desc: "Interfaces de alto rendimiento adaptadas a tu diseño." },
  { id: "02", name: "Automation", desc: "Bots y flujos de trabajo inteligentes sin fricción." },
  { id: "03", name: "Infrastructure", desc: "Gestión de hosting y despliegue (IONOS/Cloud)." }
];

export const SystemsSection = () => (
  <section id="sistemas" className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 px-6">
    <SectionLabel>02 // Sistemas</SectionLabel>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
      {services.map((service) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <span className="text-[#a31d1d] font-mono text-[10px] mb-4 block">{service.id}</span>
          <h3 className="text-white text-2xl font-bold mb-4 tracking-tighter uppercase">{service.name}</h3>
          <p className="text-white/40 font-mono text-xs leading-relaxed">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);