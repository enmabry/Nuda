// components/bits/DarkVeilAtmosphere.tsx
"use client";

// 1. Importamos el componente REAL de la carpeta UI (el que bajó shadcn)
// Asegúrate de que esta ruta sea exacta a donde se guardó el archivo largo
// En components/bits/DarkVeilAtmosphere.tsx
import DarkVeilComponent from "@/components/DarkVeil"; // Sube un nivel y entra en ui 

export const DarkVeilBackground = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    {/* Usamos el componente real con un nombre distinto para evitar el error circular */}
    <DarkVeilComponent
      hueShift={-120}
      noiseIntensity={0}
      scanlineIntensity={0}
      speed={0.4}
      scanlineFrequency={0}
      warpAmount={0.2}
      resolutionScale={1}
    />
    
    {/* Overlay de limpieza visual */}
    <div className="absolute inset-0 pointer-events-none select-none z-0" />
  </div>
);