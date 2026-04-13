import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import data from "../../../data/services.json";
import Offer from "../../components/teklif";

type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  long_description: string;
  price: number | null;
  tags?: string[];
  image_url: string;
  background_image: string;
  category_slug: string;
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = data.services.find(
    (s: Service) => s.slug === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-500">
        Hizmet bulunamadı.
      </div>
    );
  }

  const otherServices = data.services
    .filter((s: Service) => s.slug !== slug)
    .slice(0, 6);

  const isVideo =
    service.background_image.endsWith(".mp4") ||
    service.background_image.endsWith(".webm");

  const bgSrc = service.background_image.startsWith("/")
    ? service.background_image
    : "/" + service.background_image;

  const formatPrice = (price: number) =>
    price.toLocaleString("tr-TR") + " TL";

  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white">

      {/* HERO */}
      <section className="relative w-full h-[100vh] flex items-center overflow-hidden">

        {/* VIDEO / IMAGE */}
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgSrc} type="video/webm" />
            <source src={bgSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={bgSrc}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* 🔥 STRONG GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black via-10% to-transparent to-100%" />

        {/* CONTENT */}
        <div className="relative mt-10 w-full max-w-7xl mx-auto px-6 flex flex-col gap-6">

          {/* TITLE */}
          <div className="flex items-center gap-4">
            <img src={service.image_url} className="w-14 h-14" />
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {service.name}
            </h1>
          </div>

          <p className="text-white/70 text-sm max-w-xl">
            {service.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {(service.tags ?? []).map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>


          {/* 🔥 PRICE (TAG ALTINDA) */}
{service.price && (
  <div className="flex items-center gap-1 text-white mt-2 text-3xl font-bold">
    
    <span>{formatPrice(service.price)}</span>

    <TrendingUp className="w-4 h-4 opacity-70" />

  </div>
)}

          {/* OFFER */}
          <Offer basePrice={service.price ?? 50000} />

          {/* 🔥 HİZMET DETAYI ARTIK BURADA */}
          <div className="max-w-2xl text-white/70 text-sm leading-relaxed">
            {service.long_description}
          </div>

        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h3 className="text-xl font-semibold mb-6">
          Diğer Hizmetler
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {otherServices.map((s: Service) => (
            <Link key={s.id} to={`/hizmetlerimiz/${s.slug}`}>
              <motion.div
                whileHover={{ y: -6 }}
                className="
                  flex flex-col h-full
                  rounded-2xl border
                  border-slate-200 dark:border-white/10
                  p-6 px-7
                  bg-white dark:bg-[#0A0A0A]
                "
              >
                <div className="flex items-center gap-2 mb-3">
                  <img src={s.image_url} className="w-7 h-7" />
                  <h4 className="text-lg font-semibold">
                    {s.name}
                  </h4>
                </div>

                {/* 🔥 FLEX FIX */}
                <p className="text-sm text-neutral-500 dark:text-white/60 line-clamp-3 flex-grow">
                  {s.description}
                </p>

                {/* PRICE */}
                <div className="mt-4 text-md font-semibold flex items-center gap-1">
                  {s.price ? formatPrice(s.price) : "Teklif"}

                  <TrendingUp className="w-3 h-3 opacity-60" />
                </div>
              </motion.div>
            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}