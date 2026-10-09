import { topics } from '@/data/topics';
import { TopicCard } from '@/components/TopicCard';
import { BookOpen, ShieldCheck, QrCode } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Learn Cyber Safety Topics | Digital Safety Platform',
  description: 'Understand 7 fundamental cyber safety topics with plain-language explanations, realistic examples, warning signs, and safe actions.',
};

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Curriculum of 7 Topics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Learn How to Stay Safe Online
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Non-technical, straightforward guides breaking down the most common scams targeting everyday internet users and bank customers in India.
        </p>
      </div>

      {/* Quick golden rule banner */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 text-amber-900 shadow-2xs max-w-4xl mx-auto">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <QrCode className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="text-sm text-center sm:text-left flex-1">
          <strong className="font-bold text-amber-950">Crucial Payment Safety Rule: </strong>
          Scanning a QR code or entering your UPI PIN is <span className="underline decoration-amber-500 font-bold">only required to SEND money</span>. You NEVER need to scan a QR code or enter a PIN to receive funds.
        </div>
        <Link 
          href="/learn/upi-fraud"
          className="shrink-0 text-xs font-bold text-amber-900 bg-amber-200/70 hover:bg-amber-200 px-3 py-1.5 rounded-lg transition-colors"
        >
          Read UPI Guide →
        </Link>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      {/* Action to Quiz */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-8 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
        <div className="h-10 w-10 rounded-full bg-teal-50 text-teal-700 mx-auto flex items-center justify-center">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Ready to put your awareness to the test?</h3>
        <p className="text-sm text-slate-600">
          Take our 10-question scenario-based quiz to see how well you can detect real-world fraud attempts.
        </p>
        <div className="pt-2">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-xs"
          >
            Start Cyber Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
