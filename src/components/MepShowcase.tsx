import {
  ArrowUpRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Layers3,
  Ruler,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    label: '01 / Commercial tower',
    title: 'High-rise MEP coordination',
    detail: 'Integrated services planning for a landmark office building.',
    image: '/images/mep/mep.jpeg',
    className: 'md:col-span-2 md:row-span-2',
    icon: Layers3,
  },
  {
    label: '02 / Education',
    title: 'School campus systems',
    detail: 'Clear, coordinated services for spaces built around learning.',
    className: 'bg-gradient-to-br from-[#dbeafe] via-[#f5f9ff] to-[#cbd5e1]',
    icon: GraduationCap,
  },
  {
    label: '03 / Retail',
    title: 'Mall infrastructure',
    detail: 'Reliable building systems designed for busy public environments.',
    className: 'bg-gradient-to-br from-[#fef3c7] via-[#fffaf0] to-[#fed7aa]',
    icon: ShoppingBag,
  },
  {
    label: '04 / Documentation',
    title: 'Technical review set',
    detail: 'Organised drawings and schedules ready for construction teams.',
    className: 'bg-gradient-to-br from-[#d1fae5] via-[#f4fff9] to-[#a7f3d0]',
    icon: FileText,
  },
];

const services = [
  { icon: Ruler, title: 'MEP design', text: 'Practical mechanical, electrical and plumbing design for buildable results.' },
  { icon: Layers3, title: 'Shop drawings', text: 'Detailed coordination drawings that help teams install with confidence.' },
  { icon: ClipboardCheck, title: 'Bill of quantity', text: 'Measured schedules that keep scope, materials and cost visible.' },
  { icon: FileText, title: 'Documents review', text: 'A focused review to catch conflicts before they reach the site.' },
];

export default function MepShowcase() {
  return (
    <section id="mep" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-200">
              <Sparkles className="h-3.5 w-3.5" />
              Construction documentation
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              From first layout to final review.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              A dedicated MEP design studio for projects that need clear coordination, dependable quantities and documentation teams can build from.
            </p>
            <a
              href="mailto:malazjanbeih@gmail.com?subject=MEP%20design%20inquiry"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-brand-100 hover:shadow-lg hover:shadow-brand-500/20"
            >
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[190px]">
            {projects.map((project) => {
              const Icon = project.icon;
              const hasImage = Boolean(project.image);
              return (
                <article
                  key={project.title}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 ${project.className}`}
                >
                  {hasImage && (
                    <img
                      src={project.image}
                      alt="Modern commercial tower prepared for MEP design"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {!hasImage && <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(15,23,42,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.12)_1px,transparent_1px)] [background-size:28px_28px]" />}
                  <div className={`absolute inset-0 ${hasImage ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/5' : 'bg-gradient-to-t from-slate-900/70 via-slate-900/5 to-transparent'}`} />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="flex items-start justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${hasImage ? 'text-white/70' : 'text-slate-700/70'}`}>
                        {project.label}
                      </span>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${hasImage ? 'bg-white/15 text-white' : 'bg-white/70 text-slate-800'} backdrop-blur-sm`}>
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <div>
                      <h3 className={`text-xl font-extrabold tracking-tight ${hasImage ? 'text-white' : 'text-slate-950'}`}>
                        {project.title}
                      </h3>
                      <p className={`mt-1 max-w-xs text-xs leading-5 ${hasImage ? 'text-white/75' : 'text-slate-700'}`}>
                        {project.detail}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-2xl p-4 transition-colors hover:bg-white/5">
                <Icon className="h-5 w-5 text-brand-300" />
                <h3 className="mt-4 text-sm font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
