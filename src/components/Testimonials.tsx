import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    text: `"Terra Software ile çalışmaya başladıktan sonra operasyonlarımız tamamen otomatikleşti. Özellikle AI çözümleri bize ciddi zaman kazandırdı."`,
    name: "Ahmet Yılmaz",
    title: "Kurucu, Yılmaz Lojistik",
  },
  {
    text: `"E-ticaret altyapımızı baştan sona yeniden kurdular. Hem hız hem dönüşüm oranlarımız gözle görülür şekilde arttı."`,
    name: "Elif Demir",
    title: "CEO, ModaNova",
  },
  {
    text: `"Startup sürecimizde teknik partner olarak yanımızda oldular. MVP’yi çok hızlı çıkardık ve yatırım aldık."`,
    name: "Burak Kaya",
    title: "Founder, FinTrack",
  },
  {
    text: `"Mobil uygulamamızı sıfırdan geliştirdiler. Kullanıcı deneyimi gerçekten üst seviyede oldu."`,
    name: "Zeynep Arslan",
    title: "Ürün Müdürü, FitLife",
  },
  {
    text: `"Yapay zeka tabanlı analiz sistemleri sayesinde satış verilerimizi çok daha doğru yorumlayabiliyoruz."`,
    name: "Mert Çelik",
    title: "Operasyon Direktörü, TechMarket",
  },
  {
    text: `"Terra ekibi hem hızlı hem de çok profesyonel. İletişim süreçleri de oldukça şeffaf ilerliyor."`,
    name: "Caner Şahin",
    title: "Kurucu, Sahin Dijital",
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full py-24 px-6 bg-white dark:bg-[#050505] transition-colors">
      <div className="max-w-[1100px] mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-black dark:text-white text-3xl font-semibold">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-black/60 dark:text-white/60 text-sm mt-1">
              Terra Software ile çalışan firmalardan gerçek geri bildirimler
            </p>
          </div>

        
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                rounded-[28px]
                p-7
                border
                transition-all duration-300

                bg-white border-black/10
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                dark:bg-[#0A0A0A] dark:border-white/10
                dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]
              "
            >
              <p className="text-black/80 dark:text-white/80 text-[14px] leading-relaxed">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />

                <div className="flex flex-col">
                  <span className="text-black dark:text-white text-[13px] font-medium">
                    {t.name}
                  </span>
                  <span className="text-black/50 dark:text-white/50 text-[11px]">
                    {t.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div
          ref={sliderRef}
          className="
            md:hidden flex overflow-x-auto snap-x snap-mandatory
            gap-4 pb-6 scrollbar-hide
          "
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[85%] snap-center
                rounded-[28px]
                p-6
                border

                bg-white border-black/10
                dark:bg-[#0A0A0A] dark:border-white/10
              "
            >
              <p className="text-black/80 dark:text-white/80 text-[14px] leading-relaxed">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />

                <div className="flex flex-col">
                  <span className="text-black dark:text-white text-[13px] font-medium">
                    {t.name}
                  </span>
                  <span className="text-black/50 dark:text-white/50 text-[11px]">
                    {t.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`
                w-2.5 h-2.5 rounded-full transition-all
                ${activeIndex === i
                  ? "bg-black dark:bg-white scale-110"
                  : "bg-black/30 dark:bg-white/30"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;