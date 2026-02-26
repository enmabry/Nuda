"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/layout/SectionHeader";

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const payload = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };

    try {
      // Pausa dramática para el efecto de encriptación
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        
        // El "DATA PURGE": Esperamos a que el usuario vea el éxito, 
        // luego reseteamos y devolvemos el formulario a la vida.
        setTimeout(() => {
          form.reset();
          setStatus("idle");
        }, 4000);
      } else {
        throw new Error("Error en el protocolo");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Error de conexión con el núcleo. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contacto" className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
      <SectionHeader number="03" title="Contacto" />

      <div className="w-full max-w-2xl relative">
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form 
              key="form"
              onSubmit={handleSubmit} 
              className="space-y-12"
              exit={{ 
                y: -40, 
                opacity: 0, 
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "circIn" } 
              }}
            >
              {/* Campos del Formulario */}
              <div className="space-y-12">
                <div className="group relative border-b border-white/10 focus-within:border-[#a31d1d] transition-colors duration-500">
                  <span className="text-[#a31d1d] font-mono text-[9px] block mb-2 opacity-0 group-focus-within:opacity-100 transition-opacity uppercase">VAR_IDENTITY</span>
                  <input required name="nombre" type="text" placeholder="01: Nombre o agencia" className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/20 uppercase font-bold tracking-tighter text-2xl" />
                </div>

                <div className="group relative border-b border-white/10 focus-within:border-[#a31d1d] transition-colors duration-500">
                  <span className="text-[#a31d1d] font-mono text-[9px] block mb-2 opacity-0 group-focus-within:opacity-100 transition-opacity uppercase">VAR_ENLACE</span>
                  <input required name="email" type="email" placeholder="02: Email" className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/20 uppercase font-bold tracking-tighter text-2xl" />
                </div>

                <div className="group relative border-b border-white/10 focus-within:border-[#a31d1d] transition-colors duration-500">
                  <span className="text-[#a31d1d] font-mono text-[9px] block mb-2 opacity-0 group-focus-within:opacity-100 transition-opacity uppercase">VAR_CONCEPTO</span>
                  <textarea required name="mensaje" rows={3} placeholder="03: Describe tu idea" className="w-full bg-transparent py-4 text-white outline-none placeholder:text-white/20 uppercase font-bold tracking-tighter text-2xl resize-none" />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full py-6 border border-white/10 hover:border-[#a31d1d] transition-all duration-500 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" ? (
                    <motion.span key="idle" exit={{ opacity: 0 }} className="text-white font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-[#a31d1d] block">Ejecutar Envío</motion.span>
                  ) : (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a31d1d] font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse block">Encriptando Payload...</motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.form>
          ) : (
            /* Pantalla de Éxito - El purgado */
            <motion.div 
              key="success-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-16 h-16 border border-green-500/30 flex items-center justify-center relative">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  className="absolute h-[1px] bg-green-500"
                />
                <span className="text-green-500 font-mono text-xl">200</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-mono text-xs uppercase tracking-[0.5em]">Transmisión Exitosa</h3>
                <p className="text-white/40 font-mono text-[8px] uppercase tracking-[0.2em]">Los datos han sido purgados del cliente y alojados en nuda.com.es</p>
              </div>
              <motion.div 
                animate={{ opacity: [0.2, 1, 0.2] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-[#a31d1d] font-mono text-[7px] uppercase"
              >
                Cerrando Socket...
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};