import { Plus } from "lucide-react";

export default function AddTargetCard({ onCreateTarget }) {
  return (
    <button
      type="button"
      onClick={onCreateTarget}
      aria-label="Buat target tabungan baru"
      className="group flex min-h-48 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-brand-forest/25 bg-brand-forest/3 p-6 text-center transition-colors hover:border-brand-forest/50 hover:bg-brand-forest/6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-surface text-brand-forest shadow-xs transition-transform group-hover:scale-105">
        <Plus className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-brand-forest">Buat target baru</span>
    </button>
  );
}
