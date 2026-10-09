'use client';

import React from 'react';
import { Printer, CheckCircle2, XCircle, Phone, Globe, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function ChecklistPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:px-8 print:py-0 print:px-0 print:max-w-none">
      {/* Non-print navigation */}
      <div className="mb-6 print:hidden flex items-center justify-between">
        <Link 
          href="/safety"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-700 hover:text-teal-900 transition-colors gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Safety Center</span>
        </Link>
        <Button onClick={handlePrint} className="gap-2 shadow-xs">
          <Printer className="w-4 h-4" />
          <span>Print This Checklist</span>
        </Button>
      </div>

      {/* Main Checklist Card (Fits 1 A4 Page) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs print:border-none print:shadow-none print:p-0 space-y-8 print:space-y-5">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 print:pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white font-bold text-xs">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                CyberSafe • Academic CEP Project
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight print:text-2xl">
              One-Page Scam Safety Checklist
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm print:text-xs">
              Keep this handy guide near your workspace or pin it near family devices.
            </p>
          </div>
          <div className="hidden sm:block text-right text-xs text-slate-400 font-mono print:block">
            <span>Rev. 2026</span><br />
            <span>Format: A4 Printable</span>
          </div>
        </div>

        {/* Golden Rules: DO and DON'T side-by-side or stacked */}
        <div className="grid sm:grid-cols-2 gap-6 print:gap-4">
          {/* SAFE ACTIONS (DO) */}
          <div className="bg-emerald-50/70 border-2 border-emerald-300/80 rounded-2xl p-5 print:p-4 space-y-3.5 print:space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-emerald-900">
                Safe Habits (DO)
              </h2>
            </div>
            <ul className="space-y-2.5 print:space-y-1.5 text-xs sm:text-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Verify senders independently</strong> using the official banking app or customer care number printed on your card.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Use long, unique passphrases</strong> for each sensitive account, rather than repeating one simple password.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Enable Two-Step Verification (2FA)</strong> on WhatsApp, email, social media, and banking portals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Check website URLs carefully</strong> before typing credentials (ensure domain spelling is exact).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Keep operating systems and banking apps updated</strong> to patch known security vulnerabilities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">✓</span>
                <span><strong>Report suspicious activity immediately</strong> to 1930 to trigger prompt interbank fraud freezes.</span>
              </li>
            </ul>
          </div>

          {/* DANGERS (DON'T) */}
          <div className="bg-rose-50/70 border-2 border-rose-300/80 rounded-2xl p-5 print:p-4 space-y-3.5 print:space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white">
                <XCircle className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-rose-900">
                Red Flags (DON&apos;T)
              </h2>
            </div>
            <ul className="space-y-2.5 print:space-y-1.5 text-xs sm:text-sm text-rose-950">
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Never share OTPs, UPI PINs, or ATM PINs</strong> with anyone over phone, SMS, or chat—not even bank staff.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Never scan a QR code to receive money.</strong> Scanning a QR code or entering a PIN always deducts funds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Don&apos;t click unverified links</strong> in urgent messages claiming lottery wins, refunds, or electric cut-offs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Don&apos;t install screen-sharing apps</strong> (AnyDesk, TeamViewer, QuickSupport) on caller instructions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Don&apos;t send advance fees for job offers</strong>, internship kits, or parcel customs clearance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-700">✕</span>
                <span><strong>Don&apos;t trust payment screenshots</strong> as proof of credit. Always verify your actual bank balance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Contacts Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 print:p-4 print:bg-slate-100 print:text-slate-900 print:border print:border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white print:bg-rose-600">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 print:text-slate-600 font-semibold">
                National Cyber Crime Helpline (India)
              </div>
              <div className="text-xl font-black text-rose-400 print:text-rose-700 flex items-center gap-2">
                <span>Dial 1930</span>
                <span className="text-xs font-normal text-slate-300 print:text-slate-600">(Toll-Free 24x7)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-700 print:border-slate-300 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 print:text-slate-600 font-semibold">
                Official Incident Reporting Portal
              </div>
              <div className="text-sm font-bold text-teal-300 print:text-teal-800">
                https://cybercrime.gov.in/
              </div>
            </div>
          </div>
        </div>

        {/* Printable Footer Credits */}
        <div className="text-center pt-2 text-[11px] text-slate-400 print:text-slate-600 border-t border-slate-100 print:border-slate-300">
          Source: Cyber Security Awareness &amp; Digital Safety Platform • Engineering Community Engagement Program (CEP) • Free Educational Resource
        </div>
      </div>
    </div>
  );
}
