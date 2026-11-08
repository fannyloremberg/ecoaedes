/* =========================================================
   EcoAedes — ecobot.js (página index.html)
   EcoBot: perguntas frequentes respondidas com JavaScript.
   Não é inteligência artificial: as respostas estão escritas abaixo.
   ========================================================= */

// Lista de respostas: a chave é o data-pergunta do botão
const respostasEcoBot = {
  picada: 'O Aedes aegypti costuma picar de dia, principalmente no começo da manhã e no fim da tarde.',
  criadouro: 'Qualquer recipiente com água parada: prato de vaso, pneu, garrafa, calha entupida, caixa d’água destampada. Veja a lista completa em Prevenção.',
  sintomas: 'Febre alta de início súbito, dor de cabeça e atrás dos olhos, dor no corpo e manchas vermelhas. Em caso de suspeita, procure a unidade de saúde e não se automedique.',
  remedio: 'Não use AAS nem anti-inflamatório por conta própria: na dengue eles aumentam o risco de sangramento. Siga a orientação de um profissional de saúde.',
  ajudar: 'Você pode ser voluntário, doar materiais para os mutirões ou divulgar o site. Veja as páginas Seja voluntário e Apoie.'
};

document.addEventListener('DOMContentLoaded', function () {
  const botoes = document.querySelectorAll('.ecobot__perguntas button');
  const caixaResposta = document.querySelector('#ecobot-resposta');
  if (!caixaResposta) return;

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      const chave = botao.dataset.pergunta;
      // Mostra a pergunta e a resposta na caixa (aria-live lê em voz alta)
      caixaResposta.textContent = botao.textContent + ' — ' + respostasEcoBot[chave];
    });
  });
});
