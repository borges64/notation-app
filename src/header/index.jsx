import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="text-gray-300">
      <motion.div
        className="bg-green-400"
        animate={{ y: [-10, 24, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <h1 className="text-7xl font-mono font-bold">Pedro Victor</h1>
        <span className="text-3xl">Programador e Designer</span>
        <p>Transformando ideias em experiências digitais memoráveis.</p>
      </motion.div>
    </section>
  );
}
