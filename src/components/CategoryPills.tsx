import * as Icons from 'lucide-react';
import type { Category, CategoryId } from '@/types';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';
import { localeExtensions } from '@/appCopy';

interface CategoryPillsProps {
  categories: Category[];
  active: CategoryId | 'all';
  onSelect: (id: CategoryId | 'all') => void;
  lang: LangCode;
}

export default function CategoryPills({ categories, active, onSelect, lang }: CategoryPillsProps) {
  const t = { ...uiStrings[lang], ...localeExtensions[lang].ui };
  const allPill = {
    id: 'all' as const,
    label: t.all,
    icon: 'Grid3x3',
    color: 'slate',
    description: '',
  };

  const pills: Array<{ id: CategoryId | 'all'; label: string; icon: string; color: string; description: string }> = [
    allPill,
    ...categories,
  ];

  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      {pills.map((cat) => {
        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[cat.icon] ?? Icons.Circle;
        const isActive = active === cat.id;
        const label = cat.id === 'all' ? t.all : t[`cat${cat.id.charAt(0).toUpperCase()}${cat.id.slice(1)}`] ?? cat.label;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
              isActive
                ? 'border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/25'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
