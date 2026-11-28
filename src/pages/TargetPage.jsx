import { Plus } from "lucide-react";
import { INITIAL_TARGETS } from "../constants/targetData";
import TargetCard from "../components/target/TargetCard";
import AddTargetCard from "../components/target/AddTargetCard";

export default function TargetPage({ onOpenTransactionModal, onOpenCreateTargetModal }) {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 sm:pt-8 md:pb-12 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold tracking-wider text-brand-forest uppercase">Uang Jajan</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">Target</h1>
          <p className="mt-1 text-sm text-brand-muted">Ubah keinginan jadi kenyataan, sedikit demi sedikit.</p>
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

      <section aria-label="Daftar target tabungan" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INITIAL_TARGETS.map((target) => (
          <TargetCard key={target.id} target={target} />
        ))}

        <AddTargetCard onCreateTarget={onOpenCreateTargetModal} />
      </section>
    </main>
  );
}
