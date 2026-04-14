import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type } = req.body;

  // 🔥 ENV CHECK
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ error: "Env eksik" });
  }

  // 🔥 TRANSPORTER
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const formatPrice = (price) =>
    Number(price).toLocaleString("tr-TR") + " TL";

  try {
    // =========================
    // 📩 CONTACT
    // =========================
    if (type === "contact") {
      const { brand, name, email, topic, message } = req.body;

      if (!name || !email || !topic || !message) {
        return res.status(400).json({ error: "Eksik alan" });
      }

      await transporter.sendMail({
        from: `"Terra" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `📩 ${topic}`,
        html: `
          <div style="background:#0a0a0a;padding:40px;color:white">
            <h2>Yeni mesaj</h2>
            <p>Marka: ${brand || "-"}</p>
            <p>Ad: ${name}</p>
            <p>Email: ${email}</p>
            <p>Konu: ${topic}</p>
            <p>${message}</p>
          </div>
        `,
      });

      return res.status(200).json({ success: true });
    }

    // =========================
    // 💰 OFFER
    // =========================
    if (type === "offer") {
      const { price, email, service } = req.body;

      if (!price || !email) {
        return res.status(400).json({ error: "Eksik veri" });
      }

      // sana mail
      await transporter.sendMail({
        from: `"Terra" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "🚀 Yeni Teklif",
        html: `
          <div style="background:#0a0a0a;padding:30px;color:white">
            <h2>Yeni teklif</h2>
            <p>Hizmet: ${service}</p>
            <p>Fiyat: ${formatPrice(price)}</p>
            <p>Email: ${email}</p>
          </div>
        `,
      });

      // kullanıcıya mail
      await transporter.sendMail({
        from: `"Terra" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Teklifiniz alındı",
        html: `
          <div style="background:#0a0a0a;padding:30px;color:white">
            <h2>Teklifiniz alındı</h2>
            <p>En kısa sürede dönüş yapacağız.</p>
          </div>
        `,
      });

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: "Geçersiz type" });

  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({
      error: "Mail gönderilemedi",
      detail: err.message,
    });
  }
}