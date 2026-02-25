// components/sections/IntroSection.tsx
import { motion } from "framer-motion";
import { HeroHeader } from "@/components/layout/HeroHeader";
import { ActionButton } from "@/components/ui/Button";

interface IntroProps {
  onEnter: () => void;
}

export const IntroSection = ({ onEnter }: IntroProps) => (
  <motion.div
    key="intro"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="flex flex-col items-center justify-center min-h-screen p-6"
  >
    <HeroHeader title="NUDA" subtitle="Software en estado puro" />
    <ActionButton
      label="Entrar en la esencia"
      onClick={onEnter}
    />
  </motion.div>
);