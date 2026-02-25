"use client";
import { motion } from "framer-motion";
import LogoLoop from '@/components/LogoLoop'; // Asegúrate de que la ruta a tu componente LogoLoop sea correcta
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiRust, SiAmazonwebservices, SiGithub, SiMysql, SiMongodb
} from 'react-icons/si';

// 1. COLOCA LAS IMPORTACIONES Y LA CONSTANTE AQUÍ (FUERA DEL COMPONENTE)
const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiRust />, title: "Rust" }, 
  { node: <SiAmazonwebservices />, title: "AWS" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiMongodb />, title: "MongoDB" },
];

const systems = [
  {
    id: "01",
    title: "Aplicaciones Web",
    desc: "Interfaces de alto rendimiento adaptadas a tu diseño.",
  },
  {
    id: "02",
    title: "Atomatización",
    desc: "Bots y flujos de trabajo inteligentes sin fricción.",
  },
  {
    id: "03",
    title: "Infrastructura",
    desc: "Gestión de hosting y despliegue (IONOS/Cloud).",
  },
];

export const SystemsSection = () => {
  return (
    <section id="sistemas" className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-24 px-6 relative">
      
      {/* 02 // SISTEMAS */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-24 text-center">
        <span className="text-[#a31d1d] font-mono text-[10px] tracking-[0.6em] uppercase">
          02 // Sistemas
        </span>
      </motion.div>

      {/* Grid de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-7xl border-t border-white/10">
        {systems.map((sys, index) => (
          <motion.div
            key={sys.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative p-10 border-b border-white/10 md:border-r last:border-r-0 border-white/10 hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-[#a31d1d] font-mono text-[10px] mb-6 block">{sys.id}</span>
            <h3 className="text-white text-2xl font-bold tracking-tighter uppercase mb-4">{sys.title}</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[250px]">{sys.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 2. EL LOGO LOOP AL FINAL DE LA SECCIÓN */}
      <div className="w-full mt-32 border-t border-white/5 pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-600 font-mono text-[9px] uppercase tracking-[0.4em] mb-12">
            Stack Tecnológico // Núcleo de Ejecución
          </span>

          <div className="w-full h-[80px] relative grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="left"
              logoHeight={35}
              gap={80}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};