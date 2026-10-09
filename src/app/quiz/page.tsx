'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trophy, BookOpen, AlertCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { MessageBubble } from '@/components/MessageBubble';
import { ProgressBar } from '@/components/ProgressBar';
import { quizQuestions } from '@/data/quiz';

export default function QuizPage() {
  const [quizState, setQuizState] = useState<'start' | 'playing' | 'result'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const handleStart = () => {
    setQuizState('playing');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const currentQuestion = quizQuestions[currentIndex];
    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setAnswers([...answers, selectedAnswer]);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizState('result');
    }
  };

  const getResultMessage = () => {
    if (score <= 3) return 'Keep learning! Cyber safety knowledge grows with practice.';
    if (score <= 6) return 'Good effort! Review the topics you missed to strengthen your knowledge.';
    if (score <= 9) return 'Great job! You have a solid understanding of cyber safety.';
    return 'Perfect score! You have excellent cyber safety awareness.';
  };

  const letters = ['A', 'B', 'C', 'D'];

  // Start Screen
  if (quizState === 'start') {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-8 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-teal-50 text-teal-700 border border-teal-200/80 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
            <BookOpen className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              10 Scenario-Based Questions
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-1">
              Cyber Safety Awareness Quiz
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Test your ability to spot realistic phishing scams, fake UPI requests, impersonation calls, and unsafe password habits.
            </p>
          </div>

          <div className="bg-amber-50/80 border border-amber-200 text-amber-900 p-4 rounded-xl flex items-start gap-3 text-left mx-auto max-w-md">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="font-semibold">Educational Simulation:</strong> All scenarios, phone numbers, and messages are completely fictional. No real passwords or personal info will be collected.
            </div>
          </div>

          <div className="pt-2">
            <Button onClick={handleStart} className="w-full sm:w-auto px-8 py-3.5 text-base">
              Start Quiz Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (quizState === 'result') {
    const isHighScorer = score >= 7;
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-8 sm:p-10 text-center space-y-8">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto border shadow-2xs ${
            isHighScorer 
              ? 'bg-amber-50 text-amber-600 border-amber-200' 
              : 'bg-teal-50 text-teal-700 border-teal-200'
          }`}>
            {isHighScorer ? <Trophy className="w-10 h-10" /> : <BookOpen className="w-10 h-10" />}
          </div>
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              Final Evaluation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              You scored <span className="text-teal-700">{score}</span> out of {quizQuestions.length}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium max-w-md mx-auto">
              {getResultMessage()}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 max-w-md mx-auto">
            Reviewing topic guides will help you protect family members and stay one step ahead of evolving cyber fraud tactics.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/learn" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3">
                Review Safety Topics
              </Button>
            </Link>
            <Button onClick={handleStart} className="w-full sm:w-auto gap-2 px-6 py-3">
              <RotateCcw className="w-4 h-4" />
              <span>Restart Quiz</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Playing Screen
  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl space-y-8">
      {/* Top Progress & Score */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-teal-700" />
            Cyber Threat Simulation
          </span>
          <span className="bg-teal-50 text-teal-800 px-2.5 py-0.5 rounded-full border border-teal-200">
            Current Score: {score}
          </span>
        </div>
        <ProgressBar current={currentIndex + 1} total={quizQuestions.length} />
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
        {/* Render simulated SMS/WhatsApp message bubble if present */}
        {currentQuestion.message && (
          <div className="p-1 sm:p-2 bg-slate-50/80 rounded-2xl border border-slate-200/70">
            <MessageBubble 
              sender={currentQuestion.message.sender}
              text={currentQuestion.message.text}
            />
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {currentQuestion.question}
        </h2>

        {/* 4 Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctIndex;

            let buttonStyles = "border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/40 text-slate-800 shadow-2xs";
            let badgeStyles = "bg-slate-100 text-slate-700 border-slate-200";
            let icon = null;

            if (showResult) {
              if (isCorrect) {
                buttonStyles = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-400";
                badgeStyles = "bg-emerald-600 text-white border-emerald-600";
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" aria-hidden="true" />;
              } else if (isSelected) {
                buttonStyles = "border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-300";
                badgeStyles = "bg-rose-600 text-white border-rose-600";
                icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto" aria-hidden="true" />;
              } else {
                buttonStyles = "border-slate-200 bg-slate-50/60 text-slate-400 opacity-60";
                badgeStyles = "bg-slate-100 text-slate-400 border-slate-200";
              }
            }

            return (
              <button
                key={index}
                disabled={showResult}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${buttonStyles}`}
              >
                <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 text-xs font-bold font-mono ${badgeStyles}`}>
                  {letters[index]}
                </div>
                <span className="flex-1 text-sm sm:text-base leading-snug">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Post-answer feedback */}
        {showResult && (
          <div className="pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            <div className={`p-4.5 rounded-2xl border ${
              selectedAnswer === currentQuestion.correctIndex 
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                : 'bg-rose-50/80 border-rose-200 text-rose-900'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
                {selectedAnswer === currentQuestion.correctIndex ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                    <span>Correct Analysis!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-rose-700" />
                    <span>Safety Insight:</span>
                  </>
                )}
              </div>
              <p className="text-sm leading-relaxed opacity-95">
                {currentQuestion.explanation}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Button onClick={handleNext} className="gap-2 px-6 py-3">
                <span>{currentIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
