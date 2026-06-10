const serverless = require('serverless-http');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.get("/", (req, res) => {
  res.json({ status: "API funcionando" });
});

const usuariosCadastrados = [];

app.use(cors());
app.use(express.json());

console.log("=== TESTE DE VARIÁVEIS ===");
console.log("EMAIL_USER cadastrado?:", process.env.EMAIL_USER ? "✅ Sim" : "❌ Não");
console.log("EMAIL_PASS cadastrado?:", process.env.EMAIL_PASS ? "✅ Sim" : "❌ Não");
console.log("==========================");

app.post('/contato', async (req, res) => {
    console.log("📥 Dados recebidos do Frontend:", req.body);

    const { email, mensagem } = req.body;

    if (!email || !mensagem || String(email).trim() === "" || String(mensagem).trim() === "") {
        console.log("⚠️ Validação falhou: E-mail ou mensagem vazios.");
        return res.status(400).json({ 
            sucesso: false, 
            mensagem: 'Por favor, preencha todos os campos do formulário.' 
        });
    }

    const emailUsuario = process.env.EMAIL_USER || 'celiaartesesabores@gmail.com';
    const senhaApp = process.env.EMAIL_PASS;
    const emailDestino = process.env.EMAIL_RECEIVER || 'celiaartesesabores@gmail.com';

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: emailUsuario,
                pass: senhaApp
            }
        });

        const mailOptions = {
            from: `"Site Célia Artes" <${emailUsuario}>`,
            to: String(emailDestino).trim(), 
            replyTo: String(email).trim(), 
            subject: '🍰 Novo Contato / Orçamento pelo Site',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h2 style="color: #8B0000; border-bottom: 2px solid #ad8d8d; padding-bottom: 10px;">Nova Mensagem de Contato</h2>
                    <p><strong>E-mail do Cliente:</strong> <a href="mailto:${email}">${email}</a></p>
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #8B0000; margin-top: 20px;">
                        <p style="margin: 0; font-weight: bold; color: #555;">Mensagem / Detalhes da Encomenda:</p>
                        <p style="margin-top:10px; white-space: pre-wrap;">${mensagem}</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ E-mail enviado com sucesso!");
        
        return res.status(200).json({ 
            sucesso: true, 
            mensagem: 'Sua mensagem foi enviada com sucesso!' 
        });

    } catch (error) {
        console.error('❌ ERRO DETALHADO NO NODEMAILER:', error);
        return res.status(500).json({ 
            sucesso: false, 
            mensagem: 'Erro interno ao tentar enviar o e-mail.' 
        });
    }
});

app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });
    }

    const usuarioExiste = usuariosCadastrados.find(u => u.email === email);
    if (usuarioExiste) {
        return res.json({
            sucesso: false,
            mensagem: "Este e-mail já está cadastrado!"
        });
    }

    usuariosCadastrados.push({ nome, email, senha });
    return res.json({
        sucesso: true,
        mensagem: "Cadastro realizado com sucesso 🍰"
    });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Por favor, informe o e-mail e a senha."
        });
    }

    const usuario = usuariosCadastrados.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
        return res.json({
            sucesso: false,
            mensagem: "E-mail ou senha incorretos."
        });
    }

    return res.json({
        sucesso: true,
        mensagem: "Login realizado com sucesso!",
        nome: usuario.nome
    });
});

module.exports.handler = serverless(app);