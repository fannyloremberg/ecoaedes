# Testes

Todos os testes abaixo foram feitos em **03/11/2026** na pasta do projeto.

## 1. Validação HTML — W3C Nu Html Checker

Ferramenta: https://validator.w3.org/nu/ (envio do arquivo de cada página).

| Data | Página | Erros | Avisos |
|---|---|---|---|
| 03/11/2026 | `index.html` | 0 | 0 |
| 03/11/2026 | `sobre.html` | 0 | 0 |
| 03/11/2026 | `mosquito.html` | 0 | 0 |
| 03/11/2026 | `doencas.html` | 0 | 0 |
| 03/11/2026 | `prevencao.html` | 0 | 0 |
| 03/11/2026 | `noticias.html` | 0 | 0 |
| 03/11/2026 | `multimidia.html` | 0 | 0 |
| 03/11/2026 | `doe.html` | 0 | 0 |
| 03/11/2026 | `voluntario.html` | 0 | 0 |
| 03/11/2026 | `orcamento_hospedagem.html` | 0 | 0 |

**Resultado: 0 erros em todas as 10 páginas.**

## 2. Validação CSS — W3C CSS Validator

Ferramenta: https://jigsaw.w3.org/css-validator/ — arquivo `css/style.css`, perfil CSS3 + SVG.

| Data | Arquivo | Erros | Avisos |
|---|---|---|---|
| 03/11/2026 | `css/style.css` | 0 | 7 (todos: "CSS variables are currently not statically checked" — o validador não confere variáveis CSS; não são erros) |

## 3. Links e arquivos

- **Links internos:** 221 `href`/`src`/`poster` relativos conferidos nas 10 páginas (arquivo existe e âncora `#id` existe) → **0 quebrados**.
- **Imagens:** todas carregam e todas têm `alt` preenchido (teste no Chrome) → **0 quebradas**.
- **Links externos:** 19 links conferidos → todos responderam 200. Observação: o link da Anvisa (gov.br) respondeu 404 em uma tentativa e 200 nas seguintes (instabilidade do servidor gov.br).

## 4. JavaScript

- `node --check` em todos os arquivos de `js/` → sem erros de sintaxe.
- Teste automatizado no Google Chrome sem interface (puppeteer):

| Teste | Resultado |
|---|---|
| `aria-current="page"` correto em cada uma das 10 páginas | Passou |
| Alto contraste ligado no Início continua ligado em Doenças | Passou |
| Alto contraste desliga ao clicar de novo | Passou |
| Menu fechado no celular; abre com `aria-expanded="true"`; fecha com Esc | Passou |
| Filtro "Vacina" mostra 2 de 6 notícias, `aria-pressed` e contador atualizam | Passou |
| Formulário vazio: 7 campos com `.erro`, `aria-invalid` e mensagem; foco no 1º erro | Passou |
| Rascunho volta depois de recarregar a página + aviso aparece | Passou |
| E-mail inválido gera erro | Passou |
| Envio válido: mensagem de sucesso, sem erros, rascunho apagado do localStorage, formulário limpo | Passou |
| Checklist continua marcado após recarregar | Passou |
| Sanfona muda `aria-expanded` | Passou |
| EcoBot responde | Passou |
| Nenhum erro de JavaScript no console | Passou |

## 5. Responsividade e acessibilidade (verificação visual)

- Prints em 1280×800 e 390×844 em `docs/prints/`.
- Link "Ir para o conteúdo", foco visível (`:focus-visible`), `prefers-reduced-motion`, cores com contraste AA (botões em #0f5c22 com texto branco).

## Testes manuais que a equipe deve repetir

- [ ] Navegar por todo o site só com Tab / Shift+Tab / Enter.
- [ ] Testar no celular de um integrante.
- [ ] Repetir a validação W3C depois de qualquer alteração.
- [ ] Testar o site publicado no GitHub Pages.
