import React from 'react';
import Link from 'next/link';
import { Phone, ExternalLink, ShieldAlert, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Project overview */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-bold">
                CS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cyber Security Awareness Platform
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An academic Community Engagement Program (CEP) initiative developed by third-semester engineering students to foster practical digital safety awareness, scam defense, and payment security.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <GraduationCap className="h-4 w-4 text-teal-400" aria-hidden="true" />
              <span>Academic Engineering Curriculum • Community Engagement</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform Pages
            </h4>
            <nav className="flex flex-col space-y-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <Link href="/learn" className="hover:text-teal-400 transition-colors">Safety Topics (7)</Link>
              <Link href="/quiz" className="hover:text-teal-400 transition-colors">Interactive Quiz</Link>
              <Link href="/safety" className="hover:text-teal-400 transition-colors">Safety &amp; Recovery Center</Link>
              <Link href="/about" className="hover:text-teal-400 transition-colors">About &amp; Survey Data</Link>
              <Link href="/checklist" className="hover:text-teal-400 transition-colors font-medium text-slate-300">Printable Checklist</Link>
            </nav>
          </div>

          {/* Incident reporting */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Reporting Helpline
            </h4>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg bg-slate-800/80 p-3 border border-slate-700/80 space-y-1">
                <div className="text-xs text-slate-400 font-medium">National Cyber Crime Helpline</div>
                <div className="text-base font-bold text-teal-400 flex items-center gap-1.5">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  1930
                </div>
                <div className="text-[11px] text-slate-400">Call immediately for financial fraud</div>
              </div>
              <a 
                href="https://cybercrime.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-slate-400 hover:text-teal-400 transition-colors gap-1"
                aria-label="National Cyber Crime Portal (opens in a new window)"
              >
                <span>National Portal: cybercrime.gov.in</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Academic disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
            <p>
              Educational demonstration project. Not an official law enforcement service. Collects zero personal data.
            </p>
          </div>
          <div className="text-slate-500 text-center md:text-right">
            Community Engagement Program (CEP) • 3rd Semester
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
