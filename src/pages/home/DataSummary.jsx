import {
  BoxesIcon,
  ClockAlertIcon,
  HandHelpingIcon,
  ListCheckIcon,
} from "lucide-react";

export default function DataSummary() {
  const summaryData = [
    {
      id: 1,
      icon: BoxesIcon,
      title: "Total items",
      value: 248,
      description: "Registered in inventory",
      accent: "text-ink",
    },
    {
      id: 2,
      icon: HandHelpingIcon,
      title: "Borrowed",
      value: 57,
      description: "Currently out",
      accent: "text-ochre",
    },
    {
      id: 3,
      icon: ListCheckIcon,
      title: "Available",
      value: 191,
      description: "Ready to lend",
      accent: "text-moss",
    },
    {
      id: 4,
      icon: ClockAlertIcon,
      title: "Overdue",
      value: 5,
      description: "Past due date",
      accent: "text-rust",
    },
  ];

  return (
    <div className="mb-10 border border-line rounded-md bg-white/60 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line">
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
