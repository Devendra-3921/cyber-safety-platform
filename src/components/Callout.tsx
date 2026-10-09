import React, { ReactNode } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface CalloutProps {
  variant: 'warning' | 'safe' | 'info';
  title: string;
  children: ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ variant, title, children }) => {
  const styles = {
    warning: {
      bg: 'bg-amber-50/80',
      border: 'border-l-4 border-amber-500 ring-1 ring-amber-200/60',
      titleColor: 'text-amber-900',
      textColor: 'text-amber-800',
      iconContainer: 'bg-amber-100 text-amber-700',
      icon: <AlertTriangle className="h-4 w-4" aria-hidden="true" />
    },
    safe: {
      bg: 'bg-emerald-50/80',
      border: 'border-l-4 border-emerald-500 ring-1 ring-emerald-200/60',
      titleColor: 'text-emerald-900',
      textColor: 'text-emerald-800',
      iconContainer: 'bg-emerald-100 text-emerald-700',
      icon: <CheckCircle className="h-4 w-4" aria-hidden="true" />
    },
    info: {
      bg: 'bg-sky-50/80',
      border: 'border-l-4 border-sky-500 ring-1 ring-sky-200/60',
      titleColor: 'text-sky-900',
      textColor: 'text-sky-800',
      iconContainer: 'bg-sky-100 text-sky-700',
      icon: <Info className="h-4 w-4" aria-hidden="true" />
    }
  };

  const currentStyle = styles[variant];

  return (
    <div className={`p-4 sm:p-5 rounded-r-xl rounded-l-xs shadow-xs ${currentStyle.bg} ${currentStyle.border}`}>
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className={`flex h-6 w-6 items-center justify-center rounded-full shrink-0 ${currentStyle.iconContainer}`}>
          {currentStyle.icon}
        </div>
        <h4 className={`text-base font-bold tracking-tight ${currentStyle.titleColor}`}>{title}</h4>
      </div>
      <div className={`text-sm leading-relaxed ${currentStyle.textColor} pl-8.5`}>
        {children}
      </div>
    </div>
  );
};

export default Callout;
