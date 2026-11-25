import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ClipboardCheck, FileText, HardHat, Layers3, Mail, Ruler, ShoppingBag, X } from 'lucide-react';
import type { LangCode } from '@/i18n';
import { localeExtensions } from '@/appCopy';

interface ConstructionModalProps { lang: LangCode; onClose: () => void; }
const dialCodes = [
  '+961', '+1', '+44', '+33', '+49', '+971', '+966', '+974', '+965', '+973', '+968',
  '+962', '+20', '+212', '+213', '+216', '+90', '+39', '+34', '+351', '+41', '+43',
  '+31', '+32', '+46', '+47', '+45', '+358', '+48', '+30', '+7', '+91', '+92',
  '+880', '+94', '+86', '+852', '+81', '+82', '+65', '+60', '+66', '+84', '+63',
  '+62', '+61', '+64', '+55', '+52', '+54', '+56', '+57', '+27', '+234', '+254',
  '+233', '+251', '+353', '+48', '+420', '+40', '+380'
];

export default function ConstructionModal({ lang, onClose }: ConstructionModalProps) {
  const copy = localeExtensions[lang].ui;
  const [screen, setScreen] = useState<'overview' | 'contact' | 'success'>(() => new URLSearchParams(window.location.search).get('construction-inquiry') === 'sent' ? 'success' : 'overview');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dialCode, setDialCode] = useState('+961');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const projects = [
    {
      title: copy.projectTower,
      image: `${import.meta.env.BASE_URL}images/mep/mep.jpeg`,
      alt: copy.projectTower,
      icon: Layers3,
    },
    {
      title: copy.projectCampus,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Building_of_school.jpg/960px-Building_of_school.jpg',
      alt: 'A school campus building with a landscaped entrance courtyard',
      icon: HardHat,
      credit: 'Photo: Sujeetindelhi · CC BY-SA 4.0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Building_of_school.jpg',
    },
    {
      title: copy.projectMall,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Shopping_Mall_Atrium.jpeg/1280px-Shopping_Mall_Atrium.jpeg',
      alt: copy.projectMall,
      icon: ShoppingBag,
      credit: 'Photo: Abbasidaniyal · CC0',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Shopping_Mall_Atrium.jpeg',
    },
  ];
  const services = [
    { title: copy.serviceDesign, icon: Ruler },
    { title: copy.serviceDrawings, icon: Layers3 },
    { title: copy.serviceBoq, icon: ClipboardCheck },
    { title: copy.serviceReview, icon: FileText },
  ];

  // Native POST avoids browser CORS/AJAX failures and lets FormSubmit handle delivery.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:p-4" role="dialog" aria-modal="true" aria-label={copy.constructionHeading} onClick={onClose}>
      <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[92vh] sm:rounded-3xl" onClick={(event) => event.stopPropagation()}>
        <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white"><HardHat className="h-5 w-5" /></div>
            <div><p className="text-sm font-extrabold text-slate-900">{localeExtensions[lang].apps.construction.name}</p><p className="text-xs text-slate-500">{copy.constructionEyebrow}</p></div>
          </div>
          <button onClick={onClose} aria-label={copy.close} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"><X className="h-5 w-5" /></button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {screen === 'overview' && (
            <div>
              <section className="bg-slate-950 px-5 py-10 text-white sm:px-9 sm:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">{copy.constructionEyebrow}</p>
                <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{copy.constructionHeading}</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{copy.constructionBody}</p>
                <button onClick={() => setScreen('contact')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-amber-200">{copy.discussProject}<ArrowUpRight className="h-4 w-4" /></button>
              </section>
              <section className="px-5 py-8 sm:px-9 sm:py-10">
                <div className="grid gap-4 sm:grid-cols-3">
                  {projects.map((project) => { const Icon = project.icon; return (
                    <article key={project.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100"><img src={project.image} alt={project.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-slate-900 shadow-sm"><Icon className="h-4 w-4" /></span></div>
                      <div className="px-4 py-3">
                        <h2 className="text-sm font-bold text-slate-900">{project.title}</h2>
                        {project.credit && (
                          <a href={project.creditUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[10px] leading-4 text-slate-500 underline decoration-slate-300 underline-offset-2">
                            {project.credit}
                          </a>
                        )}
                      </div>
                    </article>
                  ); })}
                </div>
                <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service) => { const Icon = service.icon; return <div key={service.title} className="rounded-2xl bg-slate-50 p-4"><Icon className="h-5 w-5 text-amber-600" /><h3 className="mt-3 text-sm font-bold text-slate-900">{service.title}</h3></div>; })}
                </div>
                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex sm:items-center sm:justify-between">
                  <div><h2 className="font-extrabold text-slate-900">{copy.contactTitle}</h2><p className="mt-1 text-sm text-slate-600">{copy.contactSubtitle}</p></div>
                  <button onClick={() => setScreen('contact')} className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 sm:mt-0">{copy.discussProject}<ArrowUpRight className="h-4 w-4" /></button>
                </div>
              </section>
            </div>
          )}

          {screen === 'contact' && (
            <div className="mx-auto max-w-2xl px-5 py-10 sm:px-9 sm:py-14">
              <button onClick={() => setScreen('overview')} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"><ArrowLeft className="h-4 w-4" /> {copy.back}</button>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{copy.discussProject}</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{copy.contactTitle}</h1>
              <p className="mt-3 text-sm leading-6 text-slate-500">{copy.contactSubtitle}</p>
              <form action="https://formsubmit.co/malazjanbeih@gmail.com" method="POST" className="mt-8 space-y-5">
                <input type="hidden" name="_next" value="https://malazhub.github.io/myweb/?construction-inquiry=sent" />
                <input type="hidden" name="_subject" value={copy.emailSubject} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_replyto" value={email} />
                <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{copy.nameLabel}</span><input required name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
                <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{copy.emailLabel}</span><input required name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
                <div><span className="mb-2 block text-sm font-semibold text-slate-700">{copy.phoneLabel}</span><div className="grid grid-cols-[minmax(110px,0.35fr)_1fr] gap-2">
                  <label><span className="sr-only">{copy.countryCodeLabel}</span><select name="country_code" value={dialCode} onChange={(event) => setDialCode(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100">{dialCodes.map((code) => <option key={code} value={code}>{code}</option>)}</select></label>
                  <input required name="phone" type="tel" autoComplete="tel-national" dir="ltr" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={copy.phonePlaceholder} className="w-full min-w-0 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" />
                </div><p className="mt-1.5 text-xs text-slate-400">{copy.countryCodeLabel}: {dialCode}</p></div>
                <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{copy.messageLabel}</span><textarea required name="message" rows={5} maxLength={5000} value={message} onChange={(event) => setMessage(event.target.value)} placeholder={copy.messagePlaceholder} className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" /></label>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">
                  <Mail className="h-4 w-4" /> {copy.send}
                </button>
              </form>
            </div>
          )}

          {screen === 'success' && (
            <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 className="h-8 w-8" /></span>
              <h1 className="mt-6 text-3xl font-extrabold text-slate-900">{copy.thankYou}</h1>
              <p className="mt-3 text-base leading-7 text-slate-600">{copy.thankYouBody}</p>
              <button onClick={onClose} className="mt-7 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800">{copy.close}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
