import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    mensagem: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok && data.sucesso) {
        alert("Pedido enviado com sucesso!");
        setForm({ email: "", mensaje: "" });
      } else {
        alert(data.mensagem || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <section id="contato">
      <span className="section-subtitle">Envie sua dúvida</span>
      <h2>Entre em contato</h2>
      <p className="section-description">
        Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder 😎
      </p>

      <form onSubmit={handleSubmit} className="form-limpo" id="form-contato">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Seu melhor Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="mensagem"
            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
            value={form.mensagem}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-submit">
            Enviar
          </button>
        </div>

        <p className="whatsapp-sutil">
          Se preferir,{" "}
          <a
            href="https://wa.me/5546999236741?text=Olá%20Célia!%20Visitei%20o%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            chame no WhatsApp 💬
          </a>
        </p>
      </form>
    </section>
  );
}