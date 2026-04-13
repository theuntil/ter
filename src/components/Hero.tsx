import { motion } from "framer-motion";
import TextType from './TextType';
import { ArrowUpRight } from "lucide-react";
import HeroInfoRotator from "./HeroInfoRotator";
import Threads from "./Threads";

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-screen overflow-hidden
        flex flex-col items-center justify-center
        bg-white dark:bg-black
      "
    >
      {/* ⭐ DITHER BACKGROUND */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0">
         <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
        </div>

        {/* Gradient overlay */}
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-linear-to-t
            from-white via-white/60 to-transparent
            dark:from-black dark:via-black/40
          "
        />
      </div>

      {/* BACKGROUND PARTICLES */}
      <div className="background absolute inset-0 -z-10 opacity-30 dark:opacity-100">
        {[...Array(31)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* TITLE */}
      <TextType 
  text={["Değişimi kucaklayın!"]}
  typingSpeed={75}
  pauseDuration={3500}
  showCursor={true}
  cursorCharacter="|"
  className="
          text-4xl md:text-5xl font-semibold text-center
          text-black dark:text-white
          tracking-tight mb-2 px-4 relative z-10"
  
/>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="
          text-sm md:text-base font-thin
          max-w-[500px] text-center relative z-10
          px-4 mx-auto mt-5
          text-black dark:text-white
        "
      >
        Yenilikçi çözümlerimizle geleceği şekillendiriyoruz.
        Sürdürülebilirlik ve teknoloji odaklı yaklaşımlarımızla,
        işiniz'de fark yaratıyoruz.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
        className="flex items-center justify-center gap-4 mt-8 relative z-10"
      >
        <a href="/hizmetlerimiz">
          <button
            className="
              px-6 py-3 rounded-full text-sm font-medium transition shadow-lg
              flex items-center gap-2
              bg-black text-white hover:bg-black/90
              dark:bg-white dark:text-black dark:hover:bg-white/90
            "
          >
        Hizmetlerimiz
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </a>

        <a href="/iletisim">
          <button
  className="
    px-6 py-3 rounded-full text-sm font-medium transition shadow-lg
    backdrop-blur-xl
    bg-white text-black hover:bg-black/5
    border-0
    dark:bg-white/10 dark:text-white dark:border dark:border-white/5 dark:hover:bg-white/20
  "
>
  İletişim
</button>

        </a>
      </motion.div>

      {/* CARD */}
      <HeroInfoRotator />
    </section>
  );
};

export default Hero;
