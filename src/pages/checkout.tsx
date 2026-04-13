import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

function CheckoutInner() {
  const { productId } = useParams();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    company: "",
    phone: "",
  });

  useEffect(() => {
    fetch("http://localhost:3002/api/checkout/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
      .then((r) => r.json())
      .then((d) => {
        setProduct(d.product);
        setClientSecret(d.clientSecret);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  const pay = async () => {
    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          email: form.email,
          name: form.fullName,
        },
      },
    });

    if (result.error) {
      alert(result.error.message);
      return;
    }

    await fetch("http://localhost:3002/api/checkout/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentIntentId: result.paymentIntent!.id,
        productId,
        ...form,
      }),
    });

    alert("🎉 Ödeme tamamlandı");
  };

  if (loading) return <div>Yükleniyor…</div>;
  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black flex justify-center p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl space-y-3">
          <h1 className="text-xl font-semibold">Ödeme</h1>

          {["email","password","fullName","company","phone"].map(k => (
            <input
              key={k}
              placeholder={k}
              type={k === "password" ? "password" : "text"}
              className="w-full border px-3 py-2 rounded"
              onChange={e =>
                setForm({ ...form, [k]: e.target.value })
              }
            />
          ))}

          <CardElement className="p-3 border rounded" />

          <button
            onClick={pay}
            className="w-full bg-black text-white py-3 rounded"
          >
            Öde {product.price} ₺
          </button>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-950 p-6 rounded-xl">
          <h2 className="font-semibold mb-3">Sipariş Özeti</h2>
          <div className="flex justify-between">
            <span>{product.name}</span>
            <span>{product.price} ₺</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutInner />
    </Elements>
  );
}
