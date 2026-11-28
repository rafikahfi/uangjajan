import { BookOpen, Gamepad2, ShoppingBag, Utensils, Wallet } from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency";

const TONE_MAP = {
  orange: {
    badgeClass: "bg-orange-100 text-orange-700",
    Icon: Utensils,
  },
  green: {
    badgeClass: "bg-emerald-100 text-emerald-700",
    Icon: Wallet,
  },
  blue: {
    badgeClass: "bg-sky-100 text-sky-700",
    Icon: BookOpen,
  },
  purple: {
    badgeClass: "bg-purple-100 text-purple-700",
    Icon: Gamepad2,
  },
  pink: {
    badgeClass: "bg-pink-100 text-pink-700",
    Icon: ShoppingBag,
  },
};

export default function TransactionList({ items }) {
  return (
    <ul aria-label="Daftar transaksi" className="mt-4 divide-y divide-gray-100">
      {items.map((item) => {
        const isIncome = item.amount > 0;
        const tone = TONE_MAP[item.tone] ?? {
          badgeClass: "bg-emerald-100 text-emerald-800",
          Icon: Wallet,
        };
        const IconComponent = tone.Icon;

        return (
          <li key={item.id} className="flex items-center justify-between gap-3 py-4 first:pt-2 last:pb-1">
            <div className="flex min-w-0 items-center gap-3.5">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${tone.badgeClass}`}>
                <IconComponent className="h-4 w-4" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-brand-dark">{item.title}</p>
                <p className="truncate text-xs text-brand-muted">
                  {item.timeLabel} · {item.category}
                </p>
              </div>
            </div>

            <span className={`shrink-0 text-sm font-bold ${isIncome ? "text-emerald-700" : "text-brand-dark"}`}>
              {isIncome ? "+" : "-"}
              {formatRupiah(item.amount)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
