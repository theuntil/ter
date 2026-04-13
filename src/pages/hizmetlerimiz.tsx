import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../../data/services.json";

type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number | null;
  image_url: string;
};

export default function Services() {
  const services: Service[] = data.services;

  const formatPrice = (price: number) => {
    return price.toLocaleString("tr-TR");
  };

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white">

      {/* HEADER (VIDEO BANNER) */}
      <div className="relative w-full h-[46vh] flex items-center justify-center overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videoc.mp4" type="video/mp4" />
        
        </video>

        {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* CONTENT */}
       <div className="relative w-full max-w-7xl mx-auto flex items-center gap-4 px-6 mt-20">

  {/* ICON */}
  <motion.video
    src="/video.mp4"
    autoPlay
    muted
    playsInline
    className="w-20 h-20 object-cover shrink-0"
  />

  {/* TEXT */}
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl md:text-5xl font-semibold">
      Hizmetlerimiz
    </h1>

    <p className="mt-2 text-white/70 text-sm max-w-xl">
      İhtiyacınıza özel, modern ve ölçeklenebilir yazılım çözümleri.
    </p>
  </div>

</div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -6 }}
            className="
              rounded-3xl border
              border-black dark:border-white/10
              p-6
              bg-white dark:bg-[#000]
              transition
            "
          >

            {/* ICON (STATİK) */}
            <img
              src={service.image_url}
              className="w-10 h-10 mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">
              {service.name}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-white/60 mb-6">
              {service.description}
            </p>

            <div className="flex items-center justify-between">

              <span className="text-lg font-bold">
                {service.price
                  ? `₺${formatPrice(service.price)}`
                  : "Teklif"}
              </span>

              <Link
                to={`/hizmetlerimiz/${service.slug}`}
                className="
                  rounded-full
                  bg-black/5 dark:bg-white/10
                  border border-black/10 dark:border-white/10
                  text-black dark:text-white
                  hover:bg-black/10 dark:hover:bg-white/20
                  transition
                  px-4 py-2 text-sm
                "
              >
                İncele
              </Link>

            </div>
          </motion.div>
        ))}

      </div>

      {/* SEO TEXT */}
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center text-sm text-neutral-500 leading-relaxed">
        Terra Software olarak yapay zeka çözümleri, mobil uygulama geliştirme, web yazılım ve e-ticaret sistemleri alanında işletmelere modern ve ölçeklenebilir çözümler sunuyoruz. Geliştirdiğimiz projeler yüksek performans, güvenlik ve kullanıcı deneyimi odaklıdır. İş süreçlerinizi dijitalleştirerek verimliliğinizi artırıyor, markanızı dijital dünyada güçlü bir konuma taşıyoruz. Özel yazılım geliştirme, AI entegrasyonları ve e-ticaret altyapıları ile işletmenizin büyümesine katkı sağlıyoruz.
      </div>

    </section>
  );
}