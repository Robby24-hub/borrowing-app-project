import dayjs from "dayjs";
import { CpuIcon, BookOpenIcon, CalculatorIcon, BoxIcon } from "lucide-react";

const categoryIcons = {
  Electronics: CpuIcon,
  Books: BookOpenIcon,
  "School Supplies": CalculatorIcon,
};

const statusConfig = {
  Active: { dot: "bg-ledger", text: "text-ledger", label: "Active" },
  "Due Soon": { dot: "bg-ochre", text: "text-ochre", label: "Due soon" },
  Overdue: { dot: "bg-rust", text: "text-rust", label: "Overdue" },
  Returned: { dot: "bg-moss", text: "text-moss", label: "Returned" },
};

export default function BorrowItemCard({ item }) {
  const CategoryIcon = categoryIcons[item.category] || BoxIcon;
  const status = statusConfig[item.status];
  const isReturned = item.status === "Returned";

  return (
    <div className="bg-white border border-line rounded-lg overflow-hidden flex flex-col">
      <div className="aspect-square bg-paper flex items-center justify-center">
        <CategoryIcon className="w-10 h-10 text-ink/20" strokeWidth={1.25} />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <p className="font-display font-medium leading-tight">{item.name}</p>
          <p className="text-xs text-ink/50">{item.category}</p>
        </div>

        <div className="text-xs flex flex-col gap-1.5 border-t border-line pt-3">
          <div className="flex justify-between">
            <span className="text-ink/50">Lent to</span>
            <span className="font-medium">{item.borrower}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/50">Lent on</span>
            <span className="font-mono text-ink/70">
              {dayjs(item.lentDate).format("MMM D, YYYY")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/50">
              {isReturned ? "Returned" : "Due"}
            </span>
            <span className="font-mono text-ink/70">
              {dayjs(isReturned ? item.returnedDate : item.dueDate).format(
                "MMM D, YYYY",
              )}
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
          {!isReturned && (
            <button className="quick-action-button flex-1 mx-0! justify-center bg-ledger text-white border-ledger hover:bg-ledger/90">
              Mark as returned
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
