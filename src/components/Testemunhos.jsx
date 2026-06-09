function Testemunhos() {
  return (
    <section id="testemunhos">
      <span className="section-subtitle">
        Conselho de quem conhece
      </span>

      <h2>Cada cliente importa!</h2>

      <p className="section-description">
        A satisfação de entregar afeto em forma de doce através
        de feedbacks reais.
      </p>

      <div className="testemunhos-container">

        <div className="testemunho-box">
          <div className="avatar">
            <img src="/images/cliente1.jpg" alt="Mariana Silva" />
          </div>

          <p className="testemunho-texto">
            "O bolo do meu chá revelação superou todas as expectativas.
            Lindo por fora e maravilhoso por dentro. Todos elogiaram!"
          </p>

          <div className="estrelas">★★★★★</div>

          <h4>Mariana Silva</h4>
        </div>

        <div className="testemunho-box">
          <div className="avatar">
            <img src="/images/cliente2.avif" alt="Fernanda Souza" />
          </div>

          <p className="testemunho-texto">
            "Encomendei para o aniversário da minha filha e ficou
            exatamente como imaginei. Atendimento impecável."
          </p>

          <div className="estrelas">★★★★★</div>

          <h4>Fernanda Souza</h4>
        </div>

        <div className="testemunho-box">
          <div className="avatar">
            <img src="/images/cliente3.jpeg" alt="Carlos Eduardo" />
          </div>

          <p className="testemunho-texto">
            "O bolo foi o ponto forte da festa. Todos elogiaram. "
          </p>

          <div className="estrelas">★★★★★</div>

          <h4>Carlos Eduardo</h4>
        </div>

      </div>
    </section>
  )
}

export default Testemunhos