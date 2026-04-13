import React from "react";
import { motion } from "framer-motion";
import { Users, LineChart } from "lucide-react";

const cards = [
  {
    title: "Yapay Zeka Ürün Geliştirme",
    description:
      "Fikir doğrulamadan ölçeklenebilir, üretime hazır ürünlere kadar yapay zeka destekli akıllı mobil uygulamalar tasarlıyor ve geliştiriyoruz.",
    image: "/image2.webp",
    Icon: Users,
  },
  {
    title: "Otomasyon ve Yapay Zeka Sistemleri",
    description:
      "İş süreçlerinizi optimize eden, maliyetleri azaltan ve büyümeyi hızlandıran özel yapay zeka otomasyon sistemleri ile operasyonlarınızı sadeleştirin.",
    image: "/image1.webp",
    Icon: LineChart,
  },
];

export default function AnalyticsFeatureCards() {
  return (
    <section className="w-full bg-black py-16">

      {/* TRUE CENTER CONTAINER */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* PERFECT GRID */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6 lg:gap-8
          items-stretch
        ">
          {cards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full flex"
              >
                {/* CARD */}
                <div className="
                  w-full
                  flex
                  flex-col
                  rounded-[26px]
                  sm:p-[1px]
                  bg-gradient-to-b
                  from-neutral-600/60
                  to-black
                ">
                  <div className="
                    flex
                    flex-col
                    h-full
                    bg-black
                    rounded-[26px]
                    p-4 sm:p-6 lg:p-8
                  ">

                    {/* IMAGE */}
                    <div className="
                      relative
                      w-full
                      rounded-[22px]
                      overflow-hidden
                      mb-8
                    ">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="
                          block
                          w-full
                          h-auto
                        "
                      />

                      {/* RIGHT IMAGE SURFACE SHADOW */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          right-0
                          w-24
                          bg-gradient-to-l
                          from-black
                          via-black/80
                          to-transparent
                        "
                      />
                    </div>

{/* CONTENT */}
<div className="flex gap-4 items-start">
  
  <div className="shrink-0">
    <Icon className="w-5 h-5 text-neutral-300" />
  </div>

  <div className="flex-1">

    <h3 className="
      text-md
      text-white
      font-light
      leading-tight
    ">
      {card.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="
      mt-2
      text-neutral-400
      text-[14px]
      leading-relaxed
      w-[70%]
      lg:w-[60%]
    ">
      {card.description}
    </p>

    {/* LEARN MORE */}
    <a
      href="#"
      className="
        inline-block
        mt-4
        text-[14px]
        text-neutral-400
        transition-colors
        duration-200
        hover:text-neutral-200
      "
    >
      Daha fazla bilgi
    </a>

  </div>
</div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}