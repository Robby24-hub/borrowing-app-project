import dayjs from "dayjs";
import { ClockIcon, UserRoundIcon } from "lucide-react";

const statusStyles = {
  Available: "bg-moss/10 text-moss",
  Borrowed: "bg-ochre/10 text-ochre",
  Overdue: "bg-rust/10 text-rust",
};

export default function ItemCard({ item }) {
  return (
    <div className="bg-white border border-line rounded-lg overflow-hidden flex flex-col">
      <div
        className="aspect-square bg-paper bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <p className="font-display font-medium leading-tight">{item.name}</p>
          <span
            className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyles[item.status]}`}
          >
            {item.status}
          </span>
        </div>

        <p className="text-xs text-ink/50">{item.category}</p>

        {item.status !== "Available" ? (
          <div className="pt-2 border-t border-line flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-ink/60">
              <UserRoundIcon className="w-3.5 h-3.5" />
              {item.borrower}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink/60">
              <ClockIcon className="w-3.5 h-3.5" />
              <span className="font-mono">
                {dayjs(item.dueDate).format("MMM D, YYYY")}
              </span>
            </div>
          </div>
        ) : (
          <div className="pt-2 border-t border-line">
            <p className="text-xs text-ink/40 font-mono">
              Added {dayjs(item.dateAdded).format("MMM D")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
