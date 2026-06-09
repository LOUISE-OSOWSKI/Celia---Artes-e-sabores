import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  // 🔥 Verifica se o usuário está logado assim que a Navbar monta na tela
  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioNome");
    if (usuarioSalvo) {
      setNomeUsuario(usuarioSalvo);
    }
  }, []);

  // 🔥 Função para deslogar
  function handleLogout() {
    localStorage.removeItem("usuarioNome");
    setNomeUsuario("");
    window.location.href = "/"; // Recarrega a página na Home limpa
  }

  return (
    <header>
      <nav className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Célia Artes e Sabores"
              className="logo-img"
            />
          </Link>
        </div>

        <ul className="nav-menu">
          <li><a href="/#hero">Home</a></li>
          <li><a href="/#ocasioes">Ocasiões</a></li>
          <li><a href="/#testemunhos">Depoimentos</a></li>
          <li><a href="/#cardapio">Cardápio</a></li>
          <li><a href="/#contato">Contato</a></li>
        </ul>

        {/* 🔄 CONDIÇÃO DINÂMICA PARA OS BOTÕES OU NOME */}
        <div className="nav-cta">
          {nomeUsuario ? (
            <div className="user-logged-menu" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span className="user-name-display" style={{ fontWeight: "600", color: "#6e5343" }}>
                Olá, {nomeUsuario} ✨
              </span>
              <button 
                onClick={handleLogout} 
                className="btn btn-header-login" 
                style={{ padding: "6px 12px", fontSize: "0.85rem", cursor: "pointer" }}
              >
                SAIR
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-header-login"
              >
                LOGIN
              </Link>

              <Link
                to="/cadastro"
                className="btn btn-header-cadastro"
              >
                CADASTRE-SE
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;