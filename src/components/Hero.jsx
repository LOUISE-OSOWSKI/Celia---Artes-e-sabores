function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span className="hero-tagline">
          — FEITO COM AMOR DESDE O PRIMEIRO SUSPIRO
        </span>

        <h1>
          Bolos que contam <br />
          <em>histórias</em> doces
        </h1>

        <p>
          Cada encomenda é uma obra feita à mão, com ingredientes selecionados
          e o carinho de quem ama o que faz. Para celebrar seus momentos mais
          especiais.
        </p>

        <div className="hero-buttons">
          <a href="#contato" className="btn btn-primary">
            Fazer encomenda 🍓
          </a>

          <a href="#cardapio" className="btn btn-secondary">
            Ver cardápio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;