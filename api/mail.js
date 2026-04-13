import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// =========================
// 🔥 ENV CHECK
// =========================
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ EMAIL ENV eksik!");
  process.exit(1);
}

// =========================
// 🚀 GMAIL TRANSPORTER
// =========================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// =========================
// 🔥 TEST
// =========================
transporter.verify((err) => {
  if (err) {
    console.log("❌ SMTP ERROR:", err);
  } else {
    console.log("✅ GMAIL READY");
  }
});

// =========================
// 🧠 HELPER
// =========================
const formatPrice = (price) =>
  Number(price).toLocaleString("tr-TR") + " TL";

// =========================
// 📩 API
// =========================
app.post("/api/mail", async (req, res) => {
  console.log("📥 REQUEST:", req.body);

  const { type } = req.body;

  try {
    // =========================
    // 📩 CONTACT FORM
    // =========================
    if (type === "contact") {
      const { brand, name, email, topic, message } = req.body;

      if (!name || !email || !topic || !message) {
        return res.status(400).json({ error: "Eksik alan" });
      }

      await transporter.sendMail({
        from: `"Terra Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `📩 ${topic}`,
        html: `
          <div style="background:#0a0a0a;padding:40px;color:white;font-family:sans-serif">
            <h2>Yeni mesaj</h2>
            <p><b>Marka:</b> ${brand || "-"}</p>
            <p><b>Ad:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Konu:</b> ${topic}</p>
            <hr/>
            <p>${message}</p>
          </div>
        `,
      });

      return res.json({ success: true });
    }

    // =========================
    // 💰 OFFER
    // =========================
    if (type === "offer") {
      const { price, email, service } = req.body;

      if (!price || !email) {
        return res.status(400).json({ error: "Eksik veri" });
      }

      // 🔥 sana mail
      await transporter.sendMail({
        from: `"Terra" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "🚀 Yeni Teklif",
        html: `
          <div style="background:#0a0a0a;padding:30px;color:white;font-family:sans-serif">
            <h2>Yeni teklif aldın</h2>
            <p><b>Hizmet:</b> ${service}</p>
            <p><b>Fiyat:</b> ${formatPrice(price)}</p>
            <p><b>Email:</b> ${email}</p>
          </div>
        `,
      });

      // 🔥 kullanıcıya mail
      await transporter.sendMail({
        from: `"Terra" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Teklifiniz alındı",
        html: `
          <div style="background:#0a0a0a;padding:30px;color:white;font-family:sans-serif">
            <h2>Teklifiniz alındı</h2>
            <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
          </div>
        `,
      });

      return res.json({ success: true });
    }

    return res.status(400).json({ error: "Geçersiz type" });

  } catch (err) {
    console.error("❌ MAIL ERROR:", err);
    return res.status(500).json({
      error: "Mail gönderilemedi",
      detail: err.message,
    });
  }
});

// =========================
// 🚀 SERVER
// =========================
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Mail server ${PORT} portunda`);
});