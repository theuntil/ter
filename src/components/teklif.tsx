import { useState } from "react";
import { Mail } from "lucide-react";

type Props = {
  basePrice: number;
};

export default function Offer({ basePrice }: Props) {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const priceOptions = Array.from(
    { length: 6 },
    (_, i) => basePrice + i * 10000
  );

  const formatPrice = (price: number) =>
    price.toLocaleString("tr-TR");

  const handleSelect = (price: number) => {
    setSelectedPrice(price);
    setOpen(false);
    setError("");
  };

const handleSubmit = async () => {
  if (!selectedPrice) {
    setError("Lütfen fiyat seçin");
    return;
  }

  if (!email) {
    setError("E-posta girin");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("http://localhost:3001/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "offer",
        price: selectedPrice,
        email,
        service: "Hizmet adı buraya",
      }),
    });

    const data = await res.json();

    if (data.success) {
      setError("");
      setEmail("");
      setSelectedPrice(null);
      alert("Teklif gönderildi 🚀");
    } else {
      setError("Bir hata oluştu");
    }
  } catch (err) {
    setError("Sunucu hatası");
  }

  setLoading(false);
};

  return (
    <div className="flex flex-col items-start gap-3 mt-6 relative">

      {/* PRICE SELECT */}
      <div className="relative w-full max-w-[320px]">

        <button
          onClick={() => setOpen(!open)}
          className="
            w-full rounded-full px-4 py-3 text-sm
            bg-white/10 text-white
            border border-white/10
            hover:bg-white/20 transition text-left
          "
        >
          {selectedPrice
            ? `₺${formatPrice(selectedPrice)}`
            : "Fiyat seç"}
        </button>

        {open && (
          <div className="
            absolute top-12 left-0 w-full
            bg-black/90 backdrop-blur
            border border-white/10
            rounded-2xl p-2 flex flex-col gap-1 z-50
          ">
            {priceOptions.map((price) => (
              <button
                key={price}
                onClick={() => handleSelect(price)}
                className="text-left px-3 py-3 rounded-xl text-sm hover:bg-white/10 transition"
              >
                ₺{formatPrice(price)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* EMAIL + BUTTON */}
      <div className="flex items-center gap-2 w-full max-w-[320px]">

        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />

          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full pl-10 pr-4 py-3 text-sm rounded-full
              bg-white/10 text-white border border-white/10
              outline-none placeholder:text-white/40
            "
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            rounded-full px-4 py-3 text-sm
            bg-white/10 text-white border border-white/10
            hover:bg-white/20 transition whitespace-nowrap
          "
        >
          {loading ? "..." : "Gönder"}
        </button>

      </div>

      {/* ERROR */}
      {error && (
        <p className="text-xs text-red-400 mt-1">
          {error}
        </p>
      )}

    </div>
  );
}