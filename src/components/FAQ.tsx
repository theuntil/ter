import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

// Terra Software için güncellenmiş SSS
const faqs: FAQ[] = [
  {
    question: "Terra Software hangi alanlarda hizmet verir?",
    answer:
      "Terra Software olarak yapay zeka çözümleri, özel yazılım geliştirme, mobil uygulama geliştirme, web sitesi tasarımı ve e-ticaret sistemleri üzerine uçtan uca hizmet sunuyoruz.",
  },
  {
    question: "Yapay zeka çözümleriniz neleri kapsıyor?",
    answer:
      "İş süreçlerini otomatikleştiren AI sistemleri, chatbotlar, veri analizi çözümleri ve şirketinize özel makine öğrenimi uygulamaları geliştiriyoruz.",
  },
  {
    question: "Özel yazılım geliştirme süreciniz nasıl ilerliyor?",
    answer:
      "İhtiyaç analizi ile başlayıp, mimari tasarım, geliştirme ve test süreçleriyle ilerliyor; sonunda ölçeklenebilir ve sürdürülebilir yazılımlar teslim ediyoruz.",
  },
  {
    question: "Mobil uygulama geliştiriyor musunuz?",
    answer:
      "Evet. iOS ve Android platformları için yüksek performanslı, kullanıcı odaklı ve modern mobil uygulamalar geliştiriyoruz.",
  },
  {
    question: "Web sitesi ve e-ticaret çözümleri sunuyor musunuz?",
    answer:
      "Kurumsal web siteleri, özel e-ticaret altyapıları ve yüksek dönüşüm odaklı kullanıcı deneyimleri tasarlıyor ve geliştiriyoruz.",
  },
  {
    question: "Projeler ne kadar sürede tamamlanır?",
    answer:
      "Projenin kapsamına bağlı olarak süre değişir. Küçük ölçekli projeler birkaç hafta içinde tamamlanırken, büyük sistemler birkaç ay sürebilir.",
  },
  {
    question: "Startuplar ile çalışıyor musunuz?",
    answer:
      "Evet, yazılım girişimlerine teknik partner olarak destek oluyor, MVP geliştirme ve ölçekleme süreçlerinde aktif rol alıyoruz.",
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer:
      "Teslim sonrası bakım, güncelleme ve teknik destek hizmetleri sunarak sistemlerinizin sürdürülebilirliğini sağlıyoruz.",
  },
  {
    question: "Neden Terra Software ile çalışmalıyım?",
    answer:
      "Hızlı geliştirme süreçleri, modern teknolojiler, ölçeklenebilir mimariler ve iş odaklı yaklaşımımız sayesinde projelerinizi bir üst seviyeye taşıyoruz.",
  },
];

// FAQ Item
const FAQItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      onClick={onToggle}
      className="
        cursor-pointer
        rounded-2xl
        border
        px-6 py-5
        transition-all duration-300

        bg-white text-black border-black/10
        hover:bg-gray-50

        dark:bg-[#000] dark:text-white dark:border-white/10
        dark:hover:bg-[#111]
      "
    >
      {/* Question */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{q}</span>

        <ChevronDown
          size={20}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
            opacity-70
          `}
        />
      </div>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height }}
      >
        <div
          ref={ref}
          className="
            mt-3 text-sm leading-relaxed pb-2
            text-black/70
            dark:text-white/60
          "
        >
          {a}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="
        w-full py-24 px-6
        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      {/* Title */}
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-2 text-sm opacity-70">
          Terra Software hizmetleri hakkında merak edilenler
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-12 flex flex-col gap-4 max-w-[900px] mx-auto">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            q={item.question}
            a={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;