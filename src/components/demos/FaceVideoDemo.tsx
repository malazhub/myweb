import { useState } from 'react';
import { Upload, Play, Sparkles, Mic, Type, Image as ImageIcon } from 'lucide-react';

export default function FaceVideoDemo() {
  const [step, setStep] = useState<'input' | 'result'>('input');
  const [text, setText] = useState('Hello! I just swapped my face into this video using a single photo.');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Sparkles className="h-4 w-4 text-rose-500" />
          Face Swap Video Generator
        </div>
        <div className="flex gap-1.5">
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${step === 'input' ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-500'}`}>1. Input</span>
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${step === 'result' ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-500'}`}>2. Result</span>
        </div>
      </div>

      {step === 'input' ? (
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-dashed border-slate-300 p-4 text-center">
            <ImageIcon className="mx-auto h-8 w-8 text-slate-400" />
            <p className="mt-2 text-xs font-semibold text-slate-700">Source photo</p>
            <p className="mt-0.5 text-[10px] text-slate-400">Face to swap in</p>
            <div className="mt-3 mx-auto h-20 w-16 rounded-lg bg-gradient-to-br from-rose-200 to-slate-300" />
          </div>

          <div className="rounded-xl border-2 border-dashed border-slate-300 p-4 text-center">
            <Type className="mx-auto h-8 w-8 text-slate-400" />
            <p className="mt-2 text-xs font-semibold text-slate-700">Script text</p>
            <p className="mt-0.5 text-[10px] text-slate-400">What to say</p>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-2 text-[11px] text-slate-700 outline-none focus:border-rose-400"
            />
          </div>

          <div className="rounded-xl border-2 border-dashed border-slate-300 p-4 text-center">
            <Mic className="mx-auto h-8 w-8 text-slate-400" />
            <p className="mt-2 text-xs font-semibold text-slate-700">Voice</p>
            <p className="mt-0.5 text-[10px] text-slate-400">Narration style</p>
            <select className="mt-3 w-full rounded-lg border border-slate-200 bg-white p-1.5 text-[11px] text-slate-700 outline-none focus:border-rose-400">
              <option>Warm female</option>
              <option>Calm male</option>
              <option>Energetic</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <button
              onClick={() => setStep('result')}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 active:scale-95"
            >
              <Upload className="h-4 w-4" />
              Generate video
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-rose-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-7 w-7 fill-white text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-xs font-medium text-white">{text}</p>
            </div>
          </div>
          <button
            onClick={() => setStep('input')}
            className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
