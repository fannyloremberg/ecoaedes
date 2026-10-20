import { useEffect, useState, type ReactNode } from "react";

export function CasesChart() {
  const [node, setNode] = useState<ReactNode>(null);

  useEffect(() => {
    let live = true;
    void import("./cases-inner").then((mod) => {
      if (live) setNode(<mod.CasesChartInner />);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="h-72 w-full sm:h-80">
      {node ?? <div className="h-full animate-pulse rounded-card bg-soft" aria-hidden />}
    </div>
  );
}
