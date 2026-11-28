import { Calendar } from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency";

export default function TransactionSummary({ summary, activeFilter, onToggleFilter }) {
  const income = Number(summary?.monthlyIncome) || 0;
  const expense = Number(summary?.monthlyExpense) || 0;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-brand-dark">Semua transaksi</h2>
          <p className="mt-0.5 text-xs text-brand-muted">
            {summary.periodLabel} · {summary.totalCountLabel}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleFilter}
          aria-label="Ubah filter periode transaksi"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-brand-surface px-3.5 py-2 text-xs font-semibold text-brand-dark transition-colors hover:border-brand-forest/30 hover:bg-brand-bg"
        >
          <Calendar className="h-3.5 w-3.5 text-brand-forest" aria-hidden="true" />
          <span>{activeFilter}</span>
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 rounded-2xl border border-emerald-900/10 bg-brand-bg p-4 sm:grid-cols-2 sm:gap-6">
        <div>
          <p className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase">UANG MASUK</p>
          <p className="mt-1 text-lg font-bold text-emerald-700">{formatRupiah(income)}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase">UANG KELUAR</p>
          <p className="mt-1 text-lg font-bold text-brand-coral">{formatRupiah(expense)}</p>
        </div>
      </div>
    </div>
  );
}
