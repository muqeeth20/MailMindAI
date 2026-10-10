import React from 'react';
import { Mail, MailCheck, CalendarClock, Sparkles } from 'lucide-react';

interface DashboardStatsProps {
  totalEmails: number;
  unreadEmails: number;
  upcomingReminders: number;
  summariesGenerated: number;
  onFilterUnread?: () => void;
  onOpenReminders?: () => void;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalEmails,
  unreadEmails,
  upcomingReminders,
  summariesGenerated,
  onFilterUnread,
  onOpenReminders
}) => {
  const stats = [
    {
      label: 'Total Emails',
      value: totalEmails,
      icon: Mail,
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-100',
      description: 'Active in mailboxes'
    },
    {
      label: 'Unread Emails',
      value: unreadEmails,
      icon: MailCheck,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      description: unreadEmails > 0 ? 'Requires your review' : 'Inbox zero achieved',
      onClick: onFilterUnread,
      clickable: true
    },
    {
      label: 'Upcoming Reminders',
      value: upcomingReminders,
      icon: CalendarClock,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      description: 'Tracked deadlines',
      onClick: onOpenReminders,
      clickable: true
    },
    {
      label: 'AI Summaries Generated',
      value: summariesGenerated,
      icon: Sparkles,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-100',
      description: 'Saved ~24 min reading'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            onClick={stat.clickable && stat.onClick ? stat.onClick : undefined}
            className={`bg-white rounded-2xl border ${stat.borderColor} p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition flex flex-col justify-between ${
              stat.clickable ? 'cursor-pointer hover:border-sky-300' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500">{stat.label}</span>
              <div className={`w-8 h-8 rounded-xl ${stat.bgColor} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                {stat.value}
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 truncate">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
