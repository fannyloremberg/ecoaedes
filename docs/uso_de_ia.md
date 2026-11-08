# Uso de Inteligência Artificial

**Ferramenta:** Grok Bot (assistente de IA)
**Data:** 03/11/2026
**Quem usou:** Fanny (integrante da equipe), em conversa com o assistente.

> **Observação importante:** os pedidos originais foram feitos em linguagem **informal**, como numa conversa. Para documentar o uso de IA de forma clara, cada pedido foi **reescrito depois em linguagem técnica**. Abaixo aparecem as duas versões: o pedido como foi feito de verdade e o prompt técnico equivalente.

---

## Pedido 1 — Revisão do site (auditoria)

**Pedido original:**
> "Amor eu preciso que você veja o site, vê se tá com tudo pedido… Java etc"

**Prompt reescrito em linguagem técnica:**
- **Contexto:** projeto EcoAedes, 2ª entrega da disciplina DEV. Front-End (Unicid, Prof. Paulo Fratta), repositório https://github.com/fannyloremberg/ecoaedes, roteiro em PDF anexo.
- **Tarefa:** comparar o repositório com cada requisito do roteiro.
- **Requisitos:** verificar HTML (validação W3C), CSS, JavaScript (formulário, preventDefault, localStorage), acessibilidade, multimídia, ODS, publicação no GitHub Pages, commits/PRs da equipe e documentação.
- **Restrições:** somente leitura — não alterar, não fazer commit, push nem PR.
- **Saída esperada:** relatório com o que está atendido, o que falta (com evidência) e prints da página no computador e no celular.

**O que foi aceito:**
- O diagnóstico: site em React (o roteiro pede HTML/CSS/JS), GitHub Pages desativado (404), sem formulário nem validação, imagens faltando, 57 erros no W3C, sem pasta `docs/`, commits só de uma pessoa.
- Os prints do "antes" usados em `melhorias_mvp.md`.

**O que foi revisado/corrigido pela equipe:**
- ______________________________________________
- ______________________________________________

---

## Pedido 2 — Refazer o site em HTML, CSS e JS puro

**Pedido original (aprovação do plano):**
> "Refazer em HTML, CSS e JS puro com as 10 páginas"

**Prompt reescrito em linguagem técnica:**
- **Contexto:** o MVP em React não atende ao roteiro; a equipe precisa de um site estático simples de explicar na apresentação.
- **Tarefa:** reconstruir o EcoAedes em HTML5 + CSS3 + JavaScript puro, com 10 páginas interligadas (Início, A ONG, O mosquito, Doenças, Prevenção, Notícias, Multimídia, Apoie, Seja voluntário, Hospedagem).
- **Requisitos:** `lang="pt-BR"`; cabeçalho, menu e rodapé iguais; `aria-current` na página atual; formulário com `preventDefault`, mensagem de erro por campo, classe `.erro`, `aria-invalid`, mensagem de sucesso; rascunho no localStorage; menu mobile com `aria-expanded`; alto contraste salvo; filtro de notícias; layout responsivo, `:focus-visible`, link "Ir para o conteúdo", contraste AA, `prefers-reduced-motion`; imagens com caminho relativo e `alt`; ODS 3, 6 e 11; público com PCD; só dados verificados com fonte; notícias de exemplo identificadas.
- **Restrições:** sem frameworks e sem build; código simples, comentado em português, para iniciantes; pasta nova, sem commit/push.
- **Saída esperada:** pasta do projeto, 0 erros no W3C em todas as páginas, teste dos links e do formulário, prints, documentação em `docs/` e arquivo .zip.

**O que foi aceito:**
- Estrutura das 10 páginas, CSS, os arquivos JS, ilustrações SVG, áudio/vídeo com legenda e a documentação.

**O que foi revisado/corrigido pela equipe:**
- ______________________________________________
- ______________________________________________

---

## Pedido 3 — Entrega dos códigos-fonte

**Pedido original:**
> "não esquece que você também tem que me mandar os códigos puro, não só o site"

**Prompt reescrito em linguagem técnica:**
- **Contexto:** além do site funcionando, a equipe precisa ler e estudar o código para a apresentação.
- **Tarefa:** gerar um arquivo de texto único com todo o código-fonte.
- **Requisitos:** incluir todos os arquivos `.html`, `.css` e `.js` completos, cada um precedido por um cabeçalho `===== ARQUIVO: pasta/nome.ext =====`, em ordem de pasta.
- **Saída esperada:** arquivo `ecoaedes_v2_CODIGOS.txt`.

**O que foi aceito:**
- O arquivo com todos os códigos.

**O que foi revisado/corrigido pela equipe:**
- ______________________________________________

---

## Modelos de prompt para próximas tarefas

> **Atenção:** os textos abaixo são **MODELOS (templates)** para a equipe reutilizar. Eles **não** foram usados ainda. Troque o que está entre [colchetes].

### Modelo 1 — Validar uma página no W3C e corrigir os erros
```
Contexto: sou estudante de Front-End e meu site é em HTML5/CSS3/JS puro.
Tarefa: abaixo está o resultado do validador W3C (https://validator.w3.org/nu/) para a página [nome.html] e o código da página.
Requisitos: explique cada erro em português simples, mostre a linha corrigida e diga por que a correção funciona.
Restrições: não mude o visual nem o conteúdo; não use frameworks.
Saída esperada: lista "erro → causa → correção" e o código final da página.
[colar mensagens do W3C]
[colar código]
```

### Modelo 2 — Criar validação de formulário em JS explicada linha por linha
```
Contexto: formulário HTML de [cadastro/contato] com os campos [lista de campos].
Tarefa: escreva a validação em JavaScript puro.
Requisitos: usar addEventListener('submit') e preventDefault; mensagem de erro embaixo de cada campo; classe .erro e aria-invalid no campo errado; mensagem de sucesso quando tudo estiver certo.
Restrições: sem bibliotecas; código para iniciante; comentários em português.
Saída esperada: o código e uma explicação linha por linha que eu consiga apresentar para o professor.
```

### Modelo 3 — Revisar acessibilidade
```
Contexto: site estático em HTML/CSS/JS para público que inclui pessoas com deficiência.
Tarefa: revise a acessibilidade da página [nome.html] (código abaixo).
Requisitos: verificar textos alternativos, ordem dos títulos, rótulos de formulário, contraste de cores (WCAG AA), navegação por teclado, foco visível e atributos ARIA.
Restrições: sugerir só mudanças em HTML/CSS/JS puro.
Saída esperada: tabela "problema → critério WCAG → como corrigir", em ordem de prioridade.
[colar código]
```

### Modelo 4 — Gerar o texto dos slides da apresentação
```
Contexto: apresentação de [X] minutos do projeto EcoAedes (ONG de conscientização sobre a dengue) para a disciplina DEV. Front-End.
Tarefa: crie o texto de [N] slides.
Requisitos: problema e público-alvo, ODS 3/6/11, páginas do site, funções em JavaScript, acessibilidade, testes (W3C), melhorias desde o MVP, hospedagem e custo, uso de IA, divisão de tarefas da equipe.
Restrições: no máximo 5 tópicos curtos por slide; usar só os dados que estão em docs/; indicar quem apresenta cada slide.
Saída esperada: título + tópicos + fala sugerida para cada slide.
```
