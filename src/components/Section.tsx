import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle: string; image: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >

          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-[1.05]">{title}</h1>
          <p className="mt-6 text-lg md:text-xl text-bold max-w-2xl">{subtitle}</p>

          <div className="mt-5">
            <span className="px-6 py-3 rounded-md bg-red-600 text-white font-medium shadow-lg shadow-red-500/50 hover:bg-red-700 transition duration-300">
              {eyebrow}
            </span>
            {/* <span className="px-6 py-3 rounded-md ml-5 bg-gray-600 text-white font-medium shadow-md hover:bg-gray-700 transition duration-300">
              {eyebrow}
            </span> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
