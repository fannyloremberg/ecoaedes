# EcoAedes — O impacto da dengue na sociedade

Site de uma ONG fictícia de conscientização sobre o *Aedes aegypti*, feito para a **2ª entrega da disciplina DEV. Front-End (Unicid) — Prof. Paulo Fratta**.

Feito só com **HTML5 + CSS3 + JavaScript puro** (sem frameworks, sem build, sem instalar nada).

**Site publicado:** https://fannyloremberg.github.io/ecoaedes/ *(endereço válido somente após ativar o GitHub Pages — ver "Publicação")*

## Equipe

| Nome | RGM |
|---|---|
| Iago Araujo da Silva Santos | RGM: 1750024957 |
| Stefani Cezar Vilela | RGM: 50015818 |

## Páginas (10)

1. `index.html` — Início
2. `sobre.html` — A ONG (público-alvo, ODS, equipe)
3. `mosquito.html` — O mosquito (ciclo de vida)
4. `doencas.html` — Doenças (dengue, zika, chikungunya, vacina, dados)
5. `prevencao.html` — Prevenção (checklist da varredura + quiz)
6. `noticias.html` — Notícias (com filtro)
7. `multimidia.html` — Multimídia (vídeo do YouTube, áudio e vídeo com legenda)
8. `doe.html` — Apoie / Doe (Pix de exemplo)
9. `voluntario.html` — Seja voluntário (formulário validado em JS)
10. `orcamento_hospedagem.html` — Hospedagem (comparação e orçamento)

## Como rodar

- **Jeito mais simples:** abra o arquivo `index.html` no navegador (duplo clique).
- **Com VS Code:** instale a extensão **Live Server**, clique com o botão direito em `index.html` → *Open with Live Server*.
- **Com Python (opcional):** `python3 -m http.server` na pasta do projeto e acesse `http://localhost:8000`.

## Estrutura de pastas

```
index.html ... (10 páginas .html na raiz)
css/style.css         → todo o visual (responsivo, alto contraste, foco visível)
js/main.js            → menu mobile, alto contraste, ano do rodapé (todas as páginas)
js/formulario.js      → validação do formulário + rascunho no localStorage
js/noticias.js        → filtro de notícias
js/doencas.js         → sanfona (abrir/fechar)
js/checklist.js       → checklist da varredura (salvo no localStorage)
js/quiz.js            → quiz
js/ecobot.js          → EcoBot (perguntas prontas)
img/                  → ilustrações SVG originais
media/                → áudio, vídeo e legenda (.vtt)
docs/                 → documentação da entrega (escopo, diário, testes, IA, orçamento...)
```

## Funcionalidades em JavaScript

- Validação do formulário de voluntário com `preventDefault`, mensagem de erro embaixo de cada campo, classe `.erro`, `aria-invalid` e mensagem de sucesso.
- Rascunho do formulário salvo no `localStorage` (volta ao recarregar, é apagado após envio com sucesso).
- Menu mobile com `aria-expanded`.
- Modo alto contraste salvo no `localStorage` e aplicado em todas as páginas.
- Filtro de notícias por categoria, checklist com barra de progresso, quiz, sanfona e EcoBot.

## Publicação (GitHub Pages)

1. No GitHub: *Settings → Pages → Build and deployment → Source: Deploy from a branch*.
2. Branch `main`, pasta `/ (root)` → *Save*.
3. Em alguns minutos o site fica em https://fannyloremberg.github.io/ecoaedes/.

## Documentação

- [Escopo e objetivos](docs/escopo.md)
- [Diário de bordo](docs/diario_de_bordo.md)
- [Uso de IA](docs/uso_de_ia.md)
- [Testes (W3C, links, JS)](docs/testes.md)
- [Melhorias do MVP (antes/depois)](docs/melhorias_mvp.md)
- [Orçamento de hospedagem](docs/orcamento.md)
- [Créditos](docs/creditos.md)
