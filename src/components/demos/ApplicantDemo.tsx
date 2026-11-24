import { useState } from 'react';
import { Mail, Calendar, Star, User, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  stage: 'applied' | 'screening' | 'interview' | 'offer' | 'hired';
  email: string;
  appliedDate: string;
  rating: number;
  initials: string;
  color: string;
}

const initialCandidates: Candidate[] = [
  { id: 'c1', name: 'Sarah Chen', role: 'Frontend Engineer', stage: 'interview', email: 'sarah.c@email.com', appliedDate: 'Aug 10', rating: 5, initials: 'SC', color: 'bg-brand-500' },
  { id: 'c2', name: 'Marcus Johnson', role: 'Product Designer', stage: 'screening', email: 'm.johnson@email.com', appliedDate: 'Aug 12', rating: 4, initials: 'MJ', color: 'bg-accent-500' },
  { id: 'c3', name: 'Elena Rodriguez', role: 'Backend Engineer', stage: 'offer', email: 'elena.r@email.com', appliedDate: 'Aug 5', rating: 5, initials: 'ER', color: 'bg-warn-500' },
  { id: 'c4', name: 'David Park', role: 'Data Analyst', stage: 'applied', email: 'dpark@email.com', appliedDate: 'Aug 14', rating: 3, initials: 'DP', color: 'bg-slate-500' },
  { id: 'c5', name: 'Aisha Patel', role: 'Frontend Engineer', stage: 'hired', email: 'aisha.p@email.com', appliedDate: 'Jul 28', rating: 5, initials: 'AP', color: 'bg-brand-600' },
];

const stages: { id: Candidate['stage']; label: string; icon: typeof Mail }[] = [
  { id: 'applied', label: 'Applied', icon: Mail },
  { id: 'screening', label: 'Screening', icon: User },
  { id: 'interview', label: 'Interview', icon: Calendar },
  { id: 'offer', label: 'Offer', icon: Star },
  { id: 'hired', label: 'Hired', icon: CheckCircle2 },
];

export default function ApplicantDemo() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selected, setSelected] = useState<Candidate | null>(initialCandidates[0]);

  const advanceStage = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const idx = stages.findIndex((s) => s.id === c.stage);
        if (idx >= stages.length - 1) return c;
        return { ...c, stage: stages[idx + 1].id };
      }),
    );
    if (selected?.id === id) {
      const idx = stages.findIndex((s) => s.id === selected.stage);
      if (idx < stages.length - 1) {
        setSelected({ ...selected, stage: stages[idx + 1].id });
      }
    }
  };

  const stageCounts = stages.map((s) => ({
    ...s,
    count: candidates.filter((c) => c.stage === s.id).length,
  }));

  return (
    <div className="space-y-4">
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
        {stageCounts.map((s, i) => (
          <div key={s.id} className="flex shrink-0 items-center gap-1.5">
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5">
              <s.icon className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-[10px] font-bold text-slate-600">{s.label}</span>
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                {s.count}
              </span>
            </div>
            {i < stageCounts.length - 1 && <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />}
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-5">
        <div className="space-y-1.5 sm:col-span-2">
          <p className="px-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">Candidates</p>
          <div className="max-h-64 space-y-1.5 overflow-y-auto">
            {candidates.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={`flex w-full items-center gap-2.5 rounded-lg border p-2 text-left transition-all ${
                  selected?.id === c.id
                    ? 'border-brand-300 bg-brand-50'
                    : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${c.color}`}>
                  {c.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-slate-700">{c.name}</p>
                  <p className="truncate text-[10px] text-slate-400">{c.role}</p>
                </div>
                <div className="flex shrink-0 items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-2.5 w-2.5 ${i < c.rating ? 'fill-warn-400 text-warn-400' : 'text-slate-200'}`}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-3">
          {selected && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white ${selected.color}`}>
                  {selected.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{selected.name}</p>
                  <p className="text-xs text-slate-500">{selected.role}</p>
                </div>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  {selected.email}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  Applied {selected.appliedDate}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Rating:</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < selected.rating ? 'fill-warn-400 text-warn-400' : 'text-slate-200'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-lg bg-slate-50 p-2.5">
                <p className="text-[10px] font-bold uppercase text-slate-400">Current stage</p>
                <p className="text-sm font-bold text-brand-600">
                  {stages.find((s) => s.id === selected.stage)?.label}
                </p>
              </div>

              {selected.stage !== 'hired' ? (
                <button
                  onClick={() => advanceStage(selected.id)}
                  className="mt-3 w-full rounded-lg bg-brand-500 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-600 active:scale-95"
                >
                  Advance to {stages.find((s) => s.id === selected.stage)?.label ? stages[stages.findIndex((s) => s.id === selected.stage) + 1]?.label : 'next'}
                </button>
              ) : (
                <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-accent-50 py-2 text-xs font-bold text-accent-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Hired!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
