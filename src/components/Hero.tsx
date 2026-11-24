import { ArrowRight } from 'lucide-react';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';

interface HeroProps {
  onExplore: () => void;
  lang: LangCode;
}

export default function Hero({ onExplore, lang }: HeroProps) {
  const t = uiStrings[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute top-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-warn-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 animate-slide-up sm:text-5xl lg:text-6xl">
          {t.heroLine1Pre}{' '}
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
            {t.heroLine1Highlight}
          </span>{' '}
          {t.heroLine1Post}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 animate-slide-up sm:text-lg">
          {t.heroSub}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 animate-slide-up sm:flex-row">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-105 active:scale-95"
          >
            {t.heroExplore}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
          >
            {t.heroCategories}
          </a>
        </div>
      </div>
    </section>
  );
}
