import { Wallet, Bell } from "lucide-react";
import { NAV_ITEMS } from "../../constants/navItems";
import NavItem from "./NavItem";
import UserMenu from "./UserMenu";

export default function Navbar({ activeTab, onSelectTab }) {
  function handleLogoClick(e) {
    e.preventDefault();
    onSelectTab("beranda");
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-brand-surface/95 px-4 py-3.5 shadow-2xs backdrop-blur-xs sm:px-6 lg:px-8">
        <div className="mx-auto flex max-6-xl items-center justify-between ">
          <div className="flex items-center gap-8">
            <a
              href="#beranda"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 text-lg font-bold text-brand-dark"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-forest text-brand-lime">
                <Wallet className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>UangJajan</span>
            </a>
            <nav aria-label="Navigasi Utama" className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  isActive={activeTab === item.id}
                  onSelect={onSelectTab}
                  variant="desktop"
                />
              ))}
            </nav>
          </div>
          <div className="hidden md:block">
            <UserMenu />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Notifikasi"
              className="rounded-full border border-gray-200 bg-brand-surface p-2 text-brand-dark"
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-200 text-xs font-bold text-orange-900">
              R
            </span>
          </div>
        </div>
      </header>
      <nav
        aria-label="Navigasi mobile"
        className="fixed right-4 bottom-4 left-4 z-50 flex justify-around rounded-2xl bg-brand-forest p-2 shadow-lg md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} item={item} isActive={activeTab === item.id} onSelect={onSelectTab} variant="mobile" />
        ))}
      </nav>
    </>
  );
}
