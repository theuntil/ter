import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

const CheckoutForm = ({ userData, product, userId }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId: product.id, userData }),
      });

      const data = await res.json();

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: elements.getElement(CardElement)! },
      });

      if (result.error) alert(result.error.message);
      else if (result.paymentIntent?.status === "succeeded") alert("Ödeme başarılı! Siparişiniz kaydedildi.");
    } catch (err) {
      alert("Ödeme sırasında bir hata oluştu.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg flex flex-col gap-6 w-full"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{product.name} - ${product.price}</h2>
      <CardElement className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-900" />
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-900 text-white dark:bg-white dark:text-black py-3 rounded-lg font-bold hover:opacity-90 transition"
      >
        {loading ? "Ödeniyor..." : "Ödeme Yap"}
      </button>
    </form>
  );
};

export default function PurchasePage({ userId }: { userId: string }) {
  const [userData, setUserData] = useState({ name: "", email: "", company: "", phone: "" });
  const [productId, setProductId] = useState("");

  const products = [
    { id: "1", name: "Ürün A", price: 49.99 },
    { id: "2", name: "Ürün B", price: 99.99 },
    { id: "3", name: "Ürün C", price: 149.99 },
  ];

  const product = products.find((p) => p.id === productId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Satın Alma Formu</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Kullanıcı Bilgileri */}
        <div className="flex flex-col gap-4 flex-1">
          <label className="font-medium text-gray-700 dark:text-gray-300">Ad Soyad</label>
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />

          <label className="font-medium text-gray-700 dark:text-gray-300">E-posta</label>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="ornek@eposta.com"
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />

          <label className="font-medium text-gray-700 dark:text-gray-300">Şirket</label>
          <input
            name="company"
            value={userData.company}
            onChange={handleChange}
            placeholder="Şirket adı"
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />

          <label className="font-medium text-gray-700 dark:text-gray-300">Telefon</label>
          <input
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="+90 5xx xxx xx xx"
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />

          <label className="font-medium text-gray-700 dark:text-gray-300">Ürün Seçin</label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          >
            <option value="">Bir ürün seçin</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} - ${p.price}
              </option>
            ))}
          </select>
        </div>

        {/* Ödeme Alanı */}
        <div className="flex-1">{product && <Elements stripe={stripePromise}><CheckoutForm userData={userData} product={product} userId={userId} /></Elements>}</div>
      </div>
    </div>
  );
}
