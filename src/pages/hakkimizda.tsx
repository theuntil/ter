import { Bot, Smartphone, Globe2, ShoppingCart } from "lucide-react";

const Hakkimizda = () => {


  return (
    <section className="w-full min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white px-4 py-16 flex justify-center transition-colors duration-300 font-sans">
      <div className="max-w-5xl w-full flex flex-col gap-16">

        {/* -------------------------------------------------
                HERO — Terra Giriş
        -------------------------------------------------- */}
        <div className="text-center flex flex-col items-center mt-12 gap-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            Değişimi kucaklayın
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            TERRA
          </h1>

          <p className="text-slate-600 dark:text-white/60 text-base  max-w-2xl leading-relaxed">
            <span className="text-slate-900 dark:text-white font-semibold underline decoration-blue-500 underline-offset-4">2022 yılında genç girişimciler tarafından kurulan</span> Terra, 
            yapay zeka yazılımlarından dijital ticaret ekosistemlerine kadar geniş bir yelpazede teknoloji üretmektedir. 
            Amacımız, karmaşık süreçleri akıllı otomasyonlarla basitleştirmektir.
          </p>
        </div>

        {/* -------------------------------------------------
                EKİBİMİZ — Kompakt & Mobil Yan Yana
        -------------------------------------------------- */}
      

        {/* -------------------------------------------------
                NELER YAPIYORUZ?
        -------------------------------------------------- */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Neler Yapıyoruz?</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <Bot className="w-6 h-6 text-purple-500 mb-3" />
              <h3 className="font-bold text-sm mb-1">AI Yazılımları</h3>
              <p className="text-slate-500 dark:text-white/40 text-[11px] leading-snug">
                İşletmelere özel yapay zeka ve AI Call Center sistemleri.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <Smartphone className="w-6 h-6 text-blue-500 mb-3" />
              <h3 className="font-bold text-sm mb-1">Mobil & Web</h3>
              <p className="text-slate-500 dark:text-white/40 text-[11px] leading-snug">
                Yüksek performanslı uygulama ve kurumsal web çözümleri.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <ShoppingCart className="w-6 h-6 text-orange-500 mb-3" />
              <h3 className="font-bold text-sm mb-1">E-Ticaret</h3>
              <p className="text-slate-500 dark:text-white/40 text-[11px] leading-snug">
                Uluslararası pazarlara uygun satış odaklı alt yapılar.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <Globe2 className="w-6 h-6 text-green-500 mb-3" />
              <h3 className="font-bold text-sm mb-1">Global Entegrasyon</h3>
              <p className="text-slate-500 dark:text-white/40 text-[11px] leading-snug">
                Dünya çapında araçlar ve API entegrasyon çözümleri.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------
                TERRA YOLCULUĞU — Timeline
        -------------------------------------------------- */}
        <div className="flex flex-col gap-10 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold italic">TERRA'NIN YOLCULUĞU</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-white/10 ml-4 pl-8 flex flex-col gap-12">
            
            <div className="relative">
              <span className="absolute -left-[37px] w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-black"></span>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase">2022</p>
              <h3 className="text-lg font-bold">Temeller ve E-Ticaret Atılımı</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                Terra sektöre güçlü e-ticaret siteleri ve dijital mağaza çözümleriyle giriş yaptı.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[37px] w-4 h-4 bg-slate-400 rounded-full border-4 border-white dark:border-black"></span>
              <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">2023</p>
              <h3 className="text-lg font-bold">Stratejik İş Birlikleri</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                Türkiye'nin büyük markalarıyla kurumsal iş ortaklıklarına imza attık.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[37px] w-4 h-4 bg-slate-400 rounded-full border-4 border-white dark:border-black"></span>
              <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">2024</p>
              <h3 className="text-lg font-bold">Küresel Açılım</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                Sınırlarımızı aşarak yurt dışındaki ilk müşterilerimizle tanıştık ve global projeler geliştirmeye başladık.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[37px] w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-black"></span>
              <p className="text-indigo-500 font-bold text-[10px] tracking-widest uppercase">2025</p>
              <h3 className="text-lg font-bold">Dünya Standartlarında Entegrasyon</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                Dünyaca ünlü yazılım araçlarını sistemlerimize entegre ederek, müşterilerimize teknolojik üstünlük sağlayan yapılar kurduk.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[37px] w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-black"></span>
              <p className="text-green-500 font-bold text-[10px] tracking-widest uppercase">2026 ve Ötesi</p>
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400">Yapay Zekada Liderlik</h3>
              <p className="text-slate-600 dark:text-white/60 text-sm mt-1">
                Türkiye'nin ilk ve en kapsamlı AI çözümlerini sunan projeleri hayata geçirerek sektörde standartları belirleyen isim olduk.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hakkimizda;