const criarChuva = (emojis) => {
  const container = document.body;
  const quantidade = 30;

  for (let i = 0; i < quantidade; i++) {
    const elemento = document.createElement('span');
    elemento.className = 'elemento-chuva';
    elemento.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    elemento.style.left = `${Math.random() * 100}vw`; 
    elemento.style.top = `${-Math.random() * 20 - 5}vh`;
    elemento.style.fontSize = `${Math.random() * 1.5 + 1}rem`; 
    elemento.style.animationDuration = `${Math.random() * 2 + 2}s`;
    elemento.style.animationDelay = `${Math.random() * 1.5}s`; 
    elemento.style.opacity = '0.4';
    
    container.appendChild(elemento);

    elemento.addEventListener('animationend', () => {
      elemento.remove();
    });
  }
};

const soltarConfetes = () => criarChuva(['🎉', '🎊', '✨', '⭐']);
const soltarBaloes = () => criarChuva(['🎈', '💝', '🎀', '🌸', '🍼']); 
const soltarGravatas = () => criarChuva(['👔', '💼', '📈', '🏢']);

const pararChuva = () => {
  const elementos = document.querySelectorAll('.elemento-chuva');
  elementos.forEach(el => el.remove());
};

function Ocasioes() {
  return (
    <section id="ocasioes">
      <span className="section-subtitle">Ocasiões</span>

      <h2>Sob medida para você</h2>

      <p className="section-description">
        Inovação no sabor e tradição na qualidade. Veja tudo o que você pode
        garantir com nossos serviços artesanais:
      </p>

      <div className="cards-container">
        <div 
          className="card" 
          id="card-aniversario"
          onMouseEnter={soltarConfetes}
          onMouseLeave={pararChuva}
        >
          <div className="card-icon">🎉</div>
          <h3>Aniversários</h3>
          <p>
            Ideia para sua festa! Bolos personalizados que ganham
            diversos elogios pelo sabor marcante e riqueza de detalhes
            decorativos.
          </p>
        </div>

        <div 
          className="card" 
          id="card-revelacao"
          onMouseEnter={soltarBaloes}
          onMouseLeave={pararChuva}
        >
          <div className="card-icon">🧸</div>
          <h3>Chá Revelação</h3>
          <p>
            Momentos emocionantes pedem doçura. Criamos bolos com recheios
            misteriosos e decorações delicadas para surpreender todos os seus
            convidados.
          </p>
        </div>

        <div 
          className="card" 
          id="card-corporativo"
          onMouseEnter={soltarGravatas}
          onMouseLeave={pararChuva}
        >
          <div className="card-icon">🏢</div>
          <h3>Festas Corporativas</h3>
          <p>
            Mimos açucarados, mini-doces finos e bolos estruturados sob medida
            para adoçar reuniões importantes, metas batidas ou eventos da sua
            empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ocasioes;