import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Fish, Smartphone, ShieldAlert, Lock, Users, Briefcase, Bot, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import { topics } from '@/data/topics';
import { Callout } from '@/components/Callout';
import React from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Fish,
  Smartphone,
  ShieldAlert,
  Lock,
  Users,
  Briefcase,
  Bot
};

type Params = { slug: string };

export async function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const resolvedParams = await Promise.resolve(params);
  const topic = topics.find((t) => t.slug === resolvedParams.slug);
  
  if (!topic) {
    return {
      title: 'Topic Not Found',
    };
  }

  return {
    title: `${topic.title} | Cyber Security Awareness`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: { params: Params | Promise<Params> }) {
  const resolvedParams = await Promise.resolve(params);
  const topic = topics.find((t) => t.slug === resolvedParams.slug);

  if (!topic) {
    notFound();
  }

  const IconComponent = iconMap[topic.icon] || ShieldAlert;

  // Find next topic for easy reading flow
  const currentIndex = topics.findIndex(t => t.slug === topic.slug);
  const nextTopic = topics[(currentIndex + 1) % topics.length];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl space-y-10">
      {/* Breadcrumb Navigation */}
      <div>
        <Link 
          href="/learn" 
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-700 hover:text-teal-900 transition-colors gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Topics</span>
        </Link>
      </div>

      {/* Topic Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-200 pb-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/80 shadow-2xs">
          <IconComponent size={32} />
        </div>
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
            Educational Topic #{currentIndex + 1}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-1">
            {topic.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-1 font-normal">
            {topic.description}
          </p>
        </div>
      </div>

      {/* Plain Language Explanation */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-teal-600" aria-hidden="true" />
          Overview &amp; Context
        </h2>
        <p className="text-slate-700 leading-relaxed text-base">
          {topic.explanation}
        </p>
      </div>

      {/* Realistic Fictional Example */}
      <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs">
        <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wide text-slate-700">
              Realistic Fictional Scenario
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">Educational Simulation</span>
        </div>
        <div className="p-6 sm:p-7 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 leading-snug">
            {topic.example.scenario}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-200/60 font-sans">
            {topic.example.details}
          </p>
        </div>
      </div>

      {/* Warning Signs & Safe Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Warning Signs */}
        <Callout variant="warning" title="Warning Signs to Watch For">
          <ul className="space-y-2 mt-2">
            {topic.warningSigns.map((sign, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </Callout>

        {/* Safe Actions */}
        <Callout variant="safe" title="Safe Actions You Should Take">
          <ul className="space-y-2 mt-2">
            {topic.safeActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </Callout>
      </div>

      {/* Core Key Takeaway */}
      <Callout variant="info" title="The Golden Rule">
        <p className="text-base font-medium">
          {topic.takeaway}
        </p>
      </Callout>

      {/* Line linking to Safety Center */}
      <div className="text-center p-4 bg-slate-100/80 border border-slate-200 rounded-2xl text-sm text-slate-700">
        <span>Already lost money? </span>
        <Link href="/safety" className="font-semibold text-teal-700 hover:text-teal-900 underline underline-offset-2">
          See the Safety Center.
        </Link>
      </div>

      {/* Bottom Footer Navigation */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/learn"
          className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          ← Back to curriculum
        </Link>
        <Link
          href={`/learn/${nextTopic.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
        >
          <span>Next: {nextTopic.title}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
