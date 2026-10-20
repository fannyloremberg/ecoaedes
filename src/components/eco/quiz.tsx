import { useState } from "react";
import { quiz } from "../../lib/eco/content";

export function Quiz() {
  const [indice, setIndice] = useState(0);
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  const atual = quiz[indice];

  function responder(valor: boolean) {
    if (escolha !== null || !atual) return;
    setEscolha(valor);
    if (valor === atual.correta) setAcertos((n) => n + 1);
  }

  function proxima() {
    if (indice + 1 >= quiz.length) {
      setFim(true);
      return;
    }
    setIndice((n) => n + 1);
    setEscolha(null);
  }

  function reiniciar() {
    setIndice(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  }

  if (fim) {
    const tom =
      acertos === quiz.length
        ? "Você fechou o ciclo. Esse é o tipo de conversa que uma palestra da EcoAedes quer deixar na rua."
        : acertos >= 4
          ? "Boa base. Revise o que errou — é exatamente o ponto que costuma confundir na comunidade."
          : "Vale reler mosquito, doenças e prevenção. O quiz existe para isso: errar aqui, acertar na casa.";
    return (
      <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Resultado</p>
        <p className="mt-2 font-display text-4xl text-ink">
          {acertos} de {quiz.length}
        </p>
        <p className="mt-3 max-w-xl text-muted">{tom}</p>
        <button
          type="button"
          onClick={reiniciar}
          className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-paper"
        >
          Refazer o quiz
        </button>
      </div>
    );
  }

  if (!atual) return null;
  const acertou = escolha === atual.correta;

  return (
    <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between text-sm text-muted">
        <span>
          Pergunta {indice + 1} de {quiz.length}
        </span>
        <span className="flex gap-1.5" aria-hidden>
          {quiz.map((_, i) => (
            <span
              key={i}
              className={
                "size-1.5 rounded-full " + (i === indice ? "bg-primary" : i < indice ? "bg-primary/40" : "bg-line")
              }
            />
          ))}
        </span>
      </div>
      <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">{atual.pergunta}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {(
          [
            { valor: true, rotulo: "Verdadeiro" },
            { valor: false, rotulo: "Falso" },
          ] as const
        ).map((opcao) => {
          const marcada = escolha === opcao.valor;
          const ehCorreta = escolha !== null && opcao.valor === atual.correta;
          const errouEssa = marcada && !ehCorreta;
          return (
            <button
              key={opcao.rotulo}
              type="button"
              disabled={escolha !== null}
              onClick={() => responder(opcao.valor)}
              className={
                "rounded-card border px-4 py-4 text-base font-semibold transition-colors " +
                (ehCorreta
                  ? "border-primary bg-soft text-primary"
                  : errouEssa
                    ? "border-accent bg-paper text-accent"
                    : "border-line bg-bg text-ink hover:border-primary")
              }
            >
              {opcao.rotulo}
            </button>
          );
        })}
      </div>
      {escolha !== null ? (
        <div className="mt-5">
          <p className="text-sm font-semibold text-ink">{acertou ? "Isso." : "Quase."}</p>
          <p className="mt-1 text-muted">{atual.explica}</p>
          <button
            type="button"
            onClick={proxima}
            className="mt-4 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
          >
            {indice + 1 === quiz.length ? "Ver resultado" : "Próxima"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
