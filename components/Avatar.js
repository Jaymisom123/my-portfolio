'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,        // deixa mais lento (aumenta o tempo da animação)
        delay: 0.8,         // atraso antes de começar a aparecer
        ease: "easeOut",    // movimento suave
      }}
      className="hidden xl:flex xl:max-w-none fixed bottom-0 right-40 z-10 "
    >
      <Image
        src={'/fotos deu 1.png'}
        width={500}
        height={700}
        loading="lazy"
        alt="Minha foto"
        className="translate-z-0"
      />
    </motion.div>
  );
};

export default Avatar;
