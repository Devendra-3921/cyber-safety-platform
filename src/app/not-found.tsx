import React from 'react';
import Button from '@/components/Button';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center">
      <div className="bg-teal-50 border border-teal-200/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-2xs">
        <ShieldAlert className="w-10 h-10 text-teal-700" />
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
        <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
        Error 404 • Page Not Found
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
        Resource Not Located
      </h1>
      <p className="text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
        The cyber safety topic or link you requested doesn&apos;t exist or has moved. Explore our core curriculum or return home.
      </p>
      <div className="flex gap-3">
        <Button href="/" variant="primary" className="px-6 py-3">
          Return to Home
        </Button>
        <Button href="/learn" variant="secondary" className="px-6 py-3">
          Browse All Topics
        </Button>
      </div>
    </div>
  );
}
