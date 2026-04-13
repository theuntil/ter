import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  { emoji: "🌍", text: "Dünya genelinde 10 milyondan fazla kişiye hizmet verdik." },
  { emoji: "🚀", text: "2026 yılında Avrupa’dan Asya ve Amerika’ya genişledik." },
  { emoji: "🤝", text: "5’ten fazla global marka ile iş ortaklığı kurduk." },
  { emoji: "🏆", text: "10’dan fazla farklı sektör genelinde faaliyet gösteriyoruz." }
];

const HeroInfoRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="
        mt-10 mx-auto
        w-[70%] md:w-full
        max-w-md md:max-w-lg
        rounded-2xl
        backdrop-blur-xl
        bg-black/5 
        border border-black/5 dark:border-white/10
        p-2 
        
        text-center
        relative z-10
        h-40px md:h-50px
        flex items-center justify-center
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45 }}
          className="
            flex items-center justify-center gap-2
            text-[11px] md:text-[14px] font-light
            text-black dark:text-white/90
          "
        >
          <span className="text-base md:text-lg">
            {messages[index].emoji}
          </span>
          <p>{messages[index].text}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroInfoRotator;
