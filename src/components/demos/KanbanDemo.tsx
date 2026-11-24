import { useState } from 'react';
import { GripVertical, Plus, X } from 'lucide-react';

interface Column {
  id: string;
  title: string;
  color: string;
  cards: { id: string; text: string; priority: 'low' | 'med' | 'high' }[];
}

const initialColumns: Column[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: 'bg-slate-400',
    cards: [
      { id: 'c1', text: 'Research competitor pricing', priority: 'low' },
      { id: 'c2', text: 'Write blog post draft', priority: 'med' },
    ],
  },
  {
    id: 'progress',
    title: 'In Progress',
    color: 'bg-brand-500',
    cards: [
      { id: 'c3', text: 'Redesign landing page', priority: 'high' },
      { id: 'c4', text: 'Fix login redirect bug', priority: 'high' },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    color: 'bg-warn-500',
    cards: [{ id: 'c5', text: 'Q3 budget proposal', priority: 'med' }],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-accent-500',
    cards: [
      { id: 'c6', text: 'Set up analytics', priority: 'low' },
      { id: 'c7', text: 'Team kickoff meeting', priority: 'med' },
    ],
  },
];

const priorityStyles: Record<string, string> = {
  low: 'bg-slate-100 text-slate-600',
  med: 'bg-warn-100 text-warn-700',
  high: 'bg-red-100 text-red-700',
};

export default function KanbanDemo() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragFrom, setDragFrom] = useState<string | null>(null);
  const [addingTo, setAddingTo] = useState<string | null>(null);
  const [newText, setNewText] = useState('');

  const onDragStart = (cardId: string, colId: string) => {
    setDragId(cardId);
    setDragFrom(colId);
  };

  const onDrop = (targetColId: string) => {
    if (!dragId || !dragFrom) return;
    if (dragFrom === targetColId) {
      setDragId(null);
      setDragFrom(null);
      return;
    }
    setColumns((prev) => {
      const fromCol = prev.find((c) => c.id === dragFrom);
      const card = fromCol?.cards.find((c) => c.id === dragId);
      if (!fromCol || !card) return prev;
      return prev.map((col) => {
        if (col.id === dragFrom) {
          return { ...col, cards: col.cards.filter((c) => c.id !== dragId) };
        }
        if (col.id === targetColId) {
          return { ...col, cards: [...col.cards, card] };
        }
        return col;
      });
    });
    setDragId(null);
    setDragFrom(null);
  };

  const addCard = (colId: string) => {
    if (!newText.trim()) return;
    setColumns((prev) =>
      prev.map((col) =>
        col.id === colId
          ? { ...col, cards: [...col.cards, { id: `c${Date.now()}`, text: newText, priority: 'low' as const }] }
          : col,
      ),
    );
    setNewText('');
    setAddingTo(null);
  };

  const removeCard = (colId: string, cardId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === colId ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) } : col,
      ),
    );
  };

  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
      {columns.map((col) => (
        <div
          key={col.id}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop(col.id)}
          className="flex w-64 shrink-0 flex-col rounded-xl bg-slate-100 p-2.5"
        >
          <div className="mb-2 flex items-center gap-2 px-1">
            <span className={`h-2 w-2 rounded-full ${col.color}`} />
            <span className="text-xs font-bold text-slate-700">{col.title}</span>
            <span className="ml-auto rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-500">
              {col.cards.length}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {col.cards.map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={() => onDragStart(card.id, col.id)}
                className={`group cursor-grab rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm transition-all active:cursor-grabbing ${
                  dragId === card.id ? 'opacity-40' : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-2">
                  <GripVertical className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300" />
                  <p className="flex-1 text-xs leading-relaxed text-slate-700">{card.text}</p>
                  <button
                    onClick={() => removeCard(col.id, card.id)}
                    className="shrink-0 rounded p-0.5 text-slate-300 opacity-0 transition-opacity hover:bg-slate-100 hover:text-slate-500 group-hover:opacity-100"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
                <span
                  className={`mt-2 inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${priorityStyles[card.priority]}`}
                >
                  {card.priority}
                </span>
              </div>
            ))}

            {addingTo === col.id ? (
              <div className="rounded-lg border border-brand-300 bg-white p-2">
                <textarea
                  autoFocus
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      addCard(col.id);
                    }
                    if (e.key === 'Escape') {
                      setAddingTo(null);
                      setNewText('');
                    }
                  }}
                  placeholder="Card title…"
                  className="w-full resize-none text-xs text-slate-700 outline-none placeholder:text-slate-400"
                  rows={2}
                />
                <div className="mt-1.5 flex gap-1.5">
                  <button
                    onClick={() => addCard(col.id)}
                    className="rounded-md bg-brand-500 px-2 py-1 text-[10px] font-bold text-white hover:bg-brand-600"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      setAddingTo(null);
                      setNewText('');
                    }}
                    className="rounded-md px-2 py-1 text-[10px] font-bold text-slate-500 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddingTo(col.id)}
                className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-200/60 hover:text-slate-600"
              >
                <Plus className="h-3.5 w-3.5" />
                Add card
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
