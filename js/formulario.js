/* =========================================================
   EcoAedes — formulario.js (página voluntario.html)
   1) valida os campos com JavaScript (preventDefault)
   2) mostra mensagem de erro embaixo de cada campo e borda vermelha
   3) salva um rascunho no localStorage e recupera ao recarregar
   4) guarda cada inscrição enviada no localStorage e mostra a lista na página
   ========================================================= */

const CHAVE_RASCUNHO = 'ecoaedes-rascunho-voluntario';
const CHAVE_INSCRICOES = 'ecoaedes-inscricoes'; // lista de inscrições enviadas

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('#form-voluntario');
  if (!formulario) {
    return; // esta página não tem o formulário
  }
  const sucesso = document.querySelector('#msg-sucesso');
  const avisoRascunho = document.querySelector('#aviso-rascunho');

  // ---------- Lista de inscrições salvas no localStorage ----------
  const listaInscricoes = document.querySelector('#lista-inscricoes');
  const totalInscricoes = document.querySelector('#total-inscricoes');
  const botaoApagar = document.querySelector('#apagar-inscricoes');

  function mostrarInscricoes() {
    const inscricoes = JSON.parse(localStorage.getItem(CHAVE_INSCRICOES) || '[]');
    listaInscricoes.innerHTML = '';
    totalInscricoes.textContent = inscricoes.length === 0
      ? 'Nenhuma inscrição salva ainda.'
      : inscricoes.length + (inscricoes.length === 1 ? ' inscrição salva.' : ' inscrições salvas.');
    botaoApagar.hidden = inscricoes.length === 0;
    inscricoes.forEach(function (item) {
      const li = document.createElement('li');
      const titulo = document.createElement('strong');
      titulo.textContent = item.nome + ' (' + item.cidade + ')';
      const detalhe = document.createElement('span');
      detalhe.textContent = item.area + ' · ' + item.disponibilidade + ' · ' + item.email + ' · ' + item.data;
      li.appendChild(titulo);
      li.appendChild(document.createElement('br'));
      li.appendChild(detalhe);
      listaInscricoes.appendChild(li);
    });
  }

  botaoApagar.addEventListener('click', function () {
    localStorage.removeItem(CHAVE_INSCRICOES);
    mostrarInscricoes();
  });

  mostrarInscricoes();

  // ---------- Funções que mostram e limpam erros ----------
  function mostrarErro(campo, texto) {
    const msg = document.querySelector('#erro-' + campo.name);
    msg.textContent = texto;
    campo.classList.add('erro');                  // borda vermelha (CSS .erro)
    campo.setAttribute('aria-invalid', 'true');   // leitor de tela sabe que tem erro
  }

  function limparErro(campo) {
    const msg = document.querySelector('#erro-' + campo.name);
    msg.textContent = '';
    campo.classList.remove('erro');
    campo.removeAttribute('aria-invalid');
  }

  // ---------- Regras de cada campo ----------
  // Cada função devolve o texto do erro, ou '' se estiver tudo certo
  function validarNome(valor) {
    if (valor.trim() === '') return 'Digite seu nome completo.';
    if (valor.trim().length < 3) return 'O nome precisa ter pelo menos 3 letras.';
    return '';
  }

  function validarEmail(valor) {
    // Regra simples: algo@algo.algo
    const modelo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor.trim() === '') return 'Digite seu e-mail.';
    if (!modelo.test(valor.trim())) return 'E-mail inválido. Exemplo: nome@email.com';
    return '';
  }

  function validarTelefone(valor) {
    // Telefone é opcional; se preencher, precisa ter de 10 a 11 números (com DDD)
    const numeros = valor.replace(/\D/g, '');
    if (valor.trim() !== '' && (numeros.length < 10 || numeros.length > 11)) {
      return 'Telefone com DDD, ex.: (11) 91234-5678.';
    }
    return '';
  }

  function validarCidade(valor) {
    if (valor.trim() === '') return 'Informe sua cidade.';
    return '';
  }

  function validarArea(valor) {
    if (valor === '') return 'Escolha como quer ajudar.';
    return '';
  }

  function validarMensagem(valor) {
    if (valor.trim().length < 10) return 'Escreva uma mensagem com pelo menos 10 caracteres.';
    return '';
  }

  // Liga cada campo à sua regra
  const regras = {
    nome: validarNome,
    email: validarEmail,
    telefone: validarTelefone,
    cidade: validarCidade,
    area: validarArea,
    mensagem: validarMensagem
  };

  // Valida um campo e devolve true se estiver certo
  function validarCampo(campo) {
    const erro = regras[campo.name](campo.value);
    if (erro) {
      mostrarErro(campo, erro);
      return false;
    }
    limparErro(campo);
    return true;
  }

  // O grupo de rádio (disponibilidade) e o aceite são tratados à parte
  function validarDisponibilidade() {
    const grupo = document.querySelector('#grupo-disponibilidade');
    const marcado = formulario.querySelector('input[name="disponibilidade"]:checked');
    const msg = document.querySelector('#erro-disponibilidade');
    if (!marcado) {
      msg.textContent = 'Escolha um período.';
      grupo.classList.add('erro');
      grupo.setAttribute('aria-invalid', 'true');
      return false;
    }
    msg.textContent = '';
    grupo.classList.remove('erro');
    grupo.removeAttribute('aria-invalid');
    return true;
  }

  function validarAceite() {
    const aceite = formulario.querySelector('#aceite');
    const msg = document.querySelector('#erro-aceite');
    if (!aceite.checked) {
      msg.textContent = 'Marque para confirmar que leu o aviso.';
      aceite.classList.add('erro');
      aceite.setAttribute('aria-invalid', 'true');
      return false;
    }
    msg.textContent = '';
    aceite.classList.remove('erro');
    aceite.removeAttribute('aria-invalid');
    return true;
  }

  // ---------- Rascunho no localStorage ----------
  function salvarRascunho() {
    const dados = {};
    // Guarda só os campos de texto, o select e o rádio marcado
    Object.keys(regras).forEach(function (nomeCampo) {
      dados[nomeCampo] = formulario.elements[nomeCampo].value;
    });
    const marcado = formulario.querySelector('input[name="disponibilidade"]:checked');
    dados.disponibilidade = marcado ? marcado.value : '';
    dados.acessibilidade = formulario.elements.acessibilidade.value;
    localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(dados));
  }

  function recuperarRascunho() {
    const texto = localStorage.getItem(CHAVE_RASCUNHO);
    if (!texto) return;
    const dados = JSON.parse(texto);
    Object.keys(regras).forEach(function (nomeCampo) {
      if (dados[nomeCampo]) formulario.elements[nomeCampo].value = dados[nomeCampo];
    });
    if (dados.acessibilidade) formulario.elements.acessibilidade.value = dados.acessibilidade;
    if (dados.disponibilidade) {
      const radio = formulario.querySelector('input[name="disponibilidade"][value="' + dados.disponibilidade + '"]');
      if (radio) radio.checked = true;
    }
    avisoRascunho.textContent = 'Recuperamos o rascunho que você começou antes.';
  }

  recuperarRascunho();

  // A cada tecla digitada, salva o rascunho
  formulario.addEventListener('input', salvarRascunho);
  formulario.addEventListener('change', salvarRascunho);

  // Ao sair de um campo (blur), valida só aquele campo
  Object.keys(regras).forEach(function (nomeCampo) {
    formulario.elements[nomeCampo].addEventListener('blur', function () {
      validarCampo(formulario.elements[nomeCampo]);
    });
  });

  // ---------- Envio ----------
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede a página de recarregar/enviar sem validar
    sucesso.textContent = '';

    let tudoCerto = true;
    let primeiroErro = null;

    Object.keys(regras).forEach(function (nomeCampo) {
      const campo = formulario.elements[nomeCampo];
      if (!validarCampo(campo)) {
        tudoCerto = false;
        if (!primeiroErro) primeiroErro = campo;
      }
    });
    if (!validarDisponibilidade()) {
      tudoCerto = false;
      if (!primeiroErro) primeiroErro = formulario.querySelector('input[name="disponibilidade"]');
    }
    if (!validarAceite()) {
      tudoCerto = false;
      if (!primeiroErro) primeiroErro = formulario.querySelector('#aceite');
    }

    if (!tudoCerto) {
      // Leva o foco ao primeiro campo com erro (ajuda quem usa teclado)
      primeiroErro.focus();
      return;
    }

    // Tudo certo: mostra a mensagem, limpa o formulário e apaga o rascunho
    const nome = formulario.elements.nome.value.trim().split(' ')[0];
    // Salva a inscrição na lista do localStorage (fica guardada neste navegador)
    const inscricoes = JSON.parse(localStorage.getItem(CHAVE_INSCRICOES) || '[]');
    inscricoes.push({
      nome: formulario.elements.nome.value.trim(),
      email: formulario.elements.email.value.trim(),
      telefone: formulario.elements.telefone.value.trim(),
      cidade: formulario.elements.cidade.value.trim(),
      area: formulario.elements.area.options[formulario.elements.area.selectedIndex].text,
      disponibilidade: formulario.querySelector('input[name="disponibilidade"]:checked').nextElementSibling.textContent,
      mensagem: formulario.elements.mensagem.value.trim(),
      data: new Date().toLocaleString('pt-BR')
    });
    localStorage.setItem(CHAVE_INSCRICOES, JSON.stringify(inscricoes));
    mostrarInscricoes();

    sucesso.textContent = 'Obrigado, ' + nome + '! Sua inscrição foi salva neste navegador (localStorage) e aparece na lista abaixo.';
    formulario.reset();
    localStorage.removeItem(CHAVE_RASCUNHO);
    avisoRascunho.textContent = '';
    sucesso.focus();
  });

  // Botão "Limpar" também apaga o rascunho e os erros
  formulario.addEventListener('reset', function () {
    localStorage.removeItem(CHAVE_RASCUNHO);
    Object.keys(regras).forEach(function (nomeCampo) {
      limparErro(formulario.elements[nomeCampo]);
    });
    document.querySelector('#erro-disponibilidade').textContent = '';
    document.querySelector('#grupo-disponibilidade').classList.remove('erro');
    document.querySelector('#erro-aceite').textContent = '';
    document.querySelector('#aceite').classList.remove('erro');
  });
});
