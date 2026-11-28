import { ArrowDown, ArrowUp, BarChart2, MoreHorizontal, Plus } from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency";

export default function SummaryCards({ summary, onOpenTransactionModal }) {
  const expenseRatio =
    summary.monthlyIncome > 0 ? Math.min(100, Math.round((summary.monthlyExpense / summary.monthlyIncome) * 100)) : 0;

  return (
    <section aria-label="Ringkasan saldo dan pengeluaran" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-forest p-6 text-brand-surface shadow-sm lg:col-span-7 lg:p-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-white/75">Total saldo kamu</p>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{formatRupiah(summary.totalBalance)}</p>
          </div>

          <button
            type="button"
            aria-label="Opsi saldo"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20"
          >
            <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime text-brand-forest">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs text-white/70">Uang masuk</span>
                <span className="text-sm font-semibold">{formatRupiah(summary.monthlyIncome)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-coral/25 text-brand-coral">
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs text-white/70">Uang keluar</span>
                <span className="text-sm font-semibold">{formatRupiah(summary.monthlyExpense)}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenTransactionModal}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-forest transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span>Catat transaksi</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-brand-surface p-6 shadow-xs lg:col-span-5 lg:p-7">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-brand-muted">Pengeluaran bulan ini</p>
              <p className="mt-2 text-2xl font-bold text-brand-dark sm:text-3xl">
                {formatRupiah(summary.monthlyExpense)}
              </p>
            </div>

            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-coral/15 text-brand-coral">
              <BarChart2 className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-5">
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-medium text-brand-muted">{expenseRatio}% dari uang masuk</span>
              <span className="font-semibold text-brand-dark">{formatRupiah(summary.monthlyIncome)}</span>
            </div>

            <div
              role="progressbar"
              aria-valuenow={expenseRatio}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Persentase pengeluaran bulan ini terhadap uang masuk"
              className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
            >
              <div
                style={{ width: `${expenseRatio}%` }}
                className="h-full rounded-full bg-brand-coral transition-all"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-brand-bg px-4 py-3 text-xs leading-relaxed text-brand-muted">
          {summary.expenseStatusNote}
        </div>
      </div>
    </section>
  );
}
