import React from 'react';
import Link from 'next/link';
import { Fish, Smartphone, ShieldAlert, Lock, Users, Briefcase, Bot, LucideIcon, ArrowRight } from 'lucide-react';

interface Topic {
  slug: string;
  title: string;
  icon: string;
  description: string;
}

interface TopicCardProps {
  topic: Topic;
}

const iconMap: Record<string, LucideIcon> = {
  Fish,
  Smartphone,
  ShieldAlert,
  Lock,
  Users,
  Briefcase,
  Bot
};

export const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const IconComponent = iconMap[topic.icon] || ShieldAlert;

  return (
    <Link 
      href={`/learn/${topic.slug}`}
      className="group flex flex-col justify-between p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-teal-500 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 active:scale-[0.99]"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-600/10 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 shadow-2xs">
            <IconComponent className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
            Topic Guide
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2 leading-snug">
          {topic.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
          {topic.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
        <span>Learn prevention steps</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
};

export default TopicCard;
