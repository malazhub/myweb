import * as Icons from 'lucide-react';
import type { AppItem } from '@/types';
import { categories } from '@/types';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';
import { localizedApp } from '@/appCopy';

interface AppCardProps {
  app: AppItem;
  onTry: (app: AppItem) => void;
  index: number;
  lang: LangCode;
}

export default function AppCard({ app, onTry, index, lang }: AppCardProps) {
  const t = uiStrings[lang];
  const displayApp = localizedApp(app, lang);
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[app.icon] ?? Icons.AppWindow;
  const cat = categories.find((c) => c.id === app.category);
  const isExternal = Boolean(app.externalUrl);
  const catLabel = cat ? (t[`cat${cat.id.charAt(0).toUpperCase()}${cat.id.slice(1)}`] ?? cat.label) : '';

  const handleClick = () => {
    if (app.externalUrl) {
      window.open(app.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    onTry(app);
  };

  return (
    <button
      onClick={handleClick}
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
      className="group flex animate-slide-up flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
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
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {catLabel}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-lg font-bold leading-tight text-white drop-shadow-sm">{displayApp.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-white/80">{displayApp.tagline}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
          {displayApp.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex flex-wrap items-center gap-1">
            {displayApp.features.slice(0, 2).map((f) => (
              <span
                key={f}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500"
              >
                {f}
              </span>
            ))}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5">
            {isExternal ? (
              <>
                {t.open}
                <Icons.ExternalLink className="h-4 w-4" />
              </>
            ) : (
              <>
                {t.tryDemo}
                <Icons.ArrowRight className="h-4 w-4" />
              </>
            )}
          </span>
        </div>
      </div>
    </button>
  );
}
