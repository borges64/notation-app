import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="text-zinc-800 w-full h-full flex items-center justify-center">
      <div className="text-center md:text-start">
        <motion.h1 
        className="text-7xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600"
        initial={{
          x: "-100", opacity: 0
        }}
        animate={{
          x: 0, 
          opacity: 1
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut"
        }} 
        >Pedro Victor</motion.h1>
        <motion.div>
          <motion.h1
          className="text-3xl font-semibold"
          initial={{
            x: "-100", opacity: 0
          }}
          animate={{
            x: 0, 
            opacity: 1
          }}
          transition={{
            duration: 2.8,
            ease: "easeOut"
          }}
          ></motion.h1>
          <motion.p
            initial={{ x: "100vw", opacity: 0 }} // Começa fora da tela à direita
            animate={{ x: 0, opacity: 1 }} // Move para o centro com opacidade
            transition={{ duration: 1.5, ease: "easeOut" }} // Define a duração da animação
          >Transformando ideias em experiências digitais memoráveis.</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
