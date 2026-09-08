import { ChevronDown, SearchIcon } from "lucide-react";

export default function BorrowControls() {
  const statusFilters = ["All", "Active", "Returned", "Overdue"];

  return (
    <div className="mb-6 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between border border-line rounded-lg bg-white px-3 py-3">
      <button className="inventory-button justify-start grow lg:max-w-xs">
        <SearchIcon size={18} /> Search items or borrowers
      </button>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 bg-paper border border-line rounded-full p-1">
          {statusFilters.map((label, i) => (
            <button
              key={label}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                i === 0 ? "bg-ledger text-white" : "text-ink/60 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button className="inventory-button">
          Sort: Due date <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
