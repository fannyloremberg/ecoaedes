export const integrantes = [
  "Fabrício Oliveira da Silva",
  "Iago Araujo da Silva Santos",
  "Stefani Cezar Vilela",
  "Noriel Martins Fiuza Dias",
] as const;

export const acoes = [
  {
    titulo: "Palestras informativas",
    texto:
      "Levamos para escolas, praças e associações o que a ciência já sabe: como o mosquito nasce, o que ele transmite e o que cada casa pode fazer.",
  },
  {
    titulo: "Campanhas comunitárias",
    texto:
      "Mutirões de bairro, cartazes e conversas de porta em porta. A dengue se combate melhor quando o quarteirão inteiro participa.",
  },
  {
    titulo: "Coleta de resíduos",
    texto:
      "Pneus, garrafas e potes viram criadouro depois da chuva. Recolher esse material corta o ciclo antes do ovo virar adulto.",
  },
  {
    titulo: "Apoio aos agentes de endemias",
    texto:
      "Os agentes de saúde entram nas casas todos os dias. A EcoAedes caminha junto: explica, registra criadouros e reforça o que o SUS já orienta.",
  },
] as const;

export const ciclo = [
  {
    fase: "Ovo",
    texto: "A fêmea cola os ovos na parede do recipiente, acima da água. Eles sobrevivem meses secos e eclodem na próxima chuva.",
  },
  {
    fase: "Larva",
    texto: "Nasce na água parada e limpa — prato de vaso, calha, pneu, caixa destampada. Quatro estágios, em poucos dias.",
  },
  {
    fase: "Pupa",
    texto: "Ainda na água, não se alimenta. Em cerca de dois dias vira mosquito adulto. Por isso esvaziar o pote hoje já interrompe o ciclo.",
  },
  {
    fase: "Adulto",
    texto: "Só a fêmea pica, em geral de dia, no começo da manhã e no fim da tarde. Ela precisa de sangue para formar os ovos.",
  },
] as const;

export type DoencaId = "dengue" | "zika" | "chikungunya";

export const doencas: {
  id: DoencaId;
  nome: string;
  resumo: string;
  sinais: string[];
  cuidado: string;
}[] = [
  {
    id: "dengue",
    nome: "Dengue",
    resumo:
      "Causada por quatro sorotipos do vírus (DENV-1 a DENV-4). Ter tido um deles não protege dos outros, e uma segunda infecção pode ser mais grave. A transmissão principal é a picada da fêmea do Aedes aegypti.",
    sinais: [
      "Febre alta de início súbito (39 °C a 40 °C)",
      "Dor de cabeça forte e dor atrás dos olhos",
      "Dor no corpo e nas articulações, prostração",
      "Manchas vermelhas, enjoo e falta de apetite",
    ],
    cuidado:
      "Não existe antiviral específico. O cuidado é hidratação, repouso e reavaliação médica. Entre o 3º e o 7º dia, quando a febre cai, podem surgir sinais de alarme: dor abdominal intensa, vômitos persistentes, sangramento, tontura, falta de ar ou irritação fora do comum. Qualquer um deles pede urgência.",
  },
  {
    id: "zika",
    nome: "Zika",
    resumo:
      "Em geral mais branda que a dengue, mas com um risco que muda a vida de uma família: se a gestante se infecta, o vírus pode causar a síndrome congênita da zika, inclusive microcefalia.",
    sinais: [
      "Febre baixa ou ausente",
      "Manchas no corpo e coceira",
      "Vermelhidão nos olhos, sem pus",
      "Dor leve nas articulações",
    ],
    cuidado:
      "O tratamento também é de suporte. Gestantes devem fazer o pré-natal, usar repelente indicado pelo profissional de saúde e eliminar criadouros em casa. Não se transmite pelo ar nem pelo abraço — a via principal continua sendo o mosquito.",
  },
  {
    id: "chikungunya",
    nome: "Chikungunya",
    resumo:
      "O nome vem de uma língua da África oriental e quer dizer “aquela que se curva”, pela dor que dobra as articulações. A febre passa; a dor, às vezes, fica semanas ou meses e tira a pessoa do trabalho e da escola.",
    sinais: [
      "Febre alta de começo rápido",
      "Dor articular intensa, muitas vezes nas mãos e nos pés",
      "Inchaço nas juntas, dor muscular e dor de cabeça",
      "Manchas na pele em parte dos casos",
    ],
    cuidado:
      "Não há tratamento específico. Analgésicos e o repouso seguem orientação médica — anti-inflamatórios por conta própria são um risco, como na dengue. A dor prolongada é um impacto social invisível: gente que não consegue segurar uma panela ou uma caneta.",
  },
];

export const serieDengue = [
  { ano: "2019", milhoes: 1.54 },
  { ano: "2020", milhoes: 0.98 },
  { ano: "2021", milhoes: 0.54 },
  { ano: "2022", milhoes: 1.45 },
  { ano: "2023", milhoes: 1.65 },
  { ano: "2024", milhoes: 6.56 },
  { ano: "2025", milhoes: 1.66 },
] as const;

export const regioes2025 = [
  { nome: "Sudeste", casos: "1.132.304", parte: 68 },
  { nome: "Sul", casos: "222.171", parte: 13 },
  { nome: "Centro-Oeste", casos: "162.441", parte: 10 },
  { nome: "Nordeste", casos: "102.647", parte: 6 },
  { nome: "Norte", casos: "40.643", parte: 3 },
] as const;

export const checklistItens = [
  { id: "caixa", titulo: "Caixa d’água tampada", detalhe: "Tampa justa, sem fresta. É o criadouro que mais produz mosquito." },
  { id: "prato", titulo: "Pratos de vaso sem água", detalhe: "Troque a água por areia até a borda, ou lave o prato toda semana." },
  { id: "calha", titulo: "Calhas e lajes desobstruídas", detalhe: "Folha acumulada vira poça. Uma calha entupida alimenta o quintal inteiro." },
  { id: "pneu", titulo: "Pneus sem água", detalhe: "Fure, cubra ou leve ao descarte. Um pneu guarda água por meses." },
  { id: "garrafa", titulo: "Garrafas e potes virados", detalhe: "Guarde de boca para baixo, em local coberto, ou descarte." },
  { id: "ralo", titulo: "Ralos com tela ou fechados", detalhe: "Ralo pouco usado também cria larva. Tela fina ou desinfecção semanal." },
  { id: "piscina", titulo: "Piscina tratada ou coberta", detalhe: "Água parada sem cloro é berçário. Trate, cubra ou esvazie." },
  { id: "lixo", titulo: "Lixo tampado e no dia certo", detalhe: "Saco aberto junta chuva. Tampas firmes e coleta em dia fecham o ciclo." },
] as const;

export const quiz = [
  {
    pergunta: "A dengue passa de uma pessoa para outra pelo ar ou pelo contato.",
    correta: false,
    explica:
      "Falso. A via principal é a picada da fêmea do Aedes aegypti infectada. Abraçar alguém doente não transmite o vírus.",
  },
  {
    pergunta: "O Aedes costuma picar de dia, sobretudo de manhã cedo e no fim da tarde.",
    correta: true,
    explica:
      "Verdadeiro. Diferente do pernilongo comum, que pica à noite, o Aedes é diurno. Repelente e roupa ajuda nesses horários — mas não substitui acabar com a água parada.",
  },
  {
    pergunta: "Qualquer recipiente com água parada pode virar criadouro, mesmo que a água pareça limpa.",
    correta: true,
    explica:
      "Verdadeiro. O Aedes prefere água limpa e parada: vaso, calha, garrafa, caixa d’água. Água suja de esgoto não é o cenário típico.",
  },
  {
    pergunta: "Aspirina ou ibuprofeno são a melhor escolha para a dor da dengue, sem falar com um profissional.",
    correta: false,
    explica:
      "Falso. O Ministério da Saúde orienta não se automedicar. AAS e anti-inflamatórios aumentam o risco de sangramento na dengue. A hidratação e a avaliação na unidade de saúde vêm primeiro.",
  },
  {
    pergunta: "A zika pode afetar o bebê quando a gestante é infectada.",
    correta: true,
    explica:
      "Verdadeiro. A infecção na gestação está ligada à síndrome congênita da zika, que inclui a microcefalia. Pré-natal e prevenção do mosquito protegem a família.",
  },
  {
    pergunta: "A chikungunya se resume a uma febre curta, sem consequência depois que a temperatura cai.",
    correta: false,
    explica:
      "Falso. A marca da chikungunya é a dor nas articulações, que pode durar semanas ou meses e impedir trabalho, estudo e tarefas simples da casa.",
  },
] as const;
