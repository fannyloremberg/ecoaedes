/* =========================================================
   EcoAedes — quiz.js (página prevencao.html)
   Verdadeiro ou falso com explicação na hora
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  const perguntas = document.querySelectorAll('.quiz-pergunta');
  const placar = document.querySelector('#placar');
  let acertos = 0;
  let respondidas = 0;

  perguntas.forEach(function (pergunta) {
    const certa = pergunta.dataset.certa;          // "verdadeiro" ou "falso"
    const resposta = pergunta.querySelector('.quiz-resposta');
    const botoes = pergunta.querySelectorAll('button');

    botoes.forEach(function (botao) {
      botao.addEventListener('click', function () {
        const acertou = botao.dataset.valor === certa;
        resposta.textContent = (acertou ? 'Acertou! ' : 'Não foi dessa vez. ') + pergunta.dataset.explica;

        // Cada pergunta só conta uma vez no placar
        if (!pergunta.classList.contains('respondida')) {
          pergunta.classList.add('respondida');
          respondidas = respondidas + 1;
          if (acertou) acertos = acertos + 1;
          placar.textContent = 'Você acertou ' + acertos + ' de ' + respondidas + ' respondidas.';
        }
        // Desliga os botões dessa pergunta
        botoes.forEach(function (b) {
          b.disabled = true;
        });
      });
    });
  });
});
