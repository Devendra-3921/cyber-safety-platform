'use client';

import React from 'react';
import { QuizQuestion } from '@/data/types';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
  selectedAnswer: number | null;
  showResult: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  showResult
}) => {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1 rounded-full mb-3 border border-teal-200/50">
          <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
          Question {questionNumber} of {totalQuestions}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {question.question}
        </h2>
      </div>

      <div className="grid gap-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctIndex;
          
          let optionStyles = 'border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/50 text-slate-800 shadow-2xs';
          let letterBadgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';
          let statusIcon = null;

          if (showResult) {
            if (isCorrect) {
              optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-medium ring-1 ring-emerald-400';
              letterBadgeStyles = 'bg-emerald-600 text-white border-emerald-600';
              statusIcon = <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 ml-auto" aria-hidden="true" />;
            } else if (isSelected) {
              optionStyles = 'border-rose-400 bg-rose-50 text-rose-900 ring-1 ring-rose-300';
              letterBadgeStyles = 'bg-rose-600 text-white border-rose-600';
              statusIcon = <XCircle className="h-5 w-5 text-rose-600 shrink-0 ml-auto" aria-hidden="true" />;
            } else {
              optionStyles = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
              letterBadgeStyles = 'bg-slate-100 text-slate-400 border-slate-200';
            }
          }

          return (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${optionStyles}`}
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold font-mono ${letterBadgeStyles}`}>
                {letters[index]}
              </span>
              <span className="text-sm sm:text-base leading-snug flex-1">{option}</span>
              {statusIcon}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`p-4.5 rounded-xl border mt-5 animate-in fade-in duration-200 ${
          selectedAnswer === question.correctIndex 
            ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900' 
            : 'bg-rose-50/90 border-rose-200 text-rose-900'
        }`}>
          <div className="flex items-center gap-2 font-bold text-sm mb-1">
            {selectedAnswer === question.correctIndex ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Correct Action!</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-rose-700" />
                <span>Incorrect Selection</span>
              </>
            )}
          </div>
          <p className="text-sm leading-relaxed opacity-90 pl-6">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
