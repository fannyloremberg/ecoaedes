/* =========================================================
   EcoAedes — noticias.js (página noticias.html)
   Filtro de notícias por categoria
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.filtro');
  const noticias = document.querySelectorAll('.noticia');
  const contador = document.querySelector('#contador-noticias');

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      const categoria = botao.dataset.categoria; // ex.: "vacina", "vigilancia", "ong" ou "todas"
      let visiveis = 0;

      // Mostra só as notícias da categoria escolhida
      noticias.forEach(function (noticia) {
        if (categoria === 'todas' || noticia.dataset.categoria === categoria) {
          noticia.classList.remove('escondido');
          visiveis = visiveis + 1;
        } else {
          noticia.classList.add('escondido');
        }
      });

      // Marca qual botão está ativo
      botoes.forEach(function (b) {
        b.setAttribute('aria-pressed', 'false');
      });
      botao.setAttribute('aria-pressed', 'true');

      // Avisa quantas notícias aparecem (lido pelo leitor de tela)
      contador.textContent = visiveis + ' notícia(s) exibida(s).';
    });
  });
});
