import { useState } from "react";
import { Plus } from "lucide-react";
import { INITIAL_TRANSACTIONS, TRANSACTION_SUMMARY } from "../constants/transactionData";
import TransactionSummary from "../components/transaction/TransactionSummary";
import TransactionList from "../components/transaction/TransactionList";

export default function TransactionPage({ onOpenTransactionModal }) {
  const [activeFilter, setActiveFilter] = useState(TRANSACTION_SUMMARY.defaultFilter);

  function handleToggleFilter() {
    setActiveFilter((prev) => (prev === "Bulan ini" ? "Minggu ini" : "Bulan ini"));
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 sm:pt-8 lg:px-8 md:pb-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold tracking-wider text-brand-forest uppercase">Uang Jajan</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">Transaksi</h1>
          <p className="mt-1 text-sm text-brand-muted">Semua pemasukan dan pengeluaran dalam satu tempat.</p>
        </div>

        <button
          type="button"
          onClick={onOpenTransactionModal}
          aria-label="Tambah transaksi"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime text-brand-forest shadow-xs transition-opacity hover:opacity-90 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm sm:font-semibold"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Tambah transaksi</span>
        </button>
      </div>

      <section
        aria-label="Ringkasan dan riwayat transaksi"
        className="rounded-3xl border border-gray-100 bg-brand-surface p-6 shadow-xs lg:p-7"
      >
        <TransactionSummary
          summary={TRANSACTION_SUMMARY}
          activeFilter={activeFilter}
          onToggleFilter={handleToggleFilter}
        />
        <TransactionList items={INITIAL_TRANSACTIONS} />
      </section>
    </main>
  );
}
