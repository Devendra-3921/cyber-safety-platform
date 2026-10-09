import React from 'react';
import Link from 'next/link';
import TopicCard from '@/components/TopicCard';
import Button from '@/components/Button';
import { topics } from '@/data/topics';
import { surveyData } from '@/data/survey';
import { Clock, ShieldCheck, PhoneCall, ArrowRight, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';

export default function Home() {
  const featuredSlugs = ['phishing', 'upi-fraud', 'otp-scams', 'password-security'];
  const featuredTopics = topics.filter(topic => featuredSlugs.includes(topic.slug));

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 border-b border-slate-200/80 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Academic Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-teal-900 border border-teal-200 text-xs font-semibold tracking-wide uppercase shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-teal-600" />
            <span>Community Engagement Program (CEP) • 3rd Semester</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Cyber Security Awareness &amp; <br className="hidden sm:block" />
            <span className="text-teal-700">Digital Safety Platform</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            An educational initiative empowering students, parents, and senior citizens with practical knowledge to identify phishing, prevent UPI fraud, and protect digital accounts.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm hover:shadow transition-all text-sm active:translate-y-px"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-2xs transition-all text-sm active:translate-y-px"
            >
              <Award className="h-4 w-4 text-teal-600" aria-hidden="true" />
              <span>Test Your Knowledge</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-8 border-t border-slate-200/60 max-w-xl mx-auto grid grid-cols-3 gap-2 text-center text-xs text-slate-500 font-medium">
            <div className="px-2">✓ 100% Free &amp; Open</div>
            <div className="px-2 border-x border-slate-200">✓ Zero Data Collected</div>
            <div className="px-2">✓ Helpline 1930 Guide</div>
          </div>
        </div>
      </section>

      {/* Featured Threats Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              Critical Awareness
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Digital Threats
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Explore scenario-based guides for the most common digital attacks.
            </p>
          </div>
          <Link 
            href="/learn" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>View all 7 topics</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* Stay Safer in 3 Steps */}
      <section className="bg-slate-100/80 border-y border-slate-200/90 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full">
              Core Safety Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-1">
              Stay Safer in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Whenever you encounter an unexpected message, transaction, or urgent caller:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60 shadow-2xs">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">STEP 01</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Pause Before Acting</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Scammers engineer artificial urgency, panic, or FOMO. Take a slow breath. Legitimate banks and government officials never demand immediate transfers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-amber-800 bg-amber-50/50 p-2.5 rounded-lg">
                💡 Tip: Never authorize transfers while on a live call.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200/60 shadow-2xs">
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">STEP 02</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Verify Independently</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Never dial phone numbers or click links sent in SMS or WhatsApp. Visit the official website, check the back of your bank card, or open the official banking app directly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-teal-800 bg-teal-50/50 p-2.5 rounded-lg">
                💡 Tip: Scanning a QR code is never needed to receive money.
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200/60 shadow-2xs">
                    <PhoneCall className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 font-mono">STEP 03</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Report Promptly</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If money left your account, act in the first 2 hours. Call the National Cyber Crime Helpline at <strong className="text-slate-900">1930</strong> and lodge a complaint at <strong className="text-slate-900">cybercrime.gov.in</strong>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-rose-800 bg-rose-50/50 p-2.5 rounded-lg">
                💡 Tip: Speedy reporting can help freeze funds in transit.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From our community survey Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" />
            Field Research
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From Our Community Survey
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Insights gathered from student and local community awareness sessions.
          </p>
        </div>
        
        {(!surveyData.totalResponses || surveyData.highlights.length === 0) ? (
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 text-center text-slate-600 shadow-xs max-w-2xl mx-auto">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3">
              <FileSpreadsheet className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-slate-700">
              Survey results will be added after data collection.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Field survey data is currently being gathered during our active campus and community awareness sessions.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Responses: {surveyData.totalResponses}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {surveyData.highlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div className="text-3xl font-extrabold text-teal-700 mb-2 font-mono">{highlight.value}</div>
                  <div className="text-sm font-medium text-slate-700">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Safety Checklist Banner Callout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">Need a printable quick-reference sheet?</h3>
            <p className="text-slate-300 text-sm max-w-md">
              Download and print our one-page Scam Safety Checklist to keep near your desk or share with family members.
            </p>
          </div>
          <Button href="/checklist" variant="secondary" className="bg-white text-slate-900 border-white hover:bg-slate-100 shrink-0">
            View Printable Checklist
          </Button>
        </div>
      </section>
    </div>
  );
}
