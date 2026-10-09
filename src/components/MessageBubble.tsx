import React from 'react';
import { MessageSquare, AlertCircle } from 'lucide-react';

interface MessageBubbleProps {
  sender: string;
  text: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  return (
    <div className="w-full max-w-md mx-auto my-3">
      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1.5 px-1">
        <span className="flex items-center gap-1 text-amber-700">
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          Fictional Scenario Preview
        </span>
        <span className="bg-slate-200/80 px-2 py-0.5 rounded-full text-slate-600 font-mono text-[10px]">
          Simulated SMS
        </span>
      </div>
      <div className="flex items-start gap-3 bg-white p-4 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
          <MessageSquare className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold text-slate-900 truncate">
              {sender}
            </span>
            <span className="text-[10px] text-slate-400">Just now</span>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-sans bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-mono text-[13px]">
            &quot;{text}&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
