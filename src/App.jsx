import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import TargetPage from "./pages/TargetPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("beranda");

  function handleOpenTransactionModal() {
    setActiveTab("transaksi");
  }
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />
      {activeTab === "beranda" && (
        <HomePage onNavigateTab={setActiveTab} onOpenTransactionModal={handleOpenTransactionModal} />
      )}

      {activeTab === "transaksi" && <TransactionPage onOpenTransactionModal={() => {}} />}

      {activeTab === "target" && (
        <TargetPage onOpenTransactionModal={handleOpenTransactionModal} onOpenCreateTargetModal={() => {}} />
      )}

      {activeTab === "laporan" && (
        <main className="mx-auto max-w-6xl px-4 py-8 pb-28 md:pb-12">
          <div className="rounded-3xl border border-gray-100 bg-brand-surface p-6">
            <h2 className="text-lg font-bold capitalize">{activeTab}</h2>
            <p className="mt-1 text-sm text-brand-muted">Halaman {activeTab} sedang disiapkan.</p>
          </div>
        </main>
      )}
    </div>
  );
}
