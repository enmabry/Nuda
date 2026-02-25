"use client";
import { motion } from "framer-motion";

export const SectionHeader = ({ number, title }: { number: string, title: string }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    className="mb-24 text-center"
  >
    <span className="text-[#a31d1d] font-mono text-[10px] tracking-[0.6em] uppercase">
      {number} // {title}
    </span>
  </motion.div>
);