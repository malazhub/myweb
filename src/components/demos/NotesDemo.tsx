import { useState } from 'react';
import { Plus, Search, Pin, Trash2, Tag } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  body: string;
  tag: string;
  color: string;
  pinned: boolean;
}

const initialNotes: Note[] = [
  { id: 'n1', title: 'Project ideas', body: 'Build a habit tracker app with streaks and weekly insights.', tag: 'ideas', color: 'bg-brand-50 border-brand-200', pinned: true },
  { id: 'n2', title: 'Meeting notes', body: 'Discussed Q3 roadmap. Focus on mobile experience and speed.', tag: 'work', color: 'bg-accent-50 border-accent-200', pinned: false },
  { id: 'n3', title: 'Reading list', body: 'Atomic Habits, Deep Work, The Lean Startup.', tag: 'personal', color: 'bg-warn-50 border-warn-200', pinned: false },
  { id: 'n4', title: 'Grocery list', body: 'Oats, bananas, spinach, eggs, olive oil.', tag: 'personal', color: 'bg-slate-50 border-slate-200', pinned: false },
];

const colorOptions = [
  { id: 'bg-brand-50 border-brand-200', label: 'Blue' },
  { id: 'bg-accent-50 border-accent-200', label: 'Green' },
  { id: 'bg-warn-50 border-warn-200', label: 'Amber' },
  { id: 'bg-slate-50 border-slate-200', label: 'Gray' },
];

export default function NotesDemo() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('');
  const [color, setColor] = useState(colorOptions[0].id);

  const addNote = () => {
    if (!title.trim() && !body.trim()) return;
    setNotes((prev) => [
      { id: `n${Date.now()}`, title: title || 'Untitled', body, tag: tag || 'general', color, pinned: false },
      ...prev,
    ]);
    setTitle('');
    setBody('');
    setTag('');
    setColor(colorOptions[0].id);
    setShowForm(false);
  };

  const togglePin = (id: string) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n)));
  };

  const removeNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.body.toLowerCase().includes(search.toLowerCase()) ||
      n.tag.toLowerCase().includes(search.toLowerCase()),
  );
  const pinned = filtered.filter((n) => n.pinned);
  const rest = filtered.filter((n) => !n.pinned);

  const renderNote = (n: Note) => (
    <div key={n.id} className={`group rounded-xl border p-3 ${n.color}`}>
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-bold text-slate-800">{n.title}</h4>
        <div className="flex shrink-0 gap-1">
          <button
            onClick={() => togglePin(n.id)}
            className={`rounded p-1 transition-colors ${n.pinned ? 'text-warn-500' : 'text-slate-300 opacity-0 group-hover:opacity-100 hover:text-warn-500'}`}
          >
            <Pin className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => removeNote(n.id)}
            className="rounded p-1 text-slate-300 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      {n.body && <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{n.body}</p>}
      <div className="mt-2 flex items-center gap-1">
        <Tag className="h-3 w-3 text-slate-400" />
        <span className="text-[10px] font-medium text-slate-400">{n.tag}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes…"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white"
        />
      </div>

      {showForm ? (
        <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-3">
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title…"
            className="mb-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-brand-400"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write something…"
            rows={3}
            className="mb-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400"
          />
          <div className="flex items-center gap-2">
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="tag"
              className="w-24 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs outline-none focus:border-brand-400"
            />
            <div className="flex gap-1">
              {colorOptions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`h-6 w-6 rounded-md border-2 ${c.id} ${color === c.id ? 'ring-2 ring-brand-400 ring-offset-1' : ''}`}
                  title={c.label}
                />
              ))}
            </div>
            <button
              onClick={addNote}
              className="ml-auto rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-600"
            >
              Save
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="rounded-lg px-2 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-200 py-2.5 text-sm font-semibold text-slate-400 transition-colors hover:border-brand-300 hover:text-brand-500"
        >
          <Plus className="h-4 w-4" />
          New note
        </button>
      )}

      {pinned.length > 0 && (
        <div>
          <p className="mb-1.5 px-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">Pinned</p>
          <div className="grid gap-2 sm:grid-cols-2">{pinned.map(renderNote)}</div>
        </div>
      )}
      {rest.length > 0 && (
        <div>
          {pinned.length > 0 && (
            <p className="mb-1.5 px-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">All notes</p>
          )}
          <div className="grid gap-2 sm:grid-cols-2">{rest.map(renderNote)}</div>
        </div>
      )}
      {filtered.length === 0 && (
        <p className="py-8 text-center text-sm text-slate-400">No notes found.</p>
      )}
    </div>
  );
}
