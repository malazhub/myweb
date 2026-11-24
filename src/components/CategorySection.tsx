import * as Icons from 'lucide-react';
import type { Category } from '@/types';
import { apps } from '@/types';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';
import { localeExtensions, localizedApp } from '@/appCopy';

interface CategorySectionProps {
  category: Category;
  onTry: (appId: string) => void;
  lang: LangCode;
}

export default function CategorySection({ category, onTry, lang }: CategorySectionProps) {
  const t = { ...uiStrings[lang], ...localeExtensions[lang].ui };
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Circle;
  const categoryApps = apps.filter((a) => a.category === category.id).map((a) => localizedApp(a, lang));
  const labelKey = `cat${category.id.charAt(0).toUpperCase()}${category.id.slice(1)}`;
  const descKey = `cat${category.id.charAt(0).toUpperCase()}${category.id.slice(1)}Desc`;
  const label = t[labelKey] ?? category.label;
  const desc = t[descKey] ?? category.description;

  if (categoryApps.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{label}</h3>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
        <span className="ml-auto rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-500">
          {categoryApps.length} {t.appsCount}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryApps.map((app) => {
          const AppIcon = (Icons as unknown as Record<string, Icons.LucideIcon>)[app.icon] ?? Icons.AppWindow;
          const isExternal = Boolean(app.externalUrl);
          const appCatLabel = t[`cat${app.category.charAt(0).toUpperCase()}${app.category.slice(1)}`] ?? app.category;
          const handleClick = () => {
            if (app.externalUrl) {
              window.open(app.externalUrl, '_blank', 'noopener,noreferrer');
              return;
            }
            onTry(app.id);
          };
          return (
            <button
              key={app.id}
              onClick={handleClick}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className={`relative aspect-[9/16] w-full overflow-hidden ${app.image ? '' : `bg-gradient-to-br ${app.gradient}`}`}>
                {app.image && (
                  <img
                    src={app.image}
                    alt={app.imageAlt ?? app.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/10" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/25 backdrop-blur-sm">
                  <AppIcon className="h-5 w-5 text-white" />
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  {appCatLabel}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <h4 className="text-sm font-bold leading-tight text-white drop-shadow-sm">{app.name}</h4>
                  <p className="mt-0.5 text-[11px] text-white/80">{app.tagline}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">{app.description}</p>
                <span className="mt-auto pt-3 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5">
                  {isExternal ? `${t.open} ↗` : `${t.tryDemo} →`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
