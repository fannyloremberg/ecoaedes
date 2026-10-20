import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { checklistItens } from "../../lib/eco/content";

const STORAGE_KEY = "ecoaedes-varredura";

export function Checklist() {
  const [feitos, setFeitos] = useState<string[]>([]);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo) {
        const parsed: unknown = JSON.parse(salvo);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
          setFeitos(parsed);
        }
      }
    } catch {
      /* ignore broken storage */
    }
    setPronto(true);
  }, []);

  useEffect(() => {
    if (!pronto) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feitos));
  }, [feitos, pronto]);

  function alternar(id: string) {
    setFeitos((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id],
    );
  }

  const total = checklistItens.length;
  const n = feitos.length;
  const pct = Math.round((n / total) * 100);

  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <p className="font-display text-3xl text-ink">
          {n}
          <span className="text-lg text-muted"> / {total}</span>
        </p>
        <p className="text-sm text-muted">{pct}% da casa revisada</p>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden>
        <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
      </div>
      <ul className="flex flex-col gap-2">
        {checklistItens.map((item) => {
          const ativo = feitos.includes(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => alternar(item.id)}
                aria-pressed={ativo}
                className={
                  "flex w-full items-start gap-3 rounded-card border px-4 py-3 text-left transition-colors " +
                  (ativo
                    ? "border-primary bg-soft"
                    : "border-line bg-surface hover:border-primary")
                }
              >
                <span
                  className={
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border " +
                    (ativo
                      ? "border-primary bg-primary text-paper"
                      : "border-line bg-bg text-transparent")
                  }
                  aria-hidden
                >
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{item.titulo}</span>
                  <span className="mt-0.5 block text-sm text-muted">{item.detalhe}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {n === total ? (
        <p className="mt-4 text-sm font-medium text-primary">
          Varredura completa. Vale repetir depois de cada chuva — o ovo espera a água voltar.
        </p>
      ) : null}
    </div>
  );
}
