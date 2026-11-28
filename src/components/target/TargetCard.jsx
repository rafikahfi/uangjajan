import { Compass, Laptop, Sparkles } from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency";

const TARGET_TONE_MAP = {
  forest: {
    iconWrap: "bg-brand-forest/10 text-brand-forest",
    barFill: "bg-brand-forest",
    percentText: "text-brand-forest",
    Icon: Sparkles,
  },
  orange: {
    iconWrap: "bg-orange-100 text-orange-600",
    barFill: "bg-orange-400",
    percentText: "text-orange-600",
    Icon: Compass,
  },
  emerald: {
    iconWrap: "bg-emerald-100 text-emerald-700",
    barFill: "bg-emerald-600",
    percentText: "text-emerald-700",
    Icon: Laptop,
  },
};

export default function TargetCard({ target }) {
  const saved = Number(target?.savedAmount) || 0;
  const total = Number(target?.targetAmount) || 0;

  const percentage = total > 0 ? Math.min(100, Math.round((saved / total) * 100)) : 0;
  const remaining = Math.max(0, total - saved);

  const style = TARGET_TONE_MAP[target.tone] ?? TARGET_TONE_MAP.forest;
  const IconComponent = style.Icon;

  return (
    <article
      aria-label={`Target ${target.title}`}
      className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-brand-surface p-6 shadow-xs transition-shadow hover:shadow-sm"
    >
      <div>
        <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${style.iconWrap}`}>
          <IconComponent className="h-4 w-4" aria-hidden="true" />
        </span>

        <h2 className="mt-5 text-base font-bold text-brand-dark">{target.title}</h2>
        <p className="mt-1 text-xs text-brand-muted">
          {formatRupiah(saved)} dari {formatRupiah(total)}
        </p>
      </div>

      <div className="mt-5">
        <div
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progres tabungan ${target.title}`}
          className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
        >
          <div style={{ width: `${percentage}%` }} className={`h-full rounded-full transition-all ${style.barFill}`} />
        </div>

        <div className="mt-2.5 flex items-center justify-between text-xs">
          <span className={`font-semibold ${style.percentText}`}>{percentage}% tercapai</span>
          <span className="text-brand-muted">{formatRupiah(remaining)} lagi</span>
        </div>
      </div>
    </article>
  );
}
