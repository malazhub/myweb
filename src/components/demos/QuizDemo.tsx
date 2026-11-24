import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

const questions: Question[] = [
  {
    q: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 1,
    explain: 'CSS stands for Cascading Style Sheets — the language used to style web pages.',
  },
  {
    q: 'Which symbol is used for IDs in CSS selectors?',
    options: ['.', '#', '@', '*'],
    correct: 1,
    explain: 'The # symbol targets elements by their id attribute in CSS.',
  },
  {
    q: 'What is the default display value for a <div> element?',
    options: ['inline', 'flex', 'block', 'grid'],
    correct: 2,
    explain: 'A <div> is a block-level element by default, taking the full width available.',
  },
  {
    q: 'Which property changes text color?',
    options: ['font-color', 'text-color', 'color', 'foreground'],
    correct: 2,
    explain: 'The `color` property sets the text color of an element.',
  },
  {
    q: 'What does "responsive design" mean?',
    options: [
      'Design that loads quickly',
      'Design that adapts to different screen sizes',
      'Design that uses animations',
      'Design that works offline',
    ],
    correct: 1,
    explain: 'Responsive design ensures a layout looks good on all screen sizes — mobile, tablet, and desktop.',
  },
];

export default function QuizDemo() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const isLast = current === questions.length - 1;

  const selectAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === question.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setAnswered(false);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const isGreat = pct >= 80;
    const isOk = pct >= 50;
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${
            isGreat ? 'bg-accent-100' : isOk ? 'bg-warn-100' : 'bg-red-100'
          }`}
        >
          <Trophy className={`h-8 w-8 ${isGreat ? 'text-accent-600' : isOk ? 'text-warn-600' : 'text-red-600'}`} />
        </div>
        <p className="mt-3 text-xl font-extrabold text-slate-800">
          {score} / {questions.length}
        </p>
        <p className="text-sm text-slate-500">
          {isGreat ? 'Excellent work!' : isOk ? 'Good effort!' : 'Keep practicing!'}
        </p>
        <div className="mt-2 h-2 w-48 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full ${isGreat ? 'bg-accent-500' : isOk ? 'bg-warn-500' : 'bg-red-500'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <button
          onClick={restart}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-600 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          Question {current + 1} of {questions.length}
        </span>
        <span className="rounded-full bg-warn-50 px-2.5 py-0.5 text-xs font-bold text-warn-700">
          Score: {score}
        </span>
      </div>

      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300"
          style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <h4 className="mb-3 text-sm font-bold leading-relaxed text-slate-800">{question.q}</h4>

      <div className="space-y-2">
        {question.options.map((opt, idx) => {
          const isCorrect = idx === question.correct;
          const isSelected = idx === selected;
          let style = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50';
          if (answered && isCorrect) {
            style = 'border-accent-300 bg-accent-50';
          } else if (answered && isSelected && !isCorrect) {
            style = 'border-red-300 bg-red-50';
          } else if (answered) {
            style = 'border-slate-200 bg-white opacity-60';
          }
          return (
            <button
              key={idx}
              onClick={() => selectAnswer(idx)}
              disabled={answered}
              className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-all ${style} ${
                !answered ? 'active:scale-[0.99]' : ''
              }`}
            >
              <span>{opt}</span>
              {answered && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-600" />}
              {answered && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-3 animate-fade-in rounded-lg bg-slate-50 p-3">
          <p className="text-xs leading-relaxed text-slate-600">{question.explain}</p>
          <button
            onClick={next}
            className="mt-2 w-full rounded-lg bg-brand-500 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-600 active:scale-95"
          >
            {isLast ? 'See results' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
