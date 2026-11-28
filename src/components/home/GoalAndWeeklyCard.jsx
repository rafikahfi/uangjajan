import { Calendar, ChevronRight, Disc, Plus } from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency";

export default function GoalAndWeeklyCard({ goal, onAddSaving, onOpenWeeklyBudget }) {
  const progressPercent =
    goal.targetAmount > 0 ? Math.min(100, Math.round((goal.savedAmount / goal.targetAmount) * 100)) : 0;

  return (
    <div className="flex flex-col gap-5">
      <section
        aria-label="Target tabungan aktif"
        className="rounded-3xl bg-brand-lime p-6 text-brand-forest shadow-xs lg:p-7"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-forest text-brand-lime">
            <Disc className="h-5 w-5" aria-hidden="true" />
          </span>

          <span className="rounded-full bg-white/60 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-forest uppercase">
            TARGET AKTIF
          </span>
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium text-brand-forest/80">{goal.title}</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">{formatRupiah(goal.savedAmount)}</p>
        </div>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
            <span>{progressPercent}% terkumpul</span>
            <span>{formatRupiah(goal.targetAmount)}</span>
          </div>

          <div
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progres tabungan ${goal.title}`}
            className="h-2 w-full overflow-hidden rounded-full bg-brand-forest/15"
          >
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full rounded-full bg-brand-forest transition-all"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onAddSaving}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-surface py-2.5 text-sm font-semibold text-brand-forest transition-colors hover:bg-white/90"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span>Tambah tabungan</span>
        </button>
      </section>

      <button
        type="button"
        onClick={onOpenWeeklyBudget}
        className="flex w-full items-center justify-between rounded-3xl border border-gray-100 bg-brand-surface p-5 text-left shadow-xs transition-colors hover:bg-gray-50"
      >
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
            <Calendar className="h-5 w-5" aria-hidden="true" />
          </span>

          <div>
            <p className="text-sm font-bold text-brand-dark">Atur uang mingguan</p>
            <p className="mt-0.5 text-xs text-brand-muted">Buat batas jajan agar tetap hemat</p>
          </div>
        </div>

        <ChevronRight className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden="true" />
      </button>
    </div>
  );
}
