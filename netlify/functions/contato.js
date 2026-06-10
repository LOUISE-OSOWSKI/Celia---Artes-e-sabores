const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Só aceita POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        sucesso: false,
        mensagem: "Método não permitido",
      }),
    };
  }

  try {
    const { email, mensagem } = JSON.parse(event.body);

    if (!email || !mensagem) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          sucesso: false,
          mensagem: "Preencha todos os campos.",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Célia Artes" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: email,
      subject: "🍰 Novo Contato / Orçamento pelo Site",
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        sucesso: true,
        mensagem: "E-mail enviado com sucesso!",
      }),
    };
  } catch (error) {
    console.error("Erro:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        sucesso: false,
        mensagem: "Erro ao enviar e-mail.",
      }),
    };
  }
};