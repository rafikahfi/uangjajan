import { useState } from "react";
import { ACTIVE_GOAL, DASHBOARD_SUMMARY, RECENT_ACTIVITIES } from "../constants/dashboardData";
import SummaryCards from "../components/home/SummaryCards";
import RecentActivityCard from "../components/home/RecentActivityCard";
import GoalAndWeeklyCard from "../components/home/GoalAndWeeklyCard";

export default function HomePage({ onNavigateTab, onOpenTransactionModal }) {
  const [audienceMode, setAudienceMode] = useState("remaja");

  return (
    <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 sm:pt-8 lg:px-8 md:pb-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium text-brand-muted">{DASHBOARD_SUMMARY.greetingDate}</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Halo, {DASHBOARD_SUMMARY.userName}!{" "}
            <span className="font-semibold text-brand-muted">Atur uangmu hari ini.</span>
          </h1>
        </div>

        <div
          role="group"
          aria-label="Mode pengguna"
          className="inline-flex w-fit rounded-full border border-gray-200 bg-brand-surface p-1"
        >
          <button
            type="button"
            onClick={() => setAudienceMode("remaja")}
            aria-pressed={audienceMode === "remaja"}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              audienceMode === "remaja"
                ? "bg-brand-forest text-brand-surface"
                : "text-brand-muted hover:text-brand-dark"
            }`}
          >
            Remaja
          </button>

          <button
            type="button"
            onClick={() => setAudienceMode("anak")}
            aria-pressed={audienceMode === "anak"}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              audienceMode === "anak" ? "bg-brand-forest text-brand-surface" : "text-brand-muted hover:text-brand-dark"
            }`}
          >
            Anak-anak
          </button>
        </div>
      </div>

      <SummaryCards summary={DASHBOARD_SUMMARY} onOpenTransactionModal={onOpenTransactionModal} />

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <RecentActivityCard activities={RECENT_ACTIVITIES} onSeeAll={() => onNavigateTab?.("transaksi")} />
        </div>

        <div className="lg:col-span-5">
          <GoalAndWeeklyCard
            goal={ACTIVE_GOAL}
            onAddSaving={() => onNavigateTab?.("target")}
            onOpenWeeklyBudget={() => onNavigateTab?.("laporan")}
          />
        </div>
      </div>
    </main>
  );
}
