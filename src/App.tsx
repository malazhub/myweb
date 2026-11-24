import { useState, useMemo, useRef, useEffect } from 'react';
import type { AppItem, CategoryId } from '@/types';
import { apps, categories } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryPills from '@/components/CategoryPills';
import CategorySection from '@/components/CategorySection';
import AppCard from '@/components/AppCard';
import AppDetailModal from '@/components/AppDetailModal';
import Footer from '@/components/Footer';
import MepShowcase from '@/components/MepShowcase';
import type { LangCode } from '@/i18n';
import { uiStrings, languages } from '@/i18n';

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [lang, setLang] = useState<LangCode>('en');
  const browseRef = useRef<HTMLDivElement>(null);
  const t = uiStrings[lang];
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
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.features.some((f) => f.toLowerCase().includes(q)),
      );
    }
    return [...result].sort((a, b) => b.popularity - a.popularity);
  }, [query, activeCategory]);

  const scrollToBrowse = () => {
    browseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleTryApp = (app: AppItem) => {
    if (app.externalUrl) {
      window.open(app.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedApp(app);
  };
  const handleTryAppById = (id: string) => {
    const app = apps.find((a) => a.id === id);
    if (app) handleTryApp(app);
  };

  const showCategoryView = activeCategory === 'all' && !query.trim();

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
        <MepShowcase />

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
          ) : showCategoryView ? (
            <div id="about" className="space-y-2">
              {categories.map((cat) => (
                <CategorySection key={cat.id} category={cat} onTry={handleTryAppById} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredApps.map((app, i) => (
                <AppCard key={app.id} app={app} onTry={handleTryApp} index={i} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer lang={lang} />

      {selectedApp && (
        <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} lang={lang} />
      )}
    </div>
  );
}
