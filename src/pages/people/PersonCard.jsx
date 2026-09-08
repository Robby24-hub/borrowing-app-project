import dayjs from "dayjs";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({ person }) {
  const hasOverdue = person.overdueCount > 0;
  const isBorrowing = person.itemsOut > 0;

  const status = hasOverdue
    ? { dot: "bg-rust", text: "text-rust", label: "Has overdue items" }
    : isBorrowing
      ? { dot: "bg-ledger", text: "text-ledger", label: "Currently borrowing" }
      : { dot: "bg-ink/30", text: "text-ink/50", label: "Nothing borrowed" };

  return (
    <div className="bg-white border border-line rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-ledger/10 text-ledger font-display font-medium flex items-center justify-center shrink-0">
          {getInitials(person.name)}
        </div>
        <div className="min-w-0">
          <p className="font-display font-medium leading-tight truncate">
            {person.name}
          </p>
          <p className="text-xs text-ink/50">
            {person.itemsOut} {person.itemsOut === 1 ? "item" : "items"} out
          </p>
        </div>
      </div>

      <div className="text-xs flex flex-col gap-1.5 border-t border-line pt-3">
        <div className="flex justify-between">
          <span className="text-ink/50">Last item</span>
          <span className="font-medium">{person.lastItem}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink/50">Last activity</span>
          <span className="font-mono text-ink/70">
            {dayjs(person.lastActivity).format("MMM D, YYYY")}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
        <span className={`text-xs font-medium ${status.text}`}>
          {status.label}
        </span>
      </div>

      <div className="flex gap-2 pt-1">
        <button className="inventory-button flex-1 mx-0! justify-center">
          View
        </button>
        <button className="quick-action-button flex-1 mx-0! justify-center bg-ledger text-white border-ledger hover:bg-ledger/90">
          Lend item
        </button>
      </div>
    </div>
  );
}
