import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold tracking-wide uppercase text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60">
          Question {current} of {total}
        </span>
        <span className="text-xs font-bold text-slate-600 font-mono">
          {Math.round(percentage)}% Completed
        </span>
      </div>
      <div 
        className="w-full bg-slate-200 rounded-full h-2 overflow-hidden ring-1 ring-slate-200/50"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div 
          className="bg-teal-600 h-2 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
