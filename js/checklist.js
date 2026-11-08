/* =========================================================
   EcoAedes — checklist.js (página prevencao.html)
   Varredura da casa: o progresso fica salvo no localStorage
   ========================================================= */

const CHAVE_CHECKLIST = 'ecoaedes-varredura';

document.addEventListener('DOMContentLoaded', function () {
  const caixas = document.querySelectorAll('.checklist input[type="checkbox"]');
  if (caixas.length === 0) return;
  const barra = document.querySelector('#barra-progresso');
  const texto = document.querySelector('#texto-progresso');

  // Recupera os itens marcados antes (lista de ids salva como texto JSON)
  const salvos = JSON.parse(localStorage.getItem(CHAVE_CHECKLIST) || '[]');
  caixas.forEach(function (caixa) {
    if (salvos.includes(caixa.id)) caixa.checked = true;
  });

  // Atualiza a barra e o texto "x de 8"
  function atualizar() {
    const marcados = [];
    caixas.forEach(function (caixa) {
      if (caixa.checked) marcados.push(caixa.id);
    });
    const porcento = Math.round((marcados.length / caixas.length) * 100);
    barra.style.width = porcento + '%';
    texto.textContent = marcados.length + ' de ' + caixas.length + ' itens revisados (' + porcento + '%).';
    if (marcados.length === caixas.length) {
      texto.textContent += ' Varredura completa! Repita depois de cada chuva.';
    }
    localStorage.setItem(CHAVE_CHECKLIST, JSON.stringify(marcados));
  }

  caixas.forEach(function (caixa) {
    caixa.addEventListener('change', atualizar);
  });

  // Botão para recomeçar a varredura
  document.querySelector('#recomecar').addEventListener('click', function () {
    caixas.forEach(function (caixa) {
      caixa.checked = false;
    });
    atualizar();
  });

  atualizar();
});
