"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-20 px-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor - Grid y Línea de Escaneo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-[#a31d1d] shadow-[0_0_15px_rgba(163,29,29,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#a31d1d] animate-pulse"></div>
            <span className="text-white font-mono text-[10px] uppercase tracking-[0.5em]">
              NUDA // CORE_SYSTEM
            </span>
          </div>
          <p className="text-white/30 font-mono text-[9px] max-w-[200px] leading-relaxed uppercase">
            Desarrollo de interfaces de alto rendimiento y lógica de software avanzada.
          </p>
        </div>

        {/* Columna 2: System Status (Lo nuevo y "bonito") */}
        <div className="grid grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-4">
            <h4 className="text-white/50 font-mono text-[8px] uppercase tracking-widest text-[#a31d1d]">System_Metrics</h4>
            <div className="space-y-3">
              {[
                { label: "Uptime", value: "99.99%" },
                { label: "Latency", value: "24ms" },
                { label: "Nodes", value: "Active" }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-white/20 font-mono text-[7px] uppercase tracking-tighter">{stat.label}</span>
                  <span className="text-white/60 font-mono text-[9px] uppercase tracking-widest">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white/50 font-mono text-[8px] uppercase tracking-widest">Availability</h4>
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-mono text-[10px] tracking-tighter uppercase">READY_FOR_DEPLOYMENT</span>
            </div>
            <p className="text-white/20 font-mono text-[8px] uppercase">Santander, Cantabria</p>
            <div className="pt-2">
               <div className="h-[1px] w-full bg-white/5 relative">
                  <motion.div 
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-y-0 bg-[#a31d1d]/50" 
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior: Metadatos */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40">
        <span className="text-white font-mono text-[7px] uppercase tracking-[0.3em]">
          NUDA — © {currentYear} SOFTWARE LOGIC
        </span>
        <div className="flex gap-6 text-white font-mono text-[7px] uppercase tracking-[0.2em]">
          <span>Ver_1.0.2</span>
          <span>Lat: 43.4623° N</span>
          <span>Lon: 3.8099° W</span>
        </div>
      </div>
    </footer>
  );
};