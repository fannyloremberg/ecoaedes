/* =========================================================
   EcoAedes — doencas.js (página doencas.html)
   Mostrar/ocultar a explicação de cada doença (sanfona)
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.sanfona__botao');

  botoes.forEach(function (botao) {
    // O painel ligado ao botão é indicado em aria-controls
    const painel = document.getElementById(botao.getAttribute('aria-controls'));

    botao.addEventListener('click', function () {
      const aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', aberto ? 'false' : 'true');
      painel.hidden = aberto; // se estava aberto, esconde; se estava fechado, mostra
    });
  });
});
