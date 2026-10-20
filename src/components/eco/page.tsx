import { useState } from "react";
import {
  AlertTriangle,
  Bug,
  Check,
  Droplets,
  HandHeart,
  Link2,
  Menu,
  Megaphone,
  MessageCircle,
  Recycle,
  Share2,
  ShieldAlert,
  Users,
  X,
} from "lucide-react";
import { CasesChart } from "./cases";
import { Checklist } from "./checklist";
import { Quiz } from "./quiz";
import {
  acoes,
  ciclo,
  doencas,
  integrantes,
  regioes2025,
  type DoencaId,
} from "../../lib/eco/content";

const links = [
  { href: "#ong", label: "A ONG" },
  { href: "#mosquito", label: "Mosquito" },
  { href: "#doencas", label: "Doenças" },
  { href: "#casos", label: "Casos" },
  { href: "#prevencao", label: "Prevenção" },
  { href: "#quiz", label: "Quiz" },
  { href: "#compartilhar", label: "Compartilhar" },
  { href: "#equipe", label: "Equipe" },
] as const;

const iconesAcao = [Megaphone, Users, Recycle, HandHeart] as const;

function iniciais(nome: string) {
  const partes = nome.split(" ").filter((p) => p.length > 2);
  const a = partes[0]?.[0] ?? "";
  const b = partes[partes.length - 1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

const TEXTO_SHARE =
  "EcoAedes — o impacto da dengue na sociedade. Material sobre o mosquito, as doenças, os casos no Brasil e como prevenir.";

function urlPublica() {
  const host = window.location.hostname.toLowerCase();
  const local =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".local") ||
    /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host) ||
    host === "grok.com" ||
    host.endsWith(".grok.com");
  if (local) return null;
  const path = window.location.pathname === "/" ? "" : window.location.pathname;
  return `${window.location.origin}${path}`;
}

function Compartilhar() {
  const [aviso, setAviso] = useState("");

  function avisarPreview() {
    setAviso(
      "Este endereço ainda é só o seu computador. Publique o site (GitHub Pages ou outro lugar) e abra esse link público. Aí estes botões mandam o endereço que a turma consegue abrir.",
    );
  }

  async function copiar(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setAviso("Link copiado. Cole no WhatsApp, no e-mail ou no slide.");
    } catch {
      setAviso(url);
    }
  }

  async function aoCompartilhar() {
    const url = urlPublica();
    if (!url) {
      avisarPreview();
      return;
    }
    if (navigator.share) {
      try {
        await navigator.share({ title: "EcoAedes", text: TEXTO_SHARE, url });
        setAviso("");
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }
    await copiar(url);
  }

  function aoWhatsApp() {
    const url = urlPublica();
    if (!url) {
      avisarPreview();
      return;
    }
    const destino = `https://wa.me/?text=${encodeURIComponent(`${TEXTO_SHARE} ${url}`)}`;
    window.open(destino, "_blank", "noopener,noreferrer");
  }

  async function aoCopiar() {
    const url = urlPublica();
    if (!url) {
      avisarPreview();
      return;
    }
    await copiar(url);
  }

  return (
    <section id="compartilhar" className="scroll-mt-24 border-t border-line bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Enviar o trabalho</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight">
          Compartilhar o site pronto.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          No seu computador o link ainda não sai daí. Depois de publicar (por exemplo no GitHub Pages),
          abra o site por esse endereço e use os botões: eles mandam o link no WhatsApp ou copiam para colar no slide.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={aoWhatsApp} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-paper">
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp
          </button>
          <button type="button" onClick={aoCopiar} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink">
            <Link2 className="size-4" aria-hidden />
            Copiar link
          </button>
          <button type="button" onClick={aoCompartilhar} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink">
            <Share2 className="size-4" aria-hidden />
            Compartilhar
          </button>
        </div>
        {aviso ? (
          <p className="mt-4 max-w-2xl text-sm text-ink" role="status">
            {aviso.startsWith("http") ? (
              <>
                <Check className="mr-1 inline size-4 text-primary" aria-hidden />
                Não deu para copiar sozinho. Selecione e copie: {aviso}
              </>
            ) : (
              aviso
            )}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function HomePage() {
  const [aberto, setAberto] = useState(false);
  const [doenca, setDoenca] = useState<DoencaId>("dengue");
  const atual = doencas.find((item) => item.id === doenca) ?? doencas[0];

  return (
    <div className="min-h-screen text-ink">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-paper">
        Ir para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#topo" className="flex items-center gap-2 font-display text-xl text-ink">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-paper">
              <Bug className="size-4" aria-hidden />
            </span>
            EcoAedes
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Seções">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#prevencao" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-paper lg:inline-flex">
            Varredura da casa
          </a>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface lg:hidden" aria-expanded={aberto} aria-label={aberto ? "Fechar menu" : "Abrir menu"} onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {aberto ? (
          <nav className="border-t border-line px-4 py-3 lg:hidden" aria-label="Seções">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setAberto(false)} className="block py-3 text-base font-medium text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <div className="mx-3 my-4 overflow-hidden rounded-card bg-surface sm:mx-auto sm:my-8 sm:max-w-5xl">
        <main id="conteudo">
          <section id="topo" className="px-4 pt-4 sm:px-6">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-card">
              <img src="/images/palestra.jpg" alt="Palestra ao ar livre: uma educadora conversa com vizinhos sobre prevenção do mosquito, debaixo de uma mangueira." className="h-hero w-full object-cover sm:h-hero-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-paper sm:p-10">
                <p className="text-sm font-semibold tracking-widest text-paper/80 uppercase">ONG sem fins lucrativos</p>
                <h1 className="titulo1 mt-3 w-fit rounded-card bg-primary px-5 py-2 text-center font-display text-4xl leading-none text-paper sm:px-8 sm:text-6xl">EcoAedes</h1>
                <p className="mt-3 max-w-xl text-lg text-paper/90 sm:text-xl">O impacto da dengue na sociedade — e o que um bairro pode fazer antes da próxima chuva.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#ong" className="rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink">Conhecer o trabalho</a>
                  <a href="#doencas" className="rounded-full border border-paper/40 px-5 py-3 text-sm font-semibold text-paper">Dengue, zika e chikungunya</a>
                </div>
              </div>
            </div>
          </section>
          <section id="ong" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">01 — Apresentação</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Conscientizar é o nosso objetivo.</h2>
              </div>
              <div className="space-y-4 text-lg text-muted lg:col-span-7">
                <p>A EcoAedes é uma organização sem fins lucrativos. Existimos para explicar, em linguagem de calçada, o que o <em className="text-ink">Aedes aegypti</em> faz com uma cidade: falta na escola, fila na unidade de saúde, salário que não entra e, no pior desenlace, um óbito que poderia ter sido evitado.</p>
                <p>Atuamos com palestras informativas e ações comunitárias, em parceria com agentes de combate às endemias. Não substituímos o SUS. Caminhamos ao lado de quem já visita as casas.</p>
              </div>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {acoes.map((acao, i) => {
                const Icone = iconesAcao[i] ?? Megaphone;
                return (
                  <article key={acao.titulo} className="rounded-card border border-line bg-surface p-6">
                    <Icone className="size-5 text-primary" aria-hidden />
                    <h3 className="mt-4 font-display text-2xl">{acao.titulo}</h3>
                    <p className="mt-2 text-muted">{acao.texto}</p>
                  </article>
                );
              })}
            </div>
          </section>
          <section className="bg-primary-deep text-paper">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
              <img src="/images/mutirao.jpg" alt="Voluntários de colete recolhem garrafas e pneus numa rua residencial." className="h-80 w-full rounded-card object-cover" />
              <div>
                <p className="text-sm font-semibold tracking-widest text-paper/70 uppercase">Pelo que lutamos</p>
                <h2 className="mt-3 font-display text-4xl leading-tight">Menos água parada. Menos aula perdida. Menos luto evitável.</h2>
                <p className="mt-4 text-lg text-paper/80">O mosquito não escolhe bairro, mas a falta de informação e de coleta pesa mais onde a casa já é apertada. Por isso a EcoAedes fala com vizinho, não só com cartaz: o criadouro está no quintal de alguém que ainda não sabe que aquele prato de vaso tem nome e prazo.</p>
              </div>
            </div>
          </section>
          <section id="mosquito" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <img src="/images/mosquito.jpg" alt="Fêmea de Aedes aegypti sobre uma folha, com listras brancas nas pernas e no corpo." className="aspect-square w-full rounded-card object-cover" />
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">02 — O mosquito</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl"><span className="italic">Aedes aegypti</span>, o mesmo vetor de três vírus.</h2>
                <p className="mt-4 text-lg text-muted">Preto, com listra branca em forma de lira no tórax e anéis brancos nas pernas. Vive perto de gente, dentro e em volta das casas. Transmite dengue, zika e chikungunya — e pode participar do ciclo urbano da febre amarela. Um adulto vive cerca de um mês. Os ovos, secos, esperam bem mais do que isso.</p>
                <p className="mt-3 text-lg text-muted">Do ovo ao adulto, com calor e água, o ciclo fecha em sete a dez dias. É por isso que uma vistoria semanal muda o mapa do bairro.</p>
              </div>
            </div>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ciclo.map((fase, i) => (
                <li key={fase.fase} className="rounded-card border border-line bg-surface p-5">
                  <span className="font-display text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl">{fase.fase}</h3>
                  <p className="mt-2 text-sm text-muted">{fase.texto}</p>
                </li>
              ))}
            </ol>
          </section>
          <section id="doencas" className="scroll-mt-24 border-y border-line bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">03 — As doenças</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Três vírus, um mosquito, impactos diferentes na vida de quem adoece.</h2>
              <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Doenças">
                {doencas.map((item) => {
                  const ativo = item.id === doenca;
                  return (
                    <button key={item.id} type="button" role="tab" aria-selected={ativo} onClick={() => setDoenca(item.id)} className={"rounded-full px-4 py-2 text-sm font-semibold " + (ativo ? "bg-primary text-paper" : "bg-bg text-ink hover:bg-soft")}>
                      {item.nome}
                    </button>
                  );
                })}
              </div>
              {atual ? (
                <div className="mt-8 grid gap-8 lg:grid-cols-2" role="tabpanel">
                  <div>
                    <h3 className="font-display text-3xl">{atual.nome}</h3>
                    <p className="mt-3 text-lg text-muted">{atual.resumo}</p>
                    <p className="mt-4 text-muted">{atual.cuidado}</p>
                  </div>
                  <ul className="flex flex-col justify-center gap-3">
                    {atual.sinais.map((sinal) => (
                      <li key={sinal} className="rounded-card border border-line bg-bg px-4 py-3 text-ink">{sinal}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="mt-8 flex gap-3 rounded-card border border-accent/30 bg-paper p-4 text-sm">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <p><strong className="text-ink">Sinais de alarme não esperam.</strong> Dor forte na barriga, vômito que não para, sangramento, tontura ou falta de ar: procure a urgência. Este site explica; não substitui consulta, exame nem a orientação da unidade de saúde.</p>
              </div>
            </div>
          </section>
          <section id="casos" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">04 — Casos e impacto</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">2024 foi o ano em que a dengue deixou de ser “só verão”.</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted">O Brasil registrou 6.563.561 casos prováveis e 6.321 mortes em 2024. Em 2025 os casos caíram cerca de 75%, para 1.660.190, com 1.762 óbitos. A queda é real. O mosquito não foi embora.</p>
            <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[["6,56 mi", "casos prováveis em 2024"], ["6.321", "mortes confirmadas em 2024"], ["−75%", "casos em 2025, frente a 2024"], ["1.762", "óbitos registrados em 2025"]].map(([num, legenda]) => (
                <div key={legenda} className="rounded-card border border-line bg-surface p-5">
                  <dt className="font-display text-3xl text-primary sm:text-4xl">{num}</dt>
                  <dd className="mt-2 text-sm text-muted">{legenda}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 rounded-card border border-line bg-surface p-4 sm:p-6">
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">Casos prováveis de dengue</h3>
                <p className="text-sm text-muted">em milhões</p>
              </div>
              <CasesChart />
              <p className="mt-2 text-xs leading-relaxed text-muted">2024 e 2025: Painel de Monitoramento das Arboviroses, Ministério da Saúde. 2019–2023: boletins epidemiológicos, arredondados para leitura em sala. A série sobe e desce; o padrão sazonal (outubro a maio) se repete todo ano.</p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl">Onde pesou em 2025</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {regioes2025.map((regiao) => (
                    <li key={regiao.nome}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="font-semibold">{regiao.nome}</span>
                        <span className="text-muted">{regiao.casos}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-line">
                        <div className="h-full bg-primary" style={{ width: `${regiao.parte}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card bg-soft p-6">
                <Droplets className="size-5 text-primary" aria-hidden />
                <h3 className="mt-3 font-display text-2xl">O que esses números fazem com a sociedade</h3>
                <ul className="mt-4 space-y-3 text-muted">
                  <li>Estudante falta prova. Trabalhador falta turno. A conta do mês não espera a febre passar.</li>
                  <li>UBS e hospitais lotam justamente no período em que outras urgências continuam existindo.</li>
                  <li>A chikungunya deixa dor que dura meses. A zika, na gestação, pode marcar uma vida inteira.</li>
                  <li>Cada morte de 2024 é um argumento: prevenção de quintal é política de saúde, não detalhe.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="tratamento" className="scroll-mt-24 bg-primary-deep text-paper">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-sm font-semibold tracking-widest text-paper/70 uppercase">05 — Tratamento</p>
                <h2 className="mt-3 font-display text-4xl leading-tight">Não há atalho na farmácia.</h2>
              </div>
              <div className="space-y-4 text-lg text-paper/85 lg:col-span-8">
                <p>Dengue, zika e chikungunya não têm antiviral de uso rotineiro. O que muda o desfecho é reconhecer cedo, beber líquido, repousar e voltar à unidade se o corpo piorar — sobretudo quando a febre começa a ceder.</p>
                <p>Não use ácido acetilsalicílico (AAS) nem anti-inflamatório como ibuprofeno por conta própria: na dengue, eles aumentam o risco de sangramento. Paracetamol só na dose orientada por um profissional. Gestantes, bebês, idosos e quem tem diabetes ou hipertensão merecem avaliação mais rápida.</p>
                <p>Desde 2024 o SUS oferece vacina contra a dengue para públicos e municípios definidos. A regra de idade muda; a resposta certa está na unidade de saúde do seu bairro, não num cartaz antigo. A vacina soma. Não dispensa acabar com o criadouro.</p>
              </div>
            </div>
          </section>
          <section id="prevencao" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">06 — Prevenção</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A varredura de dez minutos que o mosquito não sobrevive.</h2>
                <p className="mt-4 text-lg text-muted">Marque o que já está resolvido na sua casa. O progresso fica salvo neste navegador — dá para continuar depois da aula ou usar a lista numa palestra.</p>
                <img src="/images/criadouro.jpg" alt="Quintal com prato de vaso, garrafa e pneu acumulando água da chuva, ao lado de uma bromélia." className="mt-6 h-64 w-full rounded-card object-cover sm:h-80" />
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  <li className="flex gap-2"><ShieldAlert className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Repelente, manga comprida e tela na janela protegem a pele. Não substituem a água eliminada.</li>
                  <li className="flex gap-2"><ShieldAlert className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Receba o agente de endemias. A visita não é fiscalização hostil: é o mapa do criadouro.</li>
                </ul>
              </div>
              <Checklist />
            </div>
          </section>
          <section id="quiz" className="scroll-mt-24 border-t border-line bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
              <div className="mb-8 max-w-2xl">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">07 — Quiz</p>
                <h2 className="mt-3 font-display text-4xl leading-tight">O que a palestra precisa deixar claro.</h2>
                <p className="mt-3 text-lg text-muted">Seis afirmações. Verdadeiro ou falso, com a explicação na hora — para treinar antes de falar com a comunidade.</p>
              </div>
              <Quiz />
            </div>
          </section>
          <section id="conclusao" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">08 — Conclusão</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">A dengue é um problema de casa, de quarteirão e de política pública ao mesmo tempo.</h2>
            <p className="mt-5 max-w-3xl text-lg text-muted">O <em className="text-ink">Aedes aegypti</em> não precisa de floresta. Precisa de uma tampinha com água. Em 2024 o país pagou essa conta com milhões de casos e milhares de mortes. Em 2025 o número caiu, e a vigilância continua valendo — o ovo seco espera a próxima estação, de outubro a maio. A EcoAedes existe para que essa conta seja feita em voz alta: palestra, campanha, coleta e parceria com quem já trabalha na ponta. Conscientizar não é o fim do combate. É o começo que cabe em cada quintal.</p>
          </section>
          <Compartilhar />
          <section id="equipe" className="scroll-mt-24 border-t border-line">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <h2 className="inte-1 w-fit font-display text-3xl">Integrantes</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {integrantes.map((nome) => (
                  <li key={nome} className="rounded-card border border-line bg-surface p-5">
                    <span className="flex size-12 items-center justify-center rounded-full bg-soft font-display text-lg text-primary">{iniciais(nome)}</span>
                    <p className="mt-4 font-semibold leading-snug">{nome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <footer className="border-t border-line bg-primary-deep text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-2xl">EcoAedes</p>
              <p className="mt-1 max-w-md text-sm text-paper/70">Material educativo de conscientização. Não é serviço de saúde e não fecha diagnóstico.</p>
            </div>
            <p className="max-w-sm text-sm text-paper/70">Fontes: Ministério da Saúde — página da dengue e Painel de Monitoramento das Arboviroses. Números sujeitos a atualização oficial.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
