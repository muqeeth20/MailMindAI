import React from 'react';
import {
  Inbox,
  MailCheck,
  Send,
  Bookmark,
  CalendarClock,
  Sparkles
} from 'lucide-react';

interface DashboardStatsProps {
  inboxEmails: number;
  unreadEmails: number;
  sentEmails: number;
  savedEmails: number;
  upcomingReminders: number;
  summariesGenerated: number;
  onOpenInbox: () => void;
  onFilterUnread: () => void;
  onOpenSent: () => void;
  onOpenSaved: () => void;
  onOpenReminders: () => void;
  onOpenAI: () => void;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  inboxEmails,
  unreadEmails,
  sentEmails,
  savedEmails,
  upcomingReminders,
  summariesGenerated,
  onOpenInbox,
  onFilterUnread,
  onOpenSent,
  onOpenSaved,
  onOpenReminders,
  onOpenAI
}) => {
  const stats = [
    {
      label: 'Inbox',
      value: inboxEmails,
      description: 'Emails in your inbox',
      icon: Inbox,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-100',
      onClick: onOpenInbox
    },
    {
      label: 'Unread',
      value: unreadEmails,
      description: 'Needs your attention',
      icon: MailCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      onClick: onFilterUnread
    },
    {
      label: 'Sent',
      value: sentEmails,
      description: 'Messages in Sent',
      icon: Send,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-100',
      onClick: onOpenSent
    },
    {
      label: 'Saved Mails',
      value: savedEmails,
      description: 'Kept for later',
      icon: Bookmark,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      onClick: onOpenSaved
    },
    {
      label: 'Reminders',
      value: upcomingReminders,
      description: 'Upcoming deadlines',
      icon: CalendarClock,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      onClick: onOpenReminders
    },
    {
      label: 'AI Summaries',
      value: summariesGenerated,
      description: 'Summaries generated',
      icon: Sparkles,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      onClick: onOpenAI
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
      {stats.map(stat => {
        const Icon = stat.icon;

        return (
          <button
            key={stat.label}
            type="button"
            onClick={stat.onClick}
            className={`w-full text-left bg-white rounded-2xl border ${stat.border} p-3.5 sm:p-4 shadow-2xs hover:shadow-sm hover:border-sky-300 transition flex flex-col justify-between cursor-pointer`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-500">
                {stat.label}
              </span>
              <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>

            <div className="mt-3">
              <div className="text-2xl font-bold text-slate-900 tracking-tight leading-none">
                {stat.value}
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2">
                {stat.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};