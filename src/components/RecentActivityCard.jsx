import { ChevronRight } from "lucide-react";
import { formatRupiah } from "../utils/formatCurrency";

const BADGE_STYLES = {
  orange: "bg-orange-100 text-orange-800",
  green: "bg-emerald-100 text-emerald-800",
  blue: "bg-sky-100 text-sky-800",
  purple: "bg-purple-100 text-purple-800",
};

export default function RecentActivityCard({ activities, onSeeAll }) {
  return (
    <section
      aria-label="Aktivitas terbaru"
      className="rounded-3xl border border-gray-100 bg-brand-surface p-6 shadow-xs lg:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-brand-dark">Aktivitas terbaru</h2>
          <p className="mt-0.5 text-xs text-brand-muted">Pantau setiap rupiah yang bergerak</p>
        </div>

        <button
          type="button"
          onClick={onSeeAll}
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-brand-forest hover:underline"
        >
          <span>Lihat semua</span>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      <ul className="mt-5 divide-y divide-gray-100">
        {activities.map((item) => {
          const isIncome = item.amount > 0;
          const badgeClass = BADGE_STYLES[item.badgeTone] ?? "bg-gray-100 text-gray-800";

          return (
            <li key={item.id} className="flex items-center justify-between gap-3 py-3.5 first:pt-1 last:pb-1">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${badgeClass}`}
                >
                  {item.badgeLetter}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-brand-dark">{item.title}</p>
                  <p className="truncate text-xs text-brand-muted">
                    {item.category} · {item.timeLabel}
                  </p>
                </div>
              </div>

              <span className={`shrink-0 text-sm font-bold ${isIncome ? "text-emerald-600" : "text-brand-dark"}`}>
                {isIncome ? "+" : "-"}
                {formatRupiah(item.amount)}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
