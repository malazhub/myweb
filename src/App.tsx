import { useState, useMemo, useRef, useEffect } from 'react';
import type { AppItem, CategoryId } from '@/types';
import { apps, categories } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryPills from '@/components/CategoryPills';
import AppCard from '@/components/AppCard';
import AppDetailModal from '@/components/AppDetailModal';
import Footer from '@/components/Footer';
import ConstructionModal from '@/components/ConstructionModal';
import type { LangCode } from '@/i18n';
import { uiStrings, languages } from '@/i18n';
import * as Icons from 'lucide-react';
import { localeExtensions, localizedApp } from '@/appCopy';

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [showConstruction, setShowConstruction] = useState(false);
  const [lang, setLang] = useState<LangCode>('en');
  const browseRef = useRef<HTMLDivElement>(null);
  const t = { ...uiStrings[lang], ...localeExtensions[lang].ui };
  const awaitIconMap = Icons as unknown as Record<string, Icons.LucideIcon>;
  const isRTL = languages.find((l) => l.code === lang)?.rtl ?? false;

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const filteredApps = useMemo(() => {
    let result = apps;
    if (activeCategory !== 'all') {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((a) => {
        const copy = localizedApp(a, lang);
        return copy.name.toLowerCase().includes(q) || copy.tagline.toLowerCase().includes(q) || copy.description.toLowerCase().includes(q) || copy.features.some((f) => f.toLowerCase().includes(q));
      });
    }
    return [...result].sort((a, b) => b.popularity - a.popularity);
  }, [query, activeCategory, lang]);

  const scrollToBrowse = () => {
    browseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleTryApp = (app: AppItem) => {
    if (app.id === 'construction') {
      setShowConstruction(true);
      return;
    }
    if (app.externalUrl) {
      window.open(app.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedApp(app);
  };
  return (
    <div className="min-h-screen bg-white">
      <Header
        query={query}
        onQueryChange={setQuery}
        onLogoClick={() => setActiveCategory('all')}
        lang={lang}
        onLangChange={setLang}
      />

      <main>
        <Hero onExplore={scrollToBrowse} lang={lang} />
        <div ref={browseRef} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div id="browse" className="mb-6 flex flex-col gap-4">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {query.trim() ? t.searchResults : t.browseApps}
                </h2>
              </div>
            </div>

            <div id="categories">
              <CategoryPills
                categories={categories}
                active={activeCategory}
                onSelect={setActiveCategory}
                lang={lang}
              />
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold text-slate-700">{t.noAppsTitle}</p>
              <p className="mt-1 text-sm text-slate-400">
                {t.noAppsSub}
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600"
              >
                {t.clearFilters}
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredApps.map((app, i) => (
                <AppCard key={app.id} app={app} onTry={handleTryApp} index={i} lang={lang} />
              ))}
            </div>
          )}
        </div>
        <section id="about" className="border-t border-slate-100 bg-slate-50/70 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{t.siteName}</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{t.aboutTitle}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{t.aboutBody}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat) => {
                const Icon = awaitIconMap[cat.icon];
                const label = cat.id === 'construction' ? t.catConstruction : t[`cat${cat.id.charAt(0).toUpperCase()}${cat.id.slice(1)}`] ?? cat.label;
                const description = cat.id === 'construction' ? t.catConstructionDesc : t[`cat${cat.id.charAt(0).toUpperCase()}${cat.id.slice(1)}Desc`] ?? cat.description;
                return (
                  <button key={cat.id} onClick={() => { setQuery(''); setActiveCategory(cat.id); scrollToBrowse(); }} className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">{Icon ? <Icon className="h-4 w-4" /> : null}</span>
                      <span className="font-bold text-slate-900">{label}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />

      {selectedApp && (
        <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} lang={lang} />
      )}
      {showConstruction && <ConstructionModal lang={lang} onClose={() => setShowConstruction(false)} />}
    </div>
  );
}
