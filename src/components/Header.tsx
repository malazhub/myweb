import { Search, X } from 'lucide-react';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  query: string;
  onQueryChange: (q: string) => void;
  onLogoClick: () => void;
  lang: LangCode;
  onLangChange: (code: LangCode) => void;
}

export default function Header({ query, onQueryChange, onLogoClick, lang, onLangChange }: HeaderProps) {
  const t = uiStrings[lang];
  const navItems = [{ label: t.navBrowse, href: '#browse' }, { label: t.navCategories, href: '#categories' }, { label: t.navAbout, href: '#about' }];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 glass">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6 lg:px-8">
        <button
          onClick={onLogoClick}
          className="flex shrink-0 items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-md shadow-brand-500/30">
            <span className="text-lg font-extrabold text-white">d</span>
          </div>
          <span className="hidden text-lg font-extrabold tracking-tight text-slate-900 sm:block">
            {t.siteName}
          </span>
        </button>

        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-full border border-slate-200 bg-slate-50/80 py-2 pl-10 pr-9 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
          />
          {query && (
            <button
              onClick={() => onQueryChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label={t.clearSearch}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <LanguageSwitcher current={lang} onChange={onLangChange} />

        <nav className="hidden shrink-0 items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
