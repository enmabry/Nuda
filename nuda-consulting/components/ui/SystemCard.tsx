"use client";
import { motion } from "framer-motion";

interface SystemCardProps {
  id: string;
  title: string;
  desc: string;
  index: number;
}

export const SystemCard = ({ id, title, desc, index }: SystemCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    className="group relative p-12 border-b border-white/10 md:border-r last:border-r-0 border-white/10 hover:bg-white/[0.02] transition-all duration-500"
  >
    <span className="text-[#a31d1d] font-mono text-[10px] mb-8 block font-bold">{id}</span>
    <h3 className="text-white text-3xl font-bold tracking-tighter uppercase mb-6 group-hover:text-[#a31d1d] transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[260px] uppercase tracking-wide">
      {desc}
    </p>
  </motion.div>
);