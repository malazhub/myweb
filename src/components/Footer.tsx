import { Mail } from 'lucide-react';
import type { LangCode } from '@/i18n';
import { uiStrings } from '@/i18n';

interface FooterProps {
  lang: LangCode;
}

export default function Footer({ lang }: FooterProps) {
  const t = uiStrings[lang];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700">
              <span className="text-sm font-extrabold text-white">S</span>
            </div>
            <span className="text-base font-extrabold tracking-tight text-slate-900">{t.siteName}</span>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-sm text-slate-500">
              {t.footerTagline}
            </p>
            <a
              href="mailto:malazjanbeih@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-600"
            >
              <Mail className="h-4 w-4" />
              malazjanbeih@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {t.footerRights}
        </div>
      </div>
    </footer>
  );
}
