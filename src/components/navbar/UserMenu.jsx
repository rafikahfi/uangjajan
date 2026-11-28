import { Bell, ChevronDown } from "lucide-react";

export default function UserMenu({ userName = "Rafi", roleLabel = "remaja" }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Notifikasi"
        className=" rounded-full border border-gray-200 bg-brand-surface p-2 text-brand-dark transition-colors hover:bg-gray-50"
      >
        <Bell className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={`Profil ${userName}, mode ${roleLabel}`}
        className="flex items-center gap-2 rounded-full bg-brand-surface px-3 py-1.5 text-left transition-colors hover:bg-gray-50"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-200 text-xs font-bold text-orange-900">
          {userName.charAt(0)}
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-semibold text-brand-dark">{userName}</span>
          <span className="block text-sm text-brand-muted">{roleLabel}</span>
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-brand-muted" aria-hidden="true" />
      </button>
    </div>
  );
}
