import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, source, message } = await req.json();

    await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: "miltonandrade2919@gmail.com",
      subject: "Nova mensagem pelo formulário de contato",
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Como conheceu:</strong> ${source}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}