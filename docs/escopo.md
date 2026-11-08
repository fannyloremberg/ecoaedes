# Escopo do projeto — EcoAedes

## Objetivo geral

Criar o site de uma ONG fictícia, a **EcoAedes**, que informe a população sobre o impacto da dengue (e de zika e chikungunya) na sociedade e incentive ações práticas de prevenção no bairro, com conteúdo acessível, inclusive para pessoas com deficiência (PCD).

## Público-alvo

Moradores de bairros urbanos, estudantes e professores, agentes comunitários, associações de bairro e **pessoas com deficiência** (por isso: alto contraste, navegação por teclado, leitor de tela, legendas e transcrição).

## ODS relacionados

- **ODS 3 — Saúde e bem-estar:** prevenção de doenças transmitidas pelo *Aedes aegypti*.
- **ODS 6 — Água potável e saneamento:** água parada e armazenamento correto de água.
- **ODS 11 — Cidades e comunidades sustentáveis:** mutirões e cuidado coletivo com o bairro.

## Objetivos específicos (mensuráveis)

1. Publicar **10 páginas** interligadas, com o mesmo cabeçalho, menu e rodapé, todas com **0 erros no validador W3C**.
2. Implementar **pelo menos 5 funções em JavaScript puro** (validação de formulário, rascunho em localStorage, menu mobile, alto contraste, filtro de notícias), todas testadas.
3. Oferecer **1 checklist de varredura com 8 itens** e **1 quiz com 6 perguntas** para o visitante testar o que aprendeu.
4. Usar **somente dados verificáveis**, cada número com link para a fonte oficial (Ministério da Saúde / Anvisa / ONU).
5. Disponibilizar **3 recursos multimídia** (vídeo do YouTube, áudio com transcrição e vídeo com legenda).

## Critérios de aceitação

- [ ] Todas as páginas abrem a partir de qualquer outra pelo menu, sem links quebrados.
- [ ] O validador W3C (https://validator.w3.org/nu/) mostra 0 erros em cada página.
- [ ] O formulário não envia com campos vazios ou inválidos e mostra a mensagem de erro embaixo de cada campo.
- [ ] Com os dados corretos, aparece a mensagem de sucesso e o rascunho é apagado.
- [ ] O alto contraste ligado em uma página continua ligado nas outras.
- [ ] O site funciona no celular (390 px) e no computador (1280 px).
- [ ] Todo o site pode ser usado só com o teclado (foco visível e link "Ir para o conteúdo").
- [ ] Toda imagem tem texto alternativo e nenhuma imagem está quebrada.
- [ ] Cada estatística tem fonte; notícias de exemplo estão marcadas como exemplo.

## Fora do escopo

- Pagamento real ou recebimento de doações (o Pix é fictício).
- Envio/armazenamento de dados pessoais em servidor (o formulário é demonstração).
