import React from 'react';
import { Phone, ExternalLink, ShieldAlert, KeyRound, MessageSquareWarning, Printer, AlertCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { Callout } from '@/components/Callout';

export const metadata = {
  title: 'Safety Center & Incident Response | Digital Safety Platform',
  description: 'Immediate action steps if you received a suspicious message, suspect your account was compromised, or experienced financial cyber fraud in India.',
};

export default function SafetyCenterPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Incident Response Guidance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Safety Center &amp; Incident Protocols
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Calm, step-by-step actions to protect your funds and recover accounts when facing suspected cyber attacks.
        </p>
      </div>

      {/* Prominent Emergency Section: Financial Fraud in India */}
      <section className="bg-rose-50/90 border-2 border-rose-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-rose-800">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-600 animate-ping" />
          <span>Urgent Financial Fraud Action Plan (India)</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Lost Money to an Online Scam or Unauthorized Transaction?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Every minute matters. In the event of fraudulent UPI transfers, credit card fraud, or unauthorized bank debits, immediate reporting within the <strong>golden hours (first 2 hours)</strong> gives authorities the highest chance of freezing fraudulent money trails before withdrawal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {/* Action 1: Call 1930 */}
          <div className="bg-white p-5 rounded-2xl border border-rose-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-rose-700 font-mono">STEP 1: PHONE</span>
              <span className="text-[11px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-medium">Toll Free 24x7</span>
            </div>
            <div className="text-2xl font-black text-rose-700 flex items-center gap-2">
              <Phone className="h-6 w-6" aria-hidden="true" />
              <a href="tel:1930" className="hover:underline">1930</a>
            </div>
            <div className="text-xs font-semibold text-slate-800">National Cyber Crime Reporting Helpline</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Call immediately from the registered mobile number. Keep transaction ID, bank account number, and SMS timestamp ready.
            </p>
          </div>

          {/* Action 2: File at cybercrime.gov.in */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-slate-600 font-mono">STEP 2: OFFICIAL PORTAL</span>
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium">Ministry of Home Affairs</span>
            </div>
            <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>cybercrime.gov.in</span>
            </div>
            <div className="text-xs font-semibold text-slate-800">Official National Reporting Portal</div>
            <p className="text-xs text-slate-600 leading-relaxed pb-1">
              File a detailed complaint with screenshot evidence, UPI handle, and caller information.
            </p>
            <a 
              href="https://cybercrime.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
              aria-label="Visit cybercrime.gov.in (opens in new window, external link)"
            >
              <span>Open Official Portal (External)</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Got a Suspicious Message */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <MessageSquareWarning className="h-4 w-4" />
            <span>Phishing &amp; Impersonation Messages</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Received a Suspicious SMS, WhatsApp, or Email?
          </h2>
          <p className="text-sm text-slate-600">
            Scammers often pretend to be your bank, electricity board, courier service, or a friend asking for urgent help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Callout variant="warning" title="What NOT to Do (Red Flags)">
            <ul className="space-y-2 mt-1">
              <li className="flex items-start gap-2">
                <span>❌</span>
                <span><strong>Don't rush or panic:</strong> Urgency is fabricated to bypass your critical thinking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>❌</span>
                <span><strong>Don't click links or download APKs:</strong> Links can lead to fake cloned login forms or spyware.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>❌</span>
                <span><strong>Don't share OTPs, PINs, or card CVVs:</strong> No real bank agent or system ever asks for these.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>❌</span>
                <span><strong>Don't send advance processing fees:</strong> No legitimate lottery or prize requires paying money first.</span>
              </li>
            </ul>
          </Callout>

          <Callout variant="safe" title="What You SHOULD Do">
            <ul className="space-y-2 mt-1">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span><strong>Verify via official channels:</strong> Open the official app or type the verified URL manually.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span><strong>Call back on a verified number:</strong> Look up customer care numbers printed on your physical debit card.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span><strong>Take a screenshot and block the sender:</strong> Use your phone's built-in spam reporting feature.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span><strong>Warn family members:</strong> Alert elder relatives who might receive the same circulating scam message.</span>
              </li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* Section 2: Account Compromise */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <KeyRound className="h-4 w-4" />
            <span>Account Security Recovery</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Think Your Account Might Be Compromised?
          </h2>
          <p className="text-sm text-slate-600">
            If you entered credentials on an unknown site or noticed strange login attempts from another device:
          </p>
        </div>

        <Callout variant="info" title="Immediate Recovery Steps">
          <ol className="list-decimal pl-5 space-y-2.5 mt-2">
            <li>
              <strong>Use the official recovery flow:</strong> Navigate directly to the provider&apos;s real site (e.g., Google Account, WhatsApp Web, or net banking) and trigger official account recovery.
            </li>
            <li>
              <strong>Change your password immediately:</strong> Create a strong, unique passphrase not used anywhere else.
            </li>
            <li>
              <strong>Log out of all active sessions:</strong> In security settings, select &quot;Sign out of all other devices&quot; to boot unauthorized access.
            </li>
            <li>
              <strong>Enable Two-Step Verification (2FA):</strong> Prefer app-based authenticator codes or hardware prompts over plain SMS where possible.
            </li>
            <li>
              <strong>Check linked email &amp; phone numbers:</strong> Ensure the attacker did not add their own recovery email or forwarding rules.
            </li>
          </ol>
        </Callout>
      </section>

      {/* Section 4: Quick Reference Checklist Callout */}
      <section className="bg-slate-100/80 rounded-3xl p-8 border border-slate-200 text-center space-y-4">
        <div className="flex h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/60 mx-auto items-center justify-center">
          <Printer className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Need a Printable Reference?</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          We prepared a clean, single-page checklist formatted to fit standard A4 paper with emergency phone numbers and golden rules.
        </p>
        <div className="pt-2">
          <Button href="/checklist" variant="primary">
            Open Printable Safety Checklist
          </Button>
        </div>
      </section>

      {/* Educational Disclaimer */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Academic Project Disclaimer:</strong> This website is an educational resource developed as part of an engineering Community Engagement Program (CEP). It is not an active emergency-response agency, a law enforcement service, or a substitute for official banking or legal counsel. If in immediate danger, dial local emergency services (112 in India).
        </p>
      </div>
    </div>
  );
}
