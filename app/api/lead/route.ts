import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, phone } = await req.json();

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Novo Lead pelo WhatsApp",
      html: `
        <h2>Novo Lead Recebido</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}