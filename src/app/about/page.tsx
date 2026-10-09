import React from 'react';
import { surveyData } from '@/data/survey';
import { engagementData } from '@/data/engagement';
import { GraduationCap, Target, Users, BarChart3, Presentation, ShieldCheck, Code2, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'About the Project | Cyber Security Awareness & Digital Safety',
  description: 'Learn about this engineering Community Engagement Program (CEP) initiative, our learning objectives, target audience, and survey data.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Academic CEP Initiative</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About the Digital Safety Project
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          A third-semester engineering Community Engagement Program (CEP) project designed to bring practical cybersecurity literacy to local communities.
        </p>
      </div>

      {/* Project Overview & Motivation */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          <ShieldCheck className="h-4 w-4" />
          <span>Project Mission</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Purpose &amp; Motivation
        </h2>
        <p className="text-slate-700 text-base leading-relaxed">
          With India&apos;s rapid adoption of Unified Payments Interface (UPI), instant messaging, and mobile-first services, everyday users interact with digital transactions daily. However, deceptive social engineering tactics like fake payment screenshots, urgent OTP requests, and cloned job offers continue to evolve.
        </p>
        <p className="text-slate-700 text-base leading-relaxed">
          The goal of this project is to create an accessible, jargon-free learning platform that equips people of all age groups with practical habits to pause, verify, and protect their hard-earned money and online identities.
        </p>
      </section>

      {/* Learning Objectives & Target Audience Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <Target className="h-4 w-4" />
            <span>Core Curriculum</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Learning Objectives</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">1.</span>
              <span><strong>Recognize Threat Patterns:</strong> Identify phishing links, QR-code misconceptions, and urgency traps.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">2.</span>
              <span><strong>Secure Everyday Accounts:</strong> Adopt multi-factor authentication and unique passphrases.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">3.</span>
              <span><strong>Incident Response:</strong> Know immediate actions to take if an account is compromised or money is debited.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">4.</span>
              <span><strong>Reporting Channels:</strong> Understand how and when to use 1930 and cybercrime.gov.in.</span>
            </li>
          </ul>
        </div>

        {/* Target Audience */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <Users className="h-4 w-4" />
            <span>Community Scope</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Target Audience</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Content is deliberately phrased in simple, non-technical English to benefit:
          </p>
          <div className="space-y-2.5 text-sm text-slate-700">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-medium">
              👨‍👩‍👧 <strong>Students &amp; Young Adults:</strong> Navigating internship offers, scholarship forms, and social media account safety.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-medium">
              🛍️ <strong>Parents &amp; Homemakers:</strong> Making daily UPI grocery purchases and online shopping payments.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-medium">
              👵 <strong>Senior Citizens:</strong> Safeguarding pension deposits and detecting pension/utility disconnection impersonation calls.
            </div>
          </div>
        </div>
      </div>

      {/* Community Survey Section */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          <BarChart3 className="h-4 w-4" />
          <span>Research Data</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          From Our Community Survey
        </h2>

        {(!surveyData.totalResponses || !surveyData.highlights || surveyData.highlights.length === 0) ? (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
            <p className="text-sm font-medium text-slate-700">
              Survey results will be added after data collection.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Validated Responses: <span className="text-slate-900 font-mono text-sm">{surveyData.totalResponses}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {surveyData.highlights.map((highlight, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
                  <div className="text-2xl font-black text-teal-700 font-mono mb-1">{highlight.value}</div>
                  <div className="text-sm text-slate-700 font-medium">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Community Engagement Section */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
          <Presentation className="h-4 w-4" />
          <span>Field Work</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Community Engagement Activities
        </h2>

        {(!engagementData.peopleReached || !engagementData.sessions || engagementData.sessions.length === 0) ? (
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
            <p className="text-sm font-medium text-slate-700">
              Community engagement details will be added after our awareness session.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total People Reached: <span className="text-slate-900 font-mono text-sm">{engagementData.peopleReached}</span>
            </div>
            <div className="space-y-4">
              {engagementData.sessions.map((session, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
                  <h3 className="font-bold text-slate-900 text-lg">{session.title}</h3>
                  <div className="text-xs font-semibold text-teal-700 font-mono">
                    {session.date} • {session.venue}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{session.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Technical & Ethical Declarations */}
      <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <Code2 className="h-4 w-4 text-teal-700" />
            <span>Architecture &amp; Privacy</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This is a frontend-only Next.js static application. It requires no database, account logins, or analytics trackers. By design, no user inputs, passwords, or device logs are stored or transmitted.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <span>Educational Disclaimer</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The scenarios and tips presented are for educational purposes. Cyber threats continually adapt; this platform cannot guarantee prevention of all fraud types. Always refer to official government notifications.
          </p>
        </div>
      </div>
    </div>
  );
}
