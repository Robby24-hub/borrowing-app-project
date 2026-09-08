import { UsersRoundIcon, HandHelpingIcon, ClockAlertIcon } from "lucide-react";

export default function PeopleSummary({ people }) {
  const currentlyBorrowing = people.filter((p) => p.itemsOut > 0).length;
  const withOverdue = people.filter((p) => p.overdueCount > 0).length;
  const itemsOutTotal = people.reduce((sum, p) => sum + p.itemsOut, 0);

  const summaryData = [
    {
      id: 1,
      icon: UsersRoundIcon,
      title: "Total people",
      value: people.length,
      description: "People you've lent to",
      accent: "text-ink",
    },
    {
      id: 2,
      icon: HandHelpingIcon,
      title: "Currently borrowing",
      value: currentlyBorrowing,
      description: "Holding at least one item",
      accent: "text-ledger",
    },
    {
      id: 3,
      icon: ClockAlertIcon,
      title: "Have overdue items",
      value: withOverdue,
      description: "Need a follow-up",
      accent: "text-rust",
    },
    {
      id: 4,
      icon: HandHelpingIcon,
      title: "Items out",
      value: itemsOutTotal,
      description: "Across all borrowers",
      accent: "text-ochre",
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
