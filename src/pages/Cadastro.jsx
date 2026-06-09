import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok && data.sucesso) {
        alert(data.mensagem || "Cadastro realizado com sucesso! 🍰");
        // Limpa o formulário
        setForm({ nome: "", email: "", senha: "" });
        // Redireciona o usuário para a tela de login
        window.location.href = "/login";
      } else {
        alert(data.mensagem || "Erro ao realizar o cadastro.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Criar Conta</h2>
        <p>Faça seu cadastro para acompanhar seus pedidos</p>

        <form onSubmit={handleSubmit} className="form-limpo" id="form-cadastro">
          <div className="form-group">
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome Completo"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Seu melhor E-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="senha"
              placeholder="Crie uma Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}