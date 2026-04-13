import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const subjects = [
  "İş Birliği Talebi",
  "Müşteri Desteği",
  "Yatırımcı İlişkileri",
  "Teknik Destek",
  "Ödeme ve Faturalandırma",
  "Diğer",
];

const Contact = () => {
  const [form, setForm] = useState({
    brand: "",
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Ad soyad gereklidir.";
    if (!form.email.trim()) newErrors.email = "E-posta adresi gereklidir.";
    if (!form.topic.trim()) newErrors.topic = "Lütfen bir konu seçin.";
    if (!form.message.trim()) newErrors.message = "Mesaj alanı boş bırakılamaz.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
  type: "contact",
  ...form
}),
      });

      if (res.ok) {
        setSuccessPopup(true);
        setForm({ brand: "", name: "", email: "", topic: "", message: "" });
        setErrors({});
        setTimeout(() => setSuccessPopup(false), 3000);
      } else {
        alert("Mesajınız gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      alert("Ağ hatası oluştu.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black px-6 py-24 flex justify-center transition-colors duration-300">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Sol taraf: iletişim bilgileri */}
        <div className="flex flex-col gap-6 text-slate-900 dark:text-white">
          <h1 className="text-4xl md:text-5xl font-bold mt-20 tracking-tight">
            İletişim & Destek
          </h1>
          <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed max-w-sm">
            Yardıma mı ihtiyacınız var veya bizimle iş birliği mi yapmak istiyorsunuz?  
            Destek ekibimiz tüm Terra markaları için size yardımcı olmaya hazır.
          </p>

          <div className="mt-8 flex flex-col gap-6 text-sm">
            <div>
              <p className="text-slate-400 dark:text-white/40 text-xs mb-1 uppercase font-bold tracking-widest">E-posta</p>
              <p className="font-medium">contact@rovand.limited</p>
             
            </div>

            <div>
              <p className="text-slate-400 dark:text-white/40 text-xs mb-1 uppercase font-bold tracking-widest">Telefon</p>
              <p className="font-medium">+90 533 443 49 78</p>
               <p className="font-medium">+44 7365 953883</p>
            </div>

            <div>
              <p className="text-slate-400 dark:text-white/40 text-xs mb-1 uppercase font-bold tracking-widest">Ofis Adresi</p>
              <p className="font-medium leading-relaxed">Kayseri, Türkiye</p>
               <p className="font-medium leading-relaxed">Istanbul, Türkiye</p>
            </div>

            <div>
              <p className="text-slate-400 dark:text-white/40 text-xs mb-1 uppercase font-bold tracking-widest">Destek Saatleri</p>
              <p className="font-medium">Pazartesi – Cuma, 09:00–18:00 (GMT)</p>
            </div>
          </div>
        </div>

        {/* Sağ taraf: form */}
        <form
          onSubmit={submitForm}
          className="bg-slate-50 dark:bg-white/4 border mt-10 border-slate-200 dark:border-white/5 backdrop-blur-xl
                     rounded-3xl p-8 shadow-2xl flex flex-col gap-5 transition-colors"
        >

          {/* Ad Soyad */}
          <div>
            <label className="text-slate-700 dark:text-white/80 text-sm font-medium">Ad Soyad *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adınız ve soyadınız"
              className="mt-2 w-full bg-white dark:bg-black border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* E-posta */}
          <div>
            <label className="text-slate-700 dark:text-white/80 text-sm font-medium">E-posta Adresi *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ornek@eposta.com"
              className="mt-2 w-full bg-white dark:bg-black border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          {/* Konu */}
          <div>
            <label className="text-slate-700 dark:text-white/80 text-sm font-medium">Konu *</label>
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="mt-2 w-full bg-white dark:bg-black border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all"
            >
              <option value="">Bir konu seçin</option>
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.topic && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                <AlertCircle size={12} /> {errors.topic}
              </p>
            )}
          </div>

          {/* Mesaj */}
          <div>
            <label className="text-slate-700 dark:text-white/80 text-sm font-medium">Mesajınız *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Size nasıl yardımcı olabiliriz?"
              className="mt-2 w-full min-h-[120px] bg-white dark:bg-black border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-all resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          {/* Gönder butonu */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm rounded-full
                       py-4 px-6 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 relative shadow-lg"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Mesaj Gönder <Send className="w-4 h-4" />
              </>
            )}
          </button>

        </form>
      </div>

      {/* Başarı popup */}
      {successPopup && (
        <div className="fixed bottom-10 right-6 left-6 md:left-auto md:right-10 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-6 h-6" />
          <p className="text-sm font-bold">Mesajınız başarıyla gönderildi!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
