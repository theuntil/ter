// components/BrandsSection.tsx
import LogoLoop from "./LogoLoop";

export default function BrandsSection() {
  const techLogos = [
    { src: "/white.png", alt: "logo1", href: "https://kuzeybatıhaber.com.tr" },
    { src: "/kanal74beyaz.png", alt: "logo2", href: "https://kanal74.com" },
    { src: "/geceroglu.png", alt: "logo3", href: "https://gecerogluenerji.org" },
    { src: "/cocuktribunu.png", alt: "logo4", href: "https://cocuktribunu.org" },
    { src: "/favela.png", alt: "logo5", href: "https://favelawears.com" },
      { src: "/kays.png", alt: "logo6", href: "https://kays.com.tr" },
    
  ];


  
  return (
    <div className="w-full   bg-white dark:bg-black flex justify-center mb-20">
      <div className="w-full  md:w-[60%] flex flex-col items-center">
        <h3 className="text-black dark:text-white text-sm mb-7 tracking-wide">
          İş Birlikteliklerimiz
        </h3>

        {/* YÜKSEKLİK EKLEMİYOR — sadece içerik kadar alan kaplıyor */}
        <div className="w-full relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={42}
            gap={35}
            hoverSpeed={0}
            fadeOut
            fadeOutColor=""
            ariaLabel=""
          />
        </div>
      </div>
    </div>
  );
}
