import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { serieDengue } from "../../lib/eco/content";

type TipPayload = { value?: number };

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const valor = payload[0]?.value ?? 0;
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink shadow-sm">
      <p className="font-semibold">{label}</p>
      <p className="text-muted">{valor.toFixed(2).replace(".", ",")} milhão de casos prováveis</p>
    </div>
  );
}

export function CasesChartInner() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={[...serieDengue]} barCategoryGap="28%">
        <CartesianGrid vertical={false} stroke="var(--color-line)" />
        <XAxis
          dataKey="ano"
          tick={{ fill: "var(--color-muted)", fontSize: 13 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "var(--color-muted)", fontSize: 13 }}
          axisLine={false}
          tickLine={false}
          width={36}
        />
        <Tooltip content={<Tip />} cursor={{ fill: "var(--color-soft)" }} />
        <Bar dataKey="milhoes" fill="var(--color-primary)" radius={[6, 6, 0, 0]} maxBarSize={42} />
      </BarChart>
    </ResponsiveContainer>
  );
}
