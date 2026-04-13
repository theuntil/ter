import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { price, email, service } = body;

    if (!price || !email) {
      return Response.json({ message: "Eksik veri" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 🔥 sana mail
    await transporter.sendMail({
      from: `"Terra" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "🚀 Yeni Teklif Geldi",
      html: `
        <div style="background:#0a0a0a;padding:30px;color:white">
          <h2>Yeni teklif aldın</h2>
          <p>Hizmet: ${service}</p>
          <p>Fiyat: ${price} TL</p>
          <p>Email: ${email}</p>
        </div>
      `,
    });

    // 🔥 kullanıcıya mail
    await transporter.sendMail({
      from: `"Terra" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Teklifiniz alındı",
      html: `
        <div style="background:#0a0a0a;padding:30px;color:white">
          <h2>Teklifiniz alındı</h2>
          <p>En kısa sürede dönüş yapacağız.</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.log(error);
    return Response.json({ message: "Mail gönderilemedi" }, { status: 500 });
  }
}