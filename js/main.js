/* =========================================================
   EcoAedes — main.js
   Código que roda em TODAS as páginas:
   1) menu do celular  2) alto contraste salvo no localStorage
   3) ano atual no rodapé
   ========================================================= */

// Avisa o CSS que o JavaScript está ligado (o menu só esconde no celular se houver JS)
document.documentElement.classList.add('js');

// ---------- 1. Alto contraste ----------
// Lemos a preferência salva antes de tudo, para a página já abrir no modo escolhido
const CHAVE_CONTRASTE = 'ecoaedes-alto-contraste';
if (localStorage.getItem(CHAVE_CONTRASTE) === 'sim') {
  document.documentElement.classList.add('alto-contraste');
}

// Espera o HTML carregar para procurar os botões
document.addEventListener('DOMContentLoaded', function () {

  // ---------- Botão de alto contraste ----------
  const botaoContraste = document.querySelector('.contraste-botao');
  if (botaoContraste) {
    // Mostra no botão se o modo está ligado (aria-pressed para leitores de tela)
    const ligado = document.documentElement.classList.contains('alto-contraste');
    botaoContraste.setAttribute('aria-pressed', ligado ? 'true' : 'false');

    botaoContraste.addEventListener('click', function () {
      // toggle liga se estiver desligado e desliga se estiver ligado
      const agoraLigado = document.documentElement.classList.toggle('alto-contraste');
      botaoContraste.setAttribute('aria-pressed', agoraLigado ? 'true' : 'false');
      // Salva a escolha: vale para todas as páginas e para a próxima visita
      localStorage.setItem(CHAVE_CONTRASTE, agoraLigado ? 'sim' : 'nao');
    });
  }

  // ---------- 2. Menu do celular ----------
  const botaoMenu = document.querySelector('.menu-botao');
  const menu = document.querySelector('#menu-principal');
  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      const aberto = menu.classList.toggle('aberto');
      // aria-expanded diz ao leitor de tela se o menu está aberto
      botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      botaoMenu.textContent = aberto ? 'Fechar menu' : 'Menu';
    });

    // Tecla Esc fecha o menu e devolve o foco ao botão
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
        menu.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.textContent = 'Menu';
        botaoMenu.focus();
      }
    });
  }

  // ---------- 3. Ano atual no rodapé ----------
  const ano = document.querySelector('#ano-atual');
  if (ano) {
    ano.textContent = new Date().getFullYear();
  }
});
