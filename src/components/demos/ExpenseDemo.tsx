import { useState } from 'react';
import { Plus, Trash2, TrendingDown, TrendingUp, Wallet } from 'lucide-react';

interface Transaction {
  id: string;
  desc: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
}

const initialTxns: Transaction[] = [
  { id: 't1', desc: 'Salary', amount: 4200, type: 'income', category: 'Income' },
  { id: 't2', desc: 'Groceries', amount: 85, type: 'expense', category: 'Food' },
  { id: 't3', desc: 'Rent', amount: 1400, type: 'expense', category: 'Housing' },
  { id: 't4', desc: 'Coffee', amount: 6, type: 'expense', category: 'Food' },
  { id: 't5', desc: 'Freelance gig', amount: 350, type: 'income', category: 'Income' },
];

const expenseCategories = ['Food', 'Housing', 'Transport', 'Shopping', 'Bills', 'Other'];

export default function ExpenseDemo() {
  const [txns, setTxns] = useState<Transaction[]>(initialTxns);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('Food');
  const [showForm, setShowForm] = useState(false);

  const addTxn = () => {
    const amt = parseFloat(amount);
    if (!desc.trim() || isNaN(amt) || amt <= 0) return;
    setTxns((prev) => [
      { id: `t${Date.now()}`, desc, amount: amt, type, category },
      ...prev,
    ]);
    setDesc('');
    setAmount('');
    setShowForm(false);
  };

  const removeTxn = (id: string) => {
    setTxns((prev) => prev.filter((t) => t.id !== id));
  };

  const income = txns.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expenses = txns.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expenses;

  const byCategory = expenseCategories
    .map((cat) => ({
      cat,
      total: txns.filter((t) => t.type === 'expense' && t.category === cat).reduce((s, t) => s + t.amount, 0),
    }))
    .filter((c) => c.total > 0)
    .sort((a, b) => b.total - a.total);
  const maxCat = Math.max(...byCategory.map((c) => c.total), 1);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-accent-50 p-3 text-center">
          <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100">
            <TrendingUp className="h-4 w-4 text-accent-600" />
          </div>
          <p className="text-[10px] font-semibold uppercase text-accent-700">Income</p>
          <p className="text-sm font-extrabold text-accent-800">${income.toFixed(2)}</p>
        </div>
        <div className="rounded-xl bg-red-50 p-3 text-center">
          <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
            <TrendingDown className="h-4 w-4 text-red-600" />
          </div>
          <p className="text-[10px] font-semibold uppercase text-red-700">Expenses</p>
          <p className="text-sm font-extrabold text-red-800">${expenses.toFixed(2)}</p>
        </div>
        <div className="rounded-xl bg-brand-50 p-3 text-center">
          <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100">
            <Wallet className="h-4 w-4 text-brand-600" />
          </div>
          <p className="text-[10px] font-semibold uppercase text-brand-700">Balance</p>
          <p className={`text-sm font-extrabold ${balance >= 0 ? 'text-brand-800' : 'text-red-800'}`}>
            ${balance.toFixed(2)}
          </p>
        </div>
      </div>

      {byCategory.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="mb-2 text-xs font-bold text-slate-700">Spending by category</p>
          <div className="space-y-2">
            {byCategory.map((c) => (
              <div key={c.cat}>
                <div className="mb-1 flex items-center justify-between text-[10px] font-medium text-slate-500">
                  <span>{c.cat}</span>
                  <span>${c.total.toFixed(2)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-warn-400 to-warn-600 transition-all"
                    style={{ width: `${(c.total / maxCat) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showForm ? (
        <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              autoFocus
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
              className="col-span-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400"
            />
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              type="number"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={type === 'income'}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-400 disabled:bg-slate-50"
            >
              {expenseCategories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <div className="col-span-2 flex gap-2">
              <button
                onClick={() => setType('income')}
                className={`flex-1 rounded-lg py-2 text-xs font-bold transition-colors ${
                  type === 'income' ? 'bg-accent-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                Income
              </button>
              <button
                onClick={() => setType('expense')}
                className={`flex-1 rounded-lg py-2 text-xs font-bold transition-colors ${
                  type === 'expense' ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                Expense
              </button>
            </div>
            <div className="col-span-2 flex gap-2">
              <button
                onClick={addTxn}
                className="flex-1 rounded-lg bg-brand-500 py-2 text-xs font-bold text-white hover:bg-brand-600"
              >
                Add
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg px-3 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-200 py-2.5 text-sm font-semibold text-slate-400 transition-colors hover:border-brand-300 hover:text-brand-500"
        >
          <Plus className="h-4 w-4" />
          Add transaction
        </button>
      )}

      <div className="max-h-48 space-y-1.5 overflow-y-auto">
        {txns.map((t) => (
          <div
            key={t.id}
            className="group flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-3 py-2"
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                t.type === 'income' ? 'bg-accent-100' : 'bg-red-100'
              }`}
            >
              {t.type === 'income' ? (
                <TrendingUp className="h-3.5 w-3.5 text-accent-600" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5 text-red-600" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-700">{t.desc}</p>
              <p className="text-[10px] text-slate-400">{t.category}</p>
            </div>
            <span
              className={`text-sm font-bold ${t.type === 'income' ? 'text-accent-600' : 'text-red-600'}`}
            >
              {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
            </span>
            <button
              onClick={() => removeTxn(t.id)}
              className="shrink-0 rounded p-1 text-slate-300 opacity-0 transition-opacity hover:bg-slate-100 hover:text-red-500 group-hover:opacity-100"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
