import { Home, Wallet, Target, BarChart3 } from "lucide-react";

const iconMap = {
  home: Home,
  wallet: Wallet,
  target: Target,
  "bar-chart": BarChart3,
};

export default function NavItem({ item, isActive, onSelect, variant = "desktop" }) {
  const IconComponent = iconMap[item.icon];
  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={() => onSelect(item.id)}
        aria-current={isActive ? "page" : undefined}
        className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-xs transition-colors ${
          isActive ? "bg-nav-active-bg font-semibold text-brand-lime" : "text-nav-inactive hover:text-brand-surface"
        }`}
      >
        {IconComponent && <IconComponent className="h-4 w-4" aria-hidden="true" />}
        <span>{item.label}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
        isActive
          ? "border border-gray-200 bg-brand-surface font-semibold text-brand-forest shadow-xs"
          : "text-brand-muted hover:text-brand-dark"
      }`}
    >
      {item.label}
    </button>
  );
}
