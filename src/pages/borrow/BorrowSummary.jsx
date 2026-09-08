import {
  HandHelpingIcon,
  ClockIcon,
  ClockAlertIcon,
  ListCheckIcon,
} from "lucide-react";

export default function BorrowSummary() {
  const summaryData = [
    {
      id: 1,
      icon: HandHelpingIcon,
      title: "Currently lent",
      value: 12,
      description: "Items out right now",
      accent: "text-ledger",
    },
    {
      id: 2,
      icon: ClockIcon,
      title: "Due soon",
      value: 3,
      description: "Due within 3 days",
      accent: "text-ochre",
    },
    {
      id: 3,
      icon: ClockAlertIcon,
      title: "Overdue",
      value: 2,
      description: "Past their due date",
      accent: "text-rust",
    },
    {
      id: 4,
      icon: ListCheckIcon,
      title: "Returned",
      value: 34,
      description: "Total items returned",
      accent: "text-moss",
    },
  ];

  return (
    <div className="mb-6 border border-line rounded-md bg-white/60 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line">
      {summaryData.map(
        ({ id, icon: Icon, title, value, description, accent }) => (
          <div key={id} className="p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink/60">{title}</span>
              <Icon className={`w-4 h-4 ${accent}`} strokeWidth={1.75} />
            </div>
            <p className={`font-mono text-3xl font-medium ${accent}`}>
              {value}
            </p>
            <p className="text-xs text-ink/50">{description}</p>
          </div>
        ),
      )}
    </div>
  );
}
