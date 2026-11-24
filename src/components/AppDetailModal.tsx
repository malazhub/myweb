import { useEffect } from 'react';
import * as Icons from 'lucide-react';
import type { AppItem, DemoType } from '@/types';
import { categories } from '@/types';
import KanbanDemo from './demos/KanbanDemo';
import ExpenseDemo from './demos/ExpenseDemo';
import HabitDemo from './demos/HabitDemo';
import ApplicantDemo from './demos/ApplicantDemo';
import NotesDemo from './demos/NotesDemo';
import QuizDemo from './demos/QuizDemo';
import FaceVideoDemo from './demos/FaceVideoDemo';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';

interface AppDetailModalProps {
  app: AppItem;
  onClose: () => void;
  lang: LangCode;
}

const demoComponents: Record<DemoType, () => JSX.Element> = {
  kanban: KanbanDemo,
  expense: ExpenseDemo,
  habit: HabitDemo,
  applicant: ApplicantDemo,
  notes: NotesDemo,
  quiz: QuizDemo,
  faceVideo: FaceVideoDemo,
};

export default function AppDetailModal({ app, onClose, lang }: AppDetailModalProps) {
  const t = uiStrings[lang];
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[app.icon] ?? Icons.AppWindow;
  const cat = categories.find((c) => c.id === app.category);
  const DemoComponent = demoComponents[app.demo];
  const catLabel = cat ? (t[`cat${cat.id.charAt(0).toUpperCase()}${cat.id.slice(1)}`] ?? cat.label) : '';

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl animate-slide-up sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative shrink-0 p-5 sm:p-6 ${app.image ? '' : `bg-gradient-to-br ${app.gradient}`}`}>
          {app.image && (
            <img src={app.image} alt={app.imageAlt ?? app.name} className="absolute inset-0 h-full w-full object-cover" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label={t.close}
          >
            <Icons.X className="h-4 w-4" />
          </button>
          <div className="relative flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="min-w-0 flex-1 pr-8">
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  {catLabel}
                </span>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                  {t.liveDemo}
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">{app.name}</h2>
              <p className="text-sm text-white/80">{app.tagline}</p>
            </div>
          </div>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto p-5 sm:p-6">
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-3 sm:col-span-2">
              <p className="text-xs leading-relaxed text-slate-600">{app.description}</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">{t.features}</p>
              <ul className="space-y-1.5">
                {app.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Icons.Check className="h-3 w-3 shrink-0 text-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {app.videoUrl && (
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-2">
                <Icons.PlayCircle className="h-4 w-4 text-brand-500" />
                <h3 className="text-sm font-bold text-slate-800">{t.watchOverview}</h3>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-black">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={app.videoUrl}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    title={`${app.name} overview video`}
                  />
                </div>
              </div>
            </div>
          )}

          {!app.externalUrl && (
            <>
              <div className="mb-2 flex items-center gap-2">
                <Icons.Play className="h-4 w-4 text-brand-500" />
                <h3 className="text-sm font-bold text-slate-800">{t.tryDemoHere}</h3>
                <span className="text-[10px] font-medium text-slate-400">{t.interactHere}</span>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 sm:p-4">
                <DemoComponent />
              </div>
            </>
          )}

          {app.externalUrl && (
            <a
              href={app.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:brightness-105 active:scale-95"
            >
              {t.open} {app.name}
              <Icons.ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
