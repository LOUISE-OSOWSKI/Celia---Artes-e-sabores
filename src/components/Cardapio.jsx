function Cardapio() {
  return (
    <section id="cardapio">
      <span className="section-subtitle">Cardápio</span>

      <h2>Nossos Sabores</h2>

      <p className="section-description">
        Escolha a categoria ideal para sua comemoração.
        Todos os bolos são produzidos artesanalmente e sob encomenda.
      </p>

      <div className="categorias-bolos">

        <div className="categoria-card">
          <h3>Tradicional</h3>
          <div className="preco">R$ 65/kg</div>

          <ul>
            <li>🍓 Morango e quatro leites</li>
            <li>🍍 Abacaxi e quatro leites</li>
            <li>🥥 Cocada cremosa </li>
            <li>🍫 Creme belga e ameixa</li>
          </ul>
        </div>

        <div className="categoria-card destaque">
          <h3>Premium</h3>
          <div className="preco">R$ 70/kg</div>

          <ul>
            <li>🍓 Ninho com Morango</li>
            <li>🍍 Abacaxi com mousse</li>
            <li>🍫 Dois amores</li>
          </ul>
        </div>

        <div className="categoria-card">
          <h3>Gourmet</h3>
          <div className="preco">R$ 75/kg</div>

          <ul>
            <li>🍫 Mousse de dois amores</li>
            <li>🍫 Marta Rocha</li>
            <li>❤️ Red Velvet</li>
            <li>🌰 Brigadeiro de Nozes</li>
          </ul>
        </div>

      </div>

      <div className="personalize-section">
        <h2>✨ Personalize seu Bolo</h2>

        <p>
          Monte seu bolo ideal escolhendo massa, recheio,
          cobertura e decoração.
        </p>

        <div className="personalize-grid">

          <div className="personalize-card">
            <span>🎂</span>
            <h3>Massa</h3>
            <p>Chocolate ou Pão de Ló.</p>
          </div>

          <div className="personalize-card">
            <span>🍓</span>
            <h3>Recheio</h3>
            <p>Diversas combinações de frutas e cremes.</p>
          </div>

          <div className="personalize-card">
            <span>🍫</span>
            <h3>Cobertura</h3>
            <p>Chantilly, Ganache ou Marshmallow.</p>
          </div>

          <div className="personalize-card">
            <span>🎨</span>
            <h3>Decoração</h3>
            <p>Temática, elegante ou totalmente personalizada.</p>
          </div>

        </div>

        <a href="#contato" className="btn btn-primary">
          Monte seu bolo ideal
        </a>
      </div>
    </section>
  )
}

export default Cardapio