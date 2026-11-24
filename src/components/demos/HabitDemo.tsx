import { useState } from 'react';
import { Flame, Plus, Check, Droplets, Footprints, BookOpen, Brain, Dumbbell, Moon, type LucideIcon } from 'lucide-react';

interface Habit {
  id: string;
  name: string;
  icon: string;
  streak: number;
  doneToday: boolean;
  weekHistory: boolean[];
}

const initialHabits: Habit[] = [
  {
    id: 'h1',
    name: 'Drink water',
    icon: 'Droplets',
    streak: 12,
    doneToday: false,
    weekHistory: [true, true, true, false, true, true, false],
  },
  {
    id: 'h2',
    name: 'Morning run',
    icon: 'Footprints',
    streak: 5,
    doneToday: true,
    weekHistory: [false, true, true, true, true, true, true],
  },
  {
    id: 'h3',
    name: 'Read 20 min',
    icon: 'BookOpen',
    streak: 23,
    doneToday: false,
    weekHistory: [true, true, true, true, true, true, false],
  },
  {
    id: 'h4',
    name: 'Meditate',
    icon: 'Brain',
    streak: 3,
    doneToday: false,
    weekHistory: [false, false, true, true, true, false, false],
  },
];

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Footprints,
  BookOpen,
  Brain,
  Dumbbell,
  Moon,
};

export default function HabitDemo() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newIcon, setNewIcon] = useState('Dumbbell');

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const doneToday = !h.doneToday;
        const weekHistory = [...h.weekHistory];
        weekHistory[6] = doneToday;
        return {
          ...h,
          doneToday,
          streak: doneToday ? h.streak + 1 : Math.max(0, h.streak - 1),
          weekHistory,
        };
      }),
    );
  };

  const addHabit = () => {
    if (!newName.trim()) return;
    setHabits((prev) => [
      ...prev,
      {
        id: `h${Date.now()}`,
        name: newName,
        icon: newIcon,
        streak: 0,
        doneToday: false,
        weekHistory: [false, false, false, false, false, false, false],
      },
    ]);
    setNewName('');
    setShowAdd(false);
  };

  const totalDone = habits.filter((h) => h.doneToday).length;
  const pct = habits.length > 0 ? Math.round((totalDone / habits.length) * 100) : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 p-3 text-white">
        <div className="relative h-12 w-12">
          <svg className="h-12 w-12 -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
            <circle
              cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="4"
              strokeDasharray={`${(pct / 100) * 125.6} 125.6`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-extrabold">
            {pct}%
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-white/80">Today's progress</p>
          <p className="text-lg font-extrabold">{totalDone} of {habits.length} done</p>
        </div>
      </div>

      <div className="space-y-2">
        {habits.map((h) => (
          <div
            key={h.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
          >
            <button
              onClick={() => toggleHabit(h.id)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all active:scale-90 ${
                h.doneToday
                  ? 'border-accent-500 bg-accent-500 text-white'
                  : 'border-slate-200 bg-white text-transparent hover:border-accent-300'
              }`}
            >
              <Check className="h-5 w-5" />
            </button>

            <div className="min-w-0 flex-1">
              <p className={`text-sm font-semibold ${h.doneToday ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {h.name}
              </p>
              <div className="mt-1 flex items-center gap-1">
                {h.weekHistory.map((done, i) => (
                  <span
                    key={i}
                    className={`h-3.5 w-3.5 rounded-sm ${
                      done ? 'bg-accent-400' : 'bg-slate-100'
                    }`}
                    title={days[i]}
                  />
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 rounded-full bg-warn-50 px-2 py-1">
              <Flame className="h-3.5 w-3.5 text-warn-500" />
              <span className="text-xs font-bold text-warn-700">{h.streak}</span>
            </div>
          </div>
        ))}
      </div>

      {showAdd ? (
        <div className="rounded-xl border border-accent-200 bg-accent-50/50 p-3">
          <input
            autoFocus
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addHabit()}
            placeholder="New habit name…"
            className="mb-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-accent-400"
          />
          <div className="mb-2 flex gap-1.5">
            {Object.entries(iconMap).map(([ic, IconComp]) => {
              return (
                <button
                  key={ic}
                  onClick={() => setNewIcon(ic)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    newIcon === ic ? 'border-accent-500 bg-accent-100' : 'border-slate-200 bg-white'
                  }`}
                >
                  <IconComp className="h-4 w-4 text-slate-600" />
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <button
              onClick={addHabit}
              className="flex-1 rounded-lg bg-accent-500 py-2 text-xs font-bold text-white hover:bg-accent-600"
            >
              Add habit
            </button>
            <button
              onClick={() => setShowAdd(false)}
              className="rounded-lg px-3 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAdd(true)}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-200 py-2.5 text-sm font-semibold text-slate-400 transition-colors hover:border-accent-300 hover:text-accent-500"
        >
          <Plus className="h-4 w-4" />
          Add habit
        </button>
      )}
    </div>
  );
}
