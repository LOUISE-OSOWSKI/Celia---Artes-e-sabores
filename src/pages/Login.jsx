import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok && data.sucesso) {
        alert(data.mensagem || "Login realizado com sucesso! 🍰");
        
        
        localStorage.setItem("usuarioNome", data.nome);
        
        
        window.location.href = "/";
      } else {
        alert(data.mensagem || "E-mail ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Não foi possível conectar ao servidor backend.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Entrar</h2>
        <p>Acesse sua conta para gerenciar suas encomendas</p>

        <form onSubmit={handleSubmit} className="form-limpo" id="form-login">
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
              placeholder="Sua Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}