type CardProps = {
  title: string;
  text: string;
  img: string;
};

const Card = ({ title, text, img }: CardProps) => {
  return (
    <div
      className="
        relative
        rounded-[18px]
        overflow-hidden
        border border-white/10
        bg-[#0000]
        shadow-[inset_0_0_40px_rgba(0,0,0,0.65)]
      "
      style={{ height: "340px" }}
    >
      {/* TOP BACKGROUND IMAGE */}
<div className="relative w-full h-[60%] overflow-hidden flex items-center justify-center bg-black">
  <img
    src={img}
    className="max-w-full max-h-full object-contain"
  />

  {/* ÜST GRADİENT */}
  <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent pointer-events-none" />

  {/* ALT FADE */}
  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black via-black/70 to-transparent pointer-events-none" />
</div>

      {/* TEXT AREA */}
      <div className="px-6 pt-8 bg-black">
        <h2 className="text-white text-[17px] font-light leading-tight mb-1">
          {title}
        </h2>

        <p className="text-white/70 text-[12px]">
          {text}
        </p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards: CardProps[] = [
    {
      title: "Akıllı Analiz",
      text: "İhtiyaçlarınızı değerlendiriyor ve iş akışlarını kolaylaştırmak ve verimliliği artırmak için yapay zeka çözümleri belirliyoruz.",
      img: "/1.png",
    },
    {
      title: "Yapay Zeka Geliştirme",
      text: "Ekibimiz, işletmenizin süreçlerine özel olarak tasarlanmış akıllı otomasyon sistemleri geliştiriyor.",
      img: "2.png",
    },
    {
      title: "Sorunsuz Entegrasyon",
      text: "Yapay zeka çözümlerini mevcut altyapınıza minimum aksama ile sorunsuz bir şekilde entegre ediyoruz.",
      img: "3.png",
    },
    {
      title: "Sürekli Optimizasyon",
      text: "Uzun vadeli büyüme için performansı iyileştiriyor, içgörüleri analiz ediyor ve otomasyonu geliştiriyoruz.",
      img: "4.png",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black  px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-4">

        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 1 — %35 */}
          <div className="w-full md:w-[35%]">
            <Card {...cards[0]} />
          </div>

          {/* Card 2 — %65 */}
          <div className="w-full md:w-[65%]">
            <Card {...cards[1]} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 3 — %65 */}
          <div className="w-full md:w-[65%]">
            <Card {...cards[2]} />
          </div>

          {/* Card 4 — %35 */}
          <div className="w-full md:w-[35%]">
            <Card {...cards[3]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardGrid;
