"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Abstracción",
    desc: "Eliminar lo innecesario.",
  },
  {
    num: "02",
    title: "Construcción",
    desc: "Código limpio y escalable.",
  },
  {
    num: "03",
    title: "Despliegue",
    desc: "Rendimiento sin compromiso.",
  },
];

export const LogicGrid = () => {
  return (
    <div className="relative w-full max-w-5xl mt-24 px-10 md:px-0">
      
      {/* LÍNEA DE BLUEPRINT: Cambia de horizontal (md) a vertical (móvil) */}
      <motion.div 
        initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: 0 } : { width: 0 }}
        whileInView={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: "100%" } : { width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute 
                   left-[2.5rem] md:left-0 
                   top-0 
                   w-[1px] md:w-full 
                   h-full md:h-[1px] 
                   bg-gradient-to-b md:bg-gradient-to-r 
                   from-transparent via-[#a31d1d] to-transparent 
                   opacity-30"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 pt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
            className="group cursor-default relative"
          >
            {/* Nodo técnico: Se posiciona en la línea vertical en móvil y horizontal en md */}
            <div className="absolute 
                            left-[-1px] md:left-1/2 
                            top-0 md:top-[-44px] 
                            md:-translate-x-1/2 
                            w-1.5 h-1.5 
                            rounded-full bg-[#a31d1d] 
                            shadow-[0_0_8px_#a31d1d] 
                            opacity-50 group-hover:opacity-100 
                            transition-opacity" />
            
            <div className="flex flex-col md:items-center md:text-center space-y-2 pl-8 md:pl-0">
              <span className="font-mono text-[9px] tracking-[0.4em] text-[#a31d1d] uppercase">
                {step.num}
              </span>
              <h3 className="text-white text-lg font-light tracking-tight uppercase">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[10px] font-light leading-relaxed max-w-[180px] uppercase tracking-widest">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};